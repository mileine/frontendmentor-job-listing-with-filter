import { useContext } from "react"
import JobsContext from "../../context/JobsContext"

export const JobFilter = () => {
  const { state, removeFilterTag, clearFilter } = useContext(JobsContext)
  let tags = [];
  if (state.selectedFilters.length > 0) {
    tags = state.selectedFilters.map(tag => 
      <>
        <span>{tag}</span>
        <button value={tag} onClick={removeFilterTag}>x</button>
      </>
    )
  }
  return (
    <div className="filter">
      <div className="tags-container">
        { tags }
      </div>
      <button onClick={clearFilter}>Clear</button>
    </div>
  )
}