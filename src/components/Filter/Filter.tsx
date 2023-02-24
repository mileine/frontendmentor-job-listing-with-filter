import { useContext } from "react"
import JobsContext from "../../context/JobsContext"
import { FilterTag } from "../FilterTag/FilterTag"

import './filter.scss'

export const Filter = () => {
  const { state, clearFilter } = useContext(JobsContext)
  let tags = []
  if (state.selectedFilters.length > 0) {
    tags = state.selectedFilters.map((tag: string, key: string ) => 
      <FilterTag tag={tag} key={tag}/>
    )
  }
  return (
    <div className="filter">
      <div className="tags-container">
        { tags }
      </div>
      <button className="btn-clear" onClick={clearFilter}>Clear</button>
    </div>
  )
}