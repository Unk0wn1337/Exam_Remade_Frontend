import React from 'react'
import { SortByTopic } from './components/SortByTopic'
import { VocabularyItem } from './components/VocabularyItem'

export const Vocabulary = () => {
  return (
    <SortByTopic>
      {(filteredWordList) => (
        <article>
          {filteredWordList &&
            filteredWordList.map((wordListItem) => (
              <VocabularyItem wordListItem={wordListItem} key={wordListItem.id} />
            ))}
        </article>
      )}
    </SortByTopic>
  )
}
