import React from 'react';
import './Lembretes.css';

const Lembretes = ({ perfil, cores }) => {
  const lembretes = [
    {
      titulo: '💧 Hidratação',
      conteudo: 'Bebam de 2,5 a 3,5 litros de água por dia (mais nos dias de corrida).',
      categoria: 'importante'
    },
    {
      titulo: '🧪 Suplementação',
      conteudo: 'Creatina: 3 a 5 g todos os dias para auxiliar no ganho de massa muscular.',
      categoria: 'importante'
    },
    {
      titulo: '🍫 Doces Permitidos',
      conteudo: 'Não é necessário cortar doces! Mantenha dentro da porção indicada. Se comer um doce, apenas mantenha a quantidade dentro da porção - não é necessário "compensar".',
      categoria: 'dica'
    },
    {
      titulo: '🍚 Flexibilidade de Carboidratos',
      conteudo: 'Se quiserem trocar arroz por macarrão, batata, mandioca ou outro carboidrato, utilizem as equivalências definidas no guia de alimentos.',
      categoria: 'dica'
    },
    {
      titulo: '🎯 Consistência',
      conteudo: 'O segredo não é comer perfeitamente todos os dias, e sim manter consistência ao longo das semanas. Foco no longo prazo!',
      categoria: 'motivacao'
    },
    {
      titulo: '🏃 Refeições para Corrida',
      conteudo: 'Priorizem refeições com carboidratos antes e depois dos treinos de corrida para melhorar a energia e a recuperação.',
      categoria: 'treino'
    },
    {
      titulo: '🍽️ Dias de Longão (Meia Maratona)',
      conteudo: 'Na noite anterior: acrescente +50g de arroz (Caroline) ou +80g (Lucas). No dia do treino: café normalmente, não treinem em jejum, consuma opção com mais carboidratos. Após o treino: refeição completa com proteína, carboidrato e muita água.',
      categoria: 'treino'
    },
    {
      titulo: '🍽️ Comendo Fora',
      conteudo: 'Escolham um prato com uma proteína, um carboidrato e salada. O importante é manter a consistência na maior parte da semana.',
      categoria: 'dica'
    },
    {
      titulo: '✅ Objetivos Pessoais',
      conteudo: perfil === 'caroline' 
        ? 'Caroline: Ganho de massa muscular + redução do percentual de gordura + preparação para meia maratona.'
        : 'Lucas: Ganho de massa muscular + manutenção do baixo percentual de gordura + preparação para meia maratona.',
      categoria: 'objetivo'
    },
    {
      titulo: '📋 Como Usar a Dieta',
      conteudo: 'Em cada refeição, escolha apenas uma das opções. O guia de alimentos permite variar mantendo uma quantidade semelhante de nutrientes.',
      categoria: 'regra'
    }
  ];

  const getCoreCategoria = (categoria) => {
    const cores_cat = {
      importante: '#ff6b6b',
      dica: cores.primaria,
      motivacao: '#28a745',
      treino: '#0099cc',
      objetivo: '#9933cc',
      regra: '#ff9800'
    };
    return cores_cat[categoria];
  };

  const getTituloCategoria = (categoria) => {
    const titulos = {
      importante: 'Importante',
      dica: 'Dica',
      motivacao: 'Motivação',
      treino: 'Treino',
      objetivo: 'Objetivo',
      regra: 'Regra'
    };
    return titulos[categoria];
  };

  return (
    <div className="lembretes">
      <div className="intro-lembretes">
        <h2>📖 Regras Práticas & Lembretes</h2>
        <p>Tudo que você precisa saber para manter a consistência na sua jornada! 💪</p>
      </div>

      <div className="lista-lembretes">
        {lembretes.map((item, idx) => (
          <div 
            key={idx} 
            className="lembrete-card"
            style={{ borderLeftColor: getCoreCategoria(item.categoria) }}
          >
            <div className="lembrete-header">
              <h3>{item.titulo}</h3>
              <span 
                className="badge-categoria"
                style={{ backgroundColor: getCoreCategoria(item.categoria), color: 'white' }}
              >
                {getTituloCategoria(item.categoria)}
              </span>
            </div>
            <p className="lembrete-conteudo">{item.conteudo}</p>
          </div>
        ))}
      </div>

      <div className="resumo-bottom">
        <div className="card-resumo" style={{ borderLeftColor: cores.primaria }}>
          <h4>🎯 Resumo Principal</h4>
          <ul>
            <li>✅ Variar alimentos respeitando as quantidades</li>
            <li>✅ Beber muita água todos os dias</li>
            <li>✅ Tomar creatina diariamente</li>
            <li>✅ Priorizar consistência sobre perfeição</li>
            <li>✅ Treinar regularmente para meia maratona</li>
            <li>✅ Registrar devocional diariamente</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lembretes;
