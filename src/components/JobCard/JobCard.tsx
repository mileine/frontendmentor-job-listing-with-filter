import { IJob } from "../JobsList/JobsList"
import { JobTags } from "../JobTags/JobTags"

interface Props {
  job: IJob,
}

export const JobCard = ({ job }: Props) => {
  return (
    <li className='job-card'>   
      <div className="job-main-info">
        <div className="logo-container">
          <img className="job-logo" src={job.logo} alt={job.company} />
        </div>
        <div className="job-description">
          <div className="line-1">
            <span className="compan-name">{job.company}</span>
            {job.new && <span className='new'>NEW!</span>}
            {job.featured && <span className='featured'>FEATURED</span>}
          </div>
          <p>{job.position}</p>
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