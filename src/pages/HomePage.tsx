import clsx from 'clsx';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { ChevronLeft, ChevronRight, PencilNoteIcon } from '../assets/icons';
import ApplicationModal from '../components/ApplicatIonsModal';
import Button from '../components/Button';
import JobPostCard from '../components/cards/JobPostCard';
import Header from '../components/Header';
import { getJobsByUser } from '../services/jobs.service';
import { jobType } from '../types/jobs';
import { getTotalPage } from '../utils/misc';

const HomePage = () => {
  const [jobs, setJobs] = useState<jobType[]>();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currPage: 1,
    total: 1,
    limit: 1,
    totalPage: 1,
  });
  const [modalState, setModalState] = useState({ isOpen: false, activeJobId: '' });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const { data, meta } = await getJobsByUser(pagination.currPage);
        if (data.length === 0) {
          setJobs([]);
          setLoading(false);
          return;
        }
        setPagination({
          ...pagination,
          total: meta.count,
          limit: meta.limit,
          totalPage: getTotalPage(meta.count, meta.limit),
        });
        setJobs(data);
        setLoading(false);
      } catch (e: any) {
        toast.error(e.response?.data.message || 'something went wrong');
      }
    };

    fetchJobs();
  }, [pagination.currPage]);

  return (
    <div className="relative min-h-screen overflow-auto flex flex-col items-center bg-light-sky">
      <Header variant="sm" className="relative">
        <h1 className="mt-4 text-xl">Jobs posted by you</h1>
      </Header>
      <section className="absolute w-full max-w-4xl mx-auto top-32 mb-10 flex flex-col gap-5">
        {!loading && jobs && (
          <div className="flex flex-wrap gap-4 mt-4">
            {jobs.map((job) => (
              <JobPostCard
                key={job.id}
                {...job}
                onViewApplication={() =>
                  setModalState({ isOpen: true, activeJobId: job.id })
                }
              />
            ))}
          </div>
        )}

        {!loading && jobs && jobs.length > 0 && (
          <div className="flex self-baseline mx-auto gap-2 mb-8 text-sm items-center">
            <span
              onClick={() => {
                if (pagination.currPage > 1) {
                  setPagination((p) => ({ ...p, currPage: p.currPage - 1 }));
                }
              }}
              className={clsx('border-2 border-gray-400/50 rounded-md cursor-pointer', {
                '!cursor-not-allowed opacity-50': pagination.currPage === 1,
              })}>
              <ChevronLeft className="h-5 w-5" />
            </span>
            <span className="h-6 w-6 flex items-center justify-center text-center cursor-pointer bg-sky-300/70 rounded">
              {pagination.currPage}
            </span>
            <span
              onClick={() => {
                if (pagination.currPage < pagination.totalPage) {
                  setPagination((p) => ({ ...p, currPage: p.currPage + 1 }));
                }
              }}
              className={clsx('border-2 border-gray-400/50 rounded-md cursor-pointer', {
                ' !cursor-not-allowed opacity-50':
                  pagination.currPage === pagination.totalPage,
              })}>
              <ChevronRight className="h-5 w-5" />
            </span>
          </div>
        )}
      </section>

      <ApplicationModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((s) => ({ ...s, isOpen: false }))}
        jobId={modalState.activeJobId}
      />

      <div className="flex-1 min-h-full flex items-center justify-center">
        {!loading && (!jobs || jobs.length === 0) && (
          <div className="flex flex-col  items-center">
            <PencilNoteIcon className="h-16 w-16 mb-5 text-gray-500" />
            <span className="text-gray-500">Your posted jobs will show here</span>
            <Button className="w-max mt-6 px-4 py-2">
              <Link to="/home/post-job">Post a job</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
