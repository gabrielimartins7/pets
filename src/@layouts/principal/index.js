import React from 'react'

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

export default function PrincipalLayout({ children }) {
  return (
    <>
      <Header/>
      <div>
      {children}
      </div>
      <Footer/>
    </>
  )
}