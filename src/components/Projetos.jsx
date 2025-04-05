function Projetos() {
  const projetos = [
    {
      id: 1,
      altura: 320,
      nome: "Jonh Music",
      github: "https://github.com/Joao-7/john-Music.git",
      imagem: "../public/images/print-jonhmusic.png",
      alt: "projeto 1",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      altura: 300,
      nome: "Trabalhando",
      github: "",
      imagem: "",
      alt: "projeto 2",
      tecnologias: [""],
    },
    {
      id: 3,
      altura: 350,
      nome: "Trabalhando",
      github: "",
      imagem: "",
      alt: "projeto 3",
      tecnologias: [""],
    },
    {
      id: 4,
      altura: 280,
      nome: "Trabalhando",
      github: "",
      imagem: "",
      alt: "projeto 4",
      tecnologias: [""],
    },
    {
      id: 5,
      altura: 320,
      nome: "Trabalhando",
      github: "",
      imagem: "",
      alt: "projeto 5",
      tecnologias: [""],
    },
    {
      id: 6,
      altura: 260,
      nome: "Trabalhando",
      github: "",
      imagem: "",
      alt: "projeto 6",
      tecnologias: [""],
    },
  ];

  return (
    <section id="projetos" className="mt-[80px]">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-5xl font-semibold mb-[50px] text2 transition duration-300">
          Meus Projetos
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-2 gap-5 max-w-[1000px] mx-auto space-y-5 pb-28">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="relative group bg-stone-500 break-inside-avoid rounded-[15px] overflow-hidden"
            >
              <img
                style={{ height: `${projeto.altura}px` }}
                className="w-full object-cover"
                src={projeto.imagem}
                alt={projeto.alt}
              />
              <div className="absolute projetos inset-0 bg-black bg-opacity-50 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h2 className="text-stone-300 text-3xl font-semibold">
                    {projeto.nome}
                  </h2>
                  <a
                    className="text-stone-300 hover:text-stone-400 font-semibold"
                    target="_blank"
                    href={projeto.github}
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                </div>
                {projeto.tecnologias && (
                  <div className="flex gap-2 mt-4">
                    {projeto.tecnologias.map((tec, index) => (
                      <div
                        key={index}
                        className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {tec}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
