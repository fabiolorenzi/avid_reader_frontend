import React from "react";
import NavigationBar from "../../components/NavigationBar";
import SmallNavigationBar from "../../components/SmallNavigationBar";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import "./Dashboard.css";

function Dashboard() {
    return(
        <div className="dashboard_container">
            <Helmet>
                <title>Avid Reader | Dashboard</title>
            </Helmet>
            <Header />
            <div className="dashboard_main">
                <NavigationBar />
                <SmallNavigationBar />
                <div className="dashboard_page">Hello</div>
            </div>
        </div>
    );
};

export default Dashboard;