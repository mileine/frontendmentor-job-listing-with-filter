import { useContext } from "react"
import JobsContext from "../../context/JobsContext"
import { FilterTag } from "../FilterTag/FilterTag"

import './filter.scss'

export const Filter = () => {
  const { jobState, clearFilter } = useContext(JobsContext)
  return (
    <div className="filter">
      <div className="tags-container">
       { (jobState.selectedTags.length > 0) ? 
          jobState.selectedTags.map((tag: string) => 
          <FilterTag tag={tag} key={tag}/>) : ''
       }
      </div>
      <button className="btn-clear" onClick={clearFilter}>Clear</button>
    </div>
  )
}