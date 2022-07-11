import React from 'react';
import {Link} from 'react-router-dom';


const Post = (post, viewPost, key) => {
    return (
        <div>
            <tr>
                <td>{post.firstname}</td>
                <td>{post.lastname}</td>
                <td>{post.email}</td>
                <td>{post.city}</td>
                <td>{post.state}</td>
                <td>{post.web}</td>
                {/* <td>{post.age}</td>
                <td>{post.zip}</td>
                <td>{post.companyname}</td> */}
                <td>
                    <Link to={`/edit/${post._id}`} > edit</Link> | {""}
                    <a heref="#" onClick={()=> {
                        post.viewPost(post._id);
                    }}
                    ></a>
                </td>
            </tr>
        </div>
    );
};

export default Post;