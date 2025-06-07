# ALERTA360

**Inteligência que protege vidas**

ALERTA360 é uma plataforma que oferece informações sobre registros de desastres ocorridos no território nacional, com o objetivo de apoiar a prevenção e a resposta a situações de emergência.

---

## Features

- Autenticação de usuários e painel personalizado
- Painel geral com registros de desastres
- Interface responsiva utilizando TailwindCSS
- Integração com Azure SDK para configuração e identidade
- Conexão com banco de dados OracleDB
- Uso de ícones com a biblioteca lucide-react

---

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Azure App Configuration](https://www.npmjs.com/package/@azure/app-configuration)
- [Azure Identity](https://www.npmjs.com/package/@azure/identity)
- [OracleDB](https://www.npmjs.com/package/oracledb)
- [lucide-react](https://www.npmjs.com/package/lucide-react)

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Lucas-Borges27/FRONTGS.git
   cd FRONTGS
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## Uso

- Acesse o painel do usuário ou o painel geral a partir da página inicial.
- Utilize as páginas de login e cadastro para autenticação.
- O frontend está disponível para uso via Vercel (https://frontgs.vercel.app).
- O backend é desenvolvido em Quarkus e está hospedado no Render (link do backend: https://global-solution.onrender.com).

---

## API Endpoints

- `POST /usuarios/login` - Autenticação de usuário  
  `https://global-solution.onrender.com/usuarios/login`

- `POST /usuarios` - Cadastro de novo usuário  
  `https://global-solution.onrender.com/usuarios`

- `GET /ocorrencias/todas` - Obter todas as ocorrências (painel geral)  
  `https://global-solution.onrender.com/ocorrencias/todas`

- `GET /ocorrencias` - Obter ocorrências do usuário autenticado  
  `https://global-solution.onrender.com/ocorrencias`

- `POST /ocorrencias` - Adicionar nova ocorrência  
  `https://global-solution.onrender.com/ocorrencias`

- `PUT /ocorrencias/{id}` - Atualizar ocorrência existente  
  `https://global-solution.onrender.com/ocorrencias/{id}`

- `DELETE /ocorrencias/{id}` - Deletar ocorrência  
  `https://global-solution.onrender.com/ocorrencias/{id}`

---

## Estrutura do Projeto

```
src/
 └── app/
     ├── cadastro/          # Página de cadastro de usuários
     ├── login/             # Página de login
     ├── painel/            # Painel geral de desastres
     ├── painelUsuario/     # Painel personalizado do usuário
     ├── components/        # Componentes reutilizáveis (cards, footer, header, etc.)
     ├── context/           # Contextos React (ex: AuthContext)
     ├── page.tsx           # Página inicial
     └── layout.tsx         # Layout principal da aplicação
public/
 └── images/                # Imagens e assets estáticos
```
---

## Contribuição e Contato

Este projeto foi desenvolvido por Yasmin Silva, Lucas Borges e Pedro Silva como parte do desafio Global Solution da FIAP, focado na criação de soluções tecnológicas inovadoras para prevenção e apoio em situações de desastres naturais.

Repositório do projeto: [https://github.com/Lucas-Borges27/FRONTGS.git](https://github.com/Lucas-Borges27/FRONTGS.git)

Para dúvidas ou contribuições, entre em contato com os desenvolvedores.

---

## Licença

Este projeto é privado e não possui licença pública.

