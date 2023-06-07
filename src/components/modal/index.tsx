import { IComponentsAbstract } from '../../interfaces';
import Button from '../button';
import './index.css';

interface IModalProps extends IComponentsAbstract {
  isOpen: boolean;
  title?: string;
}

export default function Modal({ isOpen, onClick, children, title }: IModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title && title}</h2>
          <Button className="modal-close" text="X" onClick={onClick} />
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
