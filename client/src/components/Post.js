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
                    {/* <td>{post.age}</td>
                    <td>{post.zip}</td>
                    <td>{post.companyname}</td> */}
                    <td>
                        <Link to={`/${post._id}`} > edit</Link> | {''}
                        <a href='#' onClick={()=> {
                            deletePost(post._id);
                        }}
                        >delete</a>
                    </td>
                </tr>
            
        
    );
};

export default Post;