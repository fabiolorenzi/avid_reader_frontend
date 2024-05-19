import React, {useEffect, useState} from "react";
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
    const [books, setBooks] = useState<any[]>([]);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
                                    <div className="dashboard_lines">lines</div>
                                : books.length > 0 ?
                                    <div>list</div>
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