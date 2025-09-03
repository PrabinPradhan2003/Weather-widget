import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {

    const warm_weather =
    "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80";
  const cold_weather =
    "https://images.unsplash.com/photo-1608889175156-3a9b25d05f3f?auto=format&fit=crop&w=800&q=80";
  const rain_weather =
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80";


    return (
        <div className="InfoBox">

            <div className='InfoCard'>
                <Card sx={{ width: 400, boxShadow: 3 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.temp > 25 ? warm_weather : info.temp > 15 ? rain_weather : cold_weather}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <p>Weather Info</p>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>City: {info.city}, {info.country}</p>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Wind Speed: {info.wind} km/h</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
