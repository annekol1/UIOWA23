#include <Arduino.h>
#include <SPI.h>
#include <WiFiNINA.h>
#include "secrets.h"
#include "RollingAvg.hpp"

char ssid[]                = SECRET_SSID;    // your network SSID (name)
char pass[]                = SECRET_PASS;    // your network password (use for WPA, or use as key for WEP)
char server[]              = SECRET_SERVER;
uint32_t serverPort        = SECRET_PORT;
uint32_t collectionRate_ms = 200;
RollingAvg moistureAdc(A2, 5);
RollingAvg lightAdc(A3, 5);

int status = WL_IDLE_STATUS;

WiFiClient client;

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

    if (!client.connect(server, serverPort))
    {
        Serial.print("Could not connect! ");
        Serial.println(status);
        while (1)
        {
            Serial.println("bad connect!");
        }
    }
}

void loop()
{
    moistureAdc.Maintain();
    lightAdc.Maintain();
    Serial.print("analog: ");
    Serial.print(moistureAdc.GetAvg());
    Serial.print(", ");
    Serial.print(lightAdc.GetAvg());
    Serial.println();
    delay(collectionRate_ms);
}