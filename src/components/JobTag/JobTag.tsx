import { useContext } from 'react'
import JobsContext, { JobsContextType } from '../../context/JobsContext'
import './jobTag.scss'

type Props = {
  tag: string
}

export const JobTag = ({ tag }: Props) => {
  const { addToSelectedTags }: JobsContextType = useContext(JobsContext)
  return (
    <button className="job-tag__wrapper" onClick={addToSelectedTags} value={tag}>
      <span className="job-tag__name">{tag}</span>
    </button>
  )
}