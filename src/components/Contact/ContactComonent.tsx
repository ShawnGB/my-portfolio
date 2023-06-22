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

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-8 m-auto w-11/12 md:w-1/2 shadow-lg flex flex-col items-center'
        style={{ maxWidth: '500px' }}
      >
        <label htmlFor='firstName' className='text-lg text-primary-700 mb-2'>
          <p>First Name</p>
          <input
            type='text'
            {...register('firstName', { required: true })}
            className='block w-full py-2 px-4 bg-background border border-accent-200 rounded-sm shadow-sm focus:outline-none focus:border-accent-700'
          />
        </label>
        {errors.firstName && (
          <p className='text-red-500 text-sm mb-2'>First Name is required.</p>
        )}

        <label htmlFor='lastName' className='text-lg text-primary-700 mb-2'>
          <p>Last Name</p>
          <input
            type='text'
            {...register('lastName', { required: true })}
            className='block w-full py-2 px-4 bg-background border border-accent-200 rounded-sm shadow-sm focus:outline-none focus:border-accent-700'
          />
        </label>
        {errors.lastName && (
          <p className='text-red-500 text-sm mb-2'>Last Name is required.</p>
        )}

        <label htmlFor='company' className='text-lg text-primary-700 mb-2'>
          <p>Company:</p>
          <input
            type='text'
            {...register('company')}
            className='block w-full py-2 px-4 bg-background border border-accent-200 rounded-sm shadow-sm focus:outline-none focus:border-accent-700'
          />
        </label>

        <label htmlFor='email' className='text-lg text-primary-700 mb-2'>
          <p>Email:</p>
          <input
            type='text'
            {...register('email', { required: true })}
            className='block w-full py-2 px-4 bg-background border border-accent-200 rounded-sm shadow-sm focus:outline-none focus:border-accent-700'
          />
        </label>
        {errors.email && (
          <p className='text-red-500 text-sm mb-2'>Email is required.</p>
        )}

        <div className='text-lg text-primary-700 mb-2'>
          <label htmlFor='role' className='block'>
            <p>Select Role:</p>
            <select
              {...register('role', { required: true })}
              className='block w-full py-2 px-4 bg-background border border-accent-200 rounded-sm shadow-sm focus:outline-none focus:border-accent-700'
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
          Message:
          <textarea
            {...register('message', { required: true })}
            className='block w-full py-2 px-4 bg-background border border-accent-200 rounded-sm shadow-sm focus:outline-none focus:border-accent-700'
            rows={4}
          ></textarea>
        </label>
        {errors.message && (
          <p className='text-red-500 text-sm mb-2'>Message is required.</p>
        )}

        <button
          type='submit'
          className='bg-accent-500 text-white font-semibold py-2 px-4 mt-4 rounded-sm shadow-md hover:bg-accent-700 focus:outline-none focus:bg-accent-700'
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
