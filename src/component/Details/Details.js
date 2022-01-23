import React from 'react';
import { useState } from 'react';
import Detail from '../Detail/Detail'

const Details = (props) => {
    const bookDetails=props.details;
    return (
        <div>
           <h4 className="fs-2 mb-5 text-decoration-underline">Book Details</h4>
            {
                bookDetails.map(detail=><Detail
                detail={detail}
                ></Detail>)
            }
        </div>
    );
};

export default Details;