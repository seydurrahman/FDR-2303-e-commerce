import prod1 from "../src/assets/Prod1.png"
import prod2 from "../src/assets/Prod2.png"
import prod3 from "../src/assets/Prod3.png"
import prod4 from "../src/assets/Prod4.png"
// Best selling product image///
import prod5 from "../src/assets/Prod-5.png"
import prod6 from "../src/assets/Prod-6.png"
import prod7 from "../src/assets/Prod-7.png"
import prod8 from "../src/assets/Prod-8.png"
// Special offers image///
import prod9 from "../src/assets/Prod-9.png"
import prod10 from "../src/assets/Prod-10.png"
import prod11 from "../src/assets/Prod-11.png"
import prod12 from "../src/assets/Prod-12.png"


export const ProductData=[
    {
        id:1, title:"Basic crew neck tee", price:"$44.00", badge:true, color:false, img:prod1, badgeElement:true, discountOffer:"20%",
    },
    {
        id:2, title:"Basic crew neck tee", price:"$44.00", badge:true, color:true, img:prod2, badgeElement:true, discountOffer:"10%",

    },
    {
        id:3, title:"Basic crew neck tee", price:"$44.00", badge:false, color:true, img:prod3, badgeElement:true, discountOffer:"20%",

    },
    {
        id:4, title:"Basic crew neck tee", price:"$44.00", badge:true, color:false, img:prod4, badgeElement:false, discountOffer:"25%",
    },
    
]

export const BestSellingProduct=[
    {
        id:1, title:"Basic crew neck tee", price:"$44.00", badge:true, color:true, img:prod5, badgeElement:true, discountOffer:"20%",
    },
    {
        id:2, title:"Basic crew neck tee", price:"$44.00", badge:true, color:true, img:prod6, badgeElement:true, discountOffer:"10%",

    },
    {
        id:3, title:"Basic crew neck tee", price:"$44.00", badge:false, color:true, img:prod7, badgeElement:true, discountOffer:"20%",

    },
    {
        id:4, title:"Basic crew neck tee", price:"$44.00", badge:true, color:false, img:prod8, badgeElement:false, discountOffer:"25%",
    },
    
]

export const SpecialOffers=[
    {
        id:1, title:"Basic crew neck tee", price:"$44.00", badge:true, color:true, img:prod9, badgeElement:true, discountOffer:"20%",
    },
    {
        id:2, title:"Basic crew neck tee", price:"$44.00", badge:true, color:true, img:prod10, badgeElement:true, discountOffer:"10%",

    },
    {
        id:3, title:"Basic crew neck tee", price:"$44.00", badge:true, color:true, img:prod11, badgeElement:true, discountOffer:"20%",

    },
    {
        id:4, title:"Basic crew neck tee", price:"$44.00", badge:true, color:false, img:prod12, badgeElement:false, discountOffer:"25%",
    },
    
]

export const categories = [
    
    {id:1, title:"Mobile", 
    subcategories:[
        {id:1, title:"Xiomi"},
        {id:2, title:"Nokia"},
        {id:3, title:"Vovo"},
        {id:4, title:"Samsung"},
        ]
    },

    {id:2, title:"Apple",  
    subcategories:[
        {id:1, title:"I-phone1"},
        {id:2, title:"I-phone2"},
        {id:3, title:"I-phone3"},
        {id:4, title:"I-phone4"},
            
        ]
    },

    {id:3, title:"Desktop", 
    subcategories:[
        {id:1, title:"Ausus"},
        {id:2, title:"Intel"},
        {id:3, title:"MBM"},
        ]
    },

    {id:4, title:"Accessories", 
    subcategories:[
                
        ]
    },
    
    {id:5, title:"Cloths", 
    subcategories:[
        {id:1, title:"Mens"},
        {id:2, title:"Womens"},
        {id:3, title:"Baby"},

        ]
    },
    
    ]

export const shopByColor =[
    {id:1, colorCode:"#000000", title:"Black"},
    {id:1, colorCode:"#ff8686", title:"Pink"},
    {id:1, colorCode:"#7ed321", title:"Green"},
    {id:1, colorCode:"#b6b6b6", title:"Gray"},
    {id:1, colorCode:"#15cba5", title:"Green"},
]