import logo from './logo.svg';
import './App.css';
import User from './components/User';
import FormClass from './components/FormClass';
import UserClass from './components/UserClass';
import Rendering from './components/Rendering';
import FormFn from './components/FormFn';
import Count from './components/Count';
import EffectHook from './components/EffectHook';
import ParentToChild from './App/ParentToChild';
import ChildToParent from './App/ChildToParent';
function App() {
  return (
    <ChildToParent/>

  );
}

export default App;
