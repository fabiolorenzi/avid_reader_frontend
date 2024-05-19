import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Book from "../../types/Book";
import BookList from "../../components/BookList";
import NavigationBar from "../../components/NavigationBar";
import SmallNavigationBar from "../../components/SmallNavigationBar";
import SearchBar from "../../components/SearchBar";
import Loading from "../../components/Loading";
import NoData from "../../components/NoData";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import "./Favorites.css";

function Favorites() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [favBooks, setFavBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem("user_id")) {
            navigate("/");
        } else {
            searchBooks();
        };
    }, []);

    async function searchBooks() {
        const user_id = sessionStorage.getItem("user_id") as string;
        setIsLoading(true);
        fetch(`https://avid-reader-backend.hopto.org/api/v1/Book?user=${user_id}${searchValue.length > 0 ? "&filter=" + searchValue : ""}`, {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(data => setFavBooks(data))
        .catch(err => console.log(err));
    };

    function onDelete(book_id: number) {
        fetch(`https://avid-reader-backend.hopto.org/api/v1/Book/${book_id}`, {
            method: "DELETE"
        })
        .then(() => searchBooks())
        .catch(err => console.log(err));
    };

    useEffect(() => {
        setIsLoading(false);
    }, [favBooks]);

    return(
        <div className="favorites_container">
            <Helmet>
                <title>Avid Reader | Favorites</title>
            </Helmet>
            <Header />
            <div className="favorites_main">
                <NavigationBar />
                <SmallNavigationBar />
                <div className="favorites_page">
                    <div className="favorites_content">
                        <h1 className="favorites_title">Favorites</h1>
                        <SearchBar
                            placeholder="Search"
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onClick={searchBooks}
                        />
                        {
                            !isLoading ?
                                favBooks.length > 0 ?
                                    <BookList
                                        favBooks={favBooks}
                                        books={favBooks}
                                        isFav
                                        onDelete={onDelete}
                                    />
                                : <NoData />
                            : <Loading />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;