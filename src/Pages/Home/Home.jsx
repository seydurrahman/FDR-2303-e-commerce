import React from 'react'
import Header from '../../Component/HomeComponent/Header/Header'
import MenuBar from '../../Component/HomeComponent/MenuBar/MenuBar'
import Banner from '../../Component/HomeComponent/Banner/Banner'
import Shipping from '../../Component/HomeComponent/Shipping/Shipping'
import SaleInfo from "../../Component/HomeComponent/SaleInfo/SaleInfo"
import NewArrival from '../../Component/HomeComponent/NewArrival/NewArrival'

const Home = () => {
  return (
    <div>
        <Header/>
        <MenuBar/>
        <Banner/>
        <Shipping/>
        <SaleInfo/>
        <NewArrival/>
    </div>
  )
}

export default Home