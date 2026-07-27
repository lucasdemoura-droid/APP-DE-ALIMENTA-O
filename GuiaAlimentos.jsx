import React, { useState } from 'react';
import './GuiaAlimentos.css';

const GuiaAlimentos = ({ perfil, cores }) => {
  const [abaAberta, setAbaAberta] = useState('proteinas');

  const guias = {
    lucas: {
      proteinas: [
        { alimento: 'Peito de frango', qtd: '180g', calorias: 270, proteina: 40, carboidrato: 0, gordura: 11 },
        { alimento: 'Patinho moído', qtd: '180g', calorias: 280, proteina: 35, carboidrato: 0, gordura: 14 },
        { alimento: 'Carne magra', qtd: '180g', calorias: 290, proteina: 38, carboidrato: 0, gordura: 14 },
        { alimento: 'Tilápia', qtd: '200g', calorias: 240, proteina: 40, carboidrato: 0, gordura: 7 },
        { alimento: 'Atum em água', qtd: '1,5 lata', calorias: 180, proteina: 40, carboidrato: 0, gordura: 1 },
        { alimento: 'Ovos', qtd: '5-6 unidades', calorias: 310, proteina: 36, carboidrato: 3, gordura: 20 },
      ],
      carboidratos: [
        { alimento: 'Arroz branco', qtd: '250g cozido', calorias: 325, proteina: 7, carboidrato: 72, gordura: 0 },
        { alimento: 'Macarrão', qtd: '280g cozido', calorias: 340, proteina: 12, carboidrato: 68, gordura: 2 },
        { alimento: 'Batata inglesa', qtd: '350g cozida', calorias: 280, proteina: 7, carboidrato: 64, gordura: 0 },
        { alimento: 'Batata-doce', qtd: '300g cozida', calorias: 270, proteina: 5, carboidrato: 62, gordura: 0 },
        { alimento: 'Mandioca', qtd: '280g cozida', calorias: 320, proteina: 3, carboidrato: 70, gordura: 1 },
        { alimento: 'Polenta', qtd: '320g', calorias: 300, proteina: 8, carboidrato: 65, gordura: 3 },
      ],
      frutas: [
        { alimento: 'Banana grande', qtd: '1 unidade', calorias: 120, proteina: 1, carboidrato: 27, gordura: 0 },
        { alimento: 'Maçã grande', qtd: '1 unidade', calorias: 95, proteina: 0, carboidrato: 25, gordura: 0 },
        { alimento: 'Pera grande', qtd: '1 unidade', calorias: 100, proteina: 1, carboidrato: 27, gordura: 0 },
        { alimento: 'Laranja', qtd: '2 pequenas', calorias: 90, proteina: 2, carboidrato: 21, gordura: 0 },
        { alimento: 'Mamão', qtd: '250g', calorias: 80, proteina: 1, carboidrato: 20, gordura: 0 },
      ],
      gorduras: [
        { alimento: 'Amendoim', qtd: '30g', calorias: 170, proteina: 7, carboidrato: 6, gordura: 15 },
        { alimento: 'Castanhas', qtd: '25g', calorias: 165, proteina: 4, carboidrato: 6, gordura: 16 },
        { alimento: 'Pasta de amendoim', qtd: '1 col. sopa', calorias: 95, proteina: 4, carboidrato: 3, gordura: 8 },
        { alimento: 'Azeite', qtd: '1 col. sopa', calorias: 120, proteina: 0, carboidrato: 0, gordura: 14 },
      ]
    },
    caroline: {
      proteinas: [
        { alimento: 'Peito de frango', qtd: '150g', calorias: 225, proteina: 33, carboidrato: 0, gordura: 9 },
        { alimento: 'Patinho moído', qtd: '150g', calorias: 230, proteina: 29, carboidrato: 0, gordura: 11 },
        { alimento: 'Carne magra', qtd: '150g', calorias: 240, proteina: 32, carboidrato: 0, gordura: 11 },
        { alimento: 'Tilápia', qtd: '170g', calorias: 200, proteina: 34, carboidrato: 0, gordura: 6 },
        { alimento: 'Atum em água', qtd: '1 lata', calorias: 140, proteina: 30, carboidrato: 0, gordura: 1 },
        { alimento: 'Ovos', qtd: '4-5 unidades', calorias: 260, proteina: 30, carboidrato: 2, gordura: 16 },
      ],
      carboidratos: [
        { alimento: 'Arroz branco', qtd: '150g cozido', calorias: 195, proteina: 4, carboidrato: 43, gordura: 0 },
        { alimento: 'Macarrão', qtd: '180g cozido', calorias: 215, proteina: 8, carboidrato: 43, gordura: 1 },
        { alimento: 'Batata inglesa', qtd: '250g cozida', calorias: 200, proteina: 5, carboidrato: 46, gordura: 0 },
        { alimento: 'Batata-doce', qtd: '200g cozida', calorias: 180, proteina: 3, carboidrato: 41, gordura: 0 },
        { alimento: 'Mandioca', qtd: '180g cozida', calorias: 205, proteina: 2, carboidrato: 45, gordura: 1 },
      ],
      frutas: [
        { alimento: 'Banana média', qtd: '1 unidade', calorias: 105, proteina: 1, carboidrato: 27, gordura: 0 },
        { alimento: 'Maçã média', qtd: '1 unidade', calorias: 80, proteina: 0, carboidrato: 21, gordura: 0 },
        { alimento: 'Pera média', qtd: '1 unidade', calorias: 85, proteina: 1, carboidrato: 23, gordura: 0 },
        { alimento: 'Laranja', qtd: '1 média', calorias: 70, proteina: 1, carboidrato: 18, gordura: 0 },
        { alimento: 'Mamão', qtd: '200g', calorias: 65, proteina: 1, carboidrato: 16, gordura: 0 },
      ],
      gorduras: [
        { alimento: 'Amendoim', qtd: '20g', calorias: 115, proteina: 5, carboidrato: 4, gordura: 10 },
        { alimento: 'Castanhas', qtd: '15g', calorias: 100, proteina: 2, carboidrato: 4, gordura: 10 },
        { alimento: 'Pasta de amendoim', qtd: '1 col. sopa', calorias: 95, proteina: 4, carboidrato: 3, gordura: 8 },
        { alimento: 'Azeite', qtd: '1 col. chá', calorias: 40, proteina: 0, carboidrato: 0, gordura: 4 },
      ]
    }
  };

  const perfilGuia = guias[perfil];
  const categoriasMap = {
    proteinas: '🥩 Proteínas',
    carboidratos: '🍚 Carboidratos',
    frutas: '🍎 Frutas',
    gorduras: '🥜 Gorduras Boas'
  };

  return (
    <div className="guia-alimentos">
      <div className="info-guia">
        <p>📚 <strong>Guia de Alimentos</strong> - Clique em cada alimento para mais informações de macros e use como substituições na sua dieta.</p>
      </div>

      <div className="abas-guia">
        {Object.keys(perfilGuia).map(aba => (
          <button
            key={aba}
            onClick={() => setAbaAberta(aba)}
            className={`aba-guia ${abaAberta === aba ? 'ativa' : ''}`}
            style={abaAberta === aba ? { backgroundColor: cores.primaria, color: 'white' } : {}}
          >
            {categoriasMap[aba]}
          </button>
        ))}
      </div>

      <div className="lista-alimentos">
        {perfilGuia[abaAberta].map((item, idx) => (
          <div key={idx} className="alimento-card" style={{ borderLeftColor: cores.primaria }}>
            <div className="alimento-header">
              <h4>{item.alimento}</h4>
              <span className="qtd">{item.qtd}</span>
            </div>
            <div className="macros-info">
              <div className="macro">
                <span className="macro-label">kcal</span>
                <span className="macro-valor">{item.calorias}</span>
              </div>
              <div className="macro">
                <span className="macro-label">P</span>
                <span className="macro-valor">{item.proteina}g</span>
              </div>
              <div className="macro">
                <span className="macro-label">C</span>
                <span className="macro-valor">{item.carboidrato}g</span>
              </div>
              <div className="macro">
                <span className="macro-label">G</span>
                <span className="macro-valor">{item.gordura}g</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuiaAlimentos;
