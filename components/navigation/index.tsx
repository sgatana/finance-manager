'use client';
import { useMedia } from 'react-use';

import { navLinks } from './nav-links';
import { usePathname, useRouter } from 'next/navigation';
import NavButton from './nav-button';
import { SheetContent, Sheet, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMedia('(max-width: 768px)', false);
  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };
  if (isMobile) {
    return (
      <Sheet open={isOpen}>
        <SheetTrigger>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setIsOpen(true)}
            className='font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-transparent focus-visible:ring-offset-0 outline-none text-white focus:bg-white/30 transition'
          >
            <Menu className='size-4' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='flex flex-col gap-y-2 pt-6'>
            {navLinks.map(({ href, name }) => (
              <Button
                key={href}
                variant={pathname === href ? 'secondary' : 'ghost'}
                onClick={() => onClick(href)}
                className='w-full justify-start'
              >
                {name}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className='hidden lg:flex gap-x-2 items-center overflow-x-auto'>
      {navLinks.map(({ href, name }) => (
        <NavButton
          href={href}
          label={name}
          isActive={pathname === href}
          key={name}
        />
      ))}
    </nav>
  );
};
export default HeaderNav;
