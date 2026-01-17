# Copilot Instructions for Delivery Rush (runcar)

## Visión General
Este proyecto es un juego web llamado "Delivery Rush - Entregas Rápidas". El archivo principal es `index.html`, que contiene todo el código relevante. El juego utiliza imágenes locales para representar vehículos, repartidores y elementos del entorno. La interfaz está optimizada para dispositivos móviles y utiliza TailwindCSS desde CDN para estilos rápidos y responsivos.

## Estructura y Componentes Clave
- **index.html**: Contiene todo el código del juego, incluyendo HTML, CSS y JavaScript embebido. No hay archivos JS o CSS externos.
- **Imágenes**: Los archivos PNG, JPG y GIF en la raíz se usan para sprites y fondos. Ejemplos: `camion.png`, `repartidor1.png`, `pavimento.jpg`.
- **Canvas**: El juego se renderiza en un elemento `<canvas>`, con estilos personalizados y efectos visuales (sombra, bordes, animaciones shake/pulse).
- **Controles**: Los botones y entradas están diseñados para interacción táctil y rápida respuesta visual.

## Convenciones y Patrones
- **Estilos**: Se usa TailwindCSS vía CDN. Los estilos personalizados se definen en el `<style>` de `index.html`.
- **Animaciones**: Clases CSS como `.shake`, `.pulse`, `.timer-warning` se usan para feedback visual en eventos clave (fallos, tiempo bajo, etc).
- **Responsive y Mobile**: El diseño prioriza la experiencia móvil, usando meta tags y variables de entorno seguro para dispositivos con notch.
- **No hay frameworks JS**: Todo el JavaScript está embebido en el HTML.

## Flujos de Desarrollo
- **No hay sistema de build**: Los cambios se reflejan directamente en `index.html`.
- **No hay tests automatizados**: Las pruebas se hacen manualmente en el navegador.
- **Debugging**: Usar las DevTools del navegador para inspección y depuración.

## Integraciones y Dependencias
- **TailwindCSS**: Se carga desde CDN, no requiere instalación local.
- **Imágenes**: Todas las imágenes deben estar en la raíz del proyecto para ser accesibles por el juego.

## Ejemplo de patrón importante
```html
<canvas id="gameCanvas"></canvas>
<button class="btn-game">Jugar</button>
<div class="timer-warning">¡Tiempo!</div>
```

## Recomendaciones para agentes
- Modifica solo `index.html` y los archivos de imagen.
- Mantén la compatibilidad móvil y la experiencia táctil.
- Si agregas dependencias, usa CDN y actualiza el `<head>`.
- Documenta cualquier convención nueva directamente en este archivo.

## Archivos clave
- `index.html`: Toda la lógica y estilos.
- Imágenes: Sprites y fondos.

---
Actualiza este documento si se agregan nuevos patrones, dependencias o flujos de trabajo.