import { ActionMode } from "../../constants/index";
import "./Navbar.css";

import sacola from "../../assets/icons/sacola.svg";
import logo from "../../assets/icons/picole.png";
import deletar from "../../assets/icons/deletar.png";
import adicionar from "../../assets/icons/adicionar.png";

function Navbar({ createPaleta, updatePaleta, mode, deletePaleta }) {
  return (
    <div className="Home__header Header">
      <div className="row">
        
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            className="Logo__icone"
            alt="Logo El Geladon"
          />
          <span className="Logo__titulo"> El-Geladon</span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__paleta Paleta ${
              mode === ActionMode.ATUALIZAR && "Paleta--ativa"
            }`}
            onClick={() => updatePaleta()}
          >
            <img
              src={logo}
              width="40px"
              className="Paleta__icone"
              alt="Editar Paleta"
            />
          </button>

          <button
            type="button"
            className={`Opcoes__paleta Paleta ${
              mode === ActionMode.DELETAR && "Paleta--deletar"
            }`}
            onClick={() => deletePaleta()}
          >
            <img
              src={deletar}
              width="35px"
              className="Paleta__icone"
              alt="Deletar paleta"
            />
          </button>

          <button
            type="button"
            className="Opcoes__paleta Paleta"
            onClick={() => createPaleta()}
          >
            <img
              src={adicionar}
              width="40px"
              className="Paleta__icone"
              alt="Adicionar Paleta"
            />
          </button>

          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
