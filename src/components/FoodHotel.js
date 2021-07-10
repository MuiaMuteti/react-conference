import './FoodHotel.css'
import ImageContentCard from './ImageContentCard'

import FoodData from './data/FoodData';
import HotelData from './data/HotelData';

export default function FoodHotel() {
    const food = FoodData;
    const hotels = HotelData;

    let foodHotelDetails = (item) => (
        <ImageContentCard 
            key={item.id}
            imgSrc={item.imageSource}
            title={item.name} >
            <div className="foodDetails">
                <h2 className="name" >{item.name}</h2>
                <p className="desc" >{item.description}</p>
                <p className="directions" >Directions:</p>
                <p className="location" >{item.directions}</p>
            </div>
        </ImageContentCard>
    );

    let foodList = food.map(item => foodHotelDetails(item));
    let hotelList = hotels.map(item => foodHotelDetails(item));

    return (
        <div className="foodHotel" >
            <h1>Where to eat, drink or sleep</h1>
            <section className="food">
                <h2 className="subTitle2" >Food options</h2>
                <div className="foodHotelList">
                    { foodList }
                </div>
            </section>
            
            <section className="hotel">
                <h2 className="subTitle2" >Hotel options</h2>
                <div className="foodHotelList">
                    { hotelList }
                </div>
            </section>
        </div>
    );
}