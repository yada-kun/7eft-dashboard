import { FaBoxOpen, FaShoppingCart, FaUser } from 'react-icons/fa';
// import Card from './Card';
// import { Color } from './Card';

const Cards = () => {
  return (
    <div className="h-100 flex gap-20 py-16 ">
      {/* //   <Card
    //     color={Color.blue}
    //     title="Products"
    //     Icon={<FaBoxOpen />}
    //     value={20}
    //     text="20% higher than before"
    //   /> */}

      <div className="basis-[33.3%] p-6 flex flex-col gap-8 text-3xl text-white rounded-xl bg-[#20A5F0] ">
        <div className=" ">
          <h1>Products</h1>
          <h1 className="mt-4">20</h1>
        </div>
        <div className="flex place-content-between items-center text-2xl ">
          <div className="text-4xl mt-1">
            <FaBoxOpen />
          </div>
          <div>
            <h1>20% higher than before</h1>
          </div>
        </div>
      </div>
      <div className="basis-[33.3%] p-6 flex flex-col gap-8 text-3xl text-white rounded-xl bg-[#48A85D]">
        <div className=" ">
          <h1>Orders</h1>
          <h1 className="mt-4">500</h1>
        </div>
        <div className="flex place-content-between items-center text-2xl ">
          <div className="text-4xl mt-1">
            <FaShoppingCart />
          </div>
          <div>
            <h1>20% higher than before</h1>
          </div>
        </div>
      </div>
      <div className="basis-[33.3%] p-6 flex flex-col gap-8 text-3xl text-white rounded-xl bg-[#F02D20]">
        <div className=" ">
          <h1>Users</h1>
          <h1 className="mt-4">3</h1>
        </div>
        <div className="flex place-content-between items-center text-2xl ">
          <div className="text-4xl mt-1">
            <FaUser />
          </div>
          <div>
            <h1>3 users created</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
