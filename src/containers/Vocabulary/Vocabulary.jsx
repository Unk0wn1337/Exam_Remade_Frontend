import React from 'react'
import { SortByTopic } from './components/SortByTopic'
import { VocabularyItem } from './components/VocabularyItem'

export const Vocabulary = () => {
  return (
    <SortByTopic>
      {(filteredList) => (
        <article>
          {filteredList.map((element) => (
            <VocabularyItem wordList={element} key={element.id} />
          ))}
        </article>
      )}
    </SortByTopic>
  )
}
