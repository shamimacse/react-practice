import React, { useState } from 'react';

const User = (props) => {
    const {name, salary, image} = props.user;
    const [userSalary, setUserSalary] = useState('');
const addMember = props.addMember;

    const userStyle = {
        border: '2px solid goldenRod',
        margin:'10px',
        padding: '20px',
         display: 'flex',
         width: '40%'
    }

    const showSalary = () =>setUserSalary(salary);
    const fullName =name;
    return (
        <div style={userStyle}>
            <div style={{marginTop:'25px'}}>
                <img src={image.large} alt=""/>
            </div>
            <div style={{marginLeft:'20px'}}>
                <h1>Name: {fullName}</h1>
                <p>Salary: {userSalary}</p>
                <button onClick={showSalary}>Show Salary</button>
                <button onClick={() => addMember(fullName)}>Add Me</button>
            </div>


        </div>
    );
};

export default User;