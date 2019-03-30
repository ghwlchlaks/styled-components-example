import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Hello World
        </Title>
      </Wrapper>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default App;
