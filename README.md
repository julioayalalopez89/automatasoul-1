# AutomataSoul

Un robot que aprende a jugar videojuegos desde cero: ve la pantalla, controla teclado y mouse como un humano y sigue órdenes por voz.

> El proyecto se reinició en noviembre de 2026. El código anterior (app web en React + Three.js) sigue disponible en el historial de git.

## Idea

- **Ojos:** captura de pantalla (y, más adelante, una cámara física apuntando al monitor).
- **Cerebro:** un modelo de visión y lenguaje que decide la siguiente intención a partir de la imagen y la orden.
- **Reflejos:** control rápido en Python (detección de objetos y reglas) para reaccionar en tiempo real.
- **Manos:** entradas reales de teclado y mouse; después, actuadores físicos.
- **Oídos:** reconocimiento de voz para darle órdenes como a un compañero.

## Fases

1. Ojos y manos: capturar la pantalla y controlar teclado y mouse desde código.
2. Agente de escritorio por turnos: captura → decisión → acción.
3. Primer juego simple aprendido desde cero (Chrome Dino, Flappy Bird, Tetris).
4. Reflejos en tiempo real y un juego más complejo (Minecraft).
5. Aprendizaje por imitación con partidas grabadas.
6. Robot físico: cámara y "dedos" que juegan en una PC real.

## Canal

El proceso se documenta en video (en español): la IA falla, aprende y mejora.

## Reglas

Solo juegos de un jugador, servidores privados o juegos que permiten bots. Nada de juegos online con anti-cheat.
