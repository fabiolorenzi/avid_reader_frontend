import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Book from "../../types/Book";
import NavigationBar from "../../components/NavigationBar";
import SmallNavigationBar from "../../components/SmallNavigationBar";
import Loading from "../../components/Loading";
import NoData from "../../components/NoData";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
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
                                    <div>{book.title}</div>
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