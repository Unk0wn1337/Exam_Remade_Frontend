import React, { useCallback, useState } from 'react'

export const VocabularyItem = ({ wordListItem }) => {
  const [inputValue, setInputValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(null) // null = még nem ellenőriztünk

  const handleCheck = useCallback(
    (e) => {
      e.preventDefault() // ne töltse újra az oldalt form submitkor
      const correct = inputValue.trim().toLowerCase() === wordListItem.hungary.trim().toLowerCase()
      setIsCorrect(correct)
    },
    [inputValue, wordListItem.hungary]
  )

  return (
    <div className="element">
      <div className="language">
        <p>{wordListItem.english}</p>
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
