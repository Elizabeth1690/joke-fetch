import { useDispatch, useSelector } from "react-redux";
import { fetchJokeRequest } from "../features/jokeSlice";
import CategorySelect from "./CategorySelect";

const JokeCard = () => {
  const dispatch = useDispatch();
  const { joke, status } = useSelector((state) => state.joke);

  const fetchJoke = (category) => {
    dispatch(fetchJokeRequest(category));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6
    animate-fadeIn hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1
    bg-gradient-to-br from-white to-gray-50">
      <h2 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
        Chistes Aleatorios
      </h2>

      <CategorySelect onSelect={fetchJoke} className="mb-4" />

      <div className="my-8 rounded-lg bg-blue-50 p-4 min-h-[120px] flex items-center justify-center
      transform transition-all duration-500 hover:bg-blue-100 border border-blue-100">
        {status === "loading" ? (
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-blue-500 animate-bounce">Cargando...</p>
          </div>
        ) : (
          <p className="text-lg text-center text-gray-700 animate-fadeIn transition-all duration-500">
            {joke}
          </p>
        )}
      </div>

      <button
        onClick={() => fetchJoke("")}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-md 
        hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
        transition-all duration-300 transform hover:scale-105 active:scale-95 
        shadow-md hover:shadow-lg uppercase tracking-wider"
      >
        Nuevo Chiste
      </button>
    </div>
  );
};

export default JokeCard;