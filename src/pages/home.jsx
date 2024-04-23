import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import UserBox from '../components/userbox/userbox';
import UserList from '../components/userlist/userlist';
import useStore from '../store/useStore';

export default function Home() {
  const { users, getUsers, page, next } = useStore();
  console.log(page, ' page');

  const goToPreviousPage = () => {
    getUsers(page - 2);
  };

  const goToNextPage = () => {
    getUsers(page);
  };

  return (
    <div className="m-3 lg:m-8 rounded bg-purple-800">
      <UserBox />
      <UserList />

      <div className="md:m-5 lg:m-8 rounded text-center">
        <button onClick={goToPreviousPage} className="mx-5 disabled:text-gray-300" disabled={page === 1}>
          <FaArrowLeft size={15} />
        </button>
        <button onClick={goToNextPage} className='disabled:text-gray-300' disabled={!next}>
          <FaArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}