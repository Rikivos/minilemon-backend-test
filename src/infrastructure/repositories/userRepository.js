
import { UserModel } from "../models/userModel.js";
import { mongoose } from "mongoose";

export class MongodbUserRepository  {
    async create(user) {
        return await UserModel.create(user);
    }

    async getAll() {
        return await UserModel.find().lean();
    }

    async getById(id) {
        return await UserModel.findById(new mongoose.Types.ObjectId(id));
    }


    async getUserByEmail(email) {
        return await UserModel.findOne({ email });
    }

    async getUserByPhone(phone) {
        return await UserModel.findOne({ phone });
    }

    async update(id, user) {
        return await UserModel.findByIdAndUpdate(
            new mongoose.Types.ObjectId(id).lean(),
            { $set: user },
            { new: true }
        );
    }

    async delete(id) {
        return await UserModel.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    }
}