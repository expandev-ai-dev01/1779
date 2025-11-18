# StockBox - Sistema de Controle de Estoque

## Descrição
Sistema para controlar itens no estoque: entradas, saídas e quantidade atual.

## Tecnologias
- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router 7.9.3
- TanStack Query 5.90.2
- Axios 1.12.2
- Zustand 5.0.8

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente no arquivo `.env`:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores de contexto
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e lógica compartilhada
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos TypeScript globais
│   └── utils/            # Funções utilitárias
├── domain/               # Módulos de domínio
└── pages/                # Páginas da aplicação
    └── layouts/          # Layouts compartilhados
```

## Funcionalidades

- Registrar movimentações de estoque (entradas, saídas, alterações)
- Visualizar histórico completo de movimentações
- Calcular quantidades disponíveis em tempo real
- Identificar produtos em falta

## Licença
Private