import { model, Schema, SchemaTypes } from "mongoose";

const studentSchema = new Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String
    },
    birthdate: {
        type:String
    },
    email: {
        type:String,
        required:true
    },
    address: {
        type:String
    },
    genre: {
        type:String
    }
});

export default model('Student', studentSchema);