gestionador-tarefas/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Cabeçalho com título e contador de tarefas
│   │   ├── TaskForm.jsx      # Formulário para adicionar tarefas
│   │   ├── TaskItem.jsx      # Componente de cada tarefa individual
│   │   ├── TaskList.jsx      # Lista de tarefas com FlatList
│   │   └── EmptyList.jsx     # Componente exibido quando não há tarefas
│   ├── hooks/
│   │   ├── useTasks.js       # Gerenciamento de estado das tarefas (CRUD)
│   │   └── useAnimations.js  # Lógica de animações de entrada/saída
│   ├── styles/
│   │   └── styles.js         # Estilos centralizados
│   └── utils/
│       └── constants.js      # Cores, textos e configurações globais
├── App.jsx                   # Arquivo principal da aplicação
├── README.md                 # Este arquivo
└── package.json              # Dependências e scripts

