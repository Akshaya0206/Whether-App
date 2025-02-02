import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    let INIT_URL="https://www.sciencekids.co.nz/images/pictures/weather/valleymist.jpg";
    let HOT_URL="https://media-cdn.tripadvisor.com/media/photo-s/07/08/1f/fb/pool--v4591414.jpg";
    let COLD_URL="https://th.bing.com/th/id/OIP.uh-L6gAp688Phqm_f_TmOwAAAA?rs=1&pid=ImgDetMain";
    let RAINY_URL="https://th.bing.com/th/id/OIP.6cXZYz7zuu51fSo1toQtEwAAAA?w=400&h=400&rs=1&pid=ImgDetMain";
    return(
    <div>
        <h3>Weather Info</h3>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity
            >80 ? RAINY_URL : info.temp>15 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;&nbsp;
          <span >{info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ?  <WbSunnyIcon/> : <AcUnitIcon/>}</span>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temparature = {info.temp}&deg;C</p>
          <p>Maximum Temparature = {info.maxTemp}&deg;C</p>
          <p>Minimum Temparature = {info.minTemp}&deg;C</p>
          <p>Humidity = {info.humidity}&deg;C</p>
          <p>The weather is described as {info.weather} and feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
}