import React, { useEffect, useState } from 'react';
import './Home.css';
import Book from '../Book/Book';
import Details from '../Details/Details';

const Home = () => {
    const [details,setDetails]=useState([]);
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('./LyricsBooks.JSON')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);
    const bookDetailsBtn=(book)=>{
        if(details.indexOf(book)===-1){
            const detailsbook=[...details,book];
            setDetails(detailsbook);
        }
        else{return}
        
    }
    return (
        <div className="mt-5 container">
            <div className="home">
                <div className="">
                <h2 className="mb-5 text-dark">You can read books to learn writing</h2>
                <div className="book_first_part">
                    {
                        books.map(book=><Book
                        book={book}
                        bookDetailsBtn={bookDetailsBtn}
                        ></Book>)
                    }
                </div>
                </div>
                <div className="overflow-scroll" style={{height:"800px"}}>
                   <Details
              details={details}
              ></Details>
                </div>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h3>Lyric House Description</h3>
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p className="fs-5 text-success">Lyric House a musical institution. Lyric House is a bridge of trust for lyricists, composers, and artists. Our goal is to provide quality music to artists and to create a sense of brotherhood and understanding between artists, composers and lyricists.</p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h3>Lyric House Successionn</h3>
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p className="fs-5 text-success">Culture is an integral part of human life. Culture is the overall ritual of human society. Simply put, all the elements of human habit and formality are part of culture. Art and entertainment are one of the main components of culture. Music is a part of art and entertainment. The culture is the culture of a certain people. In the institutional form of culture as a whole, people's daily rituals, social and religious customs play a huge role. In the culture of Bangladesh, Bangladeshi nationalism or the flowing rituals of the Bengali people, inter-religious customs, especially the various customs and rituals of the majority Muslim population are one of the main aspects of Bengali culture.</p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h3>Lyric House Policies</h3>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p className="fs-5 text-success">A lyricist or composer does not have a solo or platform-based workplace as an artist as a cultural activist in Islamic music. That's why Lyric House is aiming to create a trusted platform for lyricists and composers by expanding the idea of ​​doing something for lyricists. Yes, that doesn't mean we have no idea who the musicians are. Rather, the essence of all our work is for the artist. The lyricist will write the song, the composer will compose the melody, at the end of the day it will be the job of a music artist to display it and make it sound. So our activities will play a much more helpful role for a music artist or music organization. Above all the Lyric House will serve as a precise platform for lyricists-composers; Therefore, lyricists and composers can work with Lyric House if they want. That is why you have to register first. Only if you are a lyricist or composer can you join us through the registration process. All the work process will be completed following the specific policy of Lyric House. </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;