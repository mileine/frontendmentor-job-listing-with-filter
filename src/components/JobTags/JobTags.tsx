import { JobTag } from "../JobTag/JobTag"

export const JobTags = ({job}) => {
  return (
    <div className="job-tags">
      <JobTag tag={job.role} />
      <JobTag tag={job.level}/>
      { job.languages && job.languages.map(language => 
        <JobTag tag={language}/>
      )}
      { job.tools && job.tools.map(tool => 
        <JobTag tag={tool}/>
      )}
    </div>
  )
}