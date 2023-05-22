import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { category } = useParams();
  return (
    <div>
      <SearchBar />
      <PageTitle pageTitle={category} pageLink={category} />
    </div>
  );
}

export default CategoryPage;
