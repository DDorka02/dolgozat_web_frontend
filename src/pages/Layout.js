import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';


export default function Layout() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav>
        <Nav.Item>
            <Nav.Link href='/' className='nav-link-black'>Tesztek</Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>Tesztkérdések</h1>
      </header>
      <article>
        <Outlet/>
        </article>
        <footer>Dobszay Dorka</footer>
    </div>
  )
}
