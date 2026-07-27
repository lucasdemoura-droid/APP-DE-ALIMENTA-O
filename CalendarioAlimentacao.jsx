import React, { useState } from 'react';
import './CalendarioAlimentacao.css';

const CalendarioAlimentacao = ({ refeicoes, cores, onEditarRefeicao, onExcluirRefeicao }) => {
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

  const getRefeicoesDia = (data) => {
    if (!data) return [];
    return refeicoes.filter(r => 
      new Date(r.data).toDateString() === data.toDateString()
    );
  };

  const dias = getDiasDoMes();

  return (
    <div className="calendario-alimentacao">
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
            const refeicoesDia = getRefeicoesDia(data);
            const totalCalorias = refeicoesDia.reduce((sum, r) => sum + (r.calorias || 0), 0);

            return (
              <div key={idx} className="dia-card">
                {data && (
                  <>
                    <div className="numero-dia">{data.getDate()}</div>
                    <div className="calorias-dia">{totalCalorias} kcal</div>
                    <div className="mini-refeicoes">
                      {refeicoesDia.slice(0, 2).map(ref => (
                        <div key={ref.id} className="mini-refeicao" style={{ backgroundColor: cores.primaria }}>
                          <span className="nome-mini">{ref.nome.substring(0, 12)}</span>
                        </div>
                      ))}
                      {refeicoesDia.length > 2 && (
                        <div className="mais-refeicoes">+{refeicoesDia.length - 2}</div>
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

export default CalendarioAlimentacao;
