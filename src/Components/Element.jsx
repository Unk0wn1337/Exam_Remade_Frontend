import React, { useState } from "react";

export const Element = ({ wordList }) => {
    const [inputValue, setInputValue] = useState("");
    const [isCorrect, setIsCorrect] = useState(null); // null = még nem ellenőriztünk

    const handleCheck = (e) => {
        e.preventDefault(); // ne töltse újra az oldalt form submitkor
        const correct = inputValue.trim().toLowerCase() === wordList.hungary.trim().toLowerCase();
        setIsCorrect(correct);
    };

    return (
        <div className='element'>
            <div className="language">
                <p>{wordList.english}</p>
            </div>
            <div>
                <form onSubmit={handleCheck} id='v'>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Írd be a magyar jelentést"
                    />
                    <button type="submit">Ellenőrzés</button>
                </form>
            </div>
            <div className="correct">
                {isCorrect === true && <span style={{color: 'green'}}>✔ Helyes!</span>}
                {isCorrect === false && <span style={{color: 'red'}}>✖ Helytelen!</span>}
            </div>
        </div>
    );
};
