import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Technology: [
    {
      name: "Science and technology",
      rating: "4/5",
      description:
        "This book gives total information about science and technology"
    },
    {
      name: "The code breaker",
      rating: "3.5/5",
      description: "This book will increase the intrest on books"
    },
    {
      name: "book:space",
      rating: "4/5",
      description:
        "THis is my favoret book we can get moor information about space"
    }
  ],

  fable: [
    {
      name: "The Grate Gatsby ",
      rating: "4.8/5",
      description: "the grate gatsby is a 1925 novel by American writer."
    },
    {
      name: "Euphori,Lily King",
      rating: "4/5",
      description: "this is a famous book."
    },
    {
      name: "Deep work",
      rating: "5/5",
      description: "this book motivates the people."
    }
  ],
  business: [
    {
      name: "AN American Life",
      rating: "4.5/5",
      description:
        "This is An American life we will get information about American life"
    },
    {
      name: "A Brief Histry Time",
      rating: "5/5",
      description: "It was first published in 1988"
    },
    {
      name: "The constitution of india",
      rating: "5/5",
      description: "This is a supreme law of india"
    }
  ],
  Artbooks: [
    {
      name: "365 days of art",
      rating: "4.8/5",
      description: "This is a very intresting 365 days of art book"
    },
    {
      name: "The story of art",
      rating: "4.7/5",
      description: "This book tells about art,we can know about art"
    },
    {
      name: "Art & fear",
      rating: "4.9/5",
      description: "this is a world famous book Art & fear"
    }
  ]
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
        Checkout my favorite books 📚. Select a genre to get started,A room
        without books is like a body without a soul.Books are a uniquely
        portable magic.{" "}
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
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
