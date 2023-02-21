import { useContext } from "react"
import JobsContext from "../../context/JobsContext"
import { JobCard } from "../JobCard/JobCard"

export const JobsList = () => {
  const { state } = useContext(JobsContext)
  const selectedFilters = state.selectedFilters

  const formatJobsToBeDisplayed = state.jobsList.map(job => ({...job, "tags": [job.role].concat(job.level).concat(job.languages).concat(job.tools)}))
  const checker = (jobTags) => selectedFilters.every(tag => jobTags.includes(tag))
  const filteredJobs = selectedFilters.length === 0 ? state.jobsList : formatJobsToBeDisplayed.filter(job => checker(job.tags))
  
  return (
    <ul className="jobs-list">
      { 
        filteredJobs.map(job => (<JobCard job={job} />))
      }
    </ul>
  )
}