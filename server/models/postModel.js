
import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    },
    web: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

},
    {
    timestamps: true,   
    }
);



const Post = mongoose.model('Post', postSchema);

export default Post;