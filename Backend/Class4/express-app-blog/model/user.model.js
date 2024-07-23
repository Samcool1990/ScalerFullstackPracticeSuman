import { model, Schema  } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is Required"],
        trim: true,
        minLength: [20, 'Min 20 characters are required'],
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [3],
        maxLength: [10, 'Min 10 characters are required'],
        select: false,
    }
}, {timestamps: true});

userSchema.pre('save', (next) => {
    // 
    console.log(JSON.stringify(this));
    next();
})
const User = model('user', userSchema);

export default User;