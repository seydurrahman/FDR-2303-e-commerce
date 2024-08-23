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
        <div className='py-5 lg:py-0'>
        <PhoneoftheYear/>
        </div>
        <div className='pb-10 lg:pb-0'>
        <NewArrival headdingTitle={"Special Offers"} pdata={SpecialOffers}/>
        </div>
    </div>
  )
}

export default Home