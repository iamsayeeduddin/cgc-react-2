import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/allProducts", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section class="py-8 antialiased md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Shop by category</h2>

          <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
            See more categories
            <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </a>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((prod) => {
            return (
              <Link
                key={prod._id}
                to={`/products/${prod._id}`}
                class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg
                  class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                  ></path>
                </svg>
                <span class="text-sm font-medium text-gray-900 dark:text-white">{prod.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
