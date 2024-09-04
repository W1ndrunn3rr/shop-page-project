import { useState } from "react";
import { Categories, SortOptions } from "./ShopPage";

interface FilterBarProps {
  filter(option: SortOptions, cat: Categories): void;
}

const FilterBar = ({ filter }: FilterBarProps): React.ReactElement => {
  const [sortOption, setSortOption] = useState<SortOptions>("Alphabetical");
  const [category, setCategory] = useState<Categories>("all");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOption = event.target.value as SortOptions;
    setSortOption(newSortOption);
    filter(newSortOption, category!);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = event.target.value as Categories;
    setCategory(newCategory);
    filter(sortOption, newCategory);
  };

  return (
    <div className="ml-20 mr-20">
      <div className="flex space-x-4">
        <div>
          <label htmlFor="sort" className="mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="border rounded p-1"
          >
            <option value="Alphabetical">Alphabetical</option>
            <option value="Ascending">Price Ascending</option>
            <option value="Descending">Price Descending</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="mr-2">
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="border rounded p-1"
          >
            <option value="all">All</option>
            <option value="men's clothing">Man</option>
            <option value="women's clothing">Woman</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewellery</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
