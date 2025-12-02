// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "Bolo de Chocolate",
        categoria: "bolos",
        preco: 45.90,
        descricao: "Delicioso bolo de chocolate com cobertura cremosa",
        emoji: "🍫"
    },
    {
        id: 2,
        nome: "Bolo de Morango",
        categoria: "bolos",
        preco: 48.90,
        descricao: "Bolo recheado com morangos frescos e chantilly",
        emoji: "🍓"
    },
    {
        id: 3,
        nome: "Bolo Red Velvet",
        categoria: "bolos",
        preco: 52.90,
        descricao: "Clássico bolo red velvet com cream cheese",
        emoji: "❤️"
    },
    {
        id: 4,
        nome: "Brigadeiro Gourmet",
        categoria: "doces",
        preco: 3.50,
        descricao: "Brigadeiro artesanal com chocolate belga",
        emoji: "🍬"
    },
    {
        id: 5,
        nome: "Beijinho",
        categoria: "doces",
        preco: 3.00,
        descricao: "Beijinho tradicional com coco ralado",
        emoji: "🥥"
    },
    {
        id: 6,
        nome: "Trufa de Chocolate",
        categoria: "doces",
        preco: 4.50,
        descricao: "Trufa cremosa de chocolate meio amargo",
        emoji: "🍫"
    },
    {
        id: 7,
        nome: "Torta de Limão",
        categoria: "tortas",
        preco: 38.90,
        descricao: "Torta refrescante com creme de limão",
        emoji: "🍋"
    },
    {
        id: 8,
        nome: "Torta de Morango",
        categoria: "tortas",
        preco: 42.90,
        descricao: "Torta com morangos frescos e creme",
        emoji: "🍓"
    },
    {
        id: 9,
        nome: "Torta Holandesa",
        categoria: "tortas",
        preco: 45.90,
        descricao: "Torta cremosa com chocolate e creme",
        emoji: "🍰"
    },
    {
        id: 10,
        nome: "Coxinha",
        categoria: "salgados",
        preco: 6.50,
        descricao: "Coxinha crocante com frango desfiado",
        emoji: "🍗"
    },
    {
        id: 11,
        nome: "Empada",
        categoria: "salgados",
        preco: 7.00,
        descricao: "Empada recheada com frango ou palmito",
        emoji: "🥧"
    },
    {
        id: 12,
        nome: "Quiche",
        categoria: "salgados",
        preco: 8.50,
        descricao: "Quiche de queijo com legumes",
        emoji: "🥐"
    }
];

// Estado da aplicação
let carrinho = [];
let categoriaAtual = 'todos';
let buscaAtual = '';

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    configurarEventos();
    carregarCarrinho();
});

// Renderizar produtos
function renderizarProdutos() {
    const grid = document.getElementById('produtosGrid');
    
    // Filtrar produtos
    let produtosFiltrados = produtos.filter(produto => {
        const matchCategoria = categoriaAtual === 'todos' || produto.categoria === categoriaAtual;
        const matchBusca = produto.nome.toLowerCase().includes(buscaAtual.toLowerCase()) ||
                          produto.descricao.toLowerCase().includes(buscaAtual.toLowerCase());
        return matchCategoria && matchBusca;
    });

    // Renderizar
    if (produtosFiltrados.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: var(--text-light); padding: 3rem;">Nenhum produto encontrado.</p>';
        return;
    }

    grid.innerHTML = produtosFiltrados.map(produto => `
        <div class="produto-card" onclick="abrirDetalhesProduto(${produto.id})">
            <div class="produto-image">
                <span>${produto.emoji}</span>
            </div>
            <div class="produto-info">
                <span class="produto-categoria">${produto.categoria}</span>
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-descricao">${produto.descricao}</p>
                <div class="produto-footer">
                    <span class="produto-preco">R$ ${produto.preco.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); adicionarAoCarrinho(${produto.id})">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Configurar eventos
function configurarEventos() {
    // Filtros de categoria
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            categoriaAtual = e.target.dataset.category;
            renderizarProdutos();
        });
    });

    // Busca
    document.getElementById('searchInput').addEventListener('input', (e) => {
        buscaAtual = e.target.value;
        renderizarProdutos();
    });

    // Menu mobile
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('nav').classList.toggle('active');
    });

    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav').classList.remove('active');
        });
    });

    // Carrinho
    document.getElementById('cartBtn').addEventListener('click', abrirCarrinho);
    document.getElementById('closeCartBtn').addEventListener('click', fecharCarrinho);
    document.getElementById('closeProductBtn').addEventListener('click', fecharDetalhesProduto);

    // Fechar modal ao clicar fora
    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') fecharCarrinho();
    });
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal') fecharDetalhesProduto();
    });

    // Formulário de contato
    document.getElementById('contactForm').addEventListener('submit', enviarFormulario);

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', finalizarPedido);

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Adicionar ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const itemExistente = carrinho.find(item => item.id === produtoId);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    atualizarCarrinho();
    salvarCarrinho();
    
    // Feedback visual
    mostrarNotificacao('Produto adicionado ao carrinho! 🎉');
}

// Remover do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
    salvarCarrinho();
}

// Atualizar quantidade
function atualizarQuantidade(produtoId, delta) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        item.quantidade += delta;
        if (item.quantidade <= 0) {
            removerDoCarrinho(produtoId);
        } else {
            atualizarCarrinho();
            salvarCarrinho();
        }
    }
}

// Atualizar carrinho
function atualizarCarrinho() {
    const count = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById('cartCount').textContent = count;

    const cartItems = document.getElementById('cartItems');
    
    if (carrinho.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Seu carrinho está vazio 🛒</div>';
        document.getElementById('cartTotal').textContent = '0,00';
        return;
    }

    cartItems.innerHTML = carrinho.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.emoji} ${item.nome}</div>
                <div class="cart-item-price">R$ ${item.preco.toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="atualizarQuantidade(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantidade}</span>
                    <button class="quantity-btn" onclick="atualizarQuantidade(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removerDoCarrinho(${item.id})">Remover</button>
            </div>
        </div>
    `).join('');

    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    document.getElementById('cartTotal').textContent = total.toFixed(2);
}

