import React from 'react';
import {AllMenu} from './AllMenuContext';
import Header from './Header';
import Hero from './Hero';
import SpecialDish from './SpclDish';
import Categories from './Categories';
import CheckOut from './CheckOut';
import Chef from './Chef';
import Footer from './Footer';




const Menus = () => {
  return(
    <div className="Menus">
      <Header/>
      <Hero />
      <AllMenu>
        <SpecialDish/> 
        <Categories/>
      </AllMenu>
      <Chef/>
      <Footer />
    </div>
    )
}

export default Menus