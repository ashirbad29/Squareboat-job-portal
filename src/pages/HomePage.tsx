import { useEffect, useState } from 'react';

import Header from '../components/Header';
import { getJobsByUser } from '../services/jobs.service';
import { jobType } from '../types/jobs';

const HomePage = () => {
  const [jobs, setJobs] = useState<jobType[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const { data } = await getJobsByUser();
      setJobs(data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-light-sky">
      <Header variant="sm" className="relative">
        <section className="max-w-3xl  mx-auto">
          <h1 className="mt-4 text-xl">Jobs posted by you</h1>
          {!loading && jobs && (
            <div className="flex flex-wrap gap-4 mt-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="py-3 px-3 bg-white shadow-md text-not-dark-blue rounded-md">
                  <h3 className="text-xl font-medium">{job.title}</h3>
                  <p className="text-sm mt-1">{job.description}</p>
                  <div className="w-full flex gap-4 mt-2 justify-between">
                    <span className="capitalize text-base">{job.location}</span>
                    <button className="text-sm bg-sky-200 px-2 py-1 rounded">
                      view applications
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </Header>
    </div>
  );
};

export default HomePage;
