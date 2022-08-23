import "./PaletaLista.css";
import { useState, useEffect } from "react"; //importando o usestate
import PaletaListaItem from "../PaletaListaItem/PaletaListaItem";
import { PaletaService } from "../../services/PaletaService";
import PaletaDetalhesModal from "../PaletaDetalhesModal/PaletaDetalhesModal";

function PaletaLista({ paletaCriada, mode }) {
  const [paletas, setPaletas] = useState([]);
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
  const [paletaModal, setPaletaModal] = useState(false);
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };

  const getPaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId);
    setPaletaModal(response);
  };

  const adicionaPaletaNaLista = (paleta) => {
    const lista = [...paletas, paleta];
    setPaletas(lista);
  };

  useEffect(() => {
    getLista();
  }, []);

  useEffect(() => {
    if (paletaCriada) adicionaPaletaNaLista(paletaCriada);
  }, [paletaCriada]);

  // possue dois parametros a 1° a condição e 2° a index da banda selecionada
  //se o canRender for true ele renderiza o span senao não

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
          mode={mode}
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
          clickItem={(paletaId) => getPaletaById(paletaId)}
        />
      ))}
      {paletaModal && (
        <PaletaDetalhesModal
          paleta={paletaModal}
          closeModal={() => setPaletaModal(false)}
        />
      )}
    </div>
  );
}

export default PaletaLista;