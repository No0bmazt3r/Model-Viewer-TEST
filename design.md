# Design Document: Responsive Scalable `<model-viewer>` Layout with Dark/Light Mode and Hover Animations

## Objective
Create a responsive web layout displaying 3D models using the [`<model-viewer>`](https://modelviewer.dev/) component.  
The layout should:
- Scale automatically based on screen size.
- Show a variable number of models per row (up to 5 on large screens, fewer on smaller screens).
- Enable **infinite horizontal scrolling**.
- Support **dark and light modes**.
- Include **smooth hover animations** for interaction feedback.

---

## 1. Layout Structure
A horizontally scrollable container with flexbox layout for dynamic model arrangement.

### Example HTML
```html
<div class="scroll-container">
  <div class="model-row">
    <model-viewer src="models/model1.glb" alt="Model 1" camera-controls auto-rotate></model-viewer>
    <model-viewer src="models/model2.glb" alt="Model 2" camera-controls auto-rotate></model-viewer>
    <model-viewer src="models/model3.glb" alt="Model 3" camera-controls auto-rotate></model-viewer>
    <!-- more models... -->
  </div>
</div>
```

---

## 2. CSS Styling

```css
:root {
  --bg-color: #111;
  --card-border: #fff;
  --hover-scale: 1.05;
  --light-bg: #f9f9f9;
  --light-border: #222;
}

/* Auto-detect user preference */
@media (prefers-color-scheme: light) {
  :root {
    --bg-color: var(--light-bg);
    --card-border: var(--light-border);
  }
}

body {
  margin: 0;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  transition: background 0.3s ease;
}

.scroll-container {
  width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
}

.model-row {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
}

model-viewer {
  width: clamp(150px, 20vw, 250px);
  height: clamp(200px, 30vh, 350px);
  border: 2px solid var(--card-border);
  border-radius: 12px;
  flex-shrink: 0;
  background: #000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover animation */
model-viewer:hover {
  transform: scale(var(--hover-scale));
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.15);
}
```

---

## 3. Responsiveness Behavior

| Screen Width | Models Visible | Scroll Behavior |
|---------------|----------------|------------------|
| ≥ 1600px      | 5              | Infinite scroll enabled |
| 1200–1599px   | 4              | Smooth scroll |
| 768–1199px    | 3              | Horizontal scroll |
| < 768px       | 2              | Swipe scroll |

`clamp()` ensures each `<model-viewer>` scales based on viewport size automatically.

---

## 4. Infinite Scroll Logic

```js
const container = document.querySelector('.model-row');

container.addEventListener('scroll', () => {
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) {
    for (let i = 0; i < 3; i++) {
      const mv = document.createElement('model-viewer');
      mv.src = `models/model${Math.floor(Math.random() * 5) + 1}.glb`;
      mv.alt = 'New model';
      mv.setAttribute('camera-controls', '');
      mv.setAttribute('auto-rotate', '');
      container.appendChild(mv);
    }
  }
});
```

---

## 5. Optional Enhancements
- **Dark/Light Mode Toggle:** Add a manual button to override system theme.
- **Lazy Loading:** Load `<model-viewer>` instances only when visible using IntersectionObserver.
- **Smooth Momentum Scroll:** Add inertia using CSS `scroll-snap-type` or GSAP.

---

## 6. Expected Outcome
A fully responsive, scalable `<model-viewer>` gallery that supports dark/light themes, fluid hover effects, and infinite scroll — adapting seamlessly to all screen sizes.
