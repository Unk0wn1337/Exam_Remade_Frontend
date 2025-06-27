import React, {useCallback, useContext, useMemo, useState} from 'react'
import { ApiContext } from '../../../Contexts/ApiContext'
import {TOPIC} from "../../../const/topic";

export const SortByTopic = ({ children }) => {
  const { wordList } = useContext(ApiContext)
  const [selectedTopic, setSelectedTopic] = useState(TOPIC.ALL)

  // if method optimization use useCallback
  const handleSelectChange = useCallback((e) => {
    setSelectedTopic(e.target.value)
  }, [])

  // if it is not a direct equation (a=b) then use useMemo for rendering optimization
  const filteredList = useMemo(() => {
    return selectedTopic === TOPIC.ALL
      ? wordList
      : wordList.filter((word) => word.topic_id === parseInt(selectedTopic))
  }, [selectedTopic, wordList])

  return (
    <>
      <select onChange={handleSelectChange}>
        <option value="all">összes</option>
        <option value="1">nehéz</option>
        <option value="2">könnyű</option>
      </select>

      {children(filteredList)}
    </>
  )
}
