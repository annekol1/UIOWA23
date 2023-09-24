#define LOGGING
#include <Arduino.h>
#include <ArduinoJson.h>
#include <SPI.h>
#include <ArduinoHttpClient.h>
#include <WiFiNINA.h>
#include "secrets.h"
#include "RollingAvg.hpp"

const char id[]            = "/650fea7c8b4ca1101fc3f2ca/json";
char ssid[]                = SECRET_SSID;    // your network SSID (name)
char pass[]                = SECRET_PASS;    // your network password (use for WPA, or use as key for WEP)
char server[]              = SECRET_SERVER;
uint32_t serverPort        = SECRET_PORT;
uint32_t collectionRate_ms = 200;
RollingAvg moistureAdc(A2, 5);
RollingAvg lightAdc(A3, 5);
DynamicJsonDocument doc(1024);
char serializedBuf[500];

int status = WL_IDLE_STATUS;

WiFiClient client;
HttpClient httpClient = HttpClient(client, server, serverPort);

void setup()
{
    pinMode(A2, INPUT);
    pinMode(A3, INPUT);
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.begin(9600);
    status = WiFi.begin(ssid, pass);
    while (status != WL_CONNECTED)
    {
        Serial.println("FAILED TO CONNECT");
        delay(10000);
        status = WiFi.begin(ssid, pass);
    }

    Serial.print("Connected!");
}

String time = "2020-03-19T14:21:00+02:00";

void loop()
{
    String contentType = "application/json; charset=utf-8";

    uint8_t amtRead    = 0;
    doc["taken"]       = time;
    doc["avgMoisture"] = moistureAdc.GetAvg();
    doc["avgLight"]    = lightAdc.GetAvg();
    serializeJson(doc, Serial);
    amtRead = serializeJson(doc, serializedBuf, 500);
    serializedBuf[amtRead] = '\0';
    httpClient.post(id, contentType, serializedBuf);
    int statusCode = httpClient.responseStatusCode();
    Serial.println(statusCode);
    String response = httpClient.responseBody();
    Serial.println(response);

    moistureAdc.Maintain();
    lightAdc.Maintain();
    delay(collectionRate_ms);
}