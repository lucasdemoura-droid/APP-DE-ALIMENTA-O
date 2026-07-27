import React, { useState, useEffect } from 'react';
import './Alimentacao.css';
import CalendarioAlimentacao from './CalendarioAlimentacao';
import ModalRefeicao from './ModalRefeicao';

const Alimentacao = ({ perfil, cores }) => {
  const [refeicoes, setRefeicoes] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [dataAtual, setDataAtual] = useState(new Date());
  const [refeicaoEditando, setRefeicaoEditando] = useState(null);
  const [visualizacao, setVisualizacao] = useState('dia'); // 'dia' ou 'calendario'

  const metas = {
    lucas: { calorias: 2800, proteina: 180, carboidrato: 350, gordura: 93 },
    caroline: { calorias: 2300, proteina: 150, carboidrato: 280, gordura: 76 }
  };

  const meta = metas[perfil];

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem(`alimentacao_${perfil}`) || '[]');
    setRefeicoes(dados);
  }, [perfil]);

  useEffect(() => {
    localStorage.setItem(`alimentacao_${perfil}`, JSON.stringify(refeicoes));
  }, [refeicoes, perfil]);

  const refeicoesDoDia = refeicoes.filter(r => 
    new Date(r.data).toDateString() === dataAtual.toDateString()
  );

  const totalCalorias = refeicoesDoDia.reduce((sum, r) => sum + (r.calorias || 0), 0);
  const totalProteina = refeicoesDoDia.reduce((sum, r) => sum + (r.proteina || 0), 0);
  const totalCarboidrato = refeicoesDoDia.reduce((sum, r) => sum + (r.carboidrato || 0), 0);
  const totalGordura = refeicoesDoDia.reduce((sum, r) => sum + (r.gordura || 0), 0);

  const adicionarRefeicao = (novaRefeicao) => {
    if (refeicaoEditando) {
      const atualizado = refeicoes.map(r => r.id === refeicaoEditando.id ? { ...novaRefeicao, id: r.id } : r);
      setRefeicoes(atualizado);
      setRefeicaoEditando(null);
    } else {
      setRefeicoes([...refeicoes, { ...novaRefeicao, id: Date.now() }]);
    }
    setModalAberto(false);
  };

  const excluirRefeicao = (id) => {
    setRefeicoes(refeicoes.filter(r => r.id !== id));
  };

  const editarRefeicao = (refeicao) => {
    setRefeicaoEditando(refeicao);
    setModalAberto(true);
  };

  return (
    <div className="alimentacao">
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
      </div>

      {visualizacao === 'dia' ? (
        <>
          {/* Dashboard do Dia */}
          <div className="dashboard">
            <div className="seletor-data">
              <button onClick={() => setDataAtual(new Date(dataAtual.getTime() - 86400000))}>◀</button>
              <span>{dataAtual.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <button onClick={() => setDataAtual(new Date(dataAtual.getTime() + 86400000))}>▶</button>
            </div>

            <div className="cards-macros">
              <div className="card-macro" style={{ borderLeftColor: cores.primaria }}>
                <div className="macro-label">Calorias</div>
                <div className="macro-valor">{totalCalorias}</div>
                <div className="macro-meta">Meta: {meta.calorias}</div>
                <div className="progresso-bar">
                  <div className="progresso-fill" style={{ width: `${Math.min((totalCalorias / meta.calorias) * 100, 100)}%`, backgroundColor: cores.primaria }}></div>
                </div>
              </div>

              <div className="card-macro" style={{ borderLeftColor: cores.secundaria }}>
                <div className="macro-label">Proteína (g)</div>
                <div className="macro-valor">{totalProteina}</div>
                <div className="macro-meta">Meta: {meta.proteina}g</div>
                <div className="progresso-bar">
                  <div className="progresso-fill" style={{ width: `${Math.min((totalProteina / meta.proteina) * 100, 100)}%`, backgroundColor: cores.secundaria }}></div>
                </div>
              </div>

              <div className="card-macro" style={{ borderLeftColor: '#FF6B6B' }}>
                <div className="macro-label">Carboidrato (g)</div>
                <div className="macro-valor">{totalCarboidrato}</div>
                <div className="macro-meta">Meta: {meta.carboidrato}g</div>
                <div className="progresso-bar">
                  <div className="progresso-fill" style={{ width: `${Math.min((totalCarboidrato / meta.carboidrato) * 100, 100)}%`, backgroundColor: '#FF6B6B' }}></div>
                </div>
              </div>

              <div className="card-macro" style={{ borderLeftColor: '#FFD93D' }}>
                <div className="macro-label">Gordura (g)</div>
                <div className="macro-valor">{totalGordura}</div>
                <div className="macro-meta">Meta: {meta.gordura}g</div>
                <div className="progresso-bar">
                  <div className="progresso-fill" style={{ width: `${Math.min((totalGordura / meta.gordura) * 100, 100)}%`, backgroundColor: '#FFD93D' }}></div>
                </div>
              </div>
            </div>

            {/* Refeições do Dia */}
            <div className="secao-refeicoes">
              <h3>Refeições de Hoje</h3>
              {refeicoesDoDia.length === 0 ? (
                <p className="msg-vazia">Nenhuma refeição registrada</p>
              ) : (
                <div className="lista-refeicoes">
                  {refeicoesDoDia.map(ref => (
                    <div key={ref.id} className="item-refeicao">
                      <div className="refeicao-info">
                        <h4>{ref.nome}</h4>
                        <p className="horario">🕐 {ref.horario || 'Sem horário'}</p>
                        <p className="descricao">{ref.descricao}</p>
                        <div className="macros-resumo">
                          <span>🔥 {ref.calorias}kcal</span>
                          <span>🥩 {ref.proteina}g P</span>
                          <span>🍚 {ref.carboidrato}g C</span>
                          <span>🧈 {ref.gordura}g G</span>
                        </div>
                      </div>
                      <div className="refeicao-acoes">
                        <button onClick={() => editarRefeicao(ref)} className="btn-edit">✏️</button>
                        <button onClick={() => excluirRefeicao(ref.id)} className="btn-delete">🗑️</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Botão Flutuante */}
          <button 
            className="fab" 
            onClick={() => { setRefeicaoEditando(null); setModalAberto(true); }}
            style={{ backgroundColor: cores.primaria }}
          >
            +
          </button>

          {modalAberto && (
            <ModalRefeicao 
              onClose={() => { setModalAberto(false); setRefeicaoEditando(null); }}
              onSave={adicionarRefeicao}
              refeicao={refeicaoEditando}
              dataInicial={dataAtual}
            />
          )}
        </>
      ) : (
        <CalendarioAlimentacao 
          refeicoes={refeicoes}
          perfil={perfil}
          cores={cores}
          onAdicionarRefeicao={adicionarRefeicao}
          onEditarRefeicao={editarRefeicao}
          onExcluirRefeicao={excluirRefeicao}
        />
      )}
    </div>
  );
};

export default Alimentacao;
