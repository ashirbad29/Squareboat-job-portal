import cx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { resetPassword } from '../../services/auth.service';

type inputFormTypes = {
  newPassword: 'string';
  confirmPassword: 'string';
};

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputFormTypes>();
  const { state: prevState }: any = useLocation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<inputFormTypes> = async (newCreds) => {
    toast.promise(
      resetPassword({
        password: newCreds.newPassword,
        confirmPassword: newCreds.confirmPassword,
        token: prevState.token || '',
      }),
      {
        loading: 'Resetting password...',
        success: () => {
          navigate('../login', { replace: true });
          return 'password reset sucessfull';
        },
        error: (e) => {
          return e.response.data.message;
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-light-sky">
      <Header variant="md" className="relative flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ boxShadow: '0px 30px 36px #557DA526' }}
          className="absolute top-2/4 p-6 rounded-xl flex flex-col w-full max-w-sm bg-gray-100 text-not-dark-blue">
          <span className="font-semibold mb-2">Reset Your Password</span>
          <span className="text-sm mb-3">Enter your new password below.</span>

          <label htmlFor="email" className="text-sm mb-1">
            New password
          </label>
          <input
            className={cx(
              'outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
              { '!border-red-400': errors.newPassword }
            )}
            placeholder="Enter your password"
            type="password"
            autoComplete="off"
            {...register('newPassword', { required: true })}
          />
          {errors.newPassword && (
            <span className="inline-block ml-auto text-xs text-red-400 h-0">
              can&apos;t be empty
            </span>
          )}

          <label htmlFor="email" className="text-sm mb-1 mt-4">
            Confirm new password
          </label>
          <input
            className={cx(
              'outline-none px-2 py-1 text-sm border border-gray-300 rounded bg-transparent focus:border-primary-sky',
              { '!border-red-400': errors.confirmPassword }
            )}
            placeholder="Enter your password"
            type="password"
            autoComplete="off"
            {...register('confirmPassword', { required: true })}
          />
          {errors.confirmPassword && (
            <span className="inline-block ml-auto text-xs text-red-400 h-0">
              can&apos;t be empty
            </span>
          )}

          <Button className="self-center mt-6 !px-8">Reset</Button>
        </form>
      </Header>
    </div>
  );
};

export default ResetPassword;
