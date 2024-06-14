
import confetti from 'canvas-confetti'
interface ConfettiOptions {
    origin?: { y: number}
    spread?: number;
    startVelocity?: number
    decay?: number
    scalar?: number
    particleCount?: number 
    particleRatio: number
}

let count = 200
const defaults = {
    origin: { y: 0.7}
};

const configurations: ConfettiOptions[] = [
    { spread: 26, startVelocity: 55, particleRatio: 0.25 },
    { spread: 60, particleRatio: 0.2 },
    { spread: 100, decay: 0.91, scalar: 0.8, particleRatio: 0.35 },
    { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2,  particleRatio: 0.1 },
    { spread: 120, startVelocity: 45, particleRatio: 0.1 },
]

export function fireConfetti() {
    configurations.forEach(config => {
        confetti({
            ...defaults,
            ...config,
            particleCount: Math.floor(count * config.particleRatio)
        });
    })
}