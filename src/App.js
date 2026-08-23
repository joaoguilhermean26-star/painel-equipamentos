import EquipamentoCard from './components/EquipamentosCard.jsx';
import { equipamentos } from './data/equipamentos';
import './styles/visual.css';

function App() {
  return (
    <div className="container-painel">
     <center> <h1>Painel de Monitoramento de Equipamentos</h1> </center>
      {equipamentos.map(item => (
        <EquipamentoCard key={item.id} equipamento={item} />
      ))}
    </div>
  );
}

export default App;