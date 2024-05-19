import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Book from "../../types/Book";
import DashboardLine from "./DashboardLine";
import BookList from "../../components/BookList";
import NavigationBar from "../../components/NavigationBar";
import SmallNavigationBar from "../../components/SmallNavigationBar";
import SearchBar from "../../components/SearchBar";
import Loading from "../../components/Loading";
import NoData from "../../components/NoData";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import "./Dashboard.css";

function Dashboard() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [favBooks, setFavBooks] = useState<Book[]>([]);
    const [books, setBooks] = useState<Book[]>([]);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem("user_id")) {
            navigate("/");
        } else {
            fetch("https://avid-reader-backend.hopto.org/api/v1/Book", {
                method: "GET"
            })
            .then(resp => resp.json())
            .then(data => setFavBooks(data))
            .catch(err => console.log(err));
        };
    }, []);

    useEffect(() => {
        console.log(favBooks);
    }, [favBooks]);

    async function searchBooks() {
        setIsLoading(true);
        setHasSearched(true);
        fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=KAjOHJJtTOqrXEhKxBlmwIAQQ5Xu7gIr${searchValue.length > 0 ? "&title=" + searchValue.replace(" ", "+") : ""}`, {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(data => setBooks(data?.results))
        .catch(err => console.log(err));
    };

    function onAdd(book: Book) {
        console.log(book);
    };

    function onDelete(book_id: number) {
        console.log(book_id);
    };

    useEffect(() => {
        setIsLoading(false);
        console.log(books);
    }, [books]);

    return(
        <div className="dashboard_container">
            <Helmet>
                <title>Avid Reader | Dashboard</title>
            </Helmet>
            <Header />
            <div className="dashboard_main">
                <NavigationBar />
                <SmallNavigationBar />
                <div className="dashboard_page">
                    <div className="dashboard_content">
                        <SearchBar
                            placeholder="What books would you like to find?"
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onClick={searchBooks}
                        />
                        {
                            !isLoading ?
                                !hasSearched ?
                                    <div className="dashboard_lines">
                                        <DashboardLine
                                            title="New York Times Bestsellers"
                                            onClick={searchBooks}
                                            top
                                        />
                                        <DashboardLine
                                            title="Favorites"
                                            onClick={() => navigate("/favorites")}
                                        />
                                    </div>
                                : books.length > 0 ?
                                    <BookList
                                        favBooks={favBooks}
                                        books={books}
                                        isFav
                                        onDelete={onDelete}
                                        onAdd={onAdd}
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

export default Dashboard;