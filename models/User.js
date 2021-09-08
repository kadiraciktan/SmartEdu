const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Scheme = mongoose.Schema;

const UserSchema = new Scheme({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
      type:String,
      required:true
  }

});

//MIDDLEWARE
UserSchema.pre('save',function(next){
    const user = this;
     bcrypt.hash(user.password,10,(err,hash)=>{
      user.password = hash;
      next();
    });
});

const User = mongoose.model('User',UserSchema);



module.exports = User;