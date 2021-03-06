import React from 'react';

import './SpecialMenu.css';
import {images,data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
	  <div className="app__specialMenu-title">
		  <SubHeading title="Menu that fits you palatte" />
		  <h1 className="headtext__cormorant">Today's Special</h1>
	  </div>

	  <div className="app__specialMenu-menu">
		  <div className="app__specialMenu-menu_wine flex__center">
			  <p className="app__specialMenu_menu_heading">Wine & Beer</p>
			  <div className="app__specialMenu_menu_items">
				  {data.wines.map((wine,index) => {
					  return(<p>{wine.title}</p>)
				  })}
			  </div>
		  </div>

          <div className="app__specialMenu-menu_img">
              <img src={images.menu} alt="menu item"/>
          </div>

          <div className="app__specialMenu-menu_cocktail flex__center">
              <p className="app__specialMenu_menu_heading">Cocktails</p>
              <div className="app__specialMenu_menu_items">
                  {data.cocktails.map((cocktail,index) => {
                      return(<p>{cocktail.title}</p>)
                  })}
              </div>
          </div>

          <div style={{marginTop:'15px'}}>
              <button type="button" className="custom__button">View More</button>
          </div>
      </div>
  </div>
);

export default SpecialMenu;
