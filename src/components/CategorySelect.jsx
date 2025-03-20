import { useCategories } from "../hooks/useFetchJoke";

const CategorySelect = ({ onSelect }) => {
  const categories = useCategories();

  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
    >
      <option value="">Todas</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;