/////////////
// IMPORTS //
/////////////

import Edit from './Edit'
import '../App.css'


///////////////////
// POST FUNCTION //
///////////////////

const book = (props) => {

    return (
      <div className='card shadow-lg text-center m-3 '>
        <div className='card-body'>
          <img src={props.book.img}/>
          <h5 className='card-title'>Title: {props.book.title}</h5>
          <hr className='my-4'/>
          <p className='card-text'>Author: {props.book.author}</p>
          <p className='card-text'>Publisher: {props.book.publisher}</p>
          <p className='card-text'>description: {props.book.description}</p>
          <Edit book={props.book} handleUpdate={props.handleUpdate} handleDelete={props.handleDelete}/>
        </div>
      </div>
    )
  }
  
  export default book;
  