function Contato() {
  return (
    <section
      id="contato"
      className="p-8 max-w-4xl mx-auto mt-12"
    >
      <div className="mt-8 text-center mr-[5%] ml-[5%]">
        <p className="text-lg font-medium mb-4 text transition duration-500 ease">
          Fale comigo:
        </p>

        <p className="text-xl font-bold mb-6 text2 transition duration-500 ease">
          joaolucasalvesdantas5@gmail.com
        </p>

        <div className="mt-6">
          <p className="text-lg text transition duration-500 ease">Ou</p>

          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.facebook.com/share/18VfbfPzLY/"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110 text-2xl"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/joao_alves_2009?igsh=MXRvbDNuaGw2bG1pbA=="
              target="_blank"
              className="text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-110 text-2xl"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-lucas-alves-dantas-6402a0357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-blue-700 hover:text-blue-800 transition-transform transform hover:scale-110 text-2xl"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Joao-7"
              target="_blank"
              className="text-gray-400 hover:text-gray-500 transition-transform transform hover:scale-110 text-2xl"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
