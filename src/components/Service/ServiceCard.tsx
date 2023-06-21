type IProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: IProps) {
  return (
    <div className='bg-primary-100 rounded-lg shadow-lg p-6'>
      <h3 className='text-2xl font-bold mb-4 text-primary-700'>{title}</h3>
      <p className='text-gray-700'>{description}</p>
    </div>
  );
}
