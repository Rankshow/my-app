import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
// // Nested Component, React tool
// Css
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
      <Cost />
    </article>
  );
};

const Image = () => {
  return (
    <img className="pic"
      src="https://www.sunnewsonline.com/ezoimgfmt/sunnewsonline.com/wp-content/uploads/2021/12/United-Airlines-750x375.jpeg?ezimgfmt=ngcb1/notWebP"
      alt=""
    />
  );
};
const Title = () => <h1>Daily news papers</h1>
const Author = () => <h4>sunnewspaper</h4>
const Cost = () => <a href="#">$100</a>

ReactDOM.render(<BookList />, document.getElementById("root"));
