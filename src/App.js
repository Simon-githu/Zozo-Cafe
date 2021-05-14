import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './components/Home';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Comments from './components/Comments';
import { commentsData } from './components/Comments/data';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
      <Products heading='Choose your favorite' data={productData}  />
      <Feature />
       <Comments heading='Zozo Cafe Comments' data={commentsData} /> 
       <Contact />
      <Footer />
    </Router>
  );
}

export default App;
