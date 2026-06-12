const { VITE_JOB_API_URL  } = import.meta.env;


interface EnvConfigProps {
    jobUrl: string;
}

export const envConfig: EnvConfigProps = {
    jobUrl: VITE_JOB_API_URL,
}