import React, { useState } from 'react';
import Articles from './Articles';
import Videos from './Videos';

function Academy() {
  const [activeTab, setActiveTab] = useState('Videos');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="academy-page">
      <div className="flex space-x-2 bg-white rounded-md">
        <button
          className={`py-2 px-4 font-semibold rounded-md ${
            activeTab === 'Videos' ? 'bg-orange-500 text-white' : 'text-orange-500'
          }`}
          onClick={() => handleTabClick('Videos')}
        >
          Videos 
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-md ${
            activeTab === 'Articles' ? 'bg-orange-500 text-white' : 'text-orange-500'
          }`}
          onClick={() => handleTabClick('Articles')}
        >
          Articles
        </button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="content">
        {activeTab === 'Videos' ? <Videos /> : <Articles />}
      </div>
    </div>
  );
}

export default Academy;
