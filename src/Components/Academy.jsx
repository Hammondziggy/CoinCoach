import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Academy() {
  return (
    <div>
      <div className="flex bg-white">
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
      </div>
      <Outlet />
    </div>
  );
}

export default Academy;