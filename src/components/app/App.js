import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import { Component } from "react";
import decoration from "../../resources/img/vision.png";
import ErrorBoundary from "../errorBoundarie/ErrorBoundarie";

class App extends Component{

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  state = {
    selectedChar: null
  }

  render(){
    return (
    <div className="app">
      <AppHeader />
      <main>
        <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>
        
        <div className="char__content">
          <ErrorBoundary>
            <CharList onCharSelected={this.onCharSelected}/>
          </ErrorBoundary>
          

          <ErrorBoundary>
            <CharInfo charId={this.state.selectedChar}/>
          </ErrorBoundary>
          
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
  }
  
};

export default App;
