import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useProduct from 'hooks/useProduct';

const ProductDetails = () => {
  const navigate = useNavigate();
  const {
    data,
    fetching,
    fetched,
    error,
    removing,
    removed,
    dispatchRemoveProduct,
  } = useProduct();

  const { id, title, price, image, category, description } = data || {};

  const loading = fetching && !fetched,
    loaded = fetched && !fetching;

  const deleteHandler = () => {
    if (id) {
      dispatchRemoveProduct(id);
    }
  };

  useEffect(() => {
    if (removed) {
      navigate('/dashboard/products');
      alert('Product deleted successfully');
    }
  }, [removed, navigate]);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-14 lg:flex-row lg:mt-40">
      {loading && <div>Loading...</div>}
      {((loaded && !data) || error) && (
        <div className="text-3xl">No product available</div>
      )}

      {loaded && (
        <>
          <div className="border-2 rounded-sm border-gray-300 bg-[#232B35] border-solid w-[350px] p-4 ">
            <div></div>
            <img src={image} alt="image" />
          </div>
          <div className="relative text-xl w-[350px]  text-center">
            <p className="text-3xl">{title}</p>
            <p className="">{category}</p>
            <p>{price}</p>
            <p>{description}</p>
            <div className="flex flex-row gap-10 justify-center mt-10">
              <Link to={`/dashboard/products/${id}/edit`}>
                <button
                  type="button"
                  className=" text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Edit
                </button>
              </Link>
              <button
                type="button"
                className=" text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={deleteHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
