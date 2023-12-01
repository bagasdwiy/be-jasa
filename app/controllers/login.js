// controllers/login.js

const express = require("express");
const router = express.Router();
const User = require("../models/user");



module.exports = {
  async Login(req,res){
    try{
     
        const { email, password } = req.body;
      
        // Validasi input
        if (!email || !password) {
          return res.status(400).send({
            message: "Email dan password harus diisi",
          });
        }
      
        // Cek apakah user ada
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).send({
            message: "Email tidak terdaftar",
          });
        }
      
        // Cek apakah password benar
        if (user.password !== password) {
          return res.status(401).send({
            message: "Password salah",
          });
        }
      
      
        // Kirim respons
        res.status(200).send({
          message: "Login berhasil",
        });
     
  }catch(err){
    res.status(500).json({message: err});
  }
}}