import { IComponentsAbstract } from '../../interfaces';

interface IButttonProps extends IComponentsAbstract {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button({ id, text, className, onClick, styles, type }: IButttonProps) {
  return (
    <button id={id} className={className} onClick={onClick} style={styles} type={type}>
      {text}
    </button>
  );
}
