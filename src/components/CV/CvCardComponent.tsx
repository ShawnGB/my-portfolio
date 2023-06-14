import { WorkingExperience } from '../../Models';

type IProps = {
  experience: WorkingExperience;
};

export default function CvCardComponent({ experience }: IProps) {
  return (
    <div>
      <div>{experience.span}</div>
      <div>{experience.conmpany}</div>
      <div>{experience.position}</div>
      <div>{experience.description}</div>
    </div>
  );
}
