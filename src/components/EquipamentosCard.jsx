import '../styles/visual.css';

const EquipamentosCard = ({ equipamento }) => {

  const classeStatus = {
    "Operando": "status-operando",
    "Manutenção": "status-manutencao",
    "Parado": "status-parado"
  };

  return (
    <div className="card-equipamento">
      <img className="card-imagem"
          src={equipamento.imagem} 
          alt={equipamento.nome} 
          style={{ width: "10%", height: "auto", borderRadius: "6px" ,}} 
        />
      <h3 className="card-titulo">{equipamento.nome}</h3>
      <p className="card-texto">
        Status:{" "}
        <strong className={classeStatus[equipamento.status] || "status-padrao"}>
          {equipamento.status}
        </strong>
      </p>
    </div>
  );
};

export default EquipamentosCard;