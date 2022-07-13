import React from 'react';
import {Link} from 'react-router-dom';


const Post = ({post, deletePost, key}) => {
    return (
        
            
                <tr>
                    <td>{post.firstname}</td>
                    <td>{post.lastname}</td>
                    <td>{post.email}</td>
                    <td>{post.web}</td>
                    <td>{post.city}</td>
                    <td>{post.state}</td>
                    <td>
                        <Link to={`/${post._id}`} > <i class="bi bi-pencil-square" /></Link> | {''}
                        <a href='/create' onClick={()=> {
                            deletePost(post._id);
                        }}
                        ><i class="bi bi-trash3" /></a>
                    </td>
                </tr>
            
        
    );
};

export default Post;