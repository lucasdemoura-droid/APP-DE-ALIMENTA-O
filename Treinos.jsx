import React, { useState, useEffect } from 'react';
import './Treinos.css';
import CalendarioTreinos from './CalendarioTreinos';

const Treinos = ({ perfil, cores }) => {
  const [treinos, setTreinos] = useState([]);
  const [dataAtual, setDataAtual] = useState(new Date());
  const [modalAberto, setModalAberto] = useState(false);
  const [visualizacao, setVisualizacao] = useState('dia');
  const [treinoEditando, setTreinoEditando] = useState(null);
  const [tipoTreino, setTipoTreino] = useState('corrida');
  const [distancia, setDistancia] = useState('');
  const [tempo, setTempo] = useState('');
  const [intensidade, setIntensidade] = useState('moderada');
  const [observacoes, setObservacoes] = useState('');

  const tipos = ['corrida', 'funcional', 'musculação', 'yoga', 'ciclismo', 'natação', 'caminhada'];
  const intensidades = ['leve', 'moderada', 'intensa', 'muito intensa'];

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem(`treinos_${perfil}`) || '[]');
    setTreinos(dados);
  }, [perfil]);

  useEffect(() => {
    localStorage.setItem(`treinos_${perfil}`, JSON.stringify(treinos));
  }, [treinos, perfil]);

  const treinosDoDia = treinos.filter(t => 
    new Date(t.data).toDateString() === dataAtual.toDateString()
  );

  const adicionarTreino = () => {
    if (!tipoTreino) {
      alert('Selecione um tipo de treino');
      return;
    }

    const novoTreino = {
      id: treinoEditando?.id || Date.now(),
      data: dataAtual,
      tipo: tipoTreino,
      distancia: distancia || '---',
      tempo: tempo || '---',
      intensidade,
      observacoes,
      dataCriacao: treinoEditando?.dataCriacao || new Date()
    };

    if (treinoEditando) {
      setTreinos(treinos.map(t => t.id === treinoEditando.id ? novoTreino : t));
      setTreinoEditando(null);
    } else {
      setTreinos([...treinos, novoTreino]);
    }

    limparFormulario();
    setModalAberto(false);
  };

  const limparFormulario = () => {
    setTipoTreino('corrida');
    setDistancia('');
    setTempo('');
    setIntensidade('moderada');
    setObservacoes('');
  };

  const editarTreino = (treino) => {
    setTreinoEditando(treino);
    setTipoTreino(treino.tipo);
    setDistancia(treino.distancia === '---' ? '' : treino.distancia);
    setTempo(treino.tempo === '---' ? '' : treino.tempo);
    setIntensidade(treino.intensidade);
    setObservacoes(treino.observacoes);
    setModalAberto(true);
  };

  const excluirTreino = (id) => {
    setTreinos(treinos.filter(t => t.id !== id));
  };

  const getEmoji = (tipo) => {
    const emojis = {
      corrida: '🏃',
      funcional: '💪',
      musculação: '🏋️',
      yoga: '🧘',
      ciclismo: '🚴',
      natação: '🏊',
      caminhada: '🚶'
    };
    return emojis[tipo] || '🏃';
  };

  const getCorIntensidade = (intensidade) => {
    const cores_int = {
      leve: '#00AA88',
      moderada: '#0066CC',
      intensa: '#FF6B6B',
      'muito intensa': '#9933CC'
    };
    return cores_int[intensidade];
  };

  return (
    <div className="treinos">
      <div className="controles-visualizacao">
        <button
          onClick={() => setVisualizacao('dia')}
          className={`btn-view ${visualizacao === 'dia' ? 'ativo' : ''}`}
          style={{ borderBottomColor: visualizacao === 'dia' ? cores.primaria : 'transparent' }}
        >
          📅 Dia
        </button>
        <button
          onClick={() => setVisualizacao('calendario')}
          className={`btn-view ${visualizacao === 'calendario' ? 'ativo' : ''}`}
          style={{ borderBottomColor: visualizacao === 'calendario' ? cores.primaria : 'transparent' }}
        >
          📆 Calendário
        </button>
        <button
          onClick={() => setVisualizacao('semana')}
          className={`btn-view ${visualizacao === 'semana' ? 'ativo' : ''}`}
          style={{ borderBottomColor: visualizacao === 'semana' ? cores.primaria : 'transparent' }}
        >
          📊 Semana
        </button>
      </div>

      {visualizacao === 'dia' ? (
        <>
          <div className="dashboard-treinos">
            <div className="seletor-data">
              <button onClick={() => setDataAtual(new Date(dataAtual.getTime() - 86400000))}>◀</button>
              <span>{dataAtual.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <button onClick={() => setDataAtual(new Date(dataAtual.getTime() + 86400000))}>▶</button>
            </div>

            <div className="stats-treinos">
              <div className="stat-card" style={{ borderLeftColor: cores.primaria }}>
                <div className="stat-numero">{treinosDoDia.length}</div>
                <div className="stat-label">Treinos Hoje</div>
              </div>
              <div className="stat-card" style={{ borderLeftColor: cores.secundaria }}>
                <div className="stat-numero">
                  {treinosDoDia.reduce((sum, t) => sum + (parseFloat(t.distancia) || 0), 0).toFixed(1)}
                </div>
                <div className="stat-label">km Totais</div>
              </div>
            </div>

            {treinosDoDia.length === 0 ? (
              <p className="msg-vazia">Nenhum treino registrado para hoje</p>
            ) : (
              <div className="lista-treinos">
                {treinosDoDia.map(treino => (
                  <div key={treino.id} className="item-treino">
                    <div className="treino-tipo" style={{ backgroundColor: cores.primaria }}>
                      {getEmoji(treino.tipo)}
                    </div>
                    <div className="treino-info">
                      <h4>{treino.tipo.charAt(0).toUpperCase() + treino.tipo.slice(1)}</h4>
                      <div className="treino-detalhes">
                        {treino.distancia !== '---' && <span>📍 {treino.distancia} km</span>}
                        {treino.tempo !== '---' && <span>⏱️ {treino.tempo}</span>}
                        <span style={{ color: getCorIntensidade(treino.intensidade), fontWeight: 'bold' }}>
                          Intensidade: {treino.intensidade}
                        </span>
                      </div>
                      {treino.observacoes && <p className="observacoes">{treino.observacoes}</p>}
                    </div>
                    <div className="treino-acoes">
                      <button onClick={() => editarTreino(treino)} className="btn-edit">✏️</button>
                      <button onClick={() => excluirTreino(treino.id)} className="btn-delete">🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : visualizacao === 'calendario' ? (
        <CalendarioTreinos 
          treinos={treinos}
          perfil={perfil}
          cores={cores}
          onEditarTreino={editarTreino}
          onExcluirTreino={excluirTreino}
        />
      ) : (
        <div className="view-semana">
          <div className="semana-header">
            <button onClick={() => {
              const novaData = new Date(dataAtual);
              novaData.setDate(novaData.getDate() - 7);
              setDataAtual(novaData);
            }}>◀ Semana Anterior</button>
            <span>Semana de {new Date(dataAtual.getTime() - (dataAtual.getDay() * 86400000)).toLocaleDateString('pt-BR')}</span>
            <button onClick={() => {
              const novaData = new Date(dataAtual);
              novaData.setDate(novaData.getDate() + 7);
              setDataAtual(novaData);
            }}>Próxima Semana ▶</button>
          </div>

          <div className="semana-grid">
            {Array.from({ length: 7 }).map((_, i) => {
              const data = new Date(dataAtual);
              data.setDate(data.getDate() - (data.getDay()) + i);
              const treinosDia = treinos.filter(t => 
                new Date(t.data).toDateString() === data.toDateString()
              );

              return (
                <div key={i} className="dia-semana">
                  <div className="dia-nome">{data.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit' })}</div>
                  {treinosDia.length === 0 ? (
                    <div className="dia-vazio">Sem treino</div>
                  ) : (
                    <div className="dia-treinos">
                      {treinosDia.map(treino => (
                        <div key={treino.id} className="mini-treino" style={{ backgroundColor: cores.primaria, color: 'white' }}>
                          <div>{getEmoji(treino.tipo)}</div>
                          <div style={{ fontSize: '0.75rem' }}>{treino.tipo}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Botão Flutuante */}
      <button 
        className="fab" 
        onClick={() => {
          setTreinoEditando(null);
          limparFormulario();
          setModalAberto(true);
        }}
        style={{ backgroundColor: cores.primaria }}
      >
        +
      </button>

      {/* Modal de Treino */}
      {modalAberto && (
        <div className="modal-overlay" onClick={() => setModalAberto(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ backgroundColor: cores.primaria, color: 'white' }}>
              <h3>{treinoEditando ? '✏️ Editar Treino' : '➕ Novo Treino'}</h3>
              <button className="close-btn" onClick={() => setModalAberto(false)}>✕</button>
            </div>

            <div className="modal-body">
              <label>Tipo de Treino:</label>
              <select value={tipoTreino} onChange={(e) => setTipoTreino(e.target.value)}>
                {tipos.map(tipo => (
                  <option key={tipo} value={tipo}>
                    {getEmoji(tipo)} {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                  </option>
                ))}
              </select>

              <label>Distância (km):</label>
              <input
                type="number"
                value={distancia}
                onChange={(e) => setDistancia(e.target.value)}
                placeholder="Ex: 5.5"
                step="0.1"
              />

              <label>Tempo (HH:MM):</label>
              <input
                type="text"
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
                placeholder="Ex: 00:45"
              />

              <label>Intensidade:</label>
              <select value={intensidade} onChange={(e) => setIntensidade(e.target.value)}>
                {intensidades.map(int => (
                  <option key={int} value={int}>
                    {int.charAt(0).toUpperCase() + int.slice(1)}
                  </option>
                ))}
              </select>

              <label>Observações:</label>
              <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                placeholder="Como se sentiu? Sensações, dores, etc..."
                rows="3"
              />

              <button 
                className="btn btn-primario"
                onClick={adicionarTreino}
                style={{ backgroundColor: cores.primaria, width: '100%' }}
              >
                {treinoEditando ? '✏️ Atualizar Treino' : '➕ Adicionar Treino'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Treinos;
