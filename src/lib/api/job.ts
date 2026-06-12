import { axiosClient } from "../config/axiosClient";

export interface Job {
    id: string;
    position: string;
    company: string;
    company_logo: string;
    date: string;
    location: string;
    salary_min: number;
    salary_max: number;
    tags: string[];
    apply_url: string;
}

export const getAllJobs = async (): Promise<Job[]> => {
    const { data } = await axiosClient.get<unknown[]>("/");

    // RemoteOK puts an API information object before the actual jobs.
    return data.filter((item): item is Job => {
        return typeof item === "object" && item !== null && "id" in item && "position" in item;
    });
}
