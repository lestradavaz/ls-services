import Lenis from 'lenis';

const lenis = new Lenis({
    duration: 1.2, // Duración de la interpolación
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    gestureOrientation: 'vertical',
    orientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
    infinite: false
});

function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
