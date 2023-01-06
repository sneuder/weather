# Weather App
This is an app which consumes an API from [OpenWeatherMap](https://openweathermap.org/api), built with React, TypeScript, and Redux. In general, the app displays information about city weather and its forecast. We can search cities and countries by name and change the units temperature.

## Installation
It is important to mention that the `node` version used for this project was the `v14`. If you have any problem related to this technology, I would recommend you to use `nvm` for changing the version `node`

### Steps for installation
In case you do not want to do all this process, and you just want to use the project, click [Weather App](https://weather-sneuder.vercel.app/) to check it in producction. 

- `git clone` this repository: `git clone`
- Install the dependencies with this command: `npm install` or `npm i`
- Create and configure the `.env` file for the env variables like this:
```
VITE_BASE_URL=https://api.openweathermap.org/data/2.5/
VITE_API_KEY=ce026dc549f7e825335d37270df52b23
```
> I have gotten an `API KEY` in case you do not want to visit [OpenWeatherMap](https://openweathermap.org/api) and sign up to get the key. Just copy and past the above section.

- Once you have completed the previous steps, use `npm run dev` to start the project.
- Enjoy the app.

## User stories
- User can search cities and countries by name.
- User can see the forecasts of found city or country.
- User can change the unit of temperature.

## Technical aspects
- When the app is started, it gets the city based on its local date (it contains the country too). If the date with the country is not found, the app will retrieve Londres.
- 
