import { useContext } from "react"
import JobsContext, { JobsContextType, JobType } from "../../context/JobsContext"
import { JobCard } from "../JobCard/JobCard"

export const JobsList = () => {
  const { jobState }: JobsContextType = useContext(JobsContext)
  const formatJobsToBeDisplayed: JobType[] = jobState.jobsList.map((job: JobType) => ({...job, "tags": [job.role].concat(job.level).concat(job.languages).concat(job.tools)}))
  const checker = (jobTags?: string[]) => jobState.selectedTags.every((tag: string)=> jobTags?.includes(tag))
  const filteredJobs: JobType[] = jobState.selectedTags.length === 0 ? formatJobsToBeDisplayed : formatJobsToBeDisplayed.filter((job: JobType) => checker(job.tags))
  
  return (
    <ul className={`jobs-list${jobState.selectedTags.length > 0 ? ' filtered': ''}`}>
      { 
        filteredJobs.map((job: JobType) => (<JobCard job={job} key={job.id}/>))
      }
    </ul>
  )
}