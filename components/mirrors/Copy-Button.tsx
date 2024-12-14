'use client';

// Public imports
import { useState } from 'react';

//* Import components
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import toast from 'react-hot-toast';

//* Import services

const Copier = ({ value }: { value: string }) => {
  /* -------------------------------- Hooks -------------------------------- */
  const [isCopied, setIsCopied] = useState(false);

  /* ------------------------------- Function ------------------------------ */
  // Copying the value
  const copyValue = () => {
    window.navigator.clipboard?.writeText(value).catch(() => null);
    setIsCopied(true);
    toast.success('کپی شد');

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Button
      isIconOnly
      onClick={copyValue}
      className='bg-white'
    >
      <Image
        className='transition-all'
        src='/icons/copy-outline.svg'
        alt='Copy icon'
        width={isCopied ? 0 : 25}
        height={25}
      />
      <Image
        className='transition-all'
        src='/icons/tick.svg'
        alt='Copy icon'
        width={isCopied ? 25 : 0}
        height={25}
      />
    </Button>
  );
};

export default Copier;
