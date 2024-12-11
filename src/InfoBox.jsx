import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {

    const images = {
        "clear sky": "https://cdn2.hubspot.net/hubfs/2936356/maxresdefault.jpg",
        "few clouds": "https://images.unsplash.com/photo-1470004914212-05527e49370b",
        "scattered clouds": "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5",
        "broken clouds": "https://images.unsplash.com/photo-1516893840322-2c2a0a4a9f6e",
        "shower rain": "https://images.unsplash.com/photo-1559201328-9acb4dd5dc72",
        "rain": "https://images.unsplash.com/photo-1527090496-346715b6e0f3",
        "thunderstorm": "https://images.unsplash.com/photo-1561485132-59468cd0b553",
        "snow": "https://images.unsplash.com/photo-1418985991508-e47386d96a71",
        "mist": "https://images.unsplash.com/photo-1459496330497-25b1010dd9c8",
        "haze": "https://images.unsplash.com/photo-1488096547158-4646f08c1d62",
        "light snow": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraNTwnG17AkCUELyH79jDGElSn_W94dbPWg&s",
        "clouds": "https://images.unsplash.com/photo-1501887482762-48b00e85fc95",
        "overcast clouds": "https://plus.unsplash.com/premium_photo-1667143327769-1c36fd30a7c6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3ZlcmNhc3QlMjBza3l8ZW58MHx8MHx8fDA%3D",
        "light intensity drizzle": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/download_1_7-sixteen_nine.jpg?VersionId=HuimUTTelvGIEd4r0hyvw2lz_ePzmyay&size=690:388",
        Default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBURDnNv-DxCW6XR4N0bRVUej-YRpdpvKaA&s"
    };

    // Get the image URL based on the weather condition, or use the default image if no match
    const imageUrl = images[info?.weather] || images.Default;

    return (
        <div className="infoBox">
            {info && info.city && info.weather && info.temp && info.feelslike && info.humidity ? (
                <Card className="card">
                    <CardMedia
                        className="cardMedia"
                        image={imageUrl}
                        title={info.weather}
                    />
                    <CardContent className="cardContent">
                        <Typography className="title"><h1> {info.city}</h1>
                           
                        </Typography>
                        <Typography className="weatherInfo">
                            <div className="weatherText">
                                <strong>Weather:</strong> {info.weather}
                            </div>
                            <div className="weatherText">
                                <strong>Temperature:</strong> 
                                <span className="weatherValue">{info.temp} °C</span>
                            </div>
                            <div className="weatherText">
                                <strong>Feels Like:</strong> 
                                <span className="weatherValue">{info.feelslike} °C</span>
                            </div>
                            <div className="weatherText">
                                <strong>Humidity:</strong> 
                                <span className="weatherValue">{info.humidity} %</span>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    );
}
