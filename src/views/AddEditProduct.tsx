import { useEffect } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import useProduct from 'hooks/useProduct';
import Input from 'components/Input';

import { Product } from 'types/product';

const AddEditProduct = () => {
  const navigate = useNavigate();
  const {
    id,
    data,
    adding,
    added,
    updating,
    updated,
    error,
    dispatchAddProduct,
    dispatchUpdateProduct,
  } = useProduct();

  const methods = useForm<Product>(),
    {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = methods;

  const { title, description, image, price, category } = data || {};

  const formSubmitHandler: SubmitHandler<Product> = (data: Product) => {
    const { title, description, image, price, category } = data;

    if (!id) {
      const newData: Product = {
        id: crypto.randomUUID(),
        title,
        description,
        image,
        price,
        category,
      };

      dispatchAddProduct(newData);
    } else {
      const newData: Product = {
        id,
        title,
        description,
        image,
        price,
        category,
      };

      dispatchUpdateProduct(id, newData);
    }
  };

  useEffect(() => {
    if (id) {
      reset({
        title,
        description,
        image,
        price,
        category,
      });
    }
  }, [id, reset]);

  useEffect(() => {
    if (added) {
      navigate('/dashboard/products');
      alert('Product added successfully');
    }
  }, [added, navigate]);

  useEffect(() => {
    if (updated) {
      navigate('/dashboard/products');
      alert('Product updated successfully');
    }
  }, [updated, navigate]);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <div className="m-auto py-40 w-1/2">
      <FormProvider {...methods}>
        <form
          className="flex flex-col "
          onSubmit={handleSubmit(formSubmitHandler)}
        >
          <Input name="Title" required minLength={10} />
          <Input name="Image" required />
          <Input name="Category" required />
          <Input name="Price" type="number" required />
          <Input name="Description" required />

          {/* 
          {errors.image && <p className="text-red-500">Image is required</p>} 
           <Input
            value={category}
            type="text"
            {...register('category', { required: true, minLength: 5 })}
           />
          */}

          {!id ? (
            <button
              type="submit"
              className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default AddEditProduct;
