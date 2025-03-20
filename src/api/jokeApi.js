export const fetchCategories = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchJoke = async (category = "") => {
  try {
    const url = category
      ? `https://api.chucknorris.io/jokes/random?category=${category}`
      : "https://api.chucknorris.io/jokes/random";

    const response = await fetch(url);
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Error al obtener el chiste.";
  }
};
