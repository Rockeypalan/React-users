import React from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/users");
    }


    
    return (
        <div>
            <div className='d-flex my-5'>
            <h3>Login User</h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a type="button" href="/" class="btn btn-outline-danger px-4"><i class="bi bi-arrow-90deg-left"></i></a>
            </div>
            <form className='row g-3' onSubmit={onSubmit} >
                <div className='form-group col-md-4'>
                    <label>Username</label>
                    <input required type='email'   placeholder="name@example.com" className='form-control' name='email'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Password</label>
                    <input required type='password'  className='form-control' placeholder="Password" name='password'></input>
                </div>
                <br />
                <div>
                <a type="submit" href='/users' class="btn btn-outline-warning"><i class="bi bi-person-badge"></i> Login User</a> &nbsp;
                <a type="submit" href='/create' class="btn btn-outline-success"><i class="bi bi-person-badge"></i> Create</a>
                </div>
                <br /><br />
            </form>
        </div>
    )
};

export default LoginPage;