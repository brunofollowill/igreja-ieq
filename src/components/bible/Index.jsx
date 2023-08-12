import React, { useState, useEffect } from "react";
import arc from "./arc.json";
import nvi from "./nvi.json";
import aa from "./aa.json";
import acf from "./acf.json";

function bible({ theme }) {
  const [livros, setLivros] = useState(nvi);
  const [livroAtual, setLivroAtual] = useState("");
  const [capituloAtual, setCapituloAtual] = useState("");
  const [versiculos, setVersiculos] = useState([]);
  const [fontSize, setFontSize] = useState(17);
  const [versaoAtual, setVersaoAtual] = useState("nvi");
  const [versaoSelecionada, setVersaoSelecionada] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setLivroAtual("0");
    setCapituloAtual("1");
  }, []);

  useEffect(() => {
    // carrega os versículos correspondentes ao livro e capítulo selecionados
    if (livroAtual !== "" && capituloAtual !== "") {
      const versiculosLivro = livros[livroAtual].capitulos[capituloAtual - 1];
      setVersiculos(versiculosLivro);
    }
  }, [livroAtual, capituloAtual, livros]);

  const handleLivroChange = (event) => {
    const livroIndex = event.target.value;
    setLivroAtual(livroIndex);
    setCapituloAtual("1");
  };

  const handleCapituloChange = (event) => {
    const capituloIndex = event.target.value;
    setCapituloAtual(capituloIndex);
  };

  const handleVersaoChange = (event) => {
    const versao = event.target.value;
    setVersaoAtual(versao);
    setVersaoSelecionada(event.target.value);
    if (versao === "nvi") {
      setLivros(nvi);
    } else if (versao === "arc") {
      setLivros(arc);
    } else if (versao === "aa") {
      setLivros(aa);
    } else if (versao === "acf") {
      setLivros(acf);
    }
  };

  const handlePreviousChapter = () => {
    const previousChapterIndex = +capituloAtual - 1;
    if (previousChapterIndex > 0) {
      setCapituloAtual(previousChapterIndex.toString());
    }
  };

  const handleNextChapter = () => {
    const nextChapterIndex = +capituloAtual + 1;
    if (nextChapterIndex <= livros[livroAtual].capitulos.length) {
      setCapituloAtual(nextChapterIndex.toString());
      document.documentElement.scrollTop = 0;
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      // Seta para a esquerda
      handlePreviousChapter();
    } else if (event.keyCode === 39) {
      // Seta para a direita
      handleNextChapter();
    }
  };

  const handleIncreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };

  const handleDecreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 1);
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`Container-bible ${theme}`}
    >
      <div className="Box-bible">
        <div className="font-buttons">
          <button className="Button-maior" onClick={handleIncreaseFontSize}>
            A
          </button>
          <button className="Button-menor" onClick={handleDecreaseFontSize}>
            A
          </button>
        </div>

        <div className={`select ${theme}`}>
          <button className="buttonVersion" onClick={toggleMenu}>
            {versaoAtual}
          </button>

          <div className={`containerVersion ${isOpen ? "open" : ""}`}>
            <button onClick={closeMenu}>X</button>

            <div onClick={closeMenu}>
              <button
                onClick={() => handleVersaoChange({ target: { value: "arc" } })}
              >
                ARC - Almeida Revista e Corrigida
              </button>
              <button
                onClick={() => handleVersaoChange({ target: { value: "nvi" } })}
              >
                NVI - Nova Versão Internacional
              </button>
              <button
                onClick={() => handleVersaoChange({ target: { value: "acf" } })}
              >
                ACF- Almeida Corrigida Fiel
              </button>
              <button
                onClick={() => handleVersaoChange({ target: { value: "aa" } })}
              >
                AA - Almeida Revisada Imprensa Bíblica
              </button>
            </div>
          </div>

          <select
            className="Select-book"
            id="livro-select"
            value={livroAtual}
            onChange={handleLivroChange}
          >
            {livros.map((livro, index) => (
              <option key={livro.id} value={index}>
                {livro.nome}
              </option>
            ))}

            <option value="" hidden />
          </select>

          {livroAtual !== "" && (
            <select
              className="Select-chapter"
              id="capitulo-select"
              value={capituloAtual}
              onChange={handleCapituloChange}
            >
              {livros[livroAtual].capitulos.map((capitulo, index) => (
                <option key={index} value={index + 1}>
                  Capítulo {index + 1}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="Container-bible">
          {versiculos.map((versiculo, index) => (
            <p
              className="Verse-bible"
              style={{ fontSize: `${fontSize}px` }}
              key={index}
            >
              <sup style={{ fontSize: "0.8em" }}>{index + 1}</sup> {versiculo}
            </p>
          ))}
        </div>

        {versiculos.length > 0 && (
          <div className="Container-button">
            <button className="Button-left" onClick={handlePreviousChapter}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="Button-right" onClick={handleNextChapter}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default bible;
