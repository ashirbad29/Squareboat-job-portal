import React from 'react';

import { candidateType } from '../../types/jobs';
import { truncateString } from '../../utils/misc';

const CandidateCard: React.FC<candidateType> = ({ name, email, skills }) => {
  return (
    <div className="flex flex-col h-max p-2 rounded text-not-dark-blue bg-gray-100 border-[1.5px] border-gray-400/80 w-full max-w-[48%]">
      <div className="flex gap-3">
        <div className="h-10 w-10 rounded-full bg-sky-300/60 flex items-center justify-center">
          {name.charAt(0).toUpperCase() || 'X'}
        </div>
        <div className="flex flex-col justify-between">
          <span className="truncate text-lg font-bold capitalize">{name}</span>
          <span className="truncate text-sm">{truncateString(email, 23)}</span>
        </div>
      </div>
      <div className="mt-2">
        <p className="font-bold text-sm mb-1">Skills</p>
        <p className="text-sm">{truncateString(skills, 50)}</p>
      </div>
    </div>
  );
};

export default CandidateCard;
