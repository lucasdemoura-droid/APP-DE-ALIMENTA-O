import React, { useState, useEffect } from 'react';
import './Devocional.css';

const Devocional = ({ perfil, cores }) => {
  const [devocionals, setDevocionals] = useState({});
  const [mes, setMes] = useState(new Date());
  const [modalAberto, setModalAberto] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem(`devocional_${perfil}`) || '{}');
    setDevocionals(dados);
  }, [perfil]);

  useEffect(() => {
    localStorage.setItem(`devocional_${perfil}`, JSON.stringify(devocionals));
  }, [devocionals, perfil]);

  const getDiasDoMes = () => {
    const ano = mes.getFullYear();
    const mesNum = mes.getMonth();
    const ultimoDia = new Date(ano, mesNum + 1, 0).getDate();
    const primeiroDia = new Date(ano, mesNum, 1).getDay();

    const dias = [];
    for (let i = 0; i < primeiroDia; i++) {
      dias.push(null);
    }
    for (let i = 1; i <= ultimoDia; i++) {
      dias.push(new Date(ano, mesNum, i));
    }
    return dias;
  };

  const marcarDevocional = (data) => {
    const chave = data.toISOString().split('T')[0];
    setDataModal(data);
    setModalAberto(true);
    setDescricao(devocionals[chave] || '');
  };

  const salvarDevocional = () => {
    const chave = dataModal.toISOString().split('T')[0];
    const novoDevocionals = { ...devocionals, [chave]: descricao };
    setDevocionals(novoDevocionals);
    setModalAberto(false);
    setDescricao('');
  };

  const removerDevocional = (data) => {
    const chave = data.toISOString().split('T')[0];
    const novoDevocionals = { ...devocionals };
    delete novoDevocionals[chave];
    setDevocionals(novoDevocionals);
  };

  const verificarDevocional = (data) => {
    if (!data) return false;
    const chave = data.toISOString().split('T')[0];
    return !!devocionals[chave];
  };

  const dias = getDiasDoMes();
  const hojeChave = new Date().toISOString().split('T')[0];
  const totalDoMes = Object.keys(devocionals).filter(chave => {
    const dataParte = chave.split('-');
    return dataParte[0] === mes.getFullYear().toString() && 
           dataParte[1] === String(mes.getMonth() + 1).padStart(2, '0');
  }).length;

  const diasDoMes = new Date(mes.getFullYear(), mes.getMonth() + 1, 0).getDate();

  return (
    <div className="devocional">
      <div className="devocional-header">
        <button onClick={() => setMes(new Date(mes.getFullYear(), mes.getMonth() - 1))}>◀</button>
        <h2>{mes.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => setMes(new Date(mes.getFullYear(), mes.getMonth() + 1))}>▶</button>
      </div>

      <div className="devocional-stats">
        <div className="stat-card" style={{ borderLeftColor: cores.primaria }}>
          <div className="stat-numero">{totalDoMes}</div>
          <div className="stat-label">Devocionals este mês</div>
          <div className="stat-meta">{Math.round((totalDoMes / diasDoMes) * 100)}% de consistência</div>
        </div>
        <div className="stat-card" style={{ borderLeftColor: cores.secundaria }}>
          <div className="stat-numero">{verificarDevocional(new Date()) ? '✅' : '🔲'}</div>
          <div className="stat-label">Hoje</div>
          <div className="stat-meta">{verificarDevocional(new Date()) ? 'Completo!' : 'Pendente'}</div>
        </div>
      </div>

      <div className="legenda-devocional">
        <div className="legenda-item">
          <div className="legenda-box" style={{ backgroundColor: cores.primaria }}>✅</div>
          <span>Devocional feito</span>
        </div>
        <div className="legenda-item">
          <div className="legenda-box" style={{ backgroundColor: '#e0e0e0' }}>🔲</div>
          <span>Sem devocional</span>
        </div>
      </div>

      <div className="calendario-devocional">
        <div className="dias-semana">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map(dia => (
            <div key={dia} className="header-dia">{dia}</div>
          ))}
        </div>

        <div className="grid-dias">
          {dias.map((data, idx) => {
            const temDevocional = verificarDevocional(data);
            const ehHoje = data && data.toISOString().split('T')[0] === hojeChave;

            return (
              <div
                key={idx}
                className={`dia-box ${temDevocional ? 'completo' : ''} ${ehHoje ? 'hoje' : ''}`}
                style={temDevocional ? { backgroundColor: cores.primaria, color: 'white' } : {}}
                onClick={() => data && marcarDevocional(data)}
              >
                {data && (
                  <>
                    <div className="numero-dia">{data.getDate()}</div>
                    {temDevocional && <div className="check-mark">✅</div>}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className="modal-overlay" onClick={() => setModalAberto(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ backgroundColor: cores.primaria, color: 'white' }}>
              <h3>Devocional - {dataModal?.toLocaleDateString('pt-BR')}</h3>
              <button className="close-btn" onClick={() => setModalAberto(false)}>✕</button>
            </div>

            <div className="modal-body">
              <label>Registro do Devocional:</label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreva seu devocional, versículo lido, reflexão, etc..."
                rows="6"
              />

              <div className="modal-acoes">
                <button 
                  className="btn btn-primario"
                  onClick={salvarDevocional}
                  style={{ backgroundColor: cores.primaria }}
                >
                  ✅ Marcar como Feito
                </button>
                {verificarDevocional(dataModal) && (
                  <button 
                    className="btn btn-secundario"
                    onClick={() => {
                      removerDevocional(dataModal);
                      setModalAberto(false);
                    }}
                  >
                    🗑️ Remover
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Devocional;
