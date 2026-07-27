import React, { useState, useEffect } from 'react';
import './ModalRefeicao.css';

const ModalRefeicao = ({ onClose, onSave, refeicao, dataInicial }) => {
  const [nome, setNome] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');
  const [calorias, setCalorias] = useState('');
  const [proteina, setProteina] = useState('');
  const [carboidrato, setCarboidrato] = useState('');
  const [gordura, setGordura] = useState('');
  const [data, setData] = useState(dataInicial);

  useEffect(() => {
    if (refeicao) {
      setNome(refeicao.nome);
      setHorario(refeicao.horario || '');
      setDescricao(refeicao.descricao);
      setCalorias(refeicao.calorias);
      setProteina(refeicao.proteina);
      setCarboidrato(refeicao.carboidrato);
      setGordura(refeicao.gordura);
      setData(new Date(refeicao.data));
    }
  }, [refeicao]);

  const handleSave = () => {
    if (!nome || !calorias) {
      alert('Preencha nome e calorias da refeição');
      return;
    }

    onSave({
      nome,
      horario,
      descricao,
      calorias: parseFloat(calorias),
      proteina: parseFloat(proteina) || 0,
      carboidrato: parseFloat(carboidrato) || 0,
      gordura: parseFloat(gordura) || 0,
      data: data.toISOString()
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{refeicao ? '✏️ Editar Refeição' : '➕ Nova Refeição'}</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <label>Data:</label>
          <input
            type="date"
            value={data.toISOString().split('T')[0]}
            onChange={(e) => setData(new Date(e.target.value))}
          />

          <label>Nome da Refeição:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Ovo mexido com pão"
          />

          <label>Horário:</label>
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />

          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Ingredientes e modo de preparo..."
            rows="3"
          />

          <div className="grid-macros">
            <div className="macro-input">
              <label>Calorias *</label>
              <input
                type="number"
                value={calorias}
                onChange={(e) => setCalorias(e.target.value)}
                placeholder="0"
              />
            </div>

            <div className="macro-input">
              <label>Proteína (g)</label>
              <input
                type="number"
                value={proteina}
                onChange={(e) => setProteina(e.target.value)}
                placeholder="0"
              />
            </div>

            <div className="macro-input">
              <label>Carbo (g)</label>
              <input
                type="number"
                value={carboidrato}
                onChange={(e) => setCarboidrato(e.target.value)}
                placeholder="0"
              />
            </div>

            <div className="macro-input">
              <label>Gordura (g)</label>
              <input
                type="number"
                value={gordura}
                onChange={(e) => setGordura(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>

          <button 
            className="btn btn-primario"
            onClick={handleSave}
            style={{ width: '100%' }}
          >
            {refeicao ? '✏️ Atualizar' : '➕ Adicionar Refeição'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRefeicao;
