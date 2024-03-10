import React from 'react'
import {BsSuitHeart} from 'react-icons/bs'
import {IoBedOutline, IoLocateOutline} from 'react-icons/io5'
import {GiBathtub, GiHomeGarage} from 'react-icons/gi'
import {AiOutlineDoubleRight} from 'react-icons/ai'

import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import house5 from '../assets/house5.jpg'
import house6 from '../assets/house6.jpg'
import house7 from '../assets/house12.jpg'
import house8 from '../assets/house13.jpg'
import house9 from '../assets/house14.jpg'

const NewstDeals = () => {
  return (
    <div>
      <p>NEW</p>
      <h1>NEWEST DEALS</h1>
      <div className='deals'>
        <div className='deal'>
          <div>
            <img src={house1} alt="" />
            <div>
              <BsSuitHeart size={"1.5rem"} />
            </div>
          </div>

          <div>
            <div>
              <div>
                <IoBedOutline />
                <p>5 bed</p>
              </div>
              <div>
                <GiBathtub />
                <p>3 bat</p>
              </div>
              <div>
                <IoBedOutline />
                <p>1 gar</p>
              </div>
            </div>
            <h1>$110,00</h1>
            <div>
              <IoLocateOutline />
              <p>Kissimee, Florida US</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewstDeals