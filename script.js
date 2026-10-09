document.addEventListener('DOMContentLoaded', () => {
    // Efeito de brilho neon dinâmico nos cartões ao mover o mouse
    const cards = document.querySelectorAll('.cyber-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 243, 255, 0.15), rgba(20, 20, 35, 0.75) 70%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(20, 20, 35, 0.75)';
        });
    });

    console.log('Portal do Colégio Padre Eduardo Michelis carregado com sucesso!');
});