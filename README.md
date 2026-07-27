# 💪 Fitness & Devocional - Lucas & Caroline

App completo para rastreamento de alimentação, treinos e devocional personalizado para casal em preparação para meia maratona!

## 🚀 Funcionalidades

### 📱 Perfis Personalizados
- **Lucas**: Interface Azul Mar + Verde Mar
- **Caroline**: Interface Rosa + Roxo
- Trocar entre perfis com um clique

### 🍽️ Aba Alimentação
- ✅ Dashboard com macros do dia (calorias, proteína, carboidrato, gordura)
- ✅ Visualização em calendário
- ✅ Adicionar/editar refeições
- ✅ Metas personalizadas para cada pessoa
- ✅ Progresso visual com barras

### 🏃 Aba Treinos
- ✅ Dashboard de treinos do dia
- ✅ Calendário de treinos
- ✅ Visualização semanal
- ✅ Registrar: tipo, distância, tempo, intensidade
- ✅ Suporta: corrida, funcional, musculação, yoga, ciclismo, natação, caminhada

### 📚 Aba Guia de Alimentos
- ✅ Banco de proteínas, carboidratos, frutas e gorduras
- ✅ Macros de cada alimento
- ✅ Equivalências para substituições
- ✅ Quantidades específicas para Lucas e Caroline

### 📖 Aba Devocional
- ✅ Calendário mensal
- ✅ Marcar dia com check ✅
- ✅ Registrar reflexão/versículo
- ✅ Estatísticas de consistência
- ✅ Indicador visual de progresso

### 💡 Aba Lembretes
- ✅ Regras práticas da dieta
- ✅ Dicas para preparação da meia maratona
- ✅ Informações de suplementação
- ✅ Objetivo personalizado para cada um

## 📦 Instalação Local

### Pré-requisitos
- Node.js v16+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório** (depois que criar no GitHub)
```bash
git clone https://github.com/seu-usuario/fitness-devocional-app.git
cd fitness-devocional-app
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:5173
```

## 🌐 Deploy no Netlify

### Opção 1: Deploy Automático (Recomendado)

1. Faça push do código para GitHub
```bash
git add .
git commit -m "Initial commit: Fitness app"
git push origin main
```

2. Vá em [netlify.com](https://netlify.com)
3. Clique em "New site from Git"
4. Conecte seu repositório GitHub
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy! 🚀

### Opção 2: Deploy Manual

1. Faça build do projeto
```bash
npm run build
```

2. Arraste a pasta `dist` para [netlify.com/drop](https://app.netlify.com/drop)

## 📱 Instalar no Telefone

### Android
1. Abra o app no Chrome
2. Toque os 3 pontinhos (menu)
3. "Instalar app"
4. Pronto! App instalado na tela inicial

### iPhone
1. Abra o app no Safari
2. Toque o botão Compartilhar
3. Selecione "Adicionar à tela inicial"
4. Pronto! App instalado

## 💾 Dados

Todos os dados são salvos **localmente no telefone** usando LocalStorage:
- ✅ Refeições
- ✅ Treinos
- ✅ Devocional
- ✅ Nenhum servidor necessário
- ✅ Privacidade total

## 🎨 Customização de Cores

As cores estão configuradas em `src/App.jsx`:

```javascript
const cores = {
  lucas: {
    primaria: '#0066CC',    // Azul mar
    secundaria: '#00AA88'   // Verde mar
  },
  caroline: {
    primaria: '#DD0066',    // Rosa
    secundaria: '#9933CC'   // Roxo
  }
};
```

## 📝 Estrutura do Projeto

```
fitness-devocional-app/
├── src/
│   ├── components/
│   │   ├── Alimentacao.jsx
│   │   ├── Treinos.jsx
│   │   ├── Devocional.jsx
│   │   ├── GuiaAlimentos.jsx
│   │   ├── Lembretes.jsx
│   │   ├── CalendarioAlimentacao.jsx
│   │   ├── CalendarioTreinos.jsx
│   │   ├── ModalRefeicao.jsx
│   │   └── *.css (estilos)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── netlify.toml
└── README.md
```

## 🔧 Tecnologias

- **React 18** - UI Framework
- **Vite** - Build tool
- **CSS3** - Estilos
- **LocalStorage** - Persistência de dados

## 📊 Metas Personalizadas

**Lucas:**
- Calorias: 2700-2900 kcal/dia
- Proteína: 180g/dia
- Carboidrato: 350g/dia
- Gordura: 93g/dia

**Caroline:**
- Calorias: 2100-2500 kcal/dia
- Proteína: 150g/dia
- Carboidrato: 280g/dia
- Gordura: 76g/dia

## 🏃 Preparação para Meia Maratona

- Registre todos os treinos
- Acompanhe o progresso semanal
- Aumentar carboidratos nos dias de treino longo
- Manter hidratação adequada

## 📖 Devocional

- Marque um check diário
- Registre o versículo ou reflexão
- Acompanhe consistência mensal
- Veja progresso espiritual

## 🐛 Troubleshooting

### Dados desapareceram?
- LocalStorage foi limpo do navegador
- Solução: Re-adicione os dados

### App não atualiza?
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Ou acesse em navegação privada

### Deploy não funciona?
- Verifique se `netlify.toml` está na raiz
- Certifique-se que `dist/` está no `.gitignore`

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no GitHub!

## 📄 Licença

MIT - Use livremente! 🚀

---

**Desenvolvido com ❤️ para Lucas e Caroline - Vencer juntos! 💪**
