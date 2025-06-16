# LabManagement

## Sobre o projeto
Aplicação desenvolvida com o objetivo de praticar os conhecimentos em NextJs e Tailwind CSS.

##  🔽 Veja funcionando: [LabManagement](https://lab-management-routine.netlify.app/)

### Arquitetura

```
/src
  ├── /app
  │    └── features/
  │         └── routines/
  │              ├── components/         # Componentes visuais e containers (View)
  │              ├── hooks/              # Hooks específicos da feature (Controller)
  │              ├── services/           # Integrações com APIs externas ou internas (Service)
  │              └── types/              # Tipagens e modelos da feature (Model)
  │
  ├── /shared/
  │    └── components/
  │         ├── ui/                      # Componentes de UI do shadcn-ui reutilizáveis (ex: botão, modal, scroll-area)
  │         └── ComponentSample/         # Componente global como Header, Sidebar etc.

Outros arquivos:
  ├── layout.tsx                         # Layout principal da aplicação (Next.js App Router)
  ├── globals.css                        # Estilos globais e temas Tailwind
  └── page.tsx                           # Entrada da rota principal "/"
```


### Tecnologias utilizadas
- NextJs
- TypeScript
- Tailwind CSS
- Shadcn-ui
- React-Query
- React hook form

### Checklist extra
- [x] Busca de itens
- [x] Modal para criar novo item
- [x] Requisições com React Query

## 👷  Executando o projeto
 #### Clone o repositório:
  ```
  git clone https://github.com/FranciscoBraaz/lab-management.git
  ```  
#### Navegue para a pasta raíz:
```
cd lab-management
```
#### Baixar as dependências
```
npm i 
```
#### Iniciar aplicação web
```
npm run dev
```
