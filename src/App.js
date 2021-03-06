import './App.css';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { Article, Feature, Brand, Cta, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
