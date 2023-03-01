import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../Search_icon.svg';

function Academy() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center bg-white">
        <Link
          to="/Academy/Videos"
          className="flex-1 py-2 text-center bg-orange text-white font-bold rounded-l-lg hover:bg-white hover:text-orange"
        >
          Videos
        </Link>
        <Link
          to="/Academy/Articles"
          className="flex-1 py-2 text-center bg-orange text-white font-bold rounded-r-lg hover:bg-white hover:text-orange"
        >
          Articles
        </Link>
        <div className="relative flex items-center justify-end flex-1 pr-4">
          <input
            type="text"
            className="pl-8 py-2 pr-4 w-full rounded-md border-gray-400 border-2 focus:border-orange focus:outline-none"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <SearchIcon className="absolute left-2" />
        </div>
        
      </div>
      
      <Outlet />
    </div>
  );
}

export default Academy;