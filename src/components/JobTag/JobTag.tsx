import { useContext } from 'react'
import JobsContext, { JobsContextProps } from '../../context/JobsContext'
import './jobTag.scss'

interface Props {
  tag: string,
}

export const JobTag = ({tag}: Props) => {
  const { addToSelectedTags }: JobsContextProps = useContext(JobsContext)
  return (
    <button className="job-tag__wrapper" onClick={addToSelectedTags} value={tag}>
      <span className="job-tag__name">{tag}</span>
    </button>
  )
}