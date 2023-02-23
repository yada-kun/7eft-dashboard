import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import logo from 'assets/logo.png';
//
import {
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaBars,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const dashboardMenu = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaHome />,
    },
    {
      path: '/dashboard/users',
      name: 'Users',
      icon: <FaUsers />,
    },
    {
      path: '/dashboard/products',
      name: 'Products',
      icon: <FaBoxOpen />,
    },
    {
      path: '/dashboard/orders',
      name: 'Orders',
      icon: <FaShoppingCart />,
    },
  ];
  return (
    <div
      style={{ width: isOpen ? '350px' : '80px' }}
      className="sidebar bg-[#232B35] h-screen text-white w-60 transition-all"
    >
      <div className="flex items-center place-content-between p-4 gap-16 mb-20 cursor-pointer">
        <img
          className="w-14"
          src={logo}
          style={{ display: isOpen ? 'block' : 'none' }}
        />
        {/* <h1
          className="text-2xl "
          style={{
            display: isOpen ? 'block' : 'none',
          }}
        >
          7eft
        </h1> */}
        <div
          style={{ marginLeft: isOpen ? '0px' : '5px' }}
          className="text-4xl"
        >
          <FaBars onClick={toggle} />
        </div>
      </div>
      <div>
        {dashboardMenu.map(({ path, name, icon }, index) => (
          <Link to={path} key={index}>
            <div
              style={{ padding: isOpen ? '20px' : '20px' }}
              className="flex gap-10 p-10  transition-all delay-150 items-center mt-2 hover:bg-white hover:text-black "
            >
              <div className="text-4xl ">{icon}</div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className="link  text-2xl"
              >
                {name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
