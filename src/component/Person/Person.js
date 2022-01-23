import React from 'react';

const Person = (props) => {
    const {name,address,email,facebook,img,profession}=props.person;
    return (
        <div className="container">
            <div className="m-3 fs-3 p-4 bg-transparent" style={{border:"2px solid goldenrod", color:"teal"}}>
                <img src={img} alt="" />
                <h2>Name: {name}</h2>
                <p>Profession: {profession}</p>
                <p>Address: {address}</p>
                <p>E-mail: {email}</p>
                <p>Facebook: {facebook}</p>
            </div>
        </div>
    );
};

export default Person;