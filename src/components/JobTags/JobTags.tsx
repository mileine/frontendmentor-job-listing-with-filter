import { FunctionComponent } from "react"
import { JobType } from "../../context/JobsContext"
import { JobTag } from "../JobTag/JobTag"

import './jobTags.scss'

export const JobTags:FunctionComponent<{job: JobType}> = props => {
  const job: JobType = props.job
  return (
    <div className="job-tags">
      <JobTag tag={job.role} />
      <JobTag tag={job.level}/>
      { job.languages && job.languages.map((language: string) => 
        <JobTag tag={language} key={language}/>
      )}
      { job.tools && job.tools.map((tool: string) => 
        <JobTag tag={tool} key={tool}/>
      )}
    </div>
  )
}