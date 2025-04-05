import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div className="flex justify-center items-center mt-[50px] mr-[100px] ml-[30px] mb-[10%]">
      <section className="w-full max-w-[900px]">
        <h2 className="text2 font-semibold mb-6 text-2xl sm:text-3xl lg:text-5xl transition duration-500 ease">
          Meu nome é João Lucas
        </h2>
        <p className="text text-base sm:text-lg leading-relaxed transition duration-500 ease">
          Um{" "}
          <span className="font-semibold text-blue-600 transition duration-500 ease">
            estudante de informática
          </span>{" "}
          apaixonado em desenvolver projetos voltados para o ramo web.
        </p>

        <p className="text text-base sm:text-lg leading-relaxed mt-4 transition duration-500 ease">
          Tenho 16 anos e estou cursando o segundo ano do curso de informática no{" "}
          <a
            href="https://www.ifrn.edu.br/"
            target="_blank"
            className="hover:text-blue-900 cursor-pointer font-semibold text-blue-600 transition duration-500 ease"
          >
            IFRN
          </a>
          , sou um estudante focado, mais ainda quando o assunto é
          desenvolvimento web. Criar sites é definitivamente meu hobby favorito,
          fico horas na frente do computador, codando e testando novas ideias,
          sempre buscando aprimorar minhas habilidades.
        </p>

        <p className="text text-base sm:text-lg leading-relaxed mt-4 transition duration-500 ease">
          Atualmente, dentre as tecnologias{" "}
          <span className="font-semibold text-blue-600 transition duration-500 ease">
            front-end
          </span>{" "}
          com as quais mais tenho contato estão HTML, CSS, JavaScript, React e
          Tailwind CSS.
        </p>

        <p className="text text-base sm:text-lg leading-relaxed mt-4 transition duration-500 ease">
          Neste portfólio, você encontrará alguns dos poucos{" "}
          <Link
            to="/projetos"
            className="hover:text-blue-900 cursor-pointer font-semibold text-blue-600 transition duration-500 ease"
          >
            projetos
          </Link>{" "}
          que consegui desenvolver neste meu pequeno percurso.
        </p>
      </section>
    </div>
  );
}

export default Sobre;
