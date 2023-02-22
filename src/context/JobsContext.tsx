import { createContext, PropsWithChildren, useState} from "react";
import { IJob } from "../components/JobsList/JobsList";
import data from '../data/data.json'

export interface JobsContextProps {
  state: IJobsContext,
  clearFilter: () => {},
  removeFilterTag: ()=> {},
  addToSelectedTags: ()=>{}
}

interface IJobsContext {
  jobsList: Array<IJob>,
  selectedFilters: string[]
}

const initialState: IJobsContext = {
  jobsList: data,
  selectedFilters: [],
}

export const JobsContext = createContext({});

export const JobsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState);

  const clearFilter = () => {
    setState({...state, selectedFilters: []})
  }
  
  const removeFilterTag = (evt: React.FormEvent<HTMLFormElement>) => {
    const updatedTags = state.selectedFilters.filter(tag => tag !== evt.currentTarget.value)
    setState({...state, selectedFilters: updatedTags});
  }
  
  const addToSelectedTags = (evt: React.FormEvent<HTMLFormElement>) => {
    const tag: string = evt.currentTarget.value; 
    if (!state.selectedFilters.includes(tag)) state.selectedFilters.push(tag);
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