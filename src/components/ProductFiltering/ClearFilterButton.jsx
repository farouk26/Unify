import { useRouter } from "next/router";
import React from "react";
import { MdFilterListOff } from "react-icons/md";

function ClearFilterButton({ t }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.replace(
          {
            pathname: "/products",
            query: {},
          },
          undefined,
          { scroll: false }
        );
      }}
      className='btn btn-sm rounded-full btn-neutral normal-case font-light tracking-wider'
    >
      <MdFilterListOff />
      {t("productsPage:clearFilter")}
    </button>
  );
}

export default ClearFilterButton;