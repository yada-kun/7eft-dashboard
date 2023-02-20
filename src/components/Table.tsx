const Table = () => {
  return (
    <div className="w-[40%]">
      <div className="bg-gray-400 p-6">
        <h1>Recent Orders</h1>
      </div>
      <div className="p-6 ">
        <ul>
          <li className="flex place-content-between py-2 mb-4 border-b-2">
            <div>image</div>
            <div>Iphone 20 Max</div>
            <div>$300.00</div>
          </li>
          <li className="flex place-content-between py-2 mb-4 border-b-2">
            <div>image</div>
            <div>Iphone 20 Max</div>
            <div>$300.00</div>
          </li>
          <li className="flex place-content-between py-2 mb-4 border-b-2">
            <div>image</div>
            <div>Iphone 20 Max</div>
            <div>$300.00</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Table;
