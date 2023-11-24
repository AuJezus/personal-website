import Button from "../../ui/Button";
import useScrollUp from "../../utils/useScrollUp";

function BlogSaveBtn({ saveFn, isPending, children }) {
  const isScrollUp = useScrollUp();

  return (
    <div
      className={`lg:sticky w-full transition-all ${
        isScrollUp ? "top-24" : "top-12"
      }`}
    >
      <Button disabled={isPending} type="primary" click={saveFn}>
        {isPending ? "Saving..." : children}
      </Button>
    </div>
  );
}

export default BlogSaveBtn;
