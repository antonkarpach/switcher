import './App.scss';
import Switcher from "./components/switcher/Switcher";
import {switchContent, switchLongContent} from "./switchContent";

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <h1>Test task to Intelico Systems</h1>
        <div className="app-content-wrapper">
          <h3>Default component</h3>
          <Switcher />
        </div>
        <div className="app-content-wrapper">
          <h3>Clicked component</h3>
          <Switcher state/>
        </div>
        <div className="app-content-wrapper">
          <h3>Component with object of names</h3>
          <Switcher content={switchContent} />
        </div>
        <div className="app-content-wrapper">
          <h3>Clicked component with object of names</h3>
          <Switcher content={switchContent} state />
        </div>
        <div className="app-content-wrapper">
          <h3>Default component onto container with small width</h3>
          <div className="app-content-small-width">
            <Switcher />
          </div>
        </div>
        <div className="app-content-wrapper">
          <h3>Component with long content</h3>
            <Switcher content={switchLongContent} />
        </div>
      </div>
    </div>
  );
}

export default App;
