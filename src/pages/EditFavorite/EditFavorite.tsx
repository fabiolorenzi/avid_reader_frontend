import React, {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Book from "../../types/Book";
import Button from "../../components/Button";
import NavigationBar from "../../components/NavigationBar";
import SmallNavigationBar from "../../components/SmallNavigationBar";
import Loading from "../../components/Loading";
import NoData from "../../components/NoData";
import Stars from "../../components/Stars";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import Banner from "../../media/banner.jpg";
import "./EditFavorite.css";

function EditFavorite() {
    const [book, setBook] = useState<Book>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const book_id = urlParams.get("book_id");

    useEffect(() => {
        if (!sessionStorage.getItem("user_id")) {
            navigate("/");
        } else {
            searchBook();
        };
    }, []);

    async function searchBook() {
        setIsLoading(true);
        fetch(`https://avid-reader-backend.hopto.org/api/v1/Book/${book_id}`, {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(data => setBook(data))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        setIsLoading(false);
    }, [book]);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setBook({...book, [e.target.name]: e.target.value} as {[K in keyof Book]: Book[K]});
    };

    function manageRating(value: number) {
        setBook({...book as Book, rating: value as number});
    };

    function onUpdate() {
        console.log(book);
    };

    return(
        <div className="editFavorite_container">
            <Helmet>
                <title>Avid Reader | Edit</title>
            </Helmet>
            <Header />
            <div className="editFavorite_main">
                <NavigationBar />
                <SmallNavigationBar />
                <div className="editFavorite_page">
                    <div className="editFavorite_content">
                        {
                            !isLoading ?
                                book ?
                                    <div className="editFavorite_block">
                                        <div className="editFavorite_banner">
                                            <img src={Banner} alt="banner" />
                                            <h1>{book.title} by {book.author}</h1>
                                        </div>
                                        <h1 className="editFavorite_title">Edit</h1>
                                        <div className="editFavorite_inputs">
                                            <div className="editFavorite_input">
                                                <div className="editFavorite_inputLeft">
                                                    <p>Cost</p>
                                                </div>
                                                <input type="text" name="cost" value={book.price} onChange={onChange} />
                                            </div>
                                            <div className="editFavorite_input">
                                                <div className="editFavorite_inputLeft">
                                                    <p>Rating</p>
                                                </div>
                                                <div className="editFavorite_ratingInput">
                                                    <Stars rating={book.rating} setRating={manageRating} />
                                                </div>
                                            </div>
                                            <div className="editFavorite_buttonsLine">
                                                <Button text="UPDATE" onClick={onUpdate} />
                                            </div>
                                            <div className="editFavorite_return">
                                                <p>← Return to <a href="/favorites">Favorites</a></p>
                                            </div>
                                        </div>
                                    </div>
                                : <NoData />
                            : <Loading />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditFavorite;