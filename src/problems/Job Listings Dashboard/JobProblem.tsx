// Problem 1: Job Listings Dashboard

// You are building a dashboard similar to LinkedIn.
// Fetch jobs from API.
// Support search by title.
// Support filtering by location.
// Support sorting by newest/salary.
// Show loading spinner.
// Show error state.
// Allow saving a job.
// Saved state should immediately reflect in UI.
// UI design team frequently changes layouts.

import { useState } from "react"
import SearchBox from "../../components/common/SearchBox"
import { useDebounce } from "../../hooks/useDebouncing";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-Menu";
import Loader from "../../components/common/Loader";
import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../../lib/api/job";
import JobCard from "./JobCard";
import Button from "../../components/ui/button";
import { useSearchParams } from "react-router-dom";


const locations = ["US Virgin Islands", "Sri Lanka", "Philippines", "Kingston",
  "London", "Madrid", "United Kingdom", "Torino",
  "Greater Madurai Area", "Detroit", "United States", "Roorkee"
]
function JobProblem() {
  const [title, setTitle] = useState("")
  const [savedJobIds, setSavedJobIds] = useState<string[]>([])
  const debouncedtitle = useDebounce(title, 500);
  const [location, setLocation] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const JOBS_PER_PAGE = 9;

  const requestedPage = Number(searchParams.get("page"));
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
  })

  const filteredJobs = data
    .filter(job =>
      job.position.toLowerCase().includes(debouncedtitle.toLowerCase())
    )
    .filter(job =>
      !location ||
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const safePage = Math.min(currentPage, Math.max(totalPages, 1));
  const startIndex = (safePage - 1) * JOBS_PER_PAGE;
  const visibleJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE,
  );

  const changePage = (page: number) => {
    setSearchParams(previousParams => {
      const nextParams = new URLSearchParams(previousParams);
      nextParams.set("page", String(page));
      return nextParams;
    });
  };

  const handleLocation = (loc: string) => {
    setLocation(loc)
    changePage(1)
  }

  const handleTitleChange = (value: string) => {
    setTitle(value)
    changePage(1)
  }

  const handleSave = (jobId: string) => {
    setSavedJobIds(current =>
      current.includes(jobId) ? current.filter(id => id !== jobId) : [...current, jobId]
    )
  }
  return (
    <div className="mx-auto max-w-7xl p-6">
      <header className="mb-6 flex items-center justify-between gap-4">
        <div>
          <SearchBox
            value={title}
            onChange={e => handleTitleChange(e.target.value)}
            onclear={() => handleTitleChange("")}
          />
        </div>
        <div className="flex space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="">
              {location || "Select location"}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-8">
              {locations.map((item) => (
                <DropdownMenuItem
                  key={item}
                  onSelect={() => handleLocation(item)}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Support sorting by newest/salary */}
          <h1>sort by salary</h1>
        </div>

      </header>
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading && <Loader />}
        {isError && <p className="text-red-600">Could not load jobs. Please try again.</p>}
        {!isLoading && !isError && visibleJobs.length === 0 && <p>No jobs found.</p>}
        {visibleJobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            isSaved={savedJobIds.includes(job.id)}
            onSave={handleSave}
          />))}
      </section>
      {
        !isLoading && totalPages > 0 && <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            disabled={safePage === 1}
            onClick={() => changePage(safePage - 1)}
          >
            Previous
          </Button>

          <span>
            Page {safePage} of {totalPages}
          </span>

          <Button
            variant="outline"
            disabled={safePage === totalPages}
            onClick={() => changePage(safePage + 1)}
          >
            Next
          </Button>
        </div>
      }
    </div>
  )
}

export default JobProblem


