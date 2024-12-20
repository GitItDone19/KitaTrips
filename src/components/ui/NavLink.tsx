import React from 'react';
import { cn } from '@/utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => (
  <a
    href={href}
    className={cn(
      "text-gray-300 hover:text-white transition-colors duration-300",
      className
    )}
  >
    {children}
  </a>
);

export default NavLink;