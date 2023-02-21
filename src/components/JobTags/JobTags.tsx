import { JobTag } from "../JobTag/JobTag"

export const JobTags = ({job, addToSelectedTags}) => {
  return (
    <div className="job-tags">
      <JobTag tag={job.role} addToSelectedTags={addToSelectedTags}/>
      <JobTag tag={job.level} addToSelectedTags={addToSelectedTags}/>
      { job.languages && job.languages.map(language => 
        <JobTag tag={language} addToSelectedTags={addToSelectedTags}/>
      )}
      { job.tools && job.tools.map(tool => 
        <JobTag tag={tool} addToSelectedTags={addToSelectedTags}/>
      )}
    </div>
  )
}