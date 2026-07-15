// components/Modal/Modal.tsx

'use client';

import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();
  
  const back = () => router.back();

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button onClick={back}>Back</button>
      </div>
    </div>
  );
};

export default Modal;
