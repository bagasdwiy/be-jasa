// controllers/register.js

const express = require("express");
const router = express.Router();
const User = require("../models/user");

module.exports = {
  async Register(req,res){

    try{
      
        const { email, password } = req.body;
      
        // Validasi input
        if (!email || !password) {
          return res.status(400).send({
            message: "Email dan password harus diisi",
          });
        }
      
        // Cek apakah email sudah terdaftar
        const user = await User.findOne({ email });
        if (user) {
          return res.status(400).send({
            message: "Email sudah terdaftar",
          });
        }
      
        // Buat objek user baru
        const newUser =  await User.create({
          email,
          password,
        });
      
        // // Simpan user ke database
        // await newUser.save();
      
        // // Kirim email verifikasi
        // const verificationToken = Math.random().toString(36).substr(7);
        // await User.sendVerificationEmail(email, verificationToken);
      
        // Kirim respons
        res.status(201).send({
          message: "Akun berhasil dibuat",
          data: newUser
        });
      
      
    }catch(err){
      res.status(500).json({message: err});
    }
  }
}