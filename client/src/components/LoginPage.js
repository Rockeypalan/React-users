import React from 'react';



const LoginPage = () => {



    const onSubmit = (e) => {
        e.preventDefault();
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
                    <input type="submit" className="btn btn-primary " value='Login User' ></input>
                </div>
                <br /><br />
            </form>
        </div>
    )
};

export default LoginPage;