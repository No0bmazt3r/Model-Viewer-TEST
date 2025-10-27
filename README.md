# 3D Model Viewer Carousel

This project is a responsive, auto-scrolling 3D model viewer carousel built with React, Vite, and TypeScript. It showcases a seamless, infinite loop of 3D models that pauses on hover, allowing users to interact with each model individually.

## Features

- **Infinite Auto-Scroll**: Models scroll continuously in a seamless loop, creating an engaging carousel effect.
- **Pause on Hover**: The animation pauses when you hover over the carousel, allowing you to interact with the 3D models.
- **Responsive Design**: The layout adapts to different screen sizes, ensuring a great experience on any device.
- **Dark/Light Mode**: The application automatically adapts to your system's color scheme.
- **Easy to Customize**: You can easily change the 3D models, adjust the animation speed, and resize the model viewers.

## How It Works

The application uses the `<model-viewer>` web component to display 3D models. The core logic is built with React and TypeScript, and the project is set up with Vite for a fast development experience.

The seamless infinite scroll is achieved using CSS animations. The list of models is duplicated in the `App.tsx` component, and a CSS keyframe animation scrolls the container horizontally. When the animation completes a cycle, it seamlessly jumps back to the beginning, creating the illusion of an infinite loop.

The main files to look at are:
- `src/App.tsx`: The main React component where the model list is defined and rendered.
- `src/index.css`: The stylesheet that contains all the styling, including the scrolling animation and the responsive layout.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository** (or download the files).
2.  **Install the dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
This will start the application on a local development server. You can view it in your browser at the URL provided in the terminal (usually `http://localhost:5173`).

## How to Play With It

You can easily customize the application to your liking. Here are a few examples:

### Changing the 3D Models

To change the 3D models in the carousel, open the `src/App.tsx` file and modify the `models` array. You can add, remove, or replace the URLs with links to your own `.glb` or `.gltf` models.

```javascript
const models = [
  'https://your-model-url.glb',
  'https://another-model.glb',
  // Add as many as you like
];
```

### Adjusting the Animation Speed

To change the speed of the auto-scrolling animation, open the `src/index.css` file and find the `.model-row-wrapper` class. You can change the `animation` duration (the first value, in seconds) to make the scrolling faster or slower.

```css
.model-row-wrapper {
  display: flex;
  animation: scroll 60s linear infinite; /* Change 60s to a different value */
}
```

### Resizing the Model Viewers

To change the size of the 3D model viewers, open the `src/index.css` file and find the `model-viewer` selector. You can adjust the `width` and `height` properties. The `clamp()` function is used to create a responsive size, so you can change the minimum, preferred, and maximum values.

```css
model-viewer {
  width: clamp(250px, 30vw, 400px);  /* Adjust these values */
  height: clamp(300px, 40vh, 500px); /* Adjust these values */
  /* ... */
}
```