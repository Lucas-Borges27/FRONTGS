Fechou, parça! Vou montar o **README.md completasso** pra tu botar pra rodar liso, com tudo que precisa, incluindo detalhes que tu falou e o jeitão do teu projeto. Vou organizar tudo pra ficar uma receita de bolo estilo malokeiro, simples e eficiente. Confere aí:

---

````markdown
# 🔥 Guardião - Projeto FIAP

Sistema que gerencia usuários (login/cadastro), conecta com banco Oracle da FIAP, e exibe dados no front (Next.js + Tailwind + Power BI).

---

## 📂 Estrutura do projeto

```plaintext
GSzip/
│
├── backend/               ← Backend FastAPI + Oracle
│   └── backend.py
│
├── frontend/              ← Frontend Next.js
│   ├── app/
│   │   └── page.tsx       ← Página principal
│   └── components/
│       ├── header.tsx     ← Header com nome do usuário
│       └── tabelaOcorrencias.tsx
│
└── README.md              ← Este arquivo
````

---

## ⚠️ Pré-requisitos

* Python 3.11+ instalado e configurado no PATH
* Node.js 18+ instalado
* Banco Oracle FIAP com:

  * Host: `oracle.fiap.com.br`
  * Porta: `1521`
  * SID: `orcl`
* (Opcional) Oracle Instant Client para modo thick (se for usar)

---

## ⚙️ Backend (Python + FastAPI)

1. Abra o terminal na pasta do backend:

   ```bash
   cd backend
   ```

2. Crie o ambiente virtual e ative:

   Windows PowerShell:

   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

   CMD:

   ```cmd
   python -m venv .venv
   .venv\Scripts\activate.bat
   ```

   Linux/Mac:

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Instale as dependências:

   ```bash
   pip install fastapi uvicorn oracledb
   ```

4. Para rodar o servidor FastAPI:

   ```bash
   uvicorn backend:app --reload --host 0.0.0.0 --port 8000
   ```

5. Acesse a documentação da API pra testar:

   [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🖥️ Frontend (Next.js + TailwindCSS)

1. Abra o terminal na pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências do Node:

   ```bash
   npm install
   ```

3. Rode o projeto Next.js:

   ```bash
   npm run dev
   ```

4. Acesse o site:

   [http://localhost:3000](http://localhost:3000)

---

## 🔑 Configuração da conexão Oracle

No arquivo do backend (`backend.py`), configure assim:

```python
import oracledb

connection = oracledb.connect(
    user="rm560393",            # Seu RM FIAP
    password="fiap25",          # Sua senha FIAP
    dsn="oracle.fiap.com.br:1521/orcl",
    mode=oracledb.DEFAULT_AUTH  # Modo thin (não precisa Oracle Client)
)
```

---

## 🧪 Testando o fluxo

* Acesse `/cadastro` no front pra criar usuário
* Faça login em `/login`
* Depois do login, o nome do usuário aparece no header
* Logout limpa o estado
* Atualiza a página que o estado persiste (usa localStorage)

---

## ⚠️ Problemas comuns e soluções

* `ModuleNotFoundError: No module named 'fastapi'`

  * Ative o `.venv` antes de rodar, ou instale as libs

* `uvicorn` não é reconhecido

  * Certifique-se que o ambiente virtual tá ativado
  * Ou rode com o caminho completo do uvicorn: `.venv\Scripts\uvicorn.exe backend:app --reload`

* Backend rodando, mas não acessa `http://localhost:8000/docs`

  * Veja se não tem erro de import ou se o arquivo `backend.py` tem a variável `app = FastAPI()` exportada corretamente

* `ORA-01017: invalid username/password`

  * Confere RM e senha da FIAP

* Frontend abre mas sem nome do usuário

  * Confere se está salvando no localStorage ao logar
  * Verifique se o header está recebendo a prop correta

---

## 📱 Dicas

* Use o navegador no modo dev tools para olhar localStorage e network
* Para logout limpe o localStorage com `localStorage.clear()` ou remove os campos usados
* Se mudar de página, o layout pode perder o header — considere usar layout global em `/app/layout.tsx`

---

## 💬 Contato

Feito com 💚 pelo 
