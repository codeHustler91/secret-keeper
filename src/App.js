import './App.css';
import Header from './components/header/header';
import SocialPanel from './components/social-panel/SocialPanel';
import UserSecrets from './components/user-secrets/UserSecrets';

function App() {
  return (
    <div className="App">
      <Header />
      <UserSecrets />
      <SocialPanel />
    </div>
  );
}

export default App;
