import { createContext, PropsWithChildren, useState} from "react";
import data from '../data/data.json'

export type JobType = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[],
  tags?:string[] | []
}

export type JobsContextType = {
  jobState: GlobalStateType,
  clearFilter: () => void,
  removeFilterTag: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  addToSelectedTags: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
interface GlobalStateType {
  jobsList: JobType[],
  selectedTags: string[]
}

const initialState: GlobalStateType = {
  jobsList: data,
  selectedTags: [],
}

export const JobsContext = createContext<JobsContextType>({} as JobsContextType);

export const JobsContextProvider = ({ children }: PropsWithChildren) => {
  const [jobState, setJobState] = useState(initialState);

  const clearFilter = () => {
    setJobState({...jobState, selectedTags: []})
  }
  
  const removeFilterTag = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const updatedTags = jobState.selectedTags.filter(tag => tag !== evt.currentTarget.value)
    setJobState({...jobState, selectedTags: updatedTags});
  }
  
  const addToSelectedTags = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const tag: string = evt.currentTarget.value; 
    if (!jobState.selectedTags.includes(tag)) jobState.selectedTags.push(tag);
    setJobState({...jobState})
  }

  const value: JobsContextType = {
    jobState,
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