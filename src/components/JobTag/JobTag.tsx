import { useContext } from 'react'
import JobsContext from '../../context/JobsContext'
import './jobTag.scss'

export const JobTag = ({tag}) => {
  const { addToSelectedTags } = useContext(JobsContext)
  return (
    <button className="job-tag__wrapper" onClick={addToSelectedTags} value={tag}>
      <span className="job-tag__name">{tag}</span>
    </button>
  )
}