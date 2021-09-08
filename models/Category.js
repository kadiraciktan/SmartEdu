const mongoose = require('mongoose');
const slugify = require('slugify');

const Scheme = mongoose.Schema;

const CategorySchema = new Scheme({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug:{
    type:String,
    unique:true,
  }
});

//Veritabanına Kayıt yapılmadan önce = .pre
CategorySchema.pre('validate',function(next){
    //modelin ismini sluga çeviriyoruz
    this.slug = slugify(this.name,{
        lower:true,
        strict:true
    });
    next(); //sonraki middleware geçmek için.
})

const Category = mongoose.model('Category',CategorySchema);

module.exports = Category;