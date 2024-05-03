import React from "react";
import "./App.scss";
import HeaderSlider from './components/HeaderSlider/HeaderSlider'
import FooterGroup from './components/Footer/FooterReGroup/FooterGroup';
import Application from './components/Application/Application';
import NextLove from './components/NextLove/NextLove'
import ControlPart from './components/ControlPart/ControlPart'
import JoinPart from './components/JoinPart/JoinPart'
import FindPerfect from './components/FindPerfect/FindPerfect'
import Questions from "./components/Questions/Questions";


export default function App() {
  return (
    <div className="App">
      <HeaderSlider/>
      <NextLove/>
      <FindPerfect/>
      <ControlPart/>
      <JoinPart/>
      <Application/>
      <Questions/>
      <FooterGroup/>
    </div>
  )
}
