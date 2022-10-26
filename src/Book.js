import {logo} from './outline';
import {nav} from './navbar';
import images from './image/chop.jpg'


const Book = ({img, title, author, Description}) => {
    // atttribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target)
      alert('You are welcome to our platform \u{1F970}');
    };
    const complexHandle = (author) => {
      console.log(author);
    }
    return (
      <article className="book">
         <nav onClick={() => alert('Welcome to Vian Apparel Home of fashion \u{1F970}')}>{nav}</nav>
        {/* <img className="pic" src={img} alt="" /> */}
        <img className="pic" src={images} alt="" />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <p>{Description}</p>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Reference Event</button>
        <button type="button" onClick={() => complexHandle(author)}>Visit us for more details</button>
      </article>
    );
  };
export default Book;
