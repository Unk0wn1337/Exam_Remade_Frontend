import React, { useCallback, useState } from 'react'

export const VocabularyItem = ({ wordList }) => {
  const [inputValue, setInputValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(null) // null = még nem ellenőriztünk

  const handleCheck = useCallback(
    (e) => {
      e.preventDefault() // ne töltse újra az oldalt form submitkor
      const correct = inputValue.trim().toLowerCase() === wordList.hungary.trim().toLowerCase()
      setIsCorrect(correct)
    },
    [inputValue, wordList.hungary]
  )

  return (
    <div className="element">
      <div className="language">
        <p>{wordList.english}</p>
      </div>
      <div>
        <form onSubmit={handleCheck} id="v">
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
        {isCorrect && <span style={{ color: 'green' }}>✔ Helyes!</span>}
        {!isCorrect && <span style={{ color: 'red' }}>✖ Helytelen!</span>}
      </div>
    </div>
  )
}
