import { useState, useEffect } from "react";
import { fetchCategories } from "../api/jokeApi";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  return categories;
};

