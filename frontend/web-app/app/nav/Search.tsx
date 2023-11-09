'use client';

import { useParamsStore } from '@/hooks/useParamsStore';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  const setParams = useParamsStore(state => state.setParams);
  const setSearchValue = useParamsStore(state => state.setSearchValue);
  const searchValue = useParamsStore(state => state.searchValue);

  function onChange(event: any) {
    setSearchValue(event.target.value);
  }

  function search() {
    setParams({ searchTerm: searchValue });
  }

  return (
    <div className='flex w-[50%] items-center rounded-full border-2 py-2 shadow-sm'>
      <input
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') search();
        }}
        value={searchValue}
        onChange={onChange}
        type='text'
        placeholder='Search for cars by make, model or color'
        className='
                flex-grow
                border-transparent
                bg-transparent
                pl-5
                text-sm
                text-gray-600
                focus:border-transparent
                focus:outline-none
                focus:ring-0
            '
      />
      <button onClick={search}>
        <FaSearch
          size={34}
          className='mx-2 cursor-pointer rounded-full bg-red-400 p-2 text-white'
        />
      </button>
    </div>
  );
}
