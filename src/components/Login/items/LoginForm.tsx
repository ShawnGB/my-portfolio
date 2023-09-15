import axios from 'axios';
import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';

type FormValues = {
  email: string;
  password: string;
};

const inputStyle =
  'block w-full p-2 bg-background dark:bg-darkMode-background border-b-2 border-primary-200 dark:border-darkMode-primary-200 focus:outline-none focus:border-accent-500 dark:focus:border-darkMode-accent-500';

const labelStyle = 'text-lg text-primary-700  mb-2';

export default function LoginForm() {
  // const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data: FormValues) => {
    const result = await axios.post('http://localhost:8080/auth/login', {
      email: 'god.shawn@gmail.com',
      password: '4556',
    });
    return result;
  });

  return (
    <form
      onSubmit={onSubmit}
      className='shadow-lg border border-primary-50 dark:border-darkMode-primary-50 md:max-w-2/4 p-16 mx-auto flex flex-col gap-y-4'
      style={{ maxWidth: '500px' }}
    >
      <label htmlFor='email' className={labelStyle}>
        <input
          className={inputStyle}
          type='email'
          {...register('email', { required: true })}
        />
      </label>

      <label htmlFor='password' className={labelStyle}>
        <input
          className={inputStyle}
          type='password'
          {...register('password', { required: true })}
        />
      </label>

      <button
        className='bg-primary-700 hover:bg-primary-600 text-background hover:text-primary-700 font-bold py-2 px-4 rounded-full'
        type='submit'
      >
        Login
      </button>
    </form>
  );
}

//   placeholder={
//     errors.firstName
//       ? t('contact.form.required.firstName')
//       : t('contact.form.placeholder.firstName')
//   }
