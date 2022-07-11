import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from "../components/Post";


const UsersList = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then((res) => setPosts(res.data.posts))
            .catch((err) => console.log(err));
    }, []);

    const viewPost = (id) =>{
        setPosts(posts.filter((post) => post._id != id));
        axios.get(`http://localhost:5000/posts:${id}`)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
    };

    return (
        <div>
            <h3>List Of All The Users</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Email</th>
                        <th>Web</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((currentPost) => {
                            return(
                                <Post 
                                    post={currentPost}
                                    viewPost = {viewPost}
                                    key = {currentPost._id}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default UsersList;