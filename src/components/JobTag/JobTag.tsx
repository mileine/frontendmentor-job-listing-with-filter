import './jobTag.scss'

export const JobTag = ({tag, addToSelectedTags}) => {
  return (
    <button className="job-tag__wrapper" onClick={addToSelectedTags} value={tag}>
      <span className="job-tag__name">{tag}</span>
    </button>
  )
}