import cx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';

type inputFormTypes = {
  email: 'string';
  password: 'string';
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputFormTypes>();

  const onSubmit: SubmitHandler<inputFormTypes> = (data) => console.log(data);

  console.log(errors);

  return (
    <div className="min-h-screen flex flex-col bg-light-sky">
      <Header variant="md" className="relative flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ boxShadow: '0px 30px 36px #557DA526' }}
          className="absolute top-1/4 p-6 rounded-xl flex flex-col w-full max-w-sm bg-gray-100 text-not-dark-blue">
          <span className="font-semibold mb-4">Login</span>

          <label htmlFor="email" className="text-sm mb-1">
            Email Address
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
            <span className="text-xs text-red-400 h-0">can&apos;t be empty</span>
          )}

          <div className="w-full flex justify-between mt-5">
            <label htmlFor="password" className="text-sm mb-1">
              Password
            </label>
            <Link to="/forgot-password" className="text-sm text-primary-sky">
              Forgot your password
            </Link>
          </div>
          <input
            type="text"
            placeholder="Enter your password"
            className={cx(
              'outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
              { '!border-red-400': errors.password }
            )}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-xs text-red-400 h-0">can&apos;t be empty</span>
          )}

          <Button className="self-center mt-6 !px-8">Login</Button>

          <div className="mt-6 text-center text-sm">
            New to MyJobs?
            <Link to="/signup" className="text-primary-sky">
              Create an account
            </Link>
          </div>
        </form>
      </Header>
    </div>
  );
};

export default LoginPage;
