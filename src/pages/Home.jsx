import JokeCard from "../components/JokeCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 
    bg-gradient-to-br from-blue-50 via-white to-purple-50 
    dark:from-gray-900 dark:via-gray-800 dark:to-blue-900
    animate-gradient-x">
      <div className="w-full max-w-md transform transition-all duration-1000 animate-float">
        <JokeCard />
      </div>
    </main>
  );
}