import { createContext, useState} from "react";
import data from '../data/data.json'

export const JobsContext = createContext({});

export const JobsContextProvider = ({ children }) => {
  const initialState = {
    jobsList: data,
    selectedFilters: [],
  }
  const [state, setState] = useState(initialState);

  const clearFilter = () => {
    setState({...state, selectedFilters: []})
  }
  
  const removeFilterTag = (evt) => {
    const updatedTags = state.selectedFilters.filter(tag => tag !== evt.currentTarget.value)
    setState({...state, selectedFilters: updatedTags});
  }
  
  const addToSelectedTags = (evt) => {
    const filter = evt.currentTarget.value; 
    if (!state.selectedFilters.includes(filter)) state.selectedFilters.push(filter);
    setState({...state})
  }

  const value = {
    state,
    clearFilter,
    removeFilterTag,
    addToSelectedTags
  }

  return (
    <JobsContext.Provider value={value}>
      { children }
    </JobsContext.Provider>
  )
}

export default JobsContext;