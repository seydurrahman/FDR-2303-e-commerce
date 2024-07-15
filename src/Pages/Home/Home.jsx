import React from 'react'
import Banner from '../../Component/HomeComponent/Banner/Banner'
import Shipping from '../../Component/HomeComponent/Shipping/Shipping'
import SaleInfo from "../../Component/HomeComponent/SaleInfo/SaleInfo"
import NewArrival from '../../Component/HomeComponent/NewArrival/NewArrival'
import PhoneoftheYear from '../../Component/HomeComponent/PhoneoftheYear/PhoneoftheYear'
import { ProductData ,BestSellingProduct,SpecialOffers} from '../../../Data/Data'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Shipping/>
        <SaleInfo/>
        <NewArrival headdingTitle={"New Arrival"} pdata={ProductData}/>
        <NewArrival headdingTitle={"Our best selling"} pdata={BestSellingProduct}/>
        <PhoneoftheYear/>
        <NewArrival headdingTitle={"Special Offers"} pdata={SpecialOffers}/>
    </div>
  )
}

export default Home