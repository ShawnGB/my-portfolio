type IProps = {
  title: string;
  description: string;
  index: number;
};

export default function ServiceCard({ title, description, index }: IProps) {
  return (
    <div
      className={`w-full sm:w-1/2 md:w-1/3 my-4 flex flex-col gap-y-4 ${
        index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
      } shadow-lg p-8`}
    >
      <h3 className='text-xl font-semibold mb-4 text-primary-500'>{title}</h3>
      <p className='text-gray-700'>{description}</p>
    </div>
  );
}
