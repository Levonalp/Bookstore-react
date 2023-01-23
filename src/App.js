import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Book from './components/Book';
import Add from './components/Add';
import { confirmAlert } from 'react-confirm-alert';




const App = () => {
  let [book, setBook] = useState([])

  const getBook = () => {
    axios
    .get('http://localhost:8080/api/books')
      .then(
        (response) => {
          setBook(response.data.data)
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.error(error)
      })
  };
  const handleCreate = (addBook) => {
    axios
      .post('http://localhost:8080/api/books', addBook)
      .then((response) => {
        console.log(response)
        getBook()
      })
  }
  const handleDelete = (deleteBook) => {
          axios
          .delete('http://localhost:8080/api/books/' + deleteBook.id)
          .then((response) => {
              setBook(book.filter(book => book.id !== deleteBook.id)), console.log(book.id)
  }           
  ) }
  const handleUpdate = (editBook) => {
    console.log(editBook)
    axios
    .put('http://localhost:8080/api/books/' + editBook.id, editBook)
    .then((response) => {
      getBook()
    })

  }

  useEffect(() => {
    getBook()
  }, [])

  
  return (
   <>
    <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-sm-6 '>
            <Add handleCreate={handleCreate} />
        </div>
    </div>
    <div className='row '>
        {
            book.map((book) => {
                return (
                    <div className='col-sm-4 mb-4'>
                        <Book book={book} handleUpdate={handleUpdate} handleDelete={handleDelete} key={book.id} />
                    </div> 
                )
            })
        }
    </div>
    </>
  )
}
export default App