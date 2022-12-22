import { wrap } from 'module'
import React from 'react'
import {Header, Footer } from '../'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className="layout">
      <div>
        <Header />
        <main>{children}</main>
      </div> 
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: grid;
          grid-template-rows: 1fr auto;
        }
        footer {
          grid-row-start: 2;
          grid-row-end: 3;
        }
      `}</style>
    </div>
  );
}

export default Layout