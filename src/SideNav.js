import React from 'react'
import './SideNav.css'

export default (props) => {
  let itemLinks = [];
  for (let item of props.items) {
    itemLinks.push(
      <div className="sideNavItem">
        <a key={item} href={`/${item}`}>{item}</a>
      </div>
    );
  }

  return (
    <div id="sideNav">{itemLinks}</div>
  )
}