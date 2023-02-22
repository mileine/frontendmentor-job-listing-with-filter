import { useContext } from "react"
import JobsContext, { JobsContextProps } from "../../context/JobsContext"
import { JobCard } from "../JobCard/JobCard"

export interface IJob {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

interface IFormattedJob {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[],
  tags: string[]
}
export interface IJobsList {
  state: IJob[],
  selectedFilters: string[]
}

export const JobsList = () => {
  const { state }: JobsContextProps = useContext(JobsContext)
  const selectedFilters = state.selectedFilters

  const formatJobsToBeDisplayed: IFormattedJob[] = state.jobsList.map((job: IJob) => ({...job, "tags": [job.role].concat(job.level).concat(job.languages).concat(job.tools)}))
  const checker = (jobTags: string[]) => selectedFilters.every((tag: string)=> jobTags.includes(tag))
  const filteredJobs = selectedFilters.length === 0 ? state.jobsList : formatJobsToBeDisplayed.filter((job) => checker(job.tags))
  
  return (
    <ul className="jobs-list">
      { 
        filteredJobs.map((job: IJob) => (<JobCard job={job} />))
      }
    </ul>
  )
}