import cx from 'clsx';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { registerUser } from '../../services/auth.service';
import { login } from '../../state/authSlice';
import { useAppDispatch } from '../../state/hooks';
import { RegisterUser } from '../../types/auth';
import { saveToLocalStoage } from '../../utils/localStorage';

type registerUserFormType = Omit<RegisterUser, 'userRole'>;

const SignupPage = () => {
  const [userType, setUserType] = useState<'recruiter' | 'candidate'>('recruiter');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<registerUserFormType>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<registerUserFormType> = async (userInput) => {
    const userRole = userType === 'recruiter' ? 0 : 1;
    if (userType === 'candidate') {
      toast.error('For now only Recruiters can sigup');
      return;
    }

    try {
      const data = await registerUser({ ...userInput, userRole });
      saveToLocalStoage('auth-user', data);
      const { token, ...userData } = data;

      dispatch(login({ user: userData, authorization: token }));
      navigate('../home', { replace: true });
    } catch (e: any) {
      const errors = e.response?.data?.errors;
      if (!errors) toast.error(e.response?.data?.message || 'something went wrong');

      for (const error of errors) {
        const [name, message] = Object.entries(error)[0];
        if (
          (name === 'email' ||
            name === 'name' ||
            name === 'password' ||
            name === 'skills' ||
            name === 'confirmPassword') &&
          typeof message === 'string'
        ) {
          setError(name, { message: message });
        }
      }
    }
  };

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
              type="button"
              className={cx({
                'bg-gray-100 !text-not-dark-blue ring-1 ring-gray-300 hover:bg-gray-300 !transition-colors':
                  userType !== 'recruiter',
              })}>
              Recruiter
            </Button>
            <Button
              onClick={() => setUserType('candidate')}
              type="button"
              className={cx({
                'bg-gray-100 !text-not-dark-blue ring-1 ring-gray-300 hover:bg-gray-300 !transition-colors':
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
              { '!border-red-400': errors.name }
            )}
            placeholder="Enter your full name"
            type="text"
            autoComplete="off"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="inline-block ml-auto text-xs text-red-400 h-0">
              {errors.name.message || 'The field is mandatory.'}
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
              {errors.email.message || 'The field is mandatory.'}
            </span>
          )}

          <div className="flex gap-4 w-full mt-4">
            <div className="flex-1">
              <label htmlFor="password" className="text-sm mb-1">
                Password
              </label>
              <input
                type="password"
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
                  {errors.password.message || 'The field is mandatory.'}
                </span>
              )}
            </div>

            <div className="flex-1">
              <label htmlFor="confirm-password" className="text-sm mb-1">
                confirm password
              </label>
              <input
                type="password"
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
                  {errors.confirmPassword.message || 'The field is mandatory.'}
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
            {...register('skills', { required: false })}
          />

          <Button type="submit" className="self-center mt-6 !px-8 rounded">
            Signup
          </Button>

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
