import ListMovies from "./components/ListMovies";

const App = () => {
  return (
    <div className="min-h-screen w-full	flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ListMovies />
    </div>
  );
};

export default App;
