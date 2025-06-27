// SortByTopic.jsx
import React, {useContext, useState} from "react";
import {ApiContext} from "../Contexts/ApiContext";

export const SortByTopic = ({children}) => {
    const {wordList} = useContext(ApiContext);
    const [selectedTopic, setSelectedTopic] = useState("all");

    const handleSelectChange = (e) => {
        setSelectedTopic(e.target.value);
    };


    const filteredList = selectedTopic === "all"
        ? wordList
        : wordList.filter(word => word.topic_id === parseInt(selectedTopic));

    return (
        <>
            <select onChange={handleSelectChange}>
                <option value="all">összes</option>
                <option value="1">nehéz</option>
                <option value="2">könnyű</option>
            </select>

            {children(filteredList)}
        </>
    );
};
