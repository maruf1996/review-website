import React from 'react';

const Detail = (props) => {
    const detail=props.detail;
    const {book,writer,publisher,edition,country,language,img}=detail;
    const imgStyle={ 
        width: '150px',
        height: '190px',
        marginBottom: '8px',
        marginTop: '8px',}
   
    return (
        <div className="">
            <img src={img} alt="" style={imgStyle}/>
            <div className="fs-4 mt-4">
                <h3 className="mb-4 text-success">{book}</h3>
                <p>Writer: {writer}</p>
                <p>Publisher: {publisher}</p>
                <p>Edition: {edition}</p>
                <p>Country: {country}</p>
                <p>Language: {language}</p>
            </div>
        </div>
    );
};

export default Detail;