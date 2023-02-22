import { useContext } from "react"
import JobsContext from "../../context/JobsContext"
import './filterTag.scss'

interface FilterTagProps {
  tag: string
}

export const FilterTag = ({ tag }: FilterTagProps) => {
  const { removeFilterTag } = useContext(JobsContext)

  return (
    <div className="tag__wrapper">
      <span className="tag__name">{ tag }</span>
      <button className="tag__btn-delete" value={tag} onClick={removeFilterTag}>x</button>
    </div>
  )
}