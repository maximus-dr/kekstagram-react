import React from 'react'
import { useState } from 'react';
import classNames from 'classnames';


export default function NavButtons() {

  const navButtons = ['Популярные', 'Новые', 'Обсуждаемые'];
  const [activeButton, setActiveButton] = useState(navButtons[0]);

  const onNavButtonClick = e => {
    setActiveButton(e.target.name);
  }

  return (
    <div className="navbar__buttons">
      {
          navButtons.map(name => 
            { 
              const classes = classNames(
                'navbar__button', 
                {'navbar__button--active': name === activeButton}
              );

              return (
                <button 
                  className={classes} 
                  key={name}
                  name={name}
                  onClick={onNavButtonClick}
                >
                  {name}
                </button>
              )
            }
          )
        }
    </div>
  )
}
