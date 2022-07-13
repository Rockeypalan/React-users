import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CreateUser = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        firstname:'',
        lastname:'',
        email:'',
        age:'',
        companyname:'',
        city:'',
        state:'',
        zip:'',
        password:'',
        web:''
    });
    // console.log(post);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setPost((prevData) =>{
            return{
                ...prevData,
                [name]: value,
            };
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            firstname: post.firstname,
            lastname: post.lastname,
            email: post.email,
            age: post.age,
            companyname: post.companyname,
            city: post.city,
            state: post.state,
            zip: post.zip,
            password: post.password,
            web: post.web,
        };
        

        axios.post('http://localhost:5000/posts/add', newPost)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));

            navigate("/users");
    };
    

    return (
        <div>
            <div className='d-flex my-5'>
            <h3>Create New User</h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a type="button" href="/" class="btn btn-outline-danger px-4"><i class="bi bi-arrow-90deg-left"></i></a>
            </div>
            <form className="row g-3" onSubmit={onSubmit} >
                <div className='form-group col-md-4'>
                    <label>First_Name</label>
                    <input required type='text' value={post.firstname} onChange={handleChange} className='form-control' name='firstname'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Last_Name</label>
                    <input required type='text' value={post.lastname} onChange={handleChange} className='form-control' name='lastname'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Email</label>
                    <input required type='email' value={post.email} onChange={handleChange} placeholder="name@example.com" className='form-control' name='email'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Age</label>
                    <input required type='number' value={post.age} onChange={handleChange} className='form-control' name='age'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Company_Name</label>
                    <input required type='text' value={post.companyname} onChange={handleChange} className='form-control' name='companyname'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>City</label>
                    <input required type='text' value={post.city} onChange={handleChange} className='form-control' name='city'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>State</label>
                    <input required type='text' value={post.state} onChange={handleChange} className='form-control' name='state'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Zip</label>
                    <input required type='number' value={post.zip} onChange={handleChange} className='form-control' name='zip'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Password</label>
                    <input required type='password' value={post.password} onChange={handleChange} className='form-control' placeholder="Password" name='password'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Web</label>
                    <input required type='text' value={post.web} onChange={handleChange} className='form-control' name='web'></input>
                </div>
                <br />
                <div>
                    <input type="submit" className="btn btn-primary " value='Create User' ></input>
                </div>
                <br /><br />
            </form>
        </div>
    )
};

export default CreateUser;
