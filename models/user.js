import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },

  lastname: {
    type: String,
    maxlength: 32,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  userinfo: {
    type: String,
    trim: true,
  },

  //TODO : Come back here

  encry_password: {
    type: String,
    required:true
  },
  salt: String,

  role: {
    type: Number,
    default: 0,
  },

  purchases: {
    type: Array,
    default: [],
  },
});


userSchema.method={

    securePassword: function(plainpassword){
        if(!password) return "";
        try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');

        } catch(err){
            return "";
        }
    }

}

module.exports = mongoose.model("User", userSchema);
