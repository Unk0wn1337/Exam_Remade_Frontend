// Place.jsx
import React from "react";
import {SortByTopic} from "./SortByTopic";
import {Element} from "./Element";

export const Place = () => {
    return (
        <SortByTopic>
            {(filteredList) => (
                <article>
                    {filteredList.map(element => (
                        <Element wordList={element} key={element.id}/>
                    ))}
                </article>
            )}
        </SortByTopic>
    );
};
