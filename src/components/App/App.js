import React from 'react';
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import InfoDate from "../InfoDate/InfoDate";
import Dresscode from "../DressCode/Dresscode";
import Details from "../Details/Details";
import Questions from "../Questions/Questions"
import './App.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function App() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [isCloseBurger, setIsCloseBurger] = React.useState(true);
  const [isChangeBurger, setIsChangeBurger] = React.useState(false);

  function changeBurger() {
    if (isChangeBurger) {
      handleCloseBurger ();
    } else {
      handleOpenBurger ();
    }
  }
  
  function handleOpenBurger () {
    setIsOpenBurger(true);
    setIsButtonVisible(false);
    setIsCloseBurger(false);
    setIsChangeBurger(true);
  }

  function handleCloseBurger () {
    setIsOpenBurger(false);
    setIsButtonVisible(true);
    setIsCloseBurger(true);
    setIsChangeBurger(false);
  }

  return (
    <div className="App">
      <Menu
        isChangeBurger={isChangeBurger}
        onVisibleBurger={changeBurger} />
      <div className="App__main">
        <Header />
        <InfoDate />
        <Dresscode />
        <Questions />
        <Details />
      </div>
      <BurgerMenu
        isOpenBurger={isOpenBurger}
        onCloseBurger={changeBurger} />
    </div>
  );
}

export default App;
