import { IComponentsAbstract } from '../../interfaces';

interface IInputProps extends IComponentsAbstract {
  value?: string;
}

export default function Input({ value, id, styles, className }: IInputProps) {
  return <input value={value} id={id} style={styles} className={className} />;
}
