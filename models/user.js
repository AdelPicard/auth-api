import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: {
        type: String, 
        unique: true
    },
    password: String
}, {
    timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User