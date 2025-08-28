'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { FaSignOutAlt } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { getUserLoginRoutePath } from '@/routes/routes';

export default function PrimaryHeader() {
  const router = useRouter();
  const pathName = usePathname()
  const handleLogout = () => {
    Cookies.remove('authToken'); // remove token
    toast.success('Logged out successfully');
    router.push(getUserLoginRoutePath());
  };

  return (
    <div className="normal_space_form_top flex justify-end pr-5">

      {/* Show logout icon only if user is logged in */}
      {pathName === '/' && (
        <button
          onClick={handleLogout}
          className="cursor-pointer"
          title="Logout"
        >
          <FaSignOutAlt size={24} />
        </button>
      )}
    </div>
  );
}
