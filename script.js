 function toggleMenu() {
            const nav = document.getElementById('mainNav');
            nav.classList.toggle('mobile-open');
        }

        function filtrarProdutos(categoria) {
            const produtos = document.querySelectorAll('.produto-card');
            const botoes = document.querySelectorAll('.categoria-btn');
            
            botoes.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            produtos.forEach(produto => {
                if (categoria === 'Todos' || produto.dataset.categoria === categoria) {
                    produto.style.display = 'block';
                } else {
                    produto.style.display = 'none';
                }
            });
        }

        function abrirWhatsApp(produto) {
            const mensagem = encodeURIComponent(`Olá! Gostaria de conhecer mais sobre o perfume: ${produto}`);
            const numero = '5500000000000'; // Substituir pelo número real
            window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const nav = document.getElementById('mainNav');
                    nav.classList.remove('mobile-open');
                }
            });
        });

        // Parallax suave
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const hero = document.querySelector('.hero');
                    if (hero && scrolled < 800) {
                        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
                        hero.style.opacity = 1 - (scrolled / 700);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });