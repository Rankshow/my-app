import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Specific from './Book';
import {greeting} from './testing/testing';
import {books} from './books';


function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
     {books.map((book) => {
      return <Specific key={book.id} {...book}></Specific>;
     })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
