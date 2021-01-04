import React from 'react';
import SearchBar from './searchBar.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import '../main.css';

function App() {
  return (
    <div>
      <body className='gl-body'>
        <Container>
          <h1>Search a Name, Make a Poem</h1>
          <SearchBar fetchData />
        </Container>
      </body>
    </div>
  );
}

export default App;
