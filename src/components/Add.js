import React, { useState, useEffect } from "react";

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
  let emptyBook = { title: "", publisher: "", author: ""};
  const [book, setBook] = useState(emptyBook);

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(book);
    setBook(emptyBook);
  };

  return (
    <div className="container-fluid card ">
        <div className="row">
            <div className="col-12 col-md-8 offset-md-2 ">
                <form onSubmit={handleSubmit}>
                    {/* <div className="form-group ">
                        <label htmlFor="img">img</label>
                        <input type="text" className="form-control" name="img" value={book.img} onChange={handleChange} />
                    </div> */}
                    <div className="form-group ">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title" value={book.title} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" name="author" value={book.author} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="publisher">Publisher</label>
                        <input type="text" className="form-control" name="publisher" value={book.publisher} onChange={handleChange} />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="description">descritopn</label>
                        <input type="text" className="form-control" name="description" value={book.description} onChange={handleChange} />
                    </div> */}
                    <button type="submit" className="m-1 btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
)


};

export default Add;
