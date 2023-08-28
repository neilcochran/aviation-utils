# **aviation-utils**
A library of aviation focused utilities.

## Library Functionality Table of Contents:
* ICAO Identifier Prefix constants
    * [Exported ICAOIdentifierPrefix constants for each ICAO identifier prefix code](#icao-identifier-prefix-code-constants)
* Communication
    * [ADS-B (Automatic Dependent Surveillance–Broadcast)](#ads-b-automatic-dependent-surveillance–broadcast)
    * [ACARS (Aircraft Communications Addressing and Reporting System)](#acars-aircraft-communications-addressing-and-reporting-system)
* Information
    * [NOTAM (Notice to Air Missions)
](#notam-notice-to-air-missions)
*  Weather
    * [METAR (Meteorological Aerodrome Report)](#metar-meteorological-aerodrome-report)
    * [TAF (Terminal Aerodrome Forecast)](#taf-terminal-aerodrome-forecast)
    * [AIRMET (Airmen's Meteorological Information)](#airmet-airmens-meteorological-information)
    * [SIGMET (Significant Meteorological Information)](#sigmet-significant-meteorological-information)



## ICAO Identifier Prefix Code Constants:
Each full 4 letter ICAO identifier's first 1-2 letters compose the prefix code. This prefix code maps to a specific region, or regions.
For each ICAO identifier prefix code, an `ICAOIdentifierPrefix` object constant is exported using the prefix code as the variable name.
See [src/constants/ICAO-identifiers.ts](/src/constants/ICAO-identifiers.ts) for all values.
## ADS-B (Automatic Dependent Surveillance–Broadcast)
Not sure what ADS-B is? Read about it [here](https://www.faa.gov/air_traffic/technology/adsb).

Functionality supported:
* Parse raw ADS-B (hexadecimal) into ADSBData objects
* Represent a flights data including a collection of time sequential ADS-B data 


## ACARS (Aircraft Communications Addressing and Reporting System)
Not sure what ACARS is? Read about it [here](https://en.wikipedia.org/wiki/ACARS).


## NOTAM (Notice to Air Missions)
Not sure what a NOTAM is? Read about them [here](https://www.faa.gov/about/initiatives/notam/what_is_a_notam)


## METAR (Meteorological Aerodrome Report)
Not sure what a METAR is? Read about them [here](https://en.wikipedia.org/wiki/METAR)


## TAF (Terminal Aerodrome Forecast)
Not sure what a TAF is? Read about them [here](https://en.wikipedia.org/wiki/Terminal_aerodrome_forecast)


## AIRMET (Airmen's Meteorological Information)
Not sure what an AIRMET is? Read about them [here](https://en.wikipedia.org/wiki/AIRMET)


## SIGMET (Significant Meteorological Information)
Not sure what a SIGMET is? Read about them [here](https://en.wikipedia.org/wiki/SIGMET)


## Versions
View all versions of in the <a href="/CHANGELOG.md">CHANGELOG.md</a>


## License
This project is licensed under the MIT License - see the <a href="/LICENSE.md">LICENSE.md</a> file for details