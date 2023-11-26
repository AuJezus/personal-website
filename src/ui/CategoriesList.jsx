import * as BiIcons from "react-icons/bi";
import LoadSpinner from "./LoadSpinner";
import CategoryItem from "./CategoryItem";
import { useCategories } from "../services/apiCategories";

function CategoriesList() {
  const { isPending, error, categories } = useCategories();

  if (error) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="flex h-full items-center justify-center">
        <LoadSpinner />
      </div>
    );

  return (
    <>
      <ul className="flex flex-col gap-20 md:gap-6">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            Icon={BiIcons[category.icon]}
            name={category.id}
          />
        ))}
      </ul>
      <ul className="flex flex-col mt-20 md:mt-0">
        <CategoryItem Icon={BiIcons.BiHash} name="aujezus" />
      </ul>
    </>
  );
}

export default CategoriesList;
