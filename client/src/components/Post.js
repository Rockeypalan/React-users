import React from 'react';
import {Link} from 'react-router-dom';


const Post = ({post, deletePost, viewDetails}) => {
    return (
        
            
                <tr>
                    <td>{post.firstname}</td>
                    <td>{post.lastname}</td>
                    <td>{post.email}</td>
                    <td>
                        <a href={post.web} target='_blank'>
                            {post.web}
                        </a>    
                    </td>
                    <td>{post.city}</td>
                    <td>{post.state}</td>
                    <td>
                        <Link to={`/${post._id}`} > <i class="bi bi-pencil-square" /></Link> | 
                        <a href='#' onClick={()=> {
                            deletePost(post._id);
                        }}
                        ><i class="bi bi-trash3" /></a> |
                        
                    </td>
                    <td>
                    <a  href={`/users/${post._id}`}
                            onClick={() => {
                            viewDetails(post._id);
                            }}
                        >
                            <i class="bi bi-eye"></i>
                        </a>
                    </td>
                </tr>
            
        
    );
};

export default Post;