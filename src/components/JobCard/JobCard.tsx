import { FunctionComponent } from "react"
import { JobType } from "../../context/JobsContext"
import { JobTags } from "../JobTags/JobTags"
import './jobCard.scss'

export const JobCard:FunctionComponent<{job: JobType}> = props => {
  const job: JobType = props.job
  return (
    <li className='job-card'>   
      <div className="job-main-info">
        <div className="logo-container">
          <img className="job-logo" src={job.logo} alt={job.company} />
        </div>
        <div className="job-description">
          <div className="line-1">
            <span className="company-name">{job.company}</span>
            {job.new && <div className='tag new'>NEW!</div>}
            {job.featured && <div className='tag featured'>FEATURED</div>}
          </div>
          <p className="position">{job.position}</p>
          <div className="extra">
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <JobTags job={job}/>
    </li>
  )
}