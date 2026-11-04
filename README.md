# AutomataSoul

**AutomataSoul** es un proyecto para construir un **compañero de equipo con IA**: una IA capaz de ver la pantalla, usar el teclado y el ratón del PC y jugar distintos juegos junto al usuario, como un teammate más.

Este repositorio es, por ahora, la **parte visual y web** del proyecto: el "cuerpo" del robot y la puerta de entrada (login). La IA y el control del PC todavía no existen aquí; están en el [Roadmap](#roadmap).

## Estado actual

Lo que hay hoy en este repo:

- **Escena 3D** con React + Three.js (`@react-three/fiber` y `@react-three/drei`):
  - **Robocito**, el robot animado (`RobotExpressive.glb`), que sigue el movimiento del ratón, gira con el botón *GIRAR ROBOT* y baila con *Bailar 🕺*.
  - Un modelo propio (`chip.gltf`) y un fondo 3D de rocas.
- **Estado del robot** (felicidad, energía, hambre) con botones *Jugar*, *Alimentar* y *Reiniciar*; se guarda en `localStorage`.
- **Login con Google** mediante Supabase Auth (ver [Configuración](#configuración)).

Lo que **todavía no** hay: IA, visión de pantalla, control de teclado/ratón ni integración con juegos.

## Stack

| Parte | Tecnología |
|---|---|
| UI | React 19 + TypeScript |
| Build / dev server | Vite 6 |
| 3D | Three.js, `@react-three/fiber`, `@react-three/drei` |
| Estilos | Tailwind CSS 4 |
| Login | Supabase Auth (Google OAuth) |

## Requisitos

- Node.js 20 o superior y npm.
- Un proyecto de Supabase con el proveedor **Google** activado en *Authentication → Providers* (para el login).

## Instalación

```bash
git clone https://github.com/julioayalalopez89/automatasoul-1.git
cd automatasoul-1
npm install
cp .env.example .env   # y rellena las variables (ver Configuración)
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`).

## Configuración

La app usa Supabase para el login. La URL y la anon key se leen de variables de entorno de Vite:

| Variable | Descripción |
|---|---|
| `VITE_SUPABASE_URL` | URL del proyecto (`https://<ref>.supabase.co`) |
| `VITE_SUPABASE_ANON_KEY` | Anon key pública del proyecto |

Ambas están en Supabase → *Project Settings* → *API*.

```bash
cp .env.example .env   # o .env.local
# rellena los dos valores
npm install
npm run dev
```

`.env` y `.env.local` están en `.gitignore`: no se suben al repo. Si falta alguna variable, la app lanza un error claro al arrancar indicando cuál.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Comprueba tipos (`tsc -b`) y genera el build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de `dist/` |
| `npm run lint` | Revisa el código con ESLint |

## Estructura

```
public/models/          Modelos 3D (robot, chip y fondo)
src/
  App.tsx               Pantalla principal: login, estado del robot y escena
  scenes/Scene.tsx      Canvas 3D: luces, fondo, modelos y cámara
  components/           Robocito, Chip, Background y Auth/LoginButton
  hooks/useRobotState.ts  Estado del robot guardado en localStorage
  lib/supabaseClient.ts   Cliente de Supabase (lee las variables de entorno)
```

## Roadmap

Ideas para llegar a la visión del compañero de juego con IA. Son pasos posibles, **sin fechas comprometidas**:

1. **Base del proyecto** — CI con lint y build en cada PR ([#4](https://github.com/julioayalalopez89/automatasoul-1/issues/4)) y limpieza del proyecto con modelos 3D más livianos ([#5](https://github.com/julioayalalopez89/automatasoul-1/issues/5)).
2. **Prototipo de control del PC** — la IA ve la pantalla (capturas) y controla teclado/ratón en un entorno de prueba ([#7](https://github.com/julioayalalopez89/automatasoul-1/issues/7)).
3. **Primer juego** — elegir un juego sencillo y que la IA complete acciones básicas en él.
4. **Jugar en equipo** — que la IA coordine con el usuario (objetivos compartidos, comunicación por texto o voz).
5. **Avatar conectado** — que Robocito refleje en la escena 3D lo que la IA está haciendo o "sintiendo".

## Proyectos relacionados

- [AutoMataArenaV2](https://github.com/julioayalalopez89/AutoMataArenaV2) — pelea de robots por WebSocket, otro proyecto de la familia *Automata*.
