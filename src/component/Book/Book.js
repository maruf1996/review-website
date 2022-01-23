import React from 'react';

const Book = (props) => {
    const {book,img}=props.book;
    const imgStyle={ 
        width: '150px',
        height: '180px',
        marginBottom: '8px',
        marginTop: '8px',}
    return (
        <div className="container mb-5">
            <div className=""></div>
            <img src={img} alt="" style={imgStyle}/> 
                <p className="text-primary fs-4 mb-4">{book}</p>
                <button className="btn btn-warning btn-lg text-dark fw-bold"
                onClick={()=>props.bookDetailsBtn(props.book)}
                >Book Details</button>
            </div>    
    );
};

export default Book;