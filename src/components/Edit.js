import React, { useState } from "react";

const Edit = (props) => {
  const [book, setBook] = useState({ ...props.book });
  const [editAlert, setEditAlert] = useState(false);

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const dropdownFunction = () => {
    document
      .getElementById(`dropdown${props.book.id}`)
      .classList.toggle("show");
  };

  window.onclick = function (event) {
    if (!event.target.matches(".clickable-svg")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  const openEditAlert = () => {
    setEditAlert(!editAlert);
  };
  const closeEditAlert = () => {
    setEditAlert(!editAlert);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUpdate(book);
    setEditAlert(false);
  };

  return (
    <div>
      <div className="dropdown-div ">
        <svg
          onClick={dropdownFunction}
          className="clickable-svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="nonzero"
            d="M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15ZM5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
            fill=" gray "
          />
          <path
            fillRule="evenodd"
            clipRule="nonzero"
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            fill=" gray "
          />
          <path
            fillRule="evenodd"
            clipRule="nonzero"
            d="M22 12C22 13.6569 20.6569 15 19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9C20.6569 9 22 10.3431 22 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z"
            fill=" gray "
          />
        </svg>
        <div id={"dropdown" + props.book.id} className="dropdown-content">
          <p onClick={openEditAlert}>Edit</p>
          <p
            onClick={() => {
              props.handleDelete(props.book);
            }}
          >
            Delete
          </p>
        </div>

        {editAlert ? (
          <div className="edit-overlay ">
            <div className="edit-form-container mb-3 container-fluid">
              <div className="add-form-header ">
                <h3>Edit book</h3>
                <button
                  onClick={closeEditAlert}
                  className=" close-add-button p-2"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  X{" "}
                </button>
              </div>
              <form
                className="add-form mb-1 d-flex row "
                onSubmit={handleSubmit}
              >
                <label htmlFor="title">title: </label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="author">author: </label>
                <input
                  className="form-control"
                  type="text"
                  name="author"
                  onChange={handleChange}
                  value={book.author}
                />
                <br />
                <br />
                <label htmlFor="publisher">publisher: </label>
                <input
                  className="form-control"
                  type="text"
                  name="publisher"
                  onChange={handleChange}
                  value={book.publisher}
                />
                <br />
                <br />
                <br />
                <input type="submit" className="btn btn-primary" />
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Edit;
