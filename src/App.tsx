//Components
import Header from './components/Header/Header'
import MoviesSection from "./components/Movies/MoviesSection";

function App() {

    return (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-700 text-white">
            <Header/>
            <div className="h-full">
                <MoviesSection />
            </div>
        </div>
    )
}

export default App
