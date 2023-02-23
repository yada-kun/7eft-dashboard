import { FaUserCircle, FaBell, FaSearch } from 'react-icons/fa';

import Cards from 'components/Cards';

const Index = () => {
  return (
    <div className="p-4">
      <div className="flex items-center h-20 place-content-between cursor-pointer">
        <div className="flex items-center gap-6 text-2xl text-gray-500">
          <FaSearch />
          Type to Search
        </div>
        <div className="flex gap-4 text-4xl">
          <div>
            <FaBell />
          </div>
          <div>
            <FaUserCircle />
          </div>
        </div>
      </div>

      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Index;
