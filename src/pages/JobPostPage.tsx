import cx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '../components/Button';
import Header from '../components/Header';
import { postJob } from '../services/jobs.service';

type inputFormTypes = {
  title: string;
  description: string;
  location: string;
};

const JobPostPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputFormTypes>();

  const onSubmit: SubmitHandler<inputFormTypes> = (jobDetails) => {
    toast.promise(postJob(jobDetails), {
      success: () => {
        reset();
        return 'Job posted';
      },
      loading: 'posting your job...',
      error: (e: any) => {
        return e.response.data.message;
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-light-sky">
      <Header variant="md" className="relative flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ boxShadow: '0px 30px 36px #557DA526' }}
          className="absolute top-1/4 p-6 rounded-xl flex flex-col w-full max-w-sm bg-gray-100 text-not-dark-blue">
          <span className="font-semibold mb-3">Post a job</span>

          <label htmlFor="jobTitle" className="text-sm mb-1">
            Job title*
          </label>
          <input
            className={cx(
              'outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
              { '!border-red-400': errors.title }
            )}
            placeholder="Enter job title"
            type="text"
            autoComplete="off"
            {...register('title', { required: true })}
          />

          <label htmlFor="description" className="text-sm mb-1 mt-3">
            Description*
          </label>

          <textarea
            placeholder="Enter job description"
            rows={3}
            className={cx(
              'outline-none resize-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
              { '!border-red-400': errors.description }
            )}
            {...register('description', { required: true })}
          />

          <label htmlFor="location" className="text-sm mb-1 mt-3">
            Location*
          </label>
          <input
            className={cx(
              'outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
              { '!border-red-400': errors.location }
            )}
            placeholder="Enter location"
            type="text"
            autoComplete="off"
            {...register('location', { required: true })}
          />
          {(errors.description || errors.title || errors.location) && (
            <span className="inline-block ml-auto text-xs text-red-400 h-0">
              all fields are mandatory
            </span>
          )}
          <Button className="self-center mt-8 !px-8">Post</Button>
        </form>
      </Header>
    </div>
  );
};

export default JobPostPage;
