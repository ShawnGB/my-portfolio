import { useForm } from 'react-hook-form';

export default function ContactComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const inputStyle =
    'block w-full p-2 bg-background border-b-2 border-primary-200 focus:outline-none focus:border-accent-500';
  return (
    <div className='w-full flex flex-col align-middle justify-center items-center p-4'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='shadow-lg border border-primary-50 md:max-w-2/4 p-16 mx-auto flex flex-col gap-y-4'
        style={{ maxWidth: '500px' }}
      >
        <label htmlFor='firstName' className='text-lg text-primary-700 mb-2'>
          <input
            className={inputStyle}
            placeholder={
              errors.firstName ? 'First Name is required.' : 'first Name'
            }
            type='text'
            {...register('firstName', { required: true })}
          />
        </label>

        <label htmlFor='lastName' className='text-lg text-primary-700 mb-2'>
          <input
            placeholder={
              errors.lastName ? 'Last Name is required.' : 'last Name'
            }
            type='text'
            {...register('lastName', { required: true })}
            className={inputStyle}
          />
        </label>

        <label htmlFor='company' className='text-lg text-primary-700 mb-2'>
          <input
            placeholder='compoany'
            type='text'
            {...register('company')}
            className={inputStyle}
          />
        </label>

        <label htmlFor='email' className='text-lg text-primary-700 mb-2'>
          <input
            placeholder={errors.email ? 'email is required.' : 'email'}
            type='text'
            {...register('email', { required: true })}
            className={inputStyle}
          />
        </label>

        <div className='text-lg text-primary-700 mb-2'>
          <label htmlFor='role' className='block'>
            <select
              {...register('role', { required: true })}
              className={inputStyle}
              style={{ appearance: 'none' }}
            >
              <option value='Webdevelopment'>Web Development</option>
              <option value='Product Management'>Product Management</option>
              <option value='Consulting'>Consulting</option>
            </select>
          </label>
        </div>
        {errors.role && (
          <p className='text-red-500 text-sm mb-2'>Please select a role.</p>
        )}

        <label htmlFor='message' className='text-lg text-primary-700 mb-2'>
          <textarea
            placeholder={
              errors.message ? 'a message is requirred' : 'write a message'
            }
            {...register('message', { required: true })}
            className={inputStyle}
            rows={4}
          ></textarea>
        </label>

        <button
          type='submit'
          className='block border border-primary-700 text-primary-700 hover:text-background hover:border-primary-500'
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
