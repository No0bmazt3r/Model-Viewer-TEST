
import type { ModelViewerElement } from '@google/model-viewer';

// Add this to your project's .d.ts file to make TypeScript aware of the <model-viewer> component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<ModelViewerElement>,
        ModelViewerElement
      >;
    }
  }
}

const models = [
  'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  'https://modelviewer.dev/shared-assets/models/Horse.glb',
  'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb',
  'https://modelviewer.dev/shared-assets/models/alpha-blend-litmus.glb',
  'https://modelviewer.dev/shared-assets/models/damaged-helmet.glb',
];

function App() {
  return (
    <div className="scroll-container">
      <div className="model-row-wrapper">
        <div className="model-row">
          {models.map((src, index) => (
            <model-viewer
              key={`a-${index}`}
              src={src}
              alt={`A 3D model ${index + 1}`}
              camera-controls
              auto-rotate
            ></model-viewer>
          ))}
        </div>
        <div className="model-row">
          {models.map((src, index) => (
            <model-viewer
              key={`b-${index}`}
              src={src}
              alt={`A 3D model ${index + 1}`}
              camera-controls
              auto-rotate
            ></model-viewer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
