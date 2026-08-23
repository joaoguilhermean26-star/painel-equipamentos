import tornoImg from '../imagens/torno.jpg';
import compressorImg from '../imagens/Compressor de Ar.jpg'
import prensaImg from '../imagens/Prensa Hidráulica.jpg'
import roboImg from '../imagens/Robô Soldador.jpg'

export const equipamentos = [
  { id: 1, nome: "Torno CNC", status: "Operando", imagem: tornoImg },
  { id: 2, nome: "Prensa Hidráulica", status: "Manutenção", imagem: prensaImg },
  { id: 3, nome: "Robô Soldador", status: "Parado", imagem: roboImg },
  { id: 4, nome: "Compressor de Ar", status: "Operando", imagem: compressorImg }
];