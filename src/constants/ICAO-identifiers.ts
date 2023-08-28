/**
 * A class that maps represents an ICAO identifier prefix code (first 1-2 letters of a full 4 letter ICAO identifier)
 * and its associated region(s). If any notable details are associated with the identifier prefix code, the optional `extraDetails` string will be populated
 */
export class ICAOIdentifierPrefix {
    /**
     * @param prefixCode //1-2 letter ICAO prefix code
     * @param regionsDisplayText /The region(s) associated to the prefix code in display format
     * @param extraDetails //Optionally, any notable details associated with the prefix code
     */
    constructor(public prefixCode: string, public regionsDisplayText: string, public extraDetails?: string) {}

    public fullDisplayText(): string {
        return this.regionsDisplayText + (this.extraDetails != null ? ' ' + this.extraDetails : '')
    }
}

/**
 * constants for each ICAO identifier prefix code
 */

// A – Western South Pacific
export const  AG = new ICAOIdentifierPrefix('AG', 'Solomon Islands'); 
export const  AN = new ICAOIdentifierPrefix('AN', 'Nauru');
export const  AY = new ICAOIdentifierPrefix('AY', 'Papua New Guinea');

// B – Greenland, Iceland, and Kosovo (European Alternate)    
export const  BG = new ICAOIdentifierPrefix('BG', 'Greenland');       
export const  BI = new ICAOIdentifierPrefix('BI', 'Iceland');
export const  BK = new ICAOIdentifierPrefix('BK', 'Kosovo');

//    C – Canada
export const  C = new ICAOIdentifierPrefix('C', 'Canada');

// D – Eastern parts of West Africa and Maghreb
export const  DA = new ICAOIdentifierPrefix('DA', 'Algeria');
export const  DB = new ICAOIdentifierPrefix('DB', 'Benin');
export const  DF = new ICAOIdentifierPrefix('DF', 'Burkina Faso');    
export const  DG = new ICAOIdentifierPrefix('DG', 'Ghana');
export const  DI = new ICAOIdentifierPrefix('DI', 'Côte d\'Ivoire');   
export const  DN = new ICAOIdentifierPrefix('DN', 'Nigeria');
export const  DR = new ICAOIdentifierPrefix('DR', 'Niger');
export const  DT = new ICAOIdentifierPrefix('DT', 'Tunisia');
export const  DX = new ICAOIdentifierPrefix('DX', 'Togo');

// E – Northern Europe
export const  EB = new ICAOIdentifierPrefix('EB', 'Belgium');
export const  ED = new ICAOIdentifierPrefix('ED', 'Germany (civil)');
export const  EE = new ICAOIdentifierPrefix('EE', 'Estonia');
export const  EF = new ICAOIdentifierPrefix('EF', 'Finland');
export const  EG = new ICAOIdentifierPrefix('EG', 'United Kingdom', '(and Crown Dependencies)');
export const  EH = new ICAOIdentifierPrefix('EH', 'Netherlands');
export const  EI = new ICAOIdentifierPrefix('EI', 'Ireland');
export const  EK = new ICAOIdentifierPrefix('EK', 'Denmark, The Faroe Islands');
export const  EL = new ICAOIdentifierPrefix('EL', 'Luxembourg');
export const  EN = new ICAOIdentifierPrefix('EN', 'Norway');
export const  EP = new ICAOIdentifierPrefix('EP', 'Poland');
export const  ES = new ICAOIdentifierPrefix('ES', 'Sweden');
export const  ET = new ICAOIdentifierPrefix('ET', 'Germany (military)');
export const  EV = new ICAOIdentifierPrefix('EV', 'Latvia');
export const  EY = new ICAOIdentifierPrefix('EY', 'Lithuania');

