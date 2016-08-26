import React, { Component } from 'react'
import { map, kebabCase } from 'lodash'

//Components
import Slider from './Slider'
import Presentation from './Presentation'

const navBarItems = [
  {name: "Accueil", link: '/home'},
  {name: "Le groupe", link: '/le-groupe'},
  {name: "L'activité", link: '/l-activite'},
  {name: "Nous rejoindre", link: '/nous-rejoindre'},
  {name: "Espace collaborateur", link: '/espace-collaborateur'},
  {name: "Contact", link: '/contact'},
  {name: "Mon ipssi", link: '/connexion'}
]

class Home extends Component{
  /******************************** DISPLAY METHODS ********************************/
  render () {
    return (
      <div className="Home">
        <header className="Header_wrapper">
          <div className="Header">
            <h1 className="Title">IPSSI-site</h1>
            <div className="Header_actions">
              <div className="Search_bar">
                <input type="text" className="input Search_input"/>
                <button className="Search_button padding"><i className="fa fa-search"/></button>
              </div>
            </div>
          </div>
        </header>
        <nav className="Navbar_wrapper">
          <ul className="Navbar">{map(navBarItems, (item, i) => <NavItem key={`nav-item-${i}`} item={item}/>)}</ul>
        </nav>
        <Slider/>
        <Presentation/>
      </div>
    )
  }
}

const NavItem = ({ item : { name, link } }) => (
  <li className="Navbar_item" key={"navbar-item-"+kebabCase(name)}>
    <a href={link}>{name}</a>
  </li>
)

export default Home