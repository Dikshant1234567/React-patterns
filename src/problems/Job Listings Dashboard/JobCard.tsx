import Button from "../../components/ui/button";
import type { Job } from "../../lib/api/job";

interface JobCardProps {
  job: Job;
  isSaved: boolean;
  onSave: (jobId: string) => void;
}

function formatSalary(min: number, max: number) {
  if (!min && !max) return "Salary not listed";
  if (!max) return `From $${min.toLocaleString()}`;
  return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
}

function JobCard({ job, isSaved, onSave }: JobCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start gap-3">
        {job.company_logo ? (
          <img
            className="h-12 w-12 rounded-lg border object-contain"
            src={job.company_logo}
            alt={`${job.company} logo`}
          />
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-lg font-semibold text-slate-600">
            {job.company.charAt(0)}
          </div>
        )}

        <div className="min-w-0">
          <h2 className="line-clamp-2 font-semibold text-slate-900">{job.position}</h2>
          <p className="truncate text-sm text-slate-600">{job.company}</p>
        </div>
      </div>

      <div className="space-y-1 text-sm text-slate-600">
        <p>{job.location || "Remote"}</p>
        <p>{formatSalary(job.salary_min, job.salary_max)}</p>
        <p>Posted {new Date(job.date).toLocaleDateString()}</p>
      </div>

      <div className="my-4 flex flex-wrap gap-2">
        {job.tags.slice(0, 3).map(tag => (
          <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-2">
        <Button className="flex-1" variant="outline" onClick={() => onSave(job.id)}>
          {isSaved ? "Saved" : "Save"}
        </Button>
        <a
          className="flex h-10 flex-1 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-700"
          href={job.apply_url}
          target="_blank"
          rel="noreferrer"
        >
          Apply
        </a>
      </div>
    </article>
  );
}

export default JobCard;
