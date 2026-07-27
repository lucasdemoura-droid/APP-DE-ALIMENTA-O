# 🚀 Guia de Instalação e Deploy

## ✅ Passo 1: Preparar o Repositório GitHub

### Se ainda não tiver o repositório:

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New" para criar novo repositório
3. Nome: `fitness-devocional-app`
4. Descrição: "App de Alimentação, Treinos e Devocional para Lucas e Caroline"
5. Deixe como **Public**
6. Clique em "Create repository"
7. Copie o comando para adicionar remote

## 📥 Passo 2: Clonar os Arquivos

Se já tem o repositório criado:

```bash
# Substitua com seus dados
git clone https://github.com/seu-usuario/fitness-devocional-app.git
cd fitness-devocional-app
```

Ou se for inicializar nesta pasta:

```bash
git init
git add remote origin https://github.com/seu-usuario/fitness-devocional-app.git
```

## 📦 Passo 3: Instalar Dependências

```bash
npm install
```

Isso vai instalar:
- React
- Vite
- Todas as dependências necessárias

## 🧪 Passo 4: Testar Localmente

```bash
npm run dev
```

Abrirá em: `http://localhost:5173`

Teste as funcionalidades:
- ✅ Trocar entre Lucas e Caroline
- ✅ Adicionar refeição
- ✅ Adicionar treino
- ✅ Marcar devocional
- ✅ Verificar que os dados salvam (F5 para recarregar)

Aperte `CTRL+C` para parar o servidor.

## 🚀 Passo 5: Fazer Push para GitHub

```bash
# Adicione todos os arquivos
git add .

# Faça commit
git commit -m "Initial commit: Fitness & Devocional App"

# Envie para GitHub
git push origin main
```

Se aparecer erro dizendo "main" não existe:
```bash
git push origin master
```

## 🌐 Passo 6: Deploy no Netlify

### Opção A: Conectar GitHub (Recomendado - Deploy automático)

1. Acesse [netlify.com](https://netlify.com)
2. Faça login (pode usar GitHub)
3. Clique em "New site from Git"
4. Escolha GitHub e conecte sua conta
5. Selecione o repositório `fitness-devocional-app`
6. Deixe as configurações:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Clique em "Deploy site"

**Pronto! App está online!** 🎉

Depois, qualquer push para GitHub, Netlify redeploy automaticamente.

### Opção B: Deploy Manual (sem GitHub)

1. No terminal, execute:
```bash
npm run build
```

2. Vai criar a pasta `dist/`

3. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)

4. Arraste a pasta `dist/` para a tela

5. Pronto! Link gerado automaticamente

## 📱 Passo 7: Instalar no Telefone

### Android (Chrome)
```
1. Abra: https://seu-site.netlify.app (no Chrome)
2. Toque os 3 pontinhos
3. Selecione "Instalar app"
4. Pronto! 🎉
```

### iOS (Safari)
```
1. Abra: https://seu-site.netlify.app (no Safari)
2. Toque o botão Compartilhar (⬆️)
3. Selecione "Adicionar à tela inicial"
4. Pronto! 🎉
```

## ✨ Passo 8: Primeira Vez Usando

### Para Lucas:
1. Abra o app
2. Clique em "👨 Lucas"
3. Vá para "Alimentação"
4. Clique no botão "+" para adicionar refeição
5. Preencha: nome, calorias, macros
6. Vá para "Devocional" e marque o dia com check
7. Vá para "Treinos" e registre o treino do dia

### Para Caroline:
1. Clique em "👩 Caroline"
2. Repita o mesmo processo

## 🔄 Como Atualizar o App

Se quiser fazer mudanças depois:

```bash
# Faça suas alterações nos arquivos

# Adicione e commit
git add .
git commit -m "Descrição da mudança"

# Push para GitHub
git push origin main

# Se usou Netlify conectado: deploy automático ✅
# Se usou manual: rode npm run build e arraste dist/ novamente
```

## 🎯 Próximos Passos (Opcionais)

1. **Temas personalizados**: Edite cores em `src/App.jsx`
2. **Notificações**: Implementar Web Notifications API
3. **Backup em nuvem**: Adicionar Firebase
4. **Mais alimentos**: Edite `src/components/GuiaAlimentos.jsx`
5. **Dark mode**: Adicionar tema escuro

## 🆘 Problemas Comuns

### "npm: command not found"
→ Instale Node.js de [nodejs.org](https://nodejs.org)

### "Port 5173 already in use"
→ Execute: `npm run dev -- --port 5174`

### "Git not found"
→ Instale Git de [git-scm.com](https://git-scm.com)

### Dados desapareceram após atualizar
→ LocalStorage foi limpo. Re-adicione os dados. (Ou migre para Firebase depois)

### App não carrega no Netlify
→ Verifique se `netlify.toml` está na raiz do projeto

## 📞 Suporte

Qualquer dúvida:
1. Consulte o [README.md](./README.md)
2. Abra uma issue no GitHub
3. Me envie mensagem 📱

---

**Parabéns! Seu app fitness está no ar! 🚀💪**
