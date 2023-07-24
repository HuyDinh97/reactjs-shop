import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import ShopListContent from 'components/ShopListContent/ShopListContent';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPopularProduct } from 'store/selectors/common';

function ShopList() {
  const { id: idCategory } = useParams();
  const popularProducts = useGetPopularProduct();
  const productFilterDefault =
    idCategory === 'all'
      ? popularProducts
      : popularProducts?.filter((prod) =>
          prod.category.toString() === idCategory
            ? prod.category.toString() === idCategory
            : prod.color.toString() === idCategory
        );
  return (
    <div>
      <SearchBar />
      <PageTitle pageTitle="Shop list" pageLink="Shop List" />
      <ShopListContent productTo={productFilterDefault} />
    </div>
  );
}

export default ShopList;
