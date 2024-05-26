import Logo from '@/components/header/logo';
import HeaderNav from '../navigation';

const Header = () => {
  return (
    <header className='px-4 py-8 bg-slate-100 bg-gradient-to-b from-violet-600 to-violet-500 lg:px-14 pb-36 '>
      <div className='max-w-screen-xl mx-auto'>
        <div className='w-full flex items-center justify-between mb-14'>
          <div className='flex items-center lg:gap-x-16'>
            <Logo />
            <HeaderNav />
          </div>
        </div>
        <div className='space-y-2 mb-4'>
          <h1 className='text-2xl lg:text-3xl text-white'>
            Welcome, Manage your Finances with ease
          </h1>
          <p className='text-sm lg:text-base text-[#fafafa]'>
            This is your financial overview report
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
