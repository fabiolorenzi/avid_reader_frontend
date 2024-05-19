import React, {useEffect, useState} from "react";
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
    onDelete?: (id: number) => void;
    onAdd?: (book: Book) => void;
};

function BookList({
    favBooks,
    books,
    isFav = false,
    onDelete,
    onAdd
}: BookListProps) {
    const [booksArr, setBooksArr] = useState<Book[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (favBooks.length > 0) {
            console.log(favBooks[0]);
            let tempArr: Book[] = [];
            for (let x = 0; x < books.length; x++) {
                const eq = favBooks.filter(f => f.author === books[x].author && f.title === books[x].title);
                eq.length === 0 ? tempArr.push(books[x]) : tempArr.push(eq[0]);
            };
            setBooksArr(tempArr);
        } else {
            setBooksArr(books);
        };
    }, [books, favBooks]);

    return(
        <div className="bookList_container">
            {
                booksArr.length === 0 ? "" :
                booksArr.map(book => {
                    return(
                        <div className="bookList_single" key={book.title + "_key"}>
                            <div className="bookList_left">
                                <HiOutlineBookOpen />
                                <h1>{book.title.replace('"', "").replace('"', "")}</h1>
                                <h2>by {book.author}</h2>
                            </div>
                            <div className="bookList_right">
                                <h1>{book?.price ? Math.round(book.price).toString() + " GBP" : "0 GBP"}</h1>
                                <Stars rating={book.rating} />
                                {
                                    isFav && onDelete ?
                                        <>
                                            <p onClick={() => navigate("/favorites?id=" + book.id.toString())}>Edit</p>
                                            <p onClick={() => onDelete(book.id)}>Delete</p>
                                        </>
                                    : ""
                                }
                                {
                                    favBooks.length === 0 || favBooks.filter(f => f.author === book.author && f.title === book.title).length === 0?
                                        <div className="bookList_heart" onClick={() => onAdd ? onAdd(book) : ""}>
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