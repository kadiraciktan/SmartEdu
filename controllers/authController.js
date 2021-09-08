const bcrypt = require('bcrypt');
const User = require('../models/User');



exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
     const user= await User.findOne({email:req.body.email});
     if(user){
          bcrypt.compare(req.body.password,user.password,(err,same)=>{
            if(same){
              res.send('Giriş Başarılı');
            }else{
              res.send('Hatalı Kullanıcı Adı Yada Şifre');
            }
          });
     }else{
       res.send('Kullanıcı Bulunamadı');
     }
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
