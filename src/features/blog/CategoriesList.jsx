import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../services/apiCategories";
import CategoryItem from "../../ui/CategoryItem";
import * as BiIcons from "react-icons/bi";
import LoadSpinner from "../../ui/LoadSpinner";

function CategoriesList() {
  const {
    isPending,
    isError,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  if (isError) return <p>There was an error: {error.message}</p>;

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
      <ul className="mt-20 md:mt-0">
        <CategoryItem Icon={BiIcons["BiTagAlt"]} name="tags" />
      </ul>
    </>
  );
}

export default CategoriesList;
