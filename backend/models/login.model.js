const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  password:{
    type:String,
    required:true,
    minlength: [6, 'Password neeed 6 charecter']
  },
  
});


userSchema.pre('save', async function(next){
  let user=this
  if(user.isModified('password')){
    const salt =await bcrypt.genSalt(10)
    const hash =await bcrypt.hash(user.password,salt)
    user.password = hash
  }
  next()
})

userSchema.statics.emailIsTaken = async function(email){
  const user = await this.findOne({email})
  return !!user
}




userSchema.methods.comparePassword = async function(candidatePassword){
  let user = this
  const match = await bcrypt.compare(candidatePassword,user.password)
  return match
}

const User = mongoose.model("User",userSchema);

module.exports = User
