import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import ShopListContent from 'components/ShopListContent/ShopListContent';
import React from 'react';
import { useParams } from 'react-router-dom';
import { categoryChange, colorChange } from 'shared/ulti';
import { useGetPopularProduct } from 'store/selectors/common';

function ShopList() {
  const { id: idCategory } = useParams();
  const popularProducts = useGetPopularProduct();
  const [categoryName] = categoryChange.filter((cate) =>
    cate.name === idCategory ? cate.id : ''
  );
  const [colorName] = colorChange.filter((color) =>
    color.name === idCategory ? color.id : ''
  );
  const productFilterDefault =
    idCategory === 'all'
      ? popularProducts
      : popularProducts?.filter((prod) =>
          prod.category === categoryName?.id
            ? prod.category === categoryName?.id
            : prod.color === colorName?.id
        );

  return (
    <div>
      <SearchBar />
      <PageTitle
        pageTitle={idCategory === 'all' ? 'Shop List' : idCategory}
        pageLink={idCategory === 'all' ? 'Shop List' : idCategory}
      />
      <ShopListContent productTo={productFilterDefault} />
    </div>
  );
}

export default ShopList;
