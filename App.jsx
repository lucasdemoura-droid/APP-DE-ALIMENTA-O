import React, { useState, useEffect } from 'react';
import './App.css';
import Alimentacao from './components/Alimentacao';
import Treinos from './components/Treinos';
import GuiaAlimentos from './components/GuiaAlimentos';
import Devocional from './components/Devocional';
import Lembretes from './components/Lembretes';

function App() {
  const [perfil, setPerfil] = useState('lucas');
  const [abaAtiva, setAbaAtiva] = useState('alimentacao');

  const cores = {
    lucas: {
      primaria: '#0066CC',
      secundaria: '#00AA88',
      background: '#E8F5FF',
      texto: '#003366'
    },
    caroline: {
      primaria: '#DD0066',
      secundaria: '#9933CC',
      background: '#FFE8F5',
      texto: '#660033'
    }
  };

  const corAtual = cores[perfil];

  return (
    <div className="app" style={{ '--cor-primaria': corAtual.primaria, '--cor-secundaria': corAtual.secundaria }}>
      {/* Header com Seletor de Perfil */}
      <header className="header" style={{ backgroundColor: corAtual.primaria }}>
        <h1>💪 Fitness & Devocional</h1>
        <div className="seletor-perfil">
          <button
            onClick={() => setPerfil('lucas')}
            className={`btn-perfil ${perfil === 'lucas' ? 'ativo' : ''}`}
            style={perfil === 'lucas' ? { backgroundColor: '#fff', color: cores.lucas.primaria } : {}}
          >
            👨 Lucas
          </button>
          <button
            onClick={() => setPerfil('caroline')}
            className={`btn-perfil ${perfil === 'caroline' ? 'ativo' : ''}`}
            style={perfil === 'caroline' ? { backgroundColor: '#fff', color: cores.caroline.primaria } : {}}
          >
            👩 Caroline
          </button>
        </div>
      </header>

      {/* Abas de Navegação */}
      <nav className="abas-navegacao" style={{ borderBottomColor: corAtual.primaria }}>
        {[
          { id: 'alimentacao', icon: '🍽️', label: 'Alimentação' },
          { id: 'treinos', icon: '🏃', label: 'Treinos' },
          { id: 'guia', icon: '📚', label: 'Guia' },
          { id: 'devocional', icon: '📖', label: 'Devocional' },
          { id: 'lembretes', icon: '💡', label: 'Lembretes' }
        ].map(aba => (
          <button
            key={aba.id}
            onClick={() => setAbaAtiva(aba.id)}
            className={`aba-btn ${abaAtiva === aba.id ? 'ativa' : ''}`}
            style={abaAtiva === aba.id ? { color: corAtual.primaria, borderBottomColor: corAtual.primaria } : {}}
          >
            <span className="aba-icon">{aba.icon}</span>
            <span className="aba-label">{aba.label}</span>
          </button>
        ))}
      </nav>

      {/* Conteúdo das Abas */}
      <main className="conteudo-principal" style={{ backgroundColor: corAtual.background }}>
        {abaAtiva === 'alimentacao' && <Alimentacao perfil={perfil} cores={corAtual} />}
        {abaAtiva === 'treinos' && <Treinos perfil={perfil} cores={corAtual} />}
        {abaAtiva === 'guia' && <GuiaAlimentos perfil={perfil} cores={corAtual} />}
        {abaAtiva === 'devocional' && <Devocional perfil={perfil} cores={corAtual} />}
        {abaAtiva === 'lembretes' && <Lembretes perfil={perfil} cores={corAtual} />}
      </main>
    </div>
  );
}

export default App;
