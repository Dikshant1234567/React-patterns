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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "../../components/ui/dropdown-Menu";
import Loader from "../../components/common/Loader";
import Button from "../../components/ui/button";
import { envConfig } from "../../lib/config/env";


const locations = ["Mumbai", "Pune", "Bangalore"]
function JobProblem() {
  const { jobUrl } = envConfig;
  console.log(jobUrl)
  const [title, setTitle] = useState("")
  const debouncedtitle = useDebounce(title, 500);
  // trying to filter data in the api 
  const [location, setLocation] = useState("")
  console.log(location)
  const handleLocation = (loc: string) => {
    setLocation(loc)
  }

  return (
    <>


      <div className="">
        <header className="flex justify-between items-center">
          <div>
            <SearchBox value={title} onChange={e => setTitle(e.target.value)} onclear={() => setTitle("")} />
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
        <section>
          {/* map the data */}

          {false ? "conet" : <Loader />}
          <br />
          <Button variant={"outline"}>save job</Button>
          {/* if no jobs accoring to the filter handle the error */}
          {/* directly write no jobs found */}
        </section>
      </div>


    </>

  )
}

export default JobProblem



