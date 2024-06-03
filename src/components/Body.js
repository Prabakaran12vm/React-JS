import { useState } from "react";
import RestaurantCard from "./Restaurantcard";
// import resList from "../utils/mockdata";
const Body = ()=>{
    const [resList, setresList] = 
    useState( [
        {
            "info": {
            "id": "485445",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Old Mahabalipuram Road OMR",
            "areaName": "Old Mahabalipuram Road OMR",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
            ],
            "avgRating": 4,
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-wok-old-mahabalipuram-road-omr-chennai-485445",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            "info": {
            "id": "690702",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Karapakkam",
            "areaName": "Thoraipakkam",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-06-02 03:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
            {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "imageBased": {
            "badgeObject": [
            {
            "attributes": {
            "description": "Delivery!",
            "imageId": "Rxawards/_CATEGORY-Pizza.png"
            }
            }
            ]
            },
            "textBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹189"
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
            "context": "seo-data-065bc65c-6b07-4745-bb5a-f4dfac7ef042"
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-karapakkam-thoraipakkam-chennai-690702",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            "info": {
            "id": "612030",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "bruvs5fgiwda0vfs75sj",
            "locality": "Sholinganallur",
            "areaName": "Sholinganallur",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
            ],
            "avgRating": 4,
            "parentId": "4961",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-06-02 00:00:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
            "context": "seo-data-065bc65c-6b07-4745-bb5a-f4dfac7ef042"
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-sholinganallur-chennai-612030",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            "info": {
            "id": "89583",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "xgj2cn4y2y8mtxisaplp",
            "locality": "Thuraipakkam",
            "areaName": "Thuraipakkam",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "10804",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
            "deliveryTime": 42,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-06-01 23:30:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
            "context": "seo-data-065bc65c-6b07-4745-bb5a-f4dfac7ef042"
            },
            "cta": {
            "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-thuraipakkam-chennai-89583",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
    ]) 
    
    return (
    <div className="body">
        <div className="filter">

            <button className="filter-btn" onClick={()=>{
                const filteredres  = resList.filter((res) => res.info.avgRating > 3.9);
                setresList(filteredres);
                // if (filteredres.length = 0 ){
                //     console.log("No Restaurants Found")
                // };
                

                
                
                
            }}>
                Top Restaurants
            </button>
        </div>

        <div className="res-container">
            {
                resList.map((restaurant) =>( <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />))
            }            
           
        </div>

    </div>
)
}


export default Body;