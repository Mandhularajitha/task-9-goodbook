import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Technology: [
    { name: "Science and technology", rating: "4/5" },
    { name: "The code breaker", rating: "3.5/5" },
    { name: "feadback:This books are very usefull in this more information is their,book:space", rating: "Language:english" }
  
  ],

  fable: [
    {
      name: "The Grate Gatsby ",
      rating: "4.8/5"
    },
    {
      name: "Euphori,Lily King",
      rating: "4/5"
    },
    {
      name: "Deep work",
      rating: "5/5"
    }
  ],
  business: [
    {
      name: "ANAmerican Life",
      rating: "4.5/5"
    },
    {
      name: "A Brief Histry Time",
      rating: "5/5"
    },
    {
      name: "The constitution of india",
      rating: "5/5"
    }
  ],
  Artbooks: [
    {
      name: "365 days of art",
      rating: "4.8/5"
    },
    {
      name: "The story of art",
      rating: "4.7/5"
    },
    {
      name: "Art & fear",
      rating: "4.9/5"
    }
  ],
  
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📝 goodbooks 📖 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books 📚. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}