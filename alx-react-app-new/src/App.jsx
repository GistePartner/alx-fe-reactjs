import Header from './components//Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <Counter />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography"  />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
