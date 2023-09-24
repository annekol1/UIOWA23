#ifndef ROLLING_AVG_HPP
#define ROLLING_AVG_HPP
#include <Arduino.h>

class RollingAvg
{
public:
    RollingAvg(uint32_t pin, uint16_t bufSize)
        : pin(pin),
          cur(0),
          bufSize(bufSize),
          acum(0)
    {
        buf = (uint16_t *)malloc(bufSize * sizeof(uint16_t));
        memset(buf, 0, bufSize * sizeof(uint16_t));
    };
    ~RollingAvg()
    {
        free(buf);
    };

    double GetAvg()
    {
        return ((double)acum / (double)bufSize);
    }

    void Maintain()
    {
        acum     -= buf[cur];
        buf[cur] = analogRead(pin);
        acum     += buf[cur];
        cur++;
        if (cur >= bufSize)
        {
            cur   = 0;
        }
    }

private:
    uint32_t pin;
    uint8_t cur;
    uint32_t acum;
    uint16_t *buf;
    uint16_t bufSize;
};

#endif    // ROLLING_AVG_HPP