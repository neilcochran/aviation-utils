# **aviation-utils**
A library of aviation focused utilities.

## Library Functionality Table of Contents:
* Communication
    * [ADS-B (Automatic Dependent Surveillance–Broadcast)](#ads-b-automatic-dependent-surveillance–broadcast)
    * [ACARS (Aircraft Communications Addressing and Reporting System)](#acars-aircraft-communications-addressing-and-reporting-system)
* Information
    * [ICAO Identifiers](#icao-identifiers)
    * [NOTAM (Notice to Air Missions)](#notam-notice-to-air-missions)
*  Weather
    * [METAR (Meteorological Aerodrome Report)](#metar-meteorological-aerodrome-report)
    * [TAF (Terminal Aerodrome Forecast)](#taf-terminal-aerodrome-forecast)
    * [AIRMET (Airmen's Meteorological Information)](#airmet-airmens-meteorological-information)
    * [SIGMET (Significant Meteorological Information)](#sigmet-significant-meteorological-information)

## ADS-B (Automatic Dependent Surveillance–Broadcast)
Not sure what ADS-B is? Read about it [here](https://www.faa.gov/air_traffic/technology/adsb).

Functionality supported:
* Parse raw ADS-B (hexadecimal) into ADSBData objects
* Represent a flights data including a collection of time sequential ADS-B data 


## ACARS (Aircraft Communications Addressing and Reporting System)
Not sure what ACARS is? Read about it [here](https://en.wikipedia.org/wiki/ACARS).

## ICAO Identifiers
Not sure what an ICAO Identifier is? Read about them [here](https://en.wikipedia.org/wiki/ICAO_airport_code)

Functionality supported:
* Parse valid 4 letter ICAO identifiers into  `ICAOIdentifier` objects
* Exported ICAOIdentifierPrefix constants (and compiled map) for each ICAO identifier prefix

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