// Abrir/Fechar carrinho
function abrirCarrinho() {
    document.getElementById('cartModal').classList.add('active');
}

function fecharCarrinho() {
    document.getElementById('cartModal').classList.remove('active');
}

// Detalhes do produto
function abrirDetalhesProduto(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const modal = document.getElementById('productModal');
    
    document.getElementById('productModalTitle').textContent = produto.nome;
    document.getElementById('productModalBody').innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 8rem; margin: 2rem 0;">${produto.emoji}</div>
            <span class="produto-categoria">${produto.categoria}</span>
            <p style="margin: 1rem 0; color: var(--text-light); line-height: 1.8;">${produto.descricao}</p>
            <div style="font-size: 2rem; color: var(--primary-color); font-weight: bold; margin: 1.5rem 0;">
                R$ ${produto.preco.toFixed(2)}
            </div>
            <button class="btn btn-primary" onclick="adicionarAoCarrinho(${produto.id}); fecharDetalhesProduto();">
                Adicionar ao Carrinho
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function fecharDetalhesProduto() {
    document.getElementById('productModal').classList.remove('active');
}

// Finalizar pedido
function finalizarPedido() {
    if (carrinho.length === 0) {
        mostrarNotificacao('Seu carrinho está vazio!', 'error');
        return;
    }

    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const itens = carrinho.map(item => `${item.quantidade}x ${item.nome}`).join(', ');
    
    const mensagem = `Olá! Gostaria de fazer um pedido:\n\n${itens}\n\nTotal: R$ ${total.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/5511987654321?text=${encodeURIComponent(mensagem)}`;
    
    window.open(whatsappUrl, '_blank');
    
    mostrarNotificacao('Redirecionando para WhatsApp... 📱');
}

// Formulário de contato
function enviarFormulario(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (!nome || !email || !mensagem) {
        mostrarMensagemFormulario('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }

    // Simulação de envio
    mostrarMensagemFormulario('Mensagem enviada com sucesso! Entraremos em contato em breve. ✅', 'success');
    
    // Limpar formulário
    document.getElementById('contactForm').reset();
    
    // Esconder mensagem após 5 segundos
    setTimeout(() => {
        document.getElementById('formMessage').style.display = 'none';
    }, 5000);
}

function mostrarMensagemFormulario(texto, tipo) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = texto;
    messageDiv.className = `form-message ${tipo}`;
}

// Notificações
function mostrarNotificacao(mensagem, tipo = 'success') {
    const notificacao = document.createElement('div');
    notificacao.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${tipo === 'success' ? '#d4edda' : '#f8d7da'};
        color: ${tipo === 'success' ? '#155724' : '#721c24'};
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notificacao.textContent = mensagem;
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// LocalStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        atualizarCarrinho();
    }
}

// Adicionar animações CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Animação de scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.produto-card, .depoimento-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Inicializar opacidade dos cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.produto-card, .depoimento-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
    });
});

console.log('🧁 Site da Doce Encanto carregado com sucesso!');
