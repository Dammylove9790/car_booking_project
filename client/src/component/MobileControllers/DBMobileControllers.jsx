import React from 'react'
import './DBMobileControllers.scss'

import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { images } from '../../asset'
import { DBcontroller, passengercontroller } from '../../content/DBcontroller'
import { handleDashboard, handleMenuClose } from '../../features/toggleSlice/toggleSlice'
import Tabcontroller from '../DriverDB/Tabcontroller/Tabcontroller'
import { useNavigate } from 'react-router-dom'


function DBMobileControllers() {
    const Dispatch = useDispatch();
    const navigate = useNavigate()
    const tab = useSelector(state => state.toggleReducer.dashboarMenu);
  const handleDB = (n) => {
      navigate(n)
     Dispatch(handleMenuClose())
    }
  return (
    <div className='dbNav__menu-container'>
      <div className='MobileControllers'>
          <div className="db__close">
              <AiOutlineClose />
          </div>
          <div className="DBNav__box user__img-details flex">
              <div className="user__img flex center">
                  <img src={images.Elia} alt="Technovix driver" />
              </div>
              <div className="user__details">
                  <h2 className="username-text p-text">Christiana James</h2>
                  <p className="p-text small-text">Driver</p>
              </div>
          </div>
          <div>
            {

              DBcontroller.map((item, index) => {
                return(
                  <Tabcontroller label={item.label} icon={item.icon} key={index} handler={() => handleDB(item.href)}/>
                )
              })
            }
          </div>
          <div className="getApp flex">
            <div className="getApp__content">
              <p className="small-title p-text">Get Mobile App</p>
              <div className="img__con flex">
                <img src={images.playStore} alt="play store" />
                <img src={images.appLogo} alt="apple store" />
              </div>
            </div>
            <img src={images.iphones} alt=""  className='iphones'/>
          </div>
      </div>
    </div>
  )
}

export default DBMobileControllers