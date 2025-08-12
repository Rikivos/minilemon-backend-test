import { Schema, mongoose } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    active: {
        type: Boolean,
        default: true,
    },
    departement: {
        type: String,
    },

}, { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);