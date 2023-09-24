from datetime import datetime
import requests

def currentWeather(lat, long, key):
    LONGITUDE = long
    LATITUDE = lat
    API_KEY = key
    try:
        CONVERSION_URL = f'http://api.openweathermap.org/geo/1.0/reverse?lat={LATITUDE}&lon={LONGITUDE}&appid={API_KEY}'

        city_response = requests.get(CONVERSION_URL).json()

        weather_url = f'https://api.openweathermap.org/data/2.5/weather?lat={LATITUDE}&lon={LONGITUDE}&units=imperial&appid={API_KEY}'
        weather_response = requests.get(weather_url).json()

        humidity = weather_response['main']['humidity']
        temperature = weather_response['main']['temp']
        sunrise = datetime.utcfromtimestamp(weather_response['sys']['sunrise']).strftime('%H:%M:%S UTC on %Y-%m-%d')
        sunset = datetime.utcfromtimestamp(weather_response['sys']['sunset']).strftime('%H:%M:%S UTC on %Y-%m-%d')
        wind_speed = weather_response['wind']['speed']
        city = city_response[0]['name']

        try:
            ground_pressure = weather_response['main']['grnd_level']
        except:
            ground_pressure = 0
        try:
            rain = weather_response['rain']['1h']
        except:
            rain = 0
        return f'In {city} there is:\n{humidity}% Humidity\nIt is {temperature} Fahrenheit\nThere is {ground_pressure} hPa ground pressure\n{rain} millimeters of rain in the next hour\nThe sun will rise at {sunrise}\nAnd will set at {sunset}\nWind speed is {wind_speed} mph'
    except:
        return "Invalid latitude and longitude values."

print(currentWeather('45.4647222', '-98.4861111', 'c93b02653581a787ce0ce089ec79b3ae'))