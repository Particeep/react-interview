const Header = () => (
    <header>
        <nav className="border-gray-200 px-4 py-2.5 bg-gray-800">
            <div className="flex items-center">
                <a href="https://www.particeep.com/fr/" className="flex items-center">
                    <img src="/logo.png" className="h-6 mr-3 sm:h-9" alt="Logo"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Particeep</span>
                </a>
            </div>
        </nav>
    </header>
)

export default Header;