import * as mongoose from 'mongoose'

const Schema = mongoose.Schema



export const MenuSchema = new Schema({
    name : {
        type : String,
        required : "Enter a name"
    },
    dishies : {
        type : Array,
    },
    price : {
        type : Number
    },
    description : {
        type : String,
    },
    image : {
        type :  String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})