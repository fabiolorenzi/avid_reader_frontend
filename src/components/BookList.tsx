import React from "react";
import {useNavigate} from "react-router-dom";
import Stars from "./Stars";
import {HiOutlineBookOpen} from "react-icons/hi2";
import {CiHeart} from "react-icons/ci";
import {IoHeart} from "react-icons/io5";
import Book from "../types/Book";
import "./BookList.css";

interface BookListProps {
    favBooks: Book[];
    books: Book[];
    isFav?: boolean;
    onDelete: (id: number) => void;
    onAdd: (book: Book) => void;
};

function BookList({
    favBooks,
    books,
    isFav = false,
    onDelete,
    onAdd
}: BookListProps) {
    const navigate = useNavigate();

    return(
        <div className="bookList_container">
            {
                books.map(book => {
                    return(
                        <div className="bookList_single" key={book.title + "_key"}>
                            <div className="bookList_left">
                                <HiOutlineBookOpen />
                                <h1>{book.title.replace('"', "").replace('"', "")}</h1>
                                <h2>by {book.author}</h2>
                            </div>
                            <div className="bookList_right">
                                <h1>{book.price.toString().replace(".00", " GBP")}</h1>
                                <Stars rating={book.rating} />
                                {
                                    isFav ?
                                        <>
                                            <p onClick={() => navigate("/favorites?id=" + book.id.toString())}>Edit</p>
                                            <p onClick={() => onDelete(book.id)}>Delete</p>
                                        </>
                                    : ""
                                }
                                {
                                    favBooks.findIndex(x => x.author === book.author && x.title === book.title) === -1 ?
                                    <div className="bookList_heart" onClick={() => onAdd(book)}>
                                        <CiHeart />
                                    </div>
                                    : 
                                    <div className="bookList_heart">
                                        <IoHeart />
                                    </div>
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default BookList;