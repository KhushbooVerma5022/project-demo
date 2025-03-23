import { createRoot } from 'react-dom/client'; 
import './style.css';
import App from './App';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
  

const root = createRoot(document.querySelector("#root")); 
root.render(<App />);

