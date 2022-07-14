import {React, useState} from 'react';

const UserDetail = () => {
  
  const [post] = useState({
    firstname:'',
    lastname:'',
    email:'',
    age:'',
    companyname:'',
    city:'',
    state:'',
    zip:'',
    password:'',
    web:'',
    });
  return (
    <>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <form className="row g-3" >
                <div className='form-group col-md-4'>
                    <label>First_Name</label>
                    <input required type='text' value={post.firstname}  className='form-control' name='firstname'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Last_Name</label>
                    <input required type='text' value={post.lastname} className='form-control' name='lastname'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Email</label>
                    <input required type='email' value={post.email}  placeholder="name@example.com" className='form-control' name='email'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Age</label>
                    <input required type='number' value={post.age}  className='form-control' name='age'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Company_Name</label>
                    <input required type='text' value={post.companyname}  className='form-control' name='companyname'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>City</label>
                    <input required type='text' value={post.city}  className='form-control' name='city'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>State</label>
                    <input required type='text' value={post.state}  className='form-control' name='state'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Zip</label>
                    <input required type='number' value={post.zip}  className='form-control' name='zip'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Password</label>
                    <input required type='password' value={post.password}  className='form-control' placeholder="Password" name='password'></input>
                </div>
                <div className='form-group col-md-4'>
                    <label>Web</label>
                    <input required type='text' value={post.web}  className='form-control' name='web'></input>
                </div>
                <br />
                <div>
                    <input type="submit" className="btn btn-primary " value='Update User' ></input>
                </div>
                <br /><br />
            </form>
    </>
  );
};

export default UserDetail;
