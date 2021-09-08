const mongoose = require('mongoose');
const slugify = require('slugify');

const Scheme = mongoose.Schema;

const CourseSchema = new Scheme({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  slug:{
    type:String,
    unique:true,

  },
  // Category ile ilişki kurduk.
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category'
  }
});

//Veritabanına Kayıt yapılmadan önce = .pre
CourseSchema.pre('validate',function(next){
    //modelin ismini sluga çeviriyoruz
    this.slug = slugify(this.name,{
        lower:true,
        strict:true
    });
    next(); //sonraki middleware geçmek için.
})

const Course = mongoose.model('Course',CourseSchema);

module.exports = Course;