import requests
import json

def forecastData(lat, long, key):
    LONGITUDE = long
    LATITUDE = lat
    API_KEY = key
    forecast_url = f'https://api.openweathermap.org/data/2.5/forecast?lat={LATITUDE}&lon={LONGITUDE}&units=imperial&appid={API_KEY}'
    forecast_response = requests.get(forecast_url).json()
    return forecast_response

def dataToDict(data):
    forecast_response = data
    forecastData = {}
    humidityForecast = []
    temperatureForecast = []
    groundPressureForecast = []
    rainForecast = []
    windspeedForecast = [] 
    date = []

    for i in range(len(forecast_response['list'])):
        humidityForecast.append(forecast_response['list'][i]['main']['humidity'])
        temperatureForecast.append(forecast_response['list'][i]['main']['temp'])
        groundPressureForecast.append(forecast_response['list'][i]['main']['grnd_level'])
        try:
            rainForecast.append(forecast_response['list'][i]['rain']['3h'])
        except:
            rainForecast.append(0)
        windspeedForecast.append(forecast_response['list'][i]['wind']['speed'])
    
    forecastData['City'] = forecast_response['city']['name']
    forecastData['Humidity'] = humidityForecast
    forecastData['Temperature'] = temperatureForecast
    forecastData['Ground Atmospheric Pressure'] = groundPressureForecast
    forecastData['Rain Volume'] = rainForecast
    forecastData['Wind Speed'] = windspeedForecast

    forecastData = json.dumps(forecastData, indent = 4)
    return forecastData

print(dataToDict(forecastData('45.4647222', '-98.4861111', 'c93b02653581a787ce0ce089ec79b3ae')))