// F – Most of Central Africa, Southern Africa, and the Indian Ocean
export const  FA = new ICAOIdentifierPrefix('FA', 'South Africa');
export const  FB = new ICAOIdentifierPrefix('FB', 'Botswana');
export const  FC = new ICAOIdentifierPrefix('FC', 'Republic of the Congo');
export const  FD = new ICAOIdentifierPrefix('FD', 'Eswatini');
export const  FE = new ICAOIdentifierPrefix('FE', 'Central African Republic');
export const  FG = new ICAOIdentifierPrefix('FG', 'Equatorial Guinea');
export const  FH = new ICAOIdentifierPrefix('FH', 'Saint Helena, Ascension, Tristan da Cunha');
export const  FI = new ICAOIdentifierPrefix('FI', 'Mauritius');
export const  FJ = new ICAOIdentifierPrefix('FJ', 'British Indian Ocean Territory');
export const  FK = new ICAOIdentifierPrefix('FK', 'Cameroon');
export const  FL = new ICAOIdentifierPrefix('FL', 'Zambia');
export const  FM = new ICAOIdentifierPrefix('FM', 'Comoros, France (Mayotte and Réunion), Madagascar');
export const  FN = new ICAOIdentifierPrefix('FN', 'Angola');
export const  FO = new ICAOIdentifierPrefix('FO', 'Gabon');
export const  FP = new ICAOIdentifierPrefix('FP', 'São Tomé, Príncipe');
export const  FQ = new ICAOIdentifierPrefix('FQ', 'Mozambique');
export const  FS = new ICAOIdentifierPrefix('FS', 'Seychelles');
export const  FT = new ICAOIdentifierPrefix('FT', 'Chad');
export const  FV = new ICAOIdentifierPrefix('FV', 'Zimbabwe');
export const  FW = new ICAOIdentifierPrefix('FW', 'Malawi');
export const  FX = new ICAOIdentifierPrefix('FX', 'Lesotho');
export const  FY = new ICAOIdentifierPrefix('FY', 'Namibia');
export const  FZ = new ICAOIdentifierPrefix('FZ', 'Democratic Republic of the Congo');

// G – Western parts of West Africa and Maghreb
export const  GA = new ICAOIdentifierPrefix('GA', 'Mali');
export const  GB = new ICAOIdentifierPrefix('GB', 'The Gambia');
export const  GC = new ICAOIdentifierPrefix('GC', 'Spain (Canary Islands)');
export const  GE = new ICAOIdentifierPrefix('GE', 'Spain (Ceuta and Melilla)');
export const  GF = new ICAOIdentifierPrefix('GF', 'Sierra Leone');
export const  GG = new ICAOIdentifierPrefix('GG', 'Guinea-Bissau');
export const  GL = new ICAOIdentifierPrefix('GL', 'Liberia');
export const  GM = new ICAOIdentifierPrefix('GM', 'Morocco');
export const  GO = new ICAOIdentifierPrefix('GO', 'Senegal');
export const  GQ = new ICAOIdentifierPrefix('GQ', 'Mauritania');
export const  GS = new ICAOIdentifierPrefix('GS', 'Western Sahara');
export const  GU = new ICAOIdentifierPrefix('GU', 'Guinea');
export const  GV = new ICAOIdentifierPrefix('GV', 'Cape Verde');

// H – East Africa and Northeast Africa
export const  HA = new ICAOIdentifierPrefix('HA', 'Ethiopia');
export const  HB = new ICAOIdentifierPrefix('HB', 'Burundi');
export const  HC = new ICAOIdentifierPrefix('HC', 'Somalia', '(including Somaliland)');
export const  HD = new ICAOIdentifierPrefix('HD', 'Djibouti');
export const  HE = new ICAOIdentifierPrefix('HE', 'Egypt');
export const  HH = new ICAOIdentifierPrefix('HH', 'Eritrea');
export const  HJ = new ICAOIdentifierPrefix('HJ', 'South Sudan');
export const  HK = new ICAOIdentifierPrefix('HK', 'Kenya');
export const  HL = new ICAOIdentifierPrefix('HL', 'Libya');
export const  HR = new ICAOIdentifierPrefix('HR', 'Rwanda');
export const  HS = new ICAOIdentifierPrefix('HS', 'Sudan');
export const  HT = new ICAOIdentifierPrefix('HT', 'Tanzania');
export const  HU = new ICAOIdentifierPrefix('HU', 'Uganda');

// K – Contiguous United States
export const  K = new ICAOIdentifierPrefix('K', 'Contiguous United States');

// L – Southern Europe, Israel, Palestine and Turkey
export const  LA = new ICAOIdentifierPrefix('LA', 'Albania');
export const  LB = new ICAOIdentifierPrefix('LB', 'Bulgaria');
export const  LC = new ICAOIdentifierPrefix('LC', 'Cyprus');
export const  LD = new ICAOIdentifierPrefix('LD', 'Croatia');
export const  LE = new ICAOIdentifierPrefix('LE', 'Spain', '(mainland section and Balearic Islands)');
export const  LF = new ICAOIdentifierPrefix('LF', 'France', '(Metropolitan France; including Saint-Pierre and Miquelon)');
export const  LG = new ICAOIdentifierPrefix('LG', 'Greece');
export const  LH = new ICAOIdentifierPrefix('LH', 'Hungary');
export const  LI = new ICAOIdentifierPrefix('LI', 'Italy', '(and San Marino)');
export const  LJ = new ICAOIdentifierPrefix('LJ', 'Slovenia');
export const  LK = new ICAOIdentifierPrefix('LK', 'Czech Republic');
export const  LL = new ICAOIdentifierPrefix('LL', 'Israel');
export const  LM = new ICAOIdentifierPrefix('LM', 'Malta');
export const  LN = new ICAOIdentifierPrefix('LN', 'Monaco');
export const  LO = new ICAOIdentifierPrefix('LO', 'Austria');
export const  LP = new ICAOIdentifierPrefix('LP', 'Portugal', '(including the Azores and Madeira)');
export const  LQ = new ICAOIdentifierPrefix('LQ', 'Bosnia and Herzegovina');
export const  LR = new ICAOIdentifierPrefix('LR', 'Romania');
export const  LS = new ICAOIdentifierPrefix('LS', 'Switzerland and Liechtenstein');
export const  LT = new ICAOIdentifierPrefix('LT', 'Turkey');
export const  LU = new ICAOIdentifierPrefix('LU', 'Moldova');
export const  LV = new ICAOIdentifierPrefix('LV', 'Palestine/Palestinian territories');
export const  LW = new ICAOIdentifierPrefix('LW', 'North Macedonia');
export const  LX = new ICAOIdentifierPrefix('LX', 'Gibraltar');
export const  LY = new ICAOIdentifierPrefix('LY', 'Serbia and Montenegro');
export const  LZ = new ICAOIdentifierPrefix('LZ', 'Slovakia');

// M – Central America, Mexico and northern/western parts of the Caribbean
export const  MB = new ICAOIdentifierPrefix('MB', 'Turks and Caicos Islands');
export const  MD = new ICAOIdentifierPrefix('MD', 'Dominican Republic');
export const  MG = new ICAOIdentifierPrefix('MG', 'Guatemala');
export const  MH = new ICAOIdentifierPrefix('MH', 'Honduras');
export const  MK = new ICAOIdentifierPrefix('MK', 'Jamaica');
export const  MM = new ICAOIdentifierPrefix('MM', 'Mexico');
export const  MN = new ICAOIdentifierPrefix('MN', 'Nicaragua');
export const  MP = new ICAOIdentifierPrefix('MP', 'Panama');
export const  MR = new ICAOIdentifierPrefix('MR', 'Costa Rica');
export const  MS = new ICAOIdentifierPrefix('MS', 'El Salvador');
export const  MT = new ICAOIdentifierPrefix('MT', 'Haiti');
export const  MU = new ICAOIdentifierPrefix('MU', 'Cuba');
export const  MW = new ICAOIdentifierPrefix('MW', 'Cayman Islands');
export const  MY = new ICAOIdentifierPrefix('MY', 'Bahamas');
export const  MZ = new ICAOIdentifierPrefix('MZ', 'Belize');

// N – Most of the South Pacific and New Zealand
export const  NC = new ICAOIdentifierPrefix('NC', 'Cook Islands');
export const  NF = new ICAOIdentifierPrefix('NF', 'Fiji, Tonga');
export const  NG = new ICAOIdentifierPrefix('NG', 'Kiribati (Gilbert Islands), Tuvalu');
export const  NI = new ICAOIdentifierPrefix('NI', 'Niue');
export const  NL = new ICAOIdentifierPrefix('NL', 'France (Wallis, Futuna)');
export const  NS = new ICAOIdentifierPrefix('NS', 'Samoa, United States (American Samoa)');
export const  NT = new ICAOIdentifierPrefix('NT', 'France (French Polynesia)');
export const  NV = new ICAOIdentifierPrefix('NV', 'Vanuatu');
export const  NW = new ICAOIdentifierPrefix('NW', 'France (New Caledonia)');
export const  NZ = new ICAOIdentifierPrefix('NZ', 'New Zealand, parts of Antarctica');

// O – Southwest Asia, including Gulf States, Iran, Iraq, Pakistan
export const  OA = new ICAOIdentifierPrefix('OA', 'Afghanistan');
export const  OB = new ICAOIdentifierPrefix('OB', 'Bahrain');
export const  OE = new ICAOIdentifierPrefix('OE', 'Saudi Arabia');
export const  OI = new ICAOIdentifierPrefix('OI', 'Iran');
export const  OJ = new ICAOIdentifierPrefix('OJ', 'Jordan and the West Bank');
export const  OK = new ICAOIdentifierPrefix('OK', 'Kuwait');
export const  OL = new ICAOIdentifierPrefix('OL', 'Lebanon');
export const  OM = new ICAOIdentifierPrefix('OM', 'United Arab Emirates');
export const  OO = new ICAOIdentifierPrefix('OO', 'Oman');
export const  OP = new ICAOIdentifierPrefix('OP', 'Pakistan');
export const  OR = new ICAOIdentifierPrefix('OR', 'Iraq');
export const  OS = new ICAOIdentifierPrefix('OS', 'Syria');
export const  OT = new ICAOIdentifierPrefix('OT', 'Qatar');
export const  OY = new ICAOIdentifierPrefix('OY', 'Yemen');

// P – most of the North Pacific, and Kiribati
export const  PA = new ICAOIdentifierPrefix('PA', 'US (Alaska)', '(also PF, PO and PP)');
export const  PB = new ICAOIdentifierPrefix('PB', 'US (Baker Island)');
export const  PC = new ICAOIdentifierPrefix('PC', 'Kiribati (Canton Airfield, Phoenix Islands)');
export const  PF = new ICAOIdentifierPrefix('PF', 'US (Alaska)', '(also PA, PO and PP)');
export const  PG = new ICAOIdentifierPrefix('PG', 'US (Guam, Northern Mariana Islands)');
export const  PH = new ICAOIdentifierPrefix('PH', 'US (Hawaii)');
export const  PJ = new ICAOIdentifierPrefix('PJ', 'US (Johnston Atoll)');
export const  PK = new ICAOIdentifierPrefix('PK', 'Marshall Islands');
export const  PL = new ICAOIdentifierPrefix('PL', 'Kiribati (Line Islands)');
export const  PM = new ICAOIdentifierPrefix('PM', 'US (Midway Island)');
export const  PO = new ICAOIdentifierPrefix('PO', 'US (Alaska)', '(also PA, PF and PP)');
export const  PP = new ICAOIdentifierPrefix('PP', 'US (Alaska)', '(also PA, PF and PO)');
export const  PT = new ICAOIdentifierPrefix('PT', 'Federated States of Micronesia, Palau');
export const  PW = new ICAOIdentifierPrefix('PW', 'US (Wake Island)');

// R – Japan, S. Korea, Philippines
export const  RC = new ICAOIdentifierPrefix('RC', 'Republic of China (Taiwan)');
export const  RJ = new ICAOIdentifierPrefix('RJ', 'Japan (Mainland)');
export const  RK = new ICAOIdentifierPrefix('RK', 'South Korea (Republic of Korea)');
export const  RO = new ICAOIdentifierPrefix('RO', 'Japan (Okinawa)');
export const  RP = new ICAOIdentifierPrefix('RP', 'Philippines');

// S – South America
export const  SA = new ICAOIdentifierPrefix('SA', 'Argentina, parts of Antarctica');
export const  SB = new ICAOIdentifierPrefix('SB', 'Brazil', '(also SD, SI, SJ, SN, SS and SW)');
export const  SC = new ICAOIdentifierPrefix('SC', 'Chile, Easter Island, parts of Antarctica', '(also SH)');
export const  SD = new ICAOIdentifierPrefix('SD', 'Brazil', '(also SB, SI, SJ, SN, SS and SW)');
export const  SE = new ICAOIdentifierPrefix('SE', 'Ecuador');
export const  SF = new ICAOIdentifierPrefix('SF', 'United Kingdom (Falkland Islands)');
export const  SG = new ICAOIdentifierPrefix('SG', 'Paraguay');
export const  SH = new ICAOIdentifierPrefix('SH', 'Chile', '(also SC)');
export const  SI = new ICAOIdentifierPrefix('SI', 'Brazil', '(also SB, SD, SJ, SN, SS and SW)');
export const  SJ = new ICAOIdentifierPrefix('SJ', 'Brazil', '(also SB, SD, SI, SN, SS and SW)');
export const  SK = new ICAOIdentifierPrefix('SK', 'Colombia');
export const  SL = new ICAOIdentifierPrefix('SL', 'Bolivia');
export const  SM = new ICAOIdentifierPrefix('SM', 'Suriname');
export const  SN = new ICAOIdentifierPrefix('SN', 'Brazil', '(also SB, SD, SI, SJ, SS and SW)');
export const  SO = new ICAOIdentifierPrefix('SO', 'France (French Guiana)');
export const  SP = new ICAOIdentifierPrefix('SP', 'Peru');
export const  SS = new ICAOIdentifierPrefix('SS', 'Brazil', '(also SB, SD, SI, SJ, SN and SW)');
export const  SU = new ICAOIdentifierPrefix('SU', 'Uruguay');
export const  SV = new ICAOIdentifierPrefix('SV', 'Venezuela');
export const  SW = new ICAOIdentifierPrefix('SW', 'Brazil', '(also SB, SD, SI, SJ, SN and SS)');
export const  SY = new ICAOIdentifierPrefix('SY', 'Guyana');

// T – Eastern and southern parts of the Caribbean
export const  TA = new ICAOIdentifierPrefix('TA', 'Antigua and Barbuda');
export const  TB = new ICAOIdentifierPrefix('TB', 'Barbados');
export const  TD = new ICAOIdentifierPrefix('TD', 'Dominica');
export const  TF = new ICAOIdentifierPrefix('TF', 'France (Guadeloupe, Martinique, Saint Barthélemy, Saint Martin)');
export const  TG = new ICAOIdentifierPrefix('TG', 'Grenada');
export const  TI = new ICAOIdentifierPrefix('TI', 'US (U.S. Virgin Islands)');
export const  TJ = new ICAOIdentifierPrefix('TJ', 'US (Puerto Rico)');
export const  TK = new ICAOIdentifierPrefix('TK', 'Saint Kitts, Nevis');
export const  TL = new ICAOIdentifierPrefix('TL', 'Saint Lucia');
export const  TN = new ICAOIdentifierPrefix('TN', 'Caribbean Netherlands, Aruba, Curaçao, Sint Maarten');
export const  TQ = new ICAOIdentifierPrefix('TQ', 'UK (Anguilla)');
export const  TR = new ICAOIdentifierPrefix('TR', 'UK (Montserrat)');
export const  TT = new ICAOIdentifierPrefix('TT', 'Trinidad, Tobago');
export const  TU = new ICAOIdentifierPrefix('TU', 'UK (British Virgin Islands)');
export const  TV = new ICAOIdentifierPrefix('TV', 'Saint Vincent, The Grenadines');
export const  TX = new ICAOIdentifierPrefix('TX', 'UK (Bermuda)');

// U – Most former Soviet countries
export const  U = new ICAOIdentifierPrefix('U', 'Russia');
export const  UA = new ICAOIdentifierPrefix('UA', 'Kazakhstan');
export const  UB = new ICAOIdentifierPrefix('UB', 'Azerbaijan');
export const  UC = new ICAOIdentifierPrefix('UC', 'Kyrgyzstan');
export const  UD = new ICAOIdentifierPrefix('UD', 'Armenia');
export const  UG = new ICAOIdentifierPrefix('UG', 'Georgia');
export const  UK = new ICAOIdentifierPrefix('UK', 'Ukraine');
export const  UM = new ICAOIdentifierPrefix('UM', 'Belarus, Russia (Kaliningrad Oblast)');
export const  UT = new ICAOIdentifierPrefix('UT', 'Tajikistan, Turkmenistan, Uzbekistan');

// V – Many South Asian countries,mainland Southeast Asia, Hong Kong and Macau
export const  VA = new ICAOIdentifierPrefix('VA', 'India (West India)');
export const  VC = new ICAOIdentifierPrefix('VC', 'Sri Lanka');
export const  VD = new ICAOIdentifierPrefix('VD', 'Cambodia');
export const  VE = new ICAOIdentifierPrefix('VE', 'India (East India)');
export const  VG = new ICAOIdentifierPrefix('VG', 'Bangladesh');
export const  VH = new ICAOIdentifierPrefix('VH', 'Hong Kong');
export const  VI = new ICAOIdentifierPrefix('VI', 'India (North India)');
export const  VL = new ICAOIdentifierPrefix('VL', 'Laos');
export const  VM = new ICAOIdentifierPrefix('VM', 'Macau');
export const  VN = new ICAOIdentifierPrefix('VN', 'Nepal');
export const  VO = new ICAOIdentifierPrefix('VO', 'India (South India)');
export const  VQ = new ICAOIdentifierPrefix('VQ', 'Bhutan');
export const  VR = new ICAOIdentifierPrefix('VR', 'Maldives');
export const  VT = new ICAOIdentifierPrefix('VT', 'Thailand');
export const  VV = new ICAOIdentifierPrefix('VV', 'Vietnam');
export const  VY = new ICAOIdentifierPrefix('VY', 'Myanmar');

// W – Most of Maritime Southeast Asia
export const  WA = new ICAOIdentifierPrefix('WA', 'Indonesia', '(also WI, WQ and WR)');
export const  WB = new ICAOIdentifierPrefix('WB', 'Brunei, Malaysia (East Malaysia)');
export const  WI = new ICAOIdentifierPrefix('WI', 'Indonesia', '(also WA, WQ and WR)');
export const  WM = new ICAOIdentifierPrefix('WM', 'Malaysia (Peninsular Malaysia)');
export const  WP = new ICAOIdentifierPrefix('WP', 'Timor-Leste');
export const  WQ = new ICAOIdentifierPrefix('WQ', 'Indonesia', '(also WA, WI and WR)');
export const  WR = new ICAOIdentifierPrefix('WR', 'Indonesia', '(also WA, WI and WQ)');
export const  WS = new ICAOIdentifierPrefix('WS', 'Singapore');

// Y – Australia
export const  Y = new ICAOIdentifierPrefix('Y', 'Australia', '(including Norfolk Island, Christmas Island, Cocos (Keeling) Islands and Australian Antarctic Territory)');

// Z – China, North Korea and Mongolia
export const  Z = new ICAOIdentifierPrefix('Z', 'Mainland China', '(except ZK and ZM)');
export const  ZK = new ICAOIdentifierPrefix('ZK', 'North Korea');
export const  ZM = new ICAOIdentifierPrefix('ZM', 'Mongolia');