import React, { Component } from 'react';
//  Import locals
import Nav from './components/navigation';
import Footer from './components/footer';
import Home from './views/home';
import PageHeader from './components/page-header';
//  Import libraries
import { Container } from 'semantic-ui-react';

//  import SomeLibrary from "./somePath"
//  Import styles
import './styles.css';

//  #1: create context ---------------------------------------------
export const AppContext = React.createContext({
  state: { location: 'Spartanburg', activeItem: 'home' }
});

//  #2: create a provider ---------------------------------------------
//  Put any business logic and state you want to be consumed in other child components
class AppProvider extends Component {
  state = {
    location: 'Spartanburg',
    callApi: null,
    activeItem: 'home'
  };

  componentDidMount() {
    // Do something...
    this.setState({
      callApi: false
    });
  }

  handleCallApi = value => {
    this.setState({
      callApi: value
    });
  };

  handleNavigation = page => {
    this.setState({
      activeItem: page
    });
  };

  render() {
    return (
      //  Return context via 'Provider'
      //  Make its context state/data/methods available to children via {this.props.children}
      <AppContext.Provider
        value={{
          state: this.state,
          handleCallApi: this.handleCallApi,
          handleNavigation: this.handleNavigation
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const Wrapper = props => {
  return (
    <Container>
      <PageHeader />
      <Nav />
      {props.children}
      <Footer />
    </Container>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Wrapper>
        <Home />
      </Wrapper>
    </AppProvider>
  );
};

export default App;
