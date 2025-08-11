import { UserRepository } from "../../domain/users/userRepository.js";
import { Model, Schema, mongoose } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone : {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    active : {
        type: Boolean,
        default: true,
    },
    departement : {
        type: String,
    }, 
    
}, { timestamps: true }
);

const UserModel = Model("User", UserSchema);

export class MongodbUserRepository extends UserRepository {
    async create(user) {
        const hashed = await bcrypt.hash(user.password, 10);
        const created = await UserModel.create({ ...user, password: hashed });
        return created;
    }

    async getAll() {
        return await UserModel.find();
    }

    async getUserByEmail(email) {
        return await UserModel.findOne({ email });
    }

    async getUserByPhone(phone) {
        return await UserModel.findOne({ phone });
    }
}