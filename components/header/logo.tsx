'use client'

import { useRouter } from 'next/navigation';

import Image from 'next/image';

const Logo = () => {
  const router = useRouter()
  return (
    <div className='lg:flex items-center hidden' role='button' onClick={() => 
      router.push('/')
    }>
      <Image
        src='/logo.svg'
        height={40}
        width={40}
        alt='logo'
      />
      <h1 className='font-semibold text-2xl ml-3 text-white '>
        Finance Manager
      </h1>
    </div>
  );
};
export default Logo;
