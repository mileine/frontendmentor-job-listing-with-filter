import { useContext } from "react"
import JobsContext from "../../context/JobsContext"
import './filterTag.scss'

export const FilterTag = ({ tag }) => {
  const { removeFilterTag } = useContext(JobsContext)

  return (
    <div className="tag__wrapper">
      <span className="tag__name">{ tag }</span>
      <button className="tag__btn-delete" value={tag} onClick={removeFilterTag}>x</button>
    </div>
  )
}