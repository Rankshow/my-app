import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Css
// Setup vars
const firstBook = {
  title: "Daily news papers",
  author: "sunnewspaper",
  img: ' https://www.sunnewsonline.com/ezoimgfmt/sunnewsonline.com/wp-content/uploads/2021/12/United-Airlines-750x375.jpeg?ezimgfmt=ngcb1/notWebP"',
};
const secondBook = {
  img: 'https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  author: 'Micheal Owen',
  title: 'Gospel redeem',
}

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Ullam sequi doloremque voluptate accusamus 
      delectus nulla exercitationem consequatur dolorum consequuntur cumque ducimus atque, accusantium ipsum, quos cupiditate officia quasi maxime asperiores.</p>
        </Book>
      <Book 
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  // destructuering the children
  const { img, title, author, children } = props;
  console.log(props)
  return (
    <article className="book">
      <img className="pic" src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
