import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { CrossIcon, UsersIcon } from '../assets/icons';
import { getApplications } from '../services/jobs.service';
import { candidateType } from '../types/jobs';
import CandidateCard from './cards/CandidateCard';
import Modal from './Modal';

type modalPropType = {
  isOpen: boolean;
  onClose?: () => void;
  jobId?: string;
};

const ApplicationsModal: React.FC<modalPropType> = ({ isOpen, onClose, jobId }) => {
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState<candidateType[]>();

  const fetchCandidatesApplied = async () => {
    if (!jobId) return;
    try {
      setLoading(true);
      const data = await getApplications(jobId);
      setCandidates(data);
      setLoading(false);
    } catch (e: any) {
      toast.error(e.response.data.message || 'something went wrong');
    }
  };

  useEffect(() => {
    if (jobId) fetchCandidatesApplied();
  }, [jobId]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="pt-3 pb-5 text-dark-blue">
      <div className="flex justify-between mx-3 border-b border-gray-400/40 pb-2">
        <h1 className="font-semibold text-dark-blue">Applications for this job</h1>
        <span
          onClick={onClose}
          className="cursor-pointer p-1 rounded-md hover:bg-slate-300 transition-all">
          <CrossIcon className="h-5 w-5" />
        </span>
      </div>

      <div className="text-sm mt-1 mb-2 mx-3 text-dark-blue">
        {candidates ? candidates.length : 0} applications
      </div>

      <div className="h-[74vh] min-h-[20rem] overflow-y-auto bg-gray-300 mx-3 rounded-lg flex flex-wrap gap-3 p-2">
        {loading && (
          <div className="flex-1 flex items-center justify-center">Loading...</div>
        )}

        {!loading && (!candidates || candidates.length === 0) && (
          <div className="flex-1 flex flex-col gap-4 items-center justify-center">
            <UsersIcon className="h-12 w-12 text-gray-500" />
            <span className="text-not-dark-blue">No applications available!</span>
          </div>
        )}

        {!loading &&
          candidates &&
          candidates.length &&
          candidates.map((candidate) => (
            <CandidateCard key={candidate.id} {...candidate} />
          ))}
      </div>
    </Modal>
  );
};

export default ApplicationsModal;
