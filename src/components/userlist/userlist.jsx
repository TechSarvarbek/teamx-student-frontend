import React, { useEffect } from 'react';
import useStore from '../../store/useStore';

export default function UserList() {
  const { users, getUsers, loading, error } = useStore();

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <div className='flex justify-center text-white text-lg font-serif'>Loading...</div>;
  }

  if (error) {
    return <div className='flex justify-center text-white text-lg font-serif'>500 | Server error</div>;
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="sm:pl-5 sm:pr-5">
        <div className="pt-3 pb-5">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-200 bg-purple-900">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-bold text-center text-white md:text-lg sm:text-sm">Ism/Familiya</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-bold text-center text-white md:text-lg sm:text-sm">Manzil</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-bold text-center text-white md:text-lg sm:text-sm">Qadam</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-bold text-center text-white md:text-lg sm:text-sm">Statistika</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-gray-100">
                {users.map((user, index) => (
                  <tr key={index} className="bg-gray-200">
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          {/* <img
                            className="rounded-full"
                            src={user.image}
                            width="40"
                            height="40"
                            alt={user.fullname}
                          /> */}
                        </div>
                        <div className="font-medium text-gray-800 text-center">{user.fullname}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center">{user.city}/{user.district}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center  font-medium text-green-500">
                        {user.level}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">{user.level} %</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}