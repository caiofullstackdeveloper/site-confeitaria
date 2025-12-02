# 🧁 Doce Encanto - Site de Confeitaria

Site completo e responsivo para uma confeitaria artesanal, desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Características

### Páginas e Seções
- **Home/Hero**: Banner principal com call-to-action
- **Produtos**: Catálogo completo com filtros e busca
- **Sobre**: História da confeitaria e depoimentos
- **Contato**: Formulário e informações de contato
- **Footer**: Links e redes sociais

### Funcionalidades Implementadas

#### 🛒 Carrinho de Compras
- Adicionar produtos ao carrinho
- Remover produtos
- Ajustar quantidades (+/-)
- Cálculo automático do total
- Persistência com LocalStorage
- Modal interativo

#### 🔍 Filtros e Busca
- Filtrar por categoria (Bolos, Doces, Tortas, Salgados)
- Busca em tempo real por nome/descrição
- Visualização dinâmica dos resultados

#### 📱 Design Responsivo
- Layout adaptável para mobile, tablet e desktop
- Menu hambúrguer para dispositivos móveis
- Grid responsivo de produtos
- Imagens e textos otimizados

#### ✨ Interatividade
- Animações suaves ao scroll
- Transições em hover
- Modais para carrinho e detalhes
- Notificações de feedback
- Scroll suave entre seções

#### 📝 Formulário de Contato
- Validação de campos
- Mensagens de sucesso/erro
- Design intuitivo

#### 💬 Integração WhatsApp
- Botão de finalizar pedido
- Geração automática de mensagem
- Redirecionamento para WhatsApp

## 🎨 Design

### Paleta de Cores
- **Primary**: #ff6b9d (Rosa)
- **Secondary**: #ffc1e3 (Rosa claro)
- **Accent**: #c44569 (Rosa escuro)
- **Background**: #fff5f8 (Rosa muito claro)
- **Text**: #2d3436 (Cinza escuro)

### Tipografia
- Fonte: Segoe UI (sistema)
- Hierarquia clara de títulos
- Boa legibilidade

## 📦 Estrutura de Arquivos

```
code-lab/
├── index.html      # Estrutura HTML
├── styles.css      # Estilos e responsividade
├── script.js       # Funcionalidades JavaScript
└── README.md       # Documentação
```

## 🚀 Como Usar

1. **Abrir o site**: Simplesmente abra o arquivo `index.html` em qualquer navegador moderno

2. **Navegar**: Use o menu superior para navegar entre as seções

3. **Adicionar produtos**: 
   - Clique em "Adicionar" nos cards de produtos
   - Ou clique no card para ver detalhes

4. **Gerenciar carrinho**:
   - Clique no ícone do carrinho (🛒)
   - Ajuste quantidades com +/-
   - Remova itens se necessário

5. **Finalizar pedido**:
   - Clique em "Finalizar Pedido"
   - Será redirecionado para WhatsApp com o pedido

6. **Contato**:
   - Role até a seção de contato
   - Preencha o formulário
   - Clique em "Enviar Mensagem"

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Flexbox e Grid
  - Animações e transições
  - Media queries para responsividade
  - Variáveis CSS
- **JavaScript (Vanilla)**:
  - Manipulação do DOM
  - Event listeners
  - LocalStorage API
  - Array methods (map, filter, reduce)

## 📱 Produtos Disponíveis

### Bolos
- Bolo de Chocolate - R$ 45,90
- Bolo de Morango - R$ 48,90
- Bolo Red Velvet - R$ 52,90

### Doces
- Brigadeiro Gourmet - R$ 3,50
- Beijinho - R$ 3,00
- Trufa de Chocolate - R$ 4,50

### Tortas
- Torta de Limão - R$ 38,90
- Torta de Morango - R$ 42,90
- Torta Holandesa - R$ 45,90

### Salgados
- Coxinha - R$ 6,50
- Empada - R$ 7,00
- Quiche - R$ 8,50

## 🎯 Funcionalidades Detalhadas

### Sistema de Carrinho
- Armazena itens no LocalStorage
- Mantém carrinho entre sessões
- Contador visual de itens
- Cálculo automático de subtotais e total

### Sistema de Filtros
- Filtro por categoria com botões
- Busca textual em tempo real
- Combinação de filtros
- Feedback visual quando não há resultados

### Animações
- Fade in ao carregar
- Slide up nos cards ao scroll
- Hover effects nos botões
- Transições suaves

### Validações
- Formulário de contato validado
- Verificação de campos obrigatórios
- Feedback visual de erros

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no início do arquivo `styles.css`:
```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #ffc1e3;
    /* ... */
}
```

### Adicionar Produtos
Edite o array `produtos` no arquivo `script.js`:
```javascript
const produtos = [
    {
        id: 13,
        nome: "Novo Produto",
        categoria: "bolos",
        preco: 50.00,
        descricao: "Descrição do produto",
        emoji: "🎂"
    }
];
```

### Alterar WhatsApp
Modifique o número na função `finalizarPedido()` em `script.js`:
```javascript
const whatsappUrl = `https://wa.me/5511987654321?text=...`;
```

## 📊 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Opera (versões recentes)
- ✅ Mobile browsers

## 🎓 Conceitos Aplicados

- Programação orientada a eventos
- Manipulação de arrays e objetos
- Armazenamento local (LocalStorage)
- Design responsivo (Mobile-first)
- Acessibilidade básica
- Performance otimizada
- Código limpo e organizado

## 📝 Notas

- As imagens dos produtos usam emojis como placeholders
- O formulário simula o envio (não envia emails reais)
- O WhatsApp abre com mensagem pré-formatada
- Todos os dados são armazenados localmente no navegador

## 🚀 Melhorias Futuras Possíveis

- [ ] Integração com backend real
- [ ] Sistema de pagamento online
- [ ] Upload de imagens reais dos produtos
- [ ] Sistema de avaliações
- [ ] Área de administração
- [ ] Múltiplos idiomas
- [ ] Dark mode
- [ ] PWA (Progressive Web App)

## 👨‍💻 Desenvolvimento

Site desenvolvido como projeto completo de confeitaria, demonstrando:
- HTML semântico e estruturado
- CSS moderno com Flexbox/Grid
- JavaScript vanilla com boas práticas
- Design responsivo e acessível
- Experiência de usuário otimizada

---

**Desenvolvido com ❤️ e muito 🍰**
