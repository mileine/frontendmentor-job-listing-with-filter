import { IJob } from "../JobsList/JobsList"
import { JobTag } from "../JobTag/JobTag"

interface Props {
  job: IJob,
}

export const JobTags = ({job}: Props) => {
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