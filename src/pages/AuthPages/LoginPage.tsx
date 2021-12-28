import { SubmitHandler, useForm } from 'react-hook-form';

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
          className="absolute -bottom-2/3 p-6 rounded-xl flex flex-col w-full max-w-sm bg-gray-100 text-not-dark-blue">
          <span className="font-semibold mb-4">Login</span>

          <label htmlFor="email" className="text-sm mb-1">
            Email Address
          </label>
          <input
            className="mb-5 outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky"
            placeholder="Enter your email"
            type="text"
            autoComplete="off"
            {...register('email', { required: true })}
          />

          <div className="w-full flex justify-between">
            <label htmlFor="password" className="text-sm mb-1">
              Password
            </label>
            <span className="text-sm text-primary-sky">Forgot your password</span>
          </div>
          <input
            type="text"
            placeholder="Enter your password"
            className="outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky"
            {...register('password', { required: true })}
          />

          <button className="bg-primary-sky self-center text-white text-sm mt-6 px-8 py-1 rounded hover:bg-primary-sky/80 transition-all">
            Login
          </button>

          <div className="mt-6 text-center text-sm">
            New to MyJobs?<span className="text-primary-sky">Create an account</span>
          </div>
        </form>
      </Header>
    </div>
  );
};

export default LoginPage;
