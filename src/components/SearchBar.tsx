import React, {ChangeEvent} from "react";
import {CiSearch} from "react-icons/ci";
import "./SearchBar.scss";

interface SearchBarProps {
    placeholder: string;
    searchValue: string;
    setSearchValue: (value: string) => void;
    onClick: () => void;
};

function SearchBar({placeholder, searchValue, setSearchValue, onClick}: SearchBarProps) {
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setSearchValue(e.target.value);
    };

    return(
        <div className="searchBar_container">
            <div className="searchBar_main">
                <div className="searchBar_icon">
                    <CiSearch />
                </div>
                <input type="text" placeholder={placeholder} value={searchValue} onChange={onChange} />
                <div onClick={onClick} className="searchBar_button">GO</div>
            </div>
        </div>
    );
};

export default SearchBar;