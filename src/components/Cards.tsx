import { FaBoxOpen, FaShoppingCart, FaUser } from 'react-icons/fa';
import Card from './Card';
import { Color as CardColor } from './Card';

const Cards = () => {
  return (
    <div className="h-100 flex flex-col gap-4 py-16 lg:flex-row">
      <Card
        color={CardColor.blue}
        title="Products"
        Icon={<FaBoxOpen />}
        value={20}
        text="20% higher than before"
      />
      <Card
        color={CardColor.green}
        title="Orders"
        Icon={<FaShoppingCart />}
        value={500}
        text="20% higher than before"
      />
      <Card
        color={CardColor.red}
        title="Users"
        Icon={<FaUser />}
        value={3}
        text="3 users created"
      />
    </div>
  );
};

export default Cards;
