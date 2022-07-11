import Post from "../models/postModel.js";



export const createPost = (req, res) => {
   // console.log(req.body);
   const {firstname, lastname, email, companyname, city, state, web, password } = req.body;
   const age = Number(req.body.age);
   const zip = Number(req.body.zip);

   const newPost = new Post({
    firstname,
    lastname,
    email,
    age,
    companyname,
    city,
    state,
    zip,
    password,
    web,

   })
   .save()
   .then(() => res.status(201).json({success: true, msg: 'Post created successfully'}))  
   .catch((err) => res.status(400).json(`Error: ${err}`));

};

export const getAllPosts = (req,res) => {
    Post.find()
    .then((posts)=> res.status(200).json({ posts }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const getPost = (req, res) => {
    const {id: postID} = req.params;
    Post.findById(postID)
    .then((post) => res.status(200).json({ post }))
    .catch((err) => res.status(400).json(`Error: ${err}`));

};

export const updatePost = (req,res) => {
    const {id: postID} = req.params;
    Post.findById(postID)
    .then((post) => {
        post.firstname = req.body.firstname;
        post.lastname = req.body.lastname;
        post.email = req.body.email;
        post.age = Number(req.body.age);
        post.companyname = req.body.companyname;
        post.city = req.body.city;
        post.state = req.body.state;
        post.zip = Number(req.body.zip);
        post.password = req.body.password;
        post.web = req.body.web;

        post
        .save()
        .then(() => res.status(201).json({success: true, msg: 'Post updated successfully'}))  
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
    
};

export const deletePost = (req,res) => {
    const {id: postID} = req.params;
    Post.findByIdAndDelete(postID)
    .then(() => res.status(200).json({ success: true, msg: 'Post deleted successfully'}))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};