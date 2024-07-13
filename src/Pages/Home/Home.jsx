import React from 'react'
import Header from '../../Component/HomeComponent/Header/Header'
import MenuBar from '../../Component/HomeComponent/MenuBar/MenuBar'
import Banner from '../../Component/HomeComponent/Banner/Banner'
import Shipping from '../../Component/HomeComponent/Shipping/Shipping'
import SaleInfo from "../../Component/HomeComponent/SaleInfo/SaleInfo"
import NewArrival from '../../Component/HomeComponent/NewArrival/NewArrival'
import PhoneoftheYear from '../../Component/HomeComponent/PhoneoftheYear/PhoneoftheYear'
import { ProductData ,BestSellingProduct} from '../../../Data/Data'
const Home = () => {
  return (
    <div>
        <Header/>
        <MenuBar/>
        <Banner/>
        <Shipping/>
        <SaleInfo/>
        <NewArrival headdingTitle={"New Arrival"} pdata={ProductData}/>
        <NewArrival headdingTitle={"Our best selling"} pdata={BestSellingProduct}/>
        <PhoneoftheYear/>
    </div>
  )
}

export default Home