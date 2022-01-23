import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Lyricist = () => {
    const [lyricist,setLyricist]=useState([]);
    useEffect(()=>{
        fetch('./Lyricist.JSON')
        .then(res=>res.json())
        .then(data=>setLyricist(data))
    },[])
    return (
        <div className="mt-5">
            {
                lyricist.map(person=> <Person
                person={person}
                ></Person>)
            }
        </div>
    );
};

export default Lyricist;