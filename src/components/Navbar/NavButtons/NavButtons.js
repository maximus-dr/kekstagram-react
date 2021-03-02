import React from 'react'
import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { sortPosts } from '../../../store/actions/postActions';


export default function NavButtons() {

  const navButtons = ['Новые', 'Популярные', 'Обсуждаемые'];
  const [activeButton, setActiveButton] = useState(navButtons[0]);

  const dispatch = useDispatch();

  const onNavButtonClick = e => {
    setActiveButton(e.target.name);
    dispatch(sortPosts(e.target.name));
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
