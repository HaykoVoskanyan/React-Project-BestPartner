import React from 'react';
import SectionN1 from "../FooterLeft/SectionN1";
import SectionN2 from "../FooterCenter/SectionN2";
import SectionN3 from"../FooterRight/SectionN3";
import './FooterGroup.scss'
import FotterBottom from '../FooterBottom/FotterBottom';

export default function FooterGroup() {
  return (
    <>
    <footer className="Footer">
      <SectionN1/>
      <SectionN2/>
      <SectionN3/>
    </footer>
      <FotterBottom/>
    </>
  )
}

