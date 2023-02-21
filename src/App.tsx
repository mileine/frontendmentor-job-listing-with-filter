import React, { useState } from 'react'
import './App.scss'
import { JobsList } from './components/JobsList/JobsList'
import data from './data/data.json'

const initialState = {
  jobsList: data,
  selectedFilters: [],
}

function App() {
  
  const [state, setState] = useState(initialState)
  
  const clearFilter = () => {
    setState({...state, selectedFilters: []})
  }
  
  const removeFilterTag = (evt) => {
    const updatedTags = state.selectedFilters.filter(tag => tag !== evt.currentTarget.value)
    setState({...state, selectedFilters: updatedTags});
  }
  
  const addToSelectedTags = (evt) => {
    const filter = evt.currentTarget.value; 
    console.log(filter)
    if (!state.selectedFilters.includes(filter)) state.selectedFilters.push(filter);
    setState({...state})
  }

  const renderSelectedTagsFilter = () => {
    let tags = [];
    if (state.selectedFilters.length > 0) {
      tags = state.selectedFilters.map(tag => 
        <>
          <span>{tag}</span>
          <button value={tag} onClick={removeFilterTag}>x</button>
        </>
      )
    }
    console.log(tags)
    return (
      <div className="filter">
        <div className="tags-container">
          { tags }
        </div>
        <button onClick={clearFilter}>Clear</button>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="header"></div>
      <div className="body">
        { (state.selectedFilters.length > 0) && renderSelectedTagsFilter()}
        <JobsList jobsList={state.jobsList} selectedFilters={state.selectedFilters} addToSelectedTags={addToSelectedTags}/>
      </div>
    </div>
  )
}

export default App
