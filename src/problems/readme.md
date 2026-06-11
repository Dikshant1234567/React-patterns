Separate the logic and the ui.



Conatiner contains the logic and renader the UI.


                Conatiner
---------------------------------------------
|                                           |
|                                           |
|          |----------------|               |
|          |                |               |
|          |  logic & state |               |
|          |                |               |
|          |----------------|               |
|                                           |
|                                           |
|                                           |
|          |------------|                   |
|          |            |                   |
|          |  presenter |                   |
|          |            |                   |
|          |------------|                   |
|                                           |
|                                           |
|                                           |
|                                           |
|                                           |
---------------------------------------------


#### Problem 1: Job Listings Dashboard

You are building a dashboard similar to LinkedIn.

Requirements:

->Fetch jobs from API.
->Support search by title.
->Support filtering by location.
->Support sorting by newest/salary.
->Show loading spinner.
->Show error state.
->Allow saving a job.
->Saved state should immediately reflect in UI.
->UI design team frequently changes layouts.


Todos-->>

components/ui -->input , dropdown , range , spinner, button
components/common -->SearchBox , error
hooks --> useOptimistic
src/lib/api-->
src/lib/api-->

