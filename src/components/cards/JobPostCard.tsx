import { LocationIcon } from '../../assets/icons';
import { jobType } from '../../types/jobs';
import { truncateString } from '../../utils/misc';

type propTypes = jobType & {
  onViewApplication: () => void;
};

const JobPostCard = (props: propTypes) => {
  const { title, location, description, onViewApplication } = props;

  return (
    <div className="py-3 px-3 flex w-full flex-col max-w-[270px] bg-white shadow-md text-not-dark-blue rounded-md">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-sm mt-1 mb-2 max-h-14 break-all">
        {truncateString(description, 100)}
      </p>
      <div className="w-full flex gap-4 justify-between mt-auto self-baseline">
        <div className="flex items-center gap-1">
          <LocationIcon className="h-4 w-4 text-primary-sky" />
          <span className="capitalize text-bas">{truncateString(location, 8)}</span>
        </div>
        <button
          onClick={onViewApplication}
          className="text-sm bg-sky-200 px-2 py-1 rounded hover:bg-sky-300 transition-all">
          view applications
        </button>
      </div>
    </div>
  );
};

export default JobPostCard;
