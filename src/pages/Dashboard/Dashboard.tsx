import React, {useState} from "react";
import NavigationBar from "../../components/NavigationBar";
import SmallNavigationBar from "../../components/SmallNavigationBar";
import SearchBar from "../../components/SearchBar";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import "./Dashboard.css";

function Dashboard() {
    const [searchValue, setSearchValue] = useState<string>("");

    function searchBooks() {
        console.log("clicked");
    };

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;