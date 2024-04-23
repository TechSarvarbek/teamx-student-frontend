import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import useStore from '../../store/useStore';

const UserBox = () => {
  const cities = [
    'Andijon',
    'Buxoro',
    'Farg\'ona',
    'Jizzax',
    'Xorazm',
    'Namangan',
    'Navoiy',
    'Qashqadaryo',
    'Samarqand',
    'Sirdaryo',
    'Surxondaryo',
    'Toshkent',
    'Xorazm'
  ];

  const { getUsers, page } = useStore(); // Zustand kutubxonasidan getUsers ni olish
  const handleSelectChange = (value) => {
    console.log(value);
    getUsers(1, value)
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    getUsers(1, null, e.target.value)
  }

  return (
    <div className="bg-purple-900 p-4 rounded-t-lg flex flex-col items-center md:flex-row md:justify-between">
      <h3 className="text-white text-2xl font-bold mb-2">O‘quvchilar ro‘yxati</h3>
      <div className="flex flex-col items-center md:flex-row gap-4">
        <Select
          className='bg-white focus:outline-none'
          variant="outlined"
          label='Shaharlar'
          onChange={handleSelectChange}
        >
          {cities.map((item, index) => (
            <Option key={index} value={item}>{item}</Option>
          ))}
        </Select>
        <input onChange={handleInputChange} type="text" className="h-10 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
      </div>
    </div>
  );
};

export default UserBox;