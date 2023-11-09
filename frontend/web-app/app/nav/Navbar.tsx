import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';
import Search from './Search';
import Logo from './Logo';
import LoginButton from './LoginButton';
import { getCurrentUser } from '../actions/authAuctions';
import UserActions from './UserAuctions';

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header
      className='
      sticky top-0 z-50 flex items-center justify-between bg-white p-5 text-gray-800 shadow-md
    '
    >
      <Logo />
      <Search />
      {user ? (
        <UserActions />
      ) : (
        <LoginButton />
      )}
    </header>
  );
}
