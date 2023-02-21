import { JobCard } from "../JobCard/JobCard"

export const JobsList = ({jobsList, addToSelectedTags, selectedFilters}) => {
  const formatJobsToBeDisplayed = jobsList.map(job => ({...job, "tags": [job.role].concat(job.level).concat(job.languages).concat(job.tools)}))
  const checker = (jobTags, selectedFilters) => selectedFilters.every(tag => jobTags.includes(tag))
  const filteredJobs = selectedFilters.length === 0 ? jobsList : formatJobsToBeDisplayed.filter(job => checker(job.tags, selectedFilters))
  console.log('displayJobsList')
  return (
    <ul className="jobs-list">
      { 
        filteredJobs.map(job => (<JobCard job={job} addToSelectedTags={addToSelectedTags}/>))
      }
    </ul>
  )
}