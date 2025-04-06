import "../src/index.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";
import Globaltheme from "./style";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Redes from "./components/Redes";
function App() {
  const [darkMode, useDarkMode] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Globaltheme />
      <Router>
        <div className="bgs overflow-hidden transition duration-500 ease min-h-screen w-screen">
          <header className="bg-transparent p-6 flex justify-between">
            <h1 className="title cursor-context-menu ml-[90px] mt-[3%] font-normal text-5xl text transition duration-500 ease">
              JL
            </h1>
            <div className="navg flex items-center mt-[3%] mr-[100px]">
              <nav className="nav flex gap-7">
                <Link
                  className="hover:text-stone-600 text transition duration-500 ease"
                  to="/"
                >
                  Sobre
                </Link>
                <Link
                  className="hover:text-stone-600 text transition duration-500 ease"
                  to="/projetos"
                >
                  Projetos
                </Link>
                <Link
                  className="hover:text-stone-600 text transition duration-500 ease"
                  to="/contato"
                >
                  Contato
                </Link>
              </nav>
              <button
                className="z-10 ml-[50px]"
                onClick={() => useDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <i className="transition duration-500 ease text-3xl cursor-pointer text fas fa-sun"></i>
                ) : (
                  <i className="transition duration-500 ease text-3xl cursor-pointer text fas fa-moon"></i>
                )}
              </button>
              <i
                onClick={() => setMenuAberto(!menuAberto)}
                className="icone-menu ml-[10px] z-10 transition duration-500 ease text-3xl cursor-pointer hidden text fa-solid fa-bars"
              ></i>
            </div>
          </header>
          <div
            className={`menu bgs z-10 fixed w-[180px] h-screen flex left-0 top-0 justify-center items-center border-r-2 p-4 transition duration-500 ease ${
              menuAberto ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="flex flex-col gap-8 text-center">
              <Link
                className="hover:text-stone-700 text transition duration-500 ease"
                to="/"
              >
                Sobre
              </Link>
              <Link
                className="hover:text-stone-700 text transition duration-500 ease"
                to="/projetos"
              >
                Projetos
              </Link>
              <Link
                className="hover:text-stone-700 text transition duration-500 ease"
                to="/contato"
              >
                Contato
              </Link>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Redes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
