import React from 'react';
import ItemCard from '../components/ItemCard';
import { CategoryData } from '../types/coc';

type Props = {
  name: string,
  categoryData: CategoryData[]
}

const CategoryList = ({ name, categoryData }: Props) => {
  return (
    <>
      <p className="mb-4 border-b">{name}</p>
      {categoryData.map((data) => (
        <ItemCard key={data.name} data={data} />
      ))}
    </>
  )
}

export default CategoryList