import { Link } from 'react-router-dom';
import useProducts from 'hooks/useProducts';

const ProductList = () => {
  const { data, fetching, fetched, error } = useProducts();

  const loading = fetching && !fetched,
    loaded = fetched && !fetching;

  return (
    <div>
      {loading && <div>Loading...</div>}
      {((loaded && data.length === 0) || error) && (
        <div>No products available</div>
      )}

      {loaded &&
        data.map(({ id, title, price, image, category }) => (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {title}
                  </th>
                  <td className="px-6 py-4">
                    <img className="w-[50px]" src={image} alt="" />
                  </td>
                  <td className="px-6 py-4">{category}</td>
                  <td className="px-6 py-4">{price}</td>
                  <td className="px-6 py-4 ">
                    <Link
                      className="hover:text-red-400"
                      to={`/dashboard/products/${id}`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
