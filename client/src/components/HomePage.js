import React from 'react';



const HomePage = () => {
    return (
        <div>
            <br /><br /><br /><br />
            <h3>React User</h3>
            <br />
            <p>This is a React User CRUD Application....</p>
            <a type="button" href="/create" class="btn btn-outline-primary"><i class="bi bi-pen"></i> Create User</a> <i class="bi bi-signpost-split-fill"></i> &nbsp;
            <a type="button" href="/login" class="btn btn-outline-warning"><i class="bi bi-person-badge"></i> Login User</a>
        </div>
    )
};

export default HomePage;