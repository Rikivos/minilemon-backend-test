import { UserRepository } from "../../domain/users/userRepository.js";
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
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
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

const UserModel = mongoose.model("User", UserSchema);

export class MongodbUserRepository extends UserRepository {
    async create(user) {
        return await UserModel.create(user);
    }

    async getAll() {
        return await UserModel.find();
    }

    async getById(id) {
        return await UserModel.findById(id);
    }


    async getUserByEmail(email) {
        return await UserModel.findOne({ email });
    }

    async getUserByPhone(phone) {
        return await UserModel.findOne({ phone });
    }

    async update(id, user) {
        return await UserModel.findByIdAndUpdate(
            new mongoose.Types.ObjectId(id),
            { $set: user },
            { new: true }
        );
    }

    async delete(id) {
        return await UserModel.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    }
}