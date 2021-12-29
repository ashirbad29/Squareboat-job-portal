import cx from 'clsx';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';

type inputFormTypes = {
  fullName: 'string';
  email: 'string';
  password: 'string';
  confirmPassword: 'string';
  skills: 'string';
};

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputFormTypes>();

  const onSubmit: SubmitHandler<inputFormTypes> = (data) => console.log(data);
  const [userType, setUserType] = useState<'recruiter' | 'candidate'>('recruiter');

  return (
    <div className="min-h-screen flex flex-col bg-light-sky">
      <Header variant="md" className="relative flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ boxShadow: '0px 30px 36px #557DA526' }}
          className="absolute top-8 p-6 rounded-xl flex flex-col w-full max-w-sm bg-gray-100 text-not-dark-blue">
          <span className="font-semibold mb-4">Signup</span>

          <span className="text-sm mb-1">I&apos;m a*</span>
          <div className="flex gap-4 mb-4">
            <Button
              onClick={() => setUserType('recruiter')}
              className={cx({
                'bg-gray-100 text-not-dark-blue ring-1 ring-gray-300 hover:bg-gray-300 !transition-colors':
                  userType !== 'recruiter',
              })}>
              Recruiter
            </Button>
            <Button
              onClick={() => setUserType('candidate')}
              className={cx({
                'bg-gray-100 text-not-dark-blue ring-1 ring-gray-300 hover:bg-gray-300 !transition-colors':
                  userType !== 'candidate',
              })}>
              Candidate
            </Button>
          </div>

          <label htmlFor="full-name" className="text-sm mb-1">
            Full Name*
          </label>
          <input
            className={cx(
              'outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
              { '!border-red-400': errors.fullName }
            )}
            placeholder="Enter your full name"
            type="text"
            autoComplete="off"
            {...register('fullName', { required: true })}
          />
          {errors.fullName && (
            <span className="inline-block ml-auto text-xs text-red-400 h-0">
              The field is mandatory.
            </span>
          )}

          <label htmlFor="email" className="text-sm mb-1 mt-4">
            Email*
          </label>
          <input
            className={cx(
              'outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
              { '!border-red-400': errors.email }
            )}
            placeholder="Enter your email"
            type="text"
            autoComplete="off"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="inline-block ml-auto text-xs text-red-400 h-0">
              The field is mandatory.
            </span>
          )}

          <div className="flex gap-4 w-full mt-4">
            <div className="flex-1">
              <label htmlFor="password" className="text-sm mb-1">
                Password
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                className={cx(
                  'outline-none w-full px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
                  { '!border-red-400': errors.password }
                )}
                {...register('password', { required: true })}
                autoComplete="off"
              />
              {errors.password && (
                <span className="inline-block ml-auto text-xs text-red-400 h-0">
                  The field is mandatory.
                </span>
              )}
            </div>

            <div className="flex-1">
              <label htmlFor="confirm-password" className="text-sm mb-1">
                confirm password
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                className={cx(
                  'outline-none w-full px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
                  { '!border-red-400': errors.confirmPassword }
                )}
                {...register('confirmPassword', { required: true })}
                autoComplete="off"
              />
              {errors.confirmPassword && (
                <span className="inline-block ml-auto text-xs text-red-400 h-0">
                  The field is mandatory.
                </span>
              )}
            </div>
          </div>

          <label htmlFor="email" className="text-sm mb-1 mt-4">
            Skills
          </label>
          <input
            className={cx(
              'outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky'
            )}
            placeholder="Enter comma separated skills"
            type="text"
            autoComplete="off"
            {...register('email', { required: false })}
          />

          <Button className="self-center mt-6 !px-8 rounded">Signup</Button>

          <div className="mt-6 text-center text-sm">
            Have an Account?
            <Link to="/login" className="text-primary-sky">
              Login
            </Link>
          </div>
        </form>
      </Header>
    </div>
  );
};

export default SignupPage;
