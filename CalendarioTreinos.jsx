import React, { useState } from 'react';
import './CalendarioTreinos.css';

const CalendarioTreinos = ({ treinos, cores, onEditarTreino, onExcluirTreino }) => {
  const [mes, setMes] = useState(new Date());

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

  const getTreinosDia = (data) => {
    if (!data) return [];
    return treinos.filter(t => 
      new Date(t.data).toDateString() === data.toDateString()
    );
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

  const dias = getDiasDoMes();

  return (
    <div className="calendario-treinos">
      <div className="calendario-header">
        <button onClick={() => setMes(new Date(mes.getFullYear(), mes.getMonth() - 1))}>◀</button>
        <h2>{mes.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => setMes(new Date(mes.getFullYear(), mes.getMonth() + 1))}>▶</button>
      </div>

      <div className="grid-calendario">
        <div className="header-dias">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map(dia => (
            <div key={dia} className="header-dia">{dia}</div>
          ))}
        </div>

        <div className="dias-grid">
          {dias.map((data, idx) => {
            const treinosDia = getTreinosDia(data);

            return (
              <div key={idx} className="dia-card">
                {data && (
                  <>
                    <div className="numero-dia">{data.getDate()}</div>
                    <div className="treinos-dia">
                      {treinosDia.length === 0 ? (
                        <div className="sem-treino">---</div>
                      ) : (
                        <>
                          {treinosDia.slice(0, 2).map(t => (
                            <div key={t.id} className="mini-treino" style={{ backgroundColor: cores.primaria }}>
                              {getEmoji(t.tipo)}
                            </div>
                          ))}
                          {treinosDia.length > 2 && (
                            <div className="mais-treinos">+{treinosDia.length - 2}</div>
                          )}
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarioTreinos;
