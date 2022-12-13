import ListMovies from "./components/ListMovies";

const App = () => {
  return (
    <div className="min-h-screen w-full	flex items-center flex-col py-4 sm:py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Movies List</h1>
      <ListMovies />
    </div>
  );
};

export default App;
