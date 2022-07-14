import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from "../components/Post";
import Pagination from './Pagination';
import UserDetail from './UserDetail';


const UsersList = () => {
    const [posts, setPosts] = useState([]);
    // console.log(posts);
    
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [order, setOrder] = useState('ASC');
  const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then((res) => setPosts(res.data.posts))
            .catch((err) => console.log(err));
    }, []);

    

    const deletePost = (id) =>{
        setPosts(posts.filter((post) => post._id !== id));
        axios.delete(`http://localhost:5000/posts/${id}`)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
    };
    // get the current users
    const indexOfLastPost = currentPage * postPerPage;
    // console.log(indexOfLastPost)
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    // console.log(indexOfFirstPost)
    const Posts = posts.slice(indexOfFirstPost, indexOfLastPost);
    let totalPosts = posts.length;
    // console.log(currentPosts)
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    };

  const searching = () => {
    const searchedData = posts.filter((value) => {
      if (
        value.firstname.toLowerCase().includes(search.toLowerCase())  ||
        value.lastname.toLowerCase().includes(search.toLowerCase())
      )
        return value;
    });
    setPosts(searchedData);
  };
  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...posts].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setPosts(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...posts].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setPosts(sorted);
      setOrder('ASC');
    }
  };

    return (
        <div>
            <div className='d-flex my-5 '>
            <h3>List Of All Users </h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a type="button" href="/" class="btn btn-outline-danger px-4"><i class="bi bi-arrow-90deg-left"></i></a>
            </div>
            <div>
                    <form
                    className='d-flex '
                    onSubmit={(e) => e.preventDefault()}
                    >
                    <input
                    type="search" placeholder="Search for First name"class="form-control me-2"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                    className='btn btn-outline-success '
                    type='submit'
                    onClick={() => searching()}
                    >
                    Search
                    </button>
                </form>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th onClick={() => sorting('firstname')}>First_Name</th>
                        <th onClick={() => sorting('lastname')}>Last_Name</th>
                        <th>Email</th>
                        <th>Web</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Posts.map((currentPost) => {
                            return(
                                <Post 
                                    post={currentPost}
                                    deletePost = {deletePost}
                                    viewDetails={UserDetail}
                                    key = {currentPost.id}
                                />
                            );
                        })
                    }
                </tbody>
            </table>
            <Pagination
            postPerPage={postPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
            />
        </div>
    );
};

export default UsersList;