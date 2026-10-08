// 축구선수 커리어 시뮬레이터 (Football Career Simulator) 데이터베이스
// Copero Simulador de Carrera 한글 패치 에디션

const COUNTRIES_DATA = [
  {
    "name": "대한민국",
    "name_en": "South Korea",
    "fifa_code": "KOR",
    "iso_alpha2": "KR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/kr.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 1,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "잉글랜드",
    "name_en": "England",
    "fifa_code": "ENG",
    "iso_alpha2": "GB-ENG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gb-eng.svg",
    "confederation": "UEFA",
    "fifa_reputation": 3,
    "continental_reputation": 3,
    "international_reputation": 5,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "스페인",
    "name_en": "Spain",
    "fifa_code": "ESP",
    "iso_alpha2": "ES",
    "flag_url": "https://media.copero.com.ar/flags/4x3/es.svg",
    "confederation": "UEFA",
    "fifa_reputation": 5,
    "continental_reputation": 4,
    "international_reputation": 5,
    "primary_color": "#AA151B"
  },
  {
    "name": "프랑스",
    "name_en": "France",
    "fifa_code": "FRA",
    "iso_alpha2": "FR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/fr.svg",
    "confederation": "UEFA",
    "fifa_reputation": 5,
    "continental_reputation": 4,
    "international_reputation": 5,
    "primary_color": "#000091"
  },
  {
    "name": "독일",
    "name_en": "Germany",
    "fifa_code": "GER",
    "iso_alpha2": "DE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/de.svg",
    "confederation": "UEFA",
    "fifa_reputation": 4,
    "continental_reputation": 3,
    "international_reputation": 5,
    "primary_color": "#000001"
  },
  {
    "name": "이탈리아",
    "name_en": "Italy",
    "fifa_code": "ITA",
    "iso_alpha2": "IT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/it.svg",
    "confederation": "UEFA",
    "fifa_reputation": 3,
    "continental_reputation": 3,
    "international_reputation": 5,
    "primary_color": "#4B61D1"
  },
  {
    "name": "브라질",
    "name_en": "Brazil",
    "fifa_code": "BRA",
    "iso_alpha2": "BR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/br.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 5,
    "continental_reputation": 5,
    "international_reputation": 5,
    "primary_color": "#F8E509"
  },
  {
    "name": "아르헨티나",
    "name_en": "Argentina",
    "fifa_code": "ARG",
    "iso_alpha2": "AR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ar.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 5,
    "continental_reputation": 5,
    "international_reputation": 5,
    "primary_color": "#74ACDF"
  },
  {
    "name": "포르투갈",
    "name_en": "Portugal",
    "fifa_code": "POR",
    "iso_alpha2": "PT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/pt.svg",
    "confederation": "UEFA",
    "fifa_reputation": 2,
    "continental_reputation": 3,
    "international_reputation": 4,
    "primary_color": "#FF0000"
  },
  {
    "name": "네덜란드",
    "name_en": "Netherlands",
    "fifa_code": "NED",
    "iso_alpha2": "NL",
    "flag_url": "https://media.copero.com.ar/flags/4x3/nl.svg",
    "confederation": "UEFA",
    "fifa_reputation": 2,
    "continental_reputation": 3,
    "international_reputation": 4,
    "primary_color": "#F36C21"
  },
  {
    "name": "일본",
    "name_en": "Japan",
    "fifa_code": "JPN",
    "iso_alpha2": "JP",
    "flag_url": "https://media.copero.com.ar/flags/4x3/jp.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 4,
    "international_reputation": 2,
    "primary_color": "#000555"
  },
  {
    "name": "미국",
    "name_en": "United States",
    "fifa_code": "USA",
    "iso_alpha2": "US",
    "flag_url": "https://media.copero.com.ar/flags/4x3/us.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 3,
    "continental_reputation": 5,
    "international_reputation": 1,
    "primary_color": "#192F5D"
  },
  {
    "name": "Afghanistan",
    "name_en": "Afghanistan",
    "fifa_code": "AFG",
    "iso_alpha2": "AF",
    "flag_url": "https://media.copero.com.ar/flags/4x3/af.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000001"
  },
  {
    "name": "Albania",
    "name_en": "Albania",
    "fifa_code": "ALB",
    "iso_alpha2": "AL",
    "flag_url": "https://media.copero.com.ar/flags/4x3/al.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#FF0000"
  },
  {
    "name": "American Samoa",
    "name_en": "American Samoa",
    "fifa_code": "ASA",
    "iso_alpha2": "AS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/as.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000066"
  },
  {
    "name": "Andorra",
    "name_en": "Andorra",
    "fifa_code": "AND",
    "iso_alpha2": "AD",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ad.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#0018A8"
  },
  {
    "name": "Angola",
    "name_en": "Angola",
    "fifa_code": "ANG",
    "iso_alpha2": "AO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ao.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FF0000"
  },
  {
    "name": "Anguilla",
    "name_en": "Anguilla",
    "fifa_code": "AIA",
    "iso_alpha2": "AI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ai.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#012169"
  },
  {
    "name": "Antigua & Barbuda",
    "name_en": "Antigua & Barbuda",
    "fifa_code": "ATG",
    "iso_alpha2": "AG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ag.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CE1126"
  },
  {
    "name": "Armenia",
    "name_en": "Armenia",
    "fifa_code": "ARM",
    "iso_alpha2": "AM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/am.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#D90012"
  },
  {
    "name": "Aruba",
    "name_en": "Aruba",
    "fifa_code": "ARU",
    "iso_alpha2": "AW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/aw.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#3399CC"
  },
  {
    "name": "Azerbaijan",
    "name_en": "Azerbaijan",
    "fifa_code": "AZE",
    "iso_alpha2": "AZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/az.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#3F9C35"
  },
  {
    "name": "Bahamas",
    "name_en": "Bahamas",
    "fifa_code": "BAH",
    "iso_alpha2": "BS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bs.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#08CED6"
  },
  {
    "name": "Bahrain",
    "name_en": "Bahrain",
    "fifa_code": "BHR",
    "iso_alpha2": "BH",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bh.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CE1126"
  },
  {
    "name": "Bangladesh",
    "name_en": "Bangladesh",
    "fifa_code": "BAN",
    "iso_alpha2": "BD",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bd.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#006A4E"
  },
  {
    "name": "Barbados",
    "name_en": "Barbados",
    "fifa_code": "BRB",
    "iso_alpha2": "BB",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bb.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#00267F"
  },
  {
    "name": "Belarus",
    "name_en": "Belarus",
    "fifa_code": "BLR",
    "iso_alpha2": "BY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/by.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#CE1720"
  },
  {
    "name": "Belize",
    "name_en": "Belize",
    "fifa_code": "BLZ",
    "iso_alpha2": "BZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bz.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#003F87"
  },
  {
    "name": "Benin",
    "name_en": "Benin",
    "fifa_code": "BEN",
    "iso_alpha2": "BJ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bj.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#319400"
  },
  {
    "name": "Bermuda",
    "name_en": "Bermuda",
    "fifa_code": "BER",
    "iso_alpha2": "BM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bm.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CF142B"
  },
  {
    "name": "Bhutan",
    "name_en": "Bhutan",
    "fifa_code": "BHU",
    "iso_alpha2": "BT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bt.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFD520"
  },
  {
    "name": "Bosnia & Herzegovina",
    "name_en": "Bosnia & Herzegovina",
    "fifa_code": "BIH",
    "iso_alpha2": "BA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ba.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#000099"
  },
  {
    "name": "Botswana",
    "name_en": "Botswana",
    "fifa_code": "BOT",
    "iso_alpha2": "BW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bw.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#00CBFF"
  },
  {
    "name": "British Virgin Islands",
    "name_en": "British Virgin Islands",
    "fifa_code": "VGB",
    "iso_alpha2": "VG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/vg.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000066"
  },
  {
    "name": "Brunei",
    "name_en": "Brunei",
    "fifa_code": "BRU",
    "iso_alpha2": "BN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bn.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#F7E017"
  },
  {
    "name": "Burkina Faso",
    "name_en": "Burkina Faso",
    "fifa_code": "BFA",
    "iso_alpha2": "BF",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bf.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 1,
    "primary_color": "#DE0000"
  },
  {
    "name": "Burundi",
    "name_en": "Burundi",
    "fifa_code": "BDI",
    "iso_alpha2": "BI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bi.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Cambodia",
    "name_en": "Cambodia",
    "fifa_code": "CAM",
    "iso_alpha2": "KH",
    "flag_url": "https://media.copero.com.ar/flags/4x3/kh.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#032EA1"
  },
  {
    "name": "Cape Verde",
    "name_en": "Cape Verde",
    "fifa_code": "CPV",
    "iso_alpha2": "CV",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cv.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 1,
    "primary_color": "#081873"
  },
  {
    "name": "Cayman Islands",
    "name_en": "Cayman Islands",
    "fifa_code": "CAY",
    "iso_alpha2": "KY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ky.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000066"
  },
  {
    "name": "Central African Republic",
    "name_en": "Central African Republic",
    "fifa_code": "CTA",
    "iso_alpha2": "CF",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cf.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFF00"
  },
  {
    "name": "Chad",
    "name_en": "Chad",
    "fifa_code": "CHA",
    "iso_alpha2": "TD",
    "flag_url": "https://media.copero.com.ar/flags/4x3/td.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#002664"
  },
  {
    "name": "Comoros",
    "name_en": "Comoros",
    "fifa_code": "COM",
    "iso_alpha2": "KM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/km.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#239E46"
  },
  {
    "name": "Congo",
    "name_en": "Congo",
    "fifa_code": "CGO",
    "iso_alpha2": "CG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cg.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFF00"
  },
  {
    "name": "Congo DR",
    "name_en": "Congo DR",
    "fifa_code": "COD",
    "iso_alpha2": "CD",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cd.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 2,
    "international_reputation": 0,
    "primary_color": "#007FFF"
  },
  {
    "name": "Cook Islands",
    "name_en": "Cook Islands",
    "fifa_code": "COK",
    "iso_alpha2": "CK",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ck.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000066"
  },
  {
    "name": "Cuba",
    "name_en": "Cuba",
    "fifa_code": "CUB",
    "iso_alpha2": "CU",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cu.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#002A8F"
  },
  {
    "name": "Curaçao",
    "name_en": "Curaçao",
    "fifa_code": "CUW",
    "iso_alpha2": "CW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cw.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 1,
    "continental_reputation": 1,
    "international_reputation": 0,
    "primary_color": "#002B7F"
  },
  {
    "name": "Cyprus",
    "name_en": "Cyprus",
    "fifa_code": "CYP",
    "iso_alpha2": "CY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cy.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Djibouti",
    "name_en": "Djibouti",
    "fifa_code": "DJI",
    "iso_alpha2": "DJ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/dj.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#6699FF"
  },
  {
    "name": "Dominica",
    "name_en": "Dominica",
    "fifa_code": "DMA",
    "iso_alpha2": "DM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/dm.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#108C00"
  },
  {
    "name": "Dominican Republic",
    "name_en": "Dominican Republic",
    "fifa_code": "DOM",
    "iso_alpha2": "DO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/do.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#002D62"
  },
  {
    "name": "El Salvador",
    "name_en": "El Salvador",
    "fifa_code": "SLV",
    "iso_alpha2": "SV",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sv.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#0F47AF"
  },
  {
    "name": "Equatorial Guinea",
    "name_en": "Equatorial Guinea",
    "fifa_code": "EQG",
    "iso_alpha2": "GQ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gq.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#3E9A00"
  },
  {
    "name": "Eritrea",
    "name_en": "Eritrea",
    "fifa_code": "ERI",
    "iso_alpha2": "ER",
    "flag_url": "https://media.copero.com.ar/flags/4x3/er.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#BE0027"
  },
  {
    "name": "Estonia",
    "name_en": "Estonia",
    "fifa_code": "EST",
    "iso_alpha2": "EE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ee.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#1791FF"
  },
  {
    "name": "Eswatini",
    "name_en": "Eswatini",
    "fifa_code": "SWZ",
    "iso_alpha2": "SZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sz.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#3E5EB9"
  },
  {
    "name": "Ethiopia",
    "name_en": "Ethiopia",
    "fifa_code": "ETH",
    "iso_alpha2": "ET",
    "flag_url": "https://media.copero.com.ar/flags/4x3/et.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#298C08"
  },
  {
    "name": "Faroe Islands",
    "name_en": "Faroe Islands",
    "fifa_code": "FRO",
    "iso_alpha2": "FO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/fo.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Fiji",
    "name_en": "Fiji",
    "fifa_code": "FIJ",
    "iso_alpha2": "FJ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/fj.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#68BFE5"
  },
  {
    "name": "French Polynesia",
    "name_en": "French Polynesia",
    "fifa_code": "TAH",
    "iso_alpha2": "PF",
    "flag_url": "https://media.copero.com.ar/flags/4x3/pf.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#DE2010"
  },
  {
    "name": "Gabon",
    "name_en": "Gabon",
    "fifa_code": "GAB",
    "iso_alpha2": "GA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ga.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#36A100"
  },
  {
    "name": "Gambia",
    "name_en": "Gambia",
    "fifa_code": "GAM",
    "iso_alpha2": "GM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gm.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000099"
  },
  {
    "name": "Georgia",
    "name_en": "Georgia",
    "fifa_code": "GEO",
    "iso_alpha2": "GE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ge.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Gibraltar",
    "name_en": "Gibraltar",
    "fifa_code": "GIB",
    "iso_alpha2": "GI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gi.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Grenada",
    "name_en": "Grenada",
    "fifa_code": "GRN",
    "iso_alpha2": "GD",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gd.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CE1126"
  },
  {
    "name": "Guam",
    "name_en": "Guam",
    "fifa_code": "GUM",
    "iso_alpha2": "GU",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gu.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#3B5AA3"
  },
  {
    "name": "Guatemala",
    "name_en": "Guatemala",
    "fifa_code": "GUA",
    "iso_alpha2": "GT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gt.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#4997D0"
  },
  {
    "name": "Guinea",
    "name_en": "Guinea",
    "fifa_code": "GUI",
    "iso_alpha2": "GN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gn.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFF00"
  },
  {
    "name": "Guinea-Bissau",
    "name_en": "Guinea-Bissau",
    "fifa_code": "GNB",
    "iso_alpha2": "GW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gw.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FCD116"
  },
  {
    "name": "Guyana",
    "name_en": "Guyana",
    "fifa_code": "GUY",
    "iso_alpha2": "GY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gy.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#399408"
  },
  {
    "name": "Haiti",
    "name_en": "Haiti",
    "fifa_code": "HAI",
    "iso_alpha2": "HT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ht.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 1,
    "continental_reputation": 1,
    "international_reputation": 0,
    "primary_color": "#00209F"
  },
  {
    "name": "Honduras",
    "name_en": "Honduras",
    "fifa_code": "HON",
    "iso_alpha2": "HN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/hn.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 1,
    "continental_reputation": 1,
    "international_reputation": 0,
    "primary_color": "#18C3DF"
  },
  {
    "name": "Hong Kong",
    "name_en": "Hong Kong",
    "fifa_code": "HKG",
    "iso_alpha2": "HK",
    "flag_url": "https://media.copero.com.ar/flags/4x3/hk.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#EC1B2E"
  },
  {
    "name": "India",
    "name_en": "India",
    "fifa_code": "IND",
    "iso_alpha2": "IN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/in.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FF9933"
  },
  {
    "name": "Iraq",
    "name_en": "Iraq",
    "fifa_code": "IRQ",
    "iso_alpha2": "IQ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/iq.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 2,
    "international_reputation": 1,
    "primary_color": "#CE1126"
  },
  {
    "name": "Israel",
    "name_en": "Israel",
    "fifa_code": "ISR",
    "iso_alpha2": "IL",
    "flag_url": "https://media.copero.com.ar/flags/4x3/il.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Jordan",
    "name_en": "Jordan",
    "fifa_code": "JOR",
    "iso_alpha2": "JO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/jo.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 1,
    "primary_color": "#FF0000"
  },
  {
    "name": "Kazakhstan",
    "name_en": "Kazakhstan",
    "fifa_code": "KAZ",
    "iso_alpha2": "KZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/kz.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#00ABC2"
  },
  {
    "name": "Kenya",
    "name_en": "Kenya",
    "fifa_code": "KEN",
    "iso_alpha2": "KE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ke.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000001"
  },
  {
    "name": "Kosovo",
    "name_en": "Kosovo",
    "fifa_code": "KOS",
    "iso_alpha2": "XK",
    "flag_url": "https://media.copero.com.ar/flags/4x3/xk.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#244AA5"
  },
  {
    "name": "Kuwait",
    "name_en": "Kuwait",
    "fifa_code": "KUW",
    "iso_alpha2": "KW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/kw.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#F31830"
  },
  {
    "name": "Kyrgyzstan",
    "name_en": "Kyrgyzstan",
    "fifa_code": "KGZ",
    "iso_alpha2": "KG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/kg.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FF0000"
  },
  {
    "name": "Laos",
    "name_en": "Laos",
    "fifa_code": "LAO",
    "iso_alpha2": "LA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/la.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CE1126"
  },
  {
    "name": "Latvia",
    "name_en": "Latvia",
    "fifa_code": "LVA",
    "iso_alpha2": "LV",
    "flag_url": "https://media.copero.com.ar/flags/4x3/lv.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#981E32"
  },
  {
    "name": "Lebanon",
    "name_en": "Lebanon",
    "fifa_code": "LBN",
    "iso_alpha2": "LB",
    "flag_url": "https://media.copero.com.ar/flags/4x3/lb.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#EE161F"
  },
  {
    "name": "Lesotho",
    "name_en": "Lesotho",
    "fifa_code": "LES",
    "iso_alpha2": "LS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ls.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Liberia",
    "name_en": "Liberia",
    "fifa_code": "LBR",
    "iso_alpha2": "LR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/lr.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CC0000"
  },
  {
    "name": "Libya",
    "name_en": "Libya",
    "fifa_code": "LBY",
    "iso_alpha2": "LY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ly.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000001"
  },
  {
    "name": "Liechtenstein",
    "name_en": "Liechtenstein",
    "fifa_code": "LIE",
    "iso_alpha2": "LI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/li.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CE1126"
  },
  {
    "name": "Lithuania",
    "name_en": "Lithuania",
    "fifa_code": "LTU",
    "iso_alpha2": "LT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/lt.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#006A44"
  },
  {
    "name": "Luxembourg",
    "name_en": "Luxembourg",
    "fifa_code": "LUX",
    "iso_alpha2": "LU",
    "flag_url": "https://media.copero.com.ar/flags/4x3/lu.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#ED2939"
  },
  {
    "name": "Macao",
    "name_en": "Macao",
    "fifa_code": "MAC",
    "iso_alpha2": "MO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mo.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#00785E"
  },
  {
    "name": "Madagascar",
    "name_en": "Madagascar",
    "fifa_code": "MAD",
    "iso_alpha2": "MG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mg.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Malawi",
    "name_en": "Malawi",
    "fifa_code": "MWI",
    "iso_alpha2": "MW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mw.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#F41408"
  },
  {
    "name": "Malaysia",
    "name_en": "Malaysia",
    "fifa_code": "MAS",
    "iso_alpha2": "MY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/my.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CC0000"
  },
  {
    "name": "Maldives",
    "name_en": "Maldives",
    "fifa_code": "MDV",
    "iso_alpha2": "MV",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mv.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#D21034"
  },
  {
    "name": "Mali",
    "name_en": "Mali",
    "fifa_code": "MLI",
    "iso_alpha2": "ML",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ml.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 2,
    "international_reputation": 1,
    "primary_color": "#FFFF00"
  },
  {
    "name": "Malta",
    "name_en": "Malta",
    "fifa_code": "MLT",
    "iso_alpha2": "MT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mt.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CF142B"
  },
  {
    "name": "Mauritania",
    "name_en": "Mauritania",
    "fifa_code": "MTN",
    "iso_alpha2": "MR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mr.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#006233"
  },
  {
    "name": "Mauritius",
    "name_en": "Mauritius",
    "fifa_code": "MRI",
    "iso_alpha2": "MU",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mu.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#EE2737"
  },
  {
    "name": "Moldova",
    "name_en": "Moldova",
    "fifa_code": "MDA",
    "iso_alpha2": "MD",
    "flag_url": "https://media.copero.com.ar/flags/4x3/md.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#DE2110"
  },
  {
    "name": "Mongolia",
    "name_en": "Mongolia",
    "fifa_code": "MNG",
    "iso_alpha2": "MN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mn.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#DA2032"
  },
  {
    "name": "Montenegro",
    "name_en": "Montenegro",
    "fifa_code": "MNE",
    "iso_alpha2": "ME",
    "flag_url": "https://media.copero.com.ar/flags/4x3/me.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#C40308"
  },
  {
    "name": "Montserrat",
    "name_en": "Montserrat",
    "fifa_code": "MSR",
    "iso_alpha2": "MS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ms.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#012169"
  },
  {
    "name": "Mozambique",
    "name_en": "Mozambique",
    "fifa_code": "MOZ",
    "iso_alpha2": "MZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mz.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFCA00"
  },
  {
    "name": "Myanmar",
    "name_en": "Myanmar",
    "fifa_code": "MYA",
    "iso_alpha2": "MM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mm.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FECB00"
  },
  {
    "name": "Namibia",
    "name_en": "Namibia",
    "fifa_code": "NAM",
    "iso_alpha2": null,
    "flag_url": "https://media.copero.com.ar/flags/4x3/na.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#C70000"
  },
  {
    "name": "Nepal",
    "name_en": "Nepal",
    "fifa_code": "NEP",
    "iso_alpha2": "NP",
    "flag_url": "https://media.copero.com.ar/flags/4x3/np.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CE0000"
  },
  {
    "name": "New Caledonia",
    "name_en": "New Caledonia",
    "fifa_code": "NCL",
    "iso_alpha2": "NC",
    "flag_url": "https://media.copero.com.ar/flags/4x3/nc.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#009543"
  },
  {
    "name": "Nicaragua",
    "name_en": "Nicaragua",
    "fifa_code": "NCA",
    "iso_alpha2": "NI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ni.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#0067C6"
  },
  {
    "name": "Niger",
    "name_en": "Niger",
    "fifa_code": "NIG",
    "iso_alpha2": "NE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ne.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#E05206"
  },
  {
    "name": "North Korea",
    "name_en": "North Korea",
    "fifa_code": "PRK",
    "iso_alpha2": "KP",
    "flag_url": "https://media.copero.com.ar/flags/4x3/kp.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#C60000"
  },
  {
    "name": "North Macedonia",
    "name_en": "North Macedonia",
    "fifa_code": "MKD",
    "iso_alpha2": "MK",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mk.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#D20000"
  },
  {
    "name": "Oman",
    "name_en": "Oman",
    "fifa_code": "OMA",
    "iso_alpha2": "OM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/om.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#EF2D29"
  },
  {
    "name": "Pakistan",
    "name_en": "Pakistan",
    "fifa_code": "PAK",
    "iso_alpha2": "PK",
    "flag_url": "https://media.copero.com.ar/flags/4x3/pk.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#0C590B"
  },
  {
    "name": "Palau",
    "name_en": "Palau",
    "fifa_code": "PNG",
    "iso_alpha2": "PW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/pw.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#4AADD6"
  },
  {
    "name": "Palestine",
    "name_en": "Palestine",
    "fifa_code": "PLE",
    "iso_alpha2": "PS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ps.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000000"
  },
  {
    "name": "Philippines",
    "name_en": "Philippines",
    "fifa_code": "PHI",
    "iso_alpha2": "PH",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ph.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#0038A8"
  },
  {
    "name": "Puerto Rico",
    "name_en": "Puerto Rico",
    "fifa_code": "PUR",
    "iso_alpha2": "PR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/pr.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#ED0000"
  },
  {
    "name": "Russia",
    "name_en": "Russia",
    "fifa_code": "RUS",
    "iso_alpha2": "RU",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ru.svg",
    "confederation": "UEFA",
    "fifa_reputation": 1,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#D52B1E"
  },
  {
    "name": "Rwanda",
    "name_en": "Rwanda",
    "fifa_code": "RWA",
    "iso_alpha2": "RW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/rw.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#00A1DE"
  },
  {
    "name": "Samoa",
    "name_en": "Samoa",
    "fifa_code": "SAM",
    "iso_alpha2": "WS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ws.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CE1126"
  },
  {
    "name": "San Marino",
    "name_en": "San Marino",
    "fifa_code": "SMR",
    "iso_alpha2": "SM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sm.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Seychelles",
    "name_en": "Seychelles",
    "fifa_code": "SEY",
    "iso_alpha2": "SC",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sc.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#D92223"
  },
  {
    "name": "Sierra Leone",
    "name_en": "Sierra Leone",
    "fifa_code": "SLE",
    "iso_alpha2": "SL",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sl.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#00CD00"
  },
  {
    "name": "Singapore",
    "name_en": "Singapore",
    "fifa_code": "SIN",
    "iso_alpha2": "SG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sg.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Solomon Islands",
    "name_en": "Solomon Islands",
    "fifa_code": "SOL",
    "iso_alpha2": "SB",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sb.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#0000D6"
  },
  {
    "name": "Somalia",
    "name_en": "Somalia",
    "fifa_code": "SOM",
    "iso_alpha2": "SO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/so.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#40A6FF"
  },
  {
    "name": "South Africa",
    "name_en": "South Africa",
    "fifa_code": "RSA",
    "iso_alpha2": "ZA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/za.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 2,
    "international_reputation": 1,
    "primary_color": "#FFCD00"
  },
  {
    "name": "South Sudan",
    "name_en": "South Sudan",
    "fifa_code": "SSD",
    "iso_alpha2": "SS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ss.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#0F47AF"
  },
  {
    "name": "Sri Lanka",
    "name_en": "Sri Lanka",
    "fifa_code": "SRI",
    "iso_alpha2": "LK",
    "flag_url": "https://media.copero.com.ar/flags/4x3/lk.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#8D2029"
  },
  {
    "name": "St. Kitts & Nevis",
    "name_en": "St. Kitts & Nevis",
    "fifa_code": "SKN",
    "iso_alpha2": "KN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/kn.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000001"
  },
  {
    "name": "St. Lucia",
    "name_en": "St. Lucia",
    "fifa_code": "LCA",
    "iso_alpha2": "LC",
    "flag_url": "https://media.copero.com.ar/flags/4x3/lc.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#65CFFF"
  },
  {
    "name": "St. Vincent & Grenadines",
    "name_en": "St. Vincent & Grenadines",
    "fifa_code": "VIN",
    "iso_alpha2": "VC",
    "flag_url": "https://media.copero.com.ar/flags/4x3/vc.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#F4F100"
  },
  {
    "name": "Sudan",
    "name_en": "Sudan",
    "fifa_code": "SDN",
    "iso_alpha2": "SD",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sd.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000001"
  },
  {
    "name": "Suriname",
    "name_en": "Suriname",
    "fifa_code": "SUR",
    "iso_alpha2": "SR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sr.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#377E3F"
  },
  {
    "name": "Syria",
    "name_en": "Syria",
    "fifa_code": "SYR",
    "iso_alpha2": "SY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sy.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#007A3D"
  },
  {
    "name": "São Tomé & Príncipe",
    "name_en": "São Tomé & Príncipe",
    "fifa_code": "STP",
    "iso_alpha2": "ST",
    "flag_url": "https://media.copero.com.ar/flags/4x3/st.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#12AD2B"
  },
  {
    "name": "Taiwan",
    "name_en": "Taiwan",
    "fifa_code": "TPE",
    "iso_alpha2": "TW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tw.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FF0000"
  },
  {
    "name": "Tajikistan",
    "name_en": "Tajikistan",
    "fifa_code": "TJK",
    "iso_alpha2": "TJ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tj.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Tanzania",
    "name_en": "Tanzania",
    "fifa_code": "TAN",
    "iso_alpha2": "TZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tz.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#000001"
  },
  {
    "name": "Timor-Leste",
    "name_en": "Timor-Leste",
    "fifa_code": "TLS",
    "iso_alpha2": "TL",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tl.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#CB000F"
  },
  {
    "name": "Togo",
    "name_en": "Togo",
    "fifa_code": "TOG",
    "iso_alpha2": "TG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tg.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#118600"
  },
  {
    "name": "Tonga",
    "name_en": "Tonga",
    "fifa_code": "TGA",
    "iso_alpha2": "TO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/to.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#C10000"
  },
  {
    "name": "Trinidad & Tobago",
    "name_en": "Trinidad & Tobago",
    "fifa_code": "TRI",
    "iso_alpha2": "TT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tt.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#E00000"
  },
  {
    "name": "Tunisia",
    "name_en": "Tunisia",
    "fifa_code": "TUN",
    "iso_alpha2": "TN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tn.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 2,
    "international_reputation": 1,
    "primary_color": "#E70013"
  },
  {
    "name": "Turkmenistan",
    "name_en": "Turkmenistan",
    "fifa_code": "TKM",
    "iso_alpha2": "TM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tm.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#00843D"
  },
  {
    "name": "Turks & Caicos Islands",
    "name_en": "Turks & Caicos Islands",
    "fifa_code": "TCA",
    "iso_alpha2": "TC",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tc.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#002868"
  },
  {
    "name": "U.S. Virgin Islands",
    "name_en": "U.S. Virgin Islands",
    "fifa_code": "VIR",
    "iso_alpha2": "VI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/vi.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Uganda",
    "name_en": "Uganda",
    "fifa_code": "UGA",
    "iso_alpha2": "UG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ug.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFE700"
  },
  {
    "name": "Vanuatu",
    "name_en": "Vanuatu",
    "fifa_code": "VAN",
    "iso_alpha2": "VU",
    "flag_url": "https://media.copero.com.ar/flags/4x3/vu.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#009543"
  },
  {
    "name": "Yemen",
    "name_en": "Yemen",
    "fifa_code": "YEM",
    "iso_alpha2": "YE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ye.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "Zambia",
    "name_en": "Zambia",
    "fifa_code": "ZAM",
    "iso_alpha2": "ZM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/zm.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#198A00"
  },
  {
    "name": "Zimbabwe",
    "name_en": "Zimbabwe",
    "fifa_code": "ZIM",
    "iso_alpha2": "ZW",
    "flag_url": "https://media.copero.com.ar/flags/4x3/zw.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#006400"
  },
  {
    "name": "가나",
    "name_en": "Ghana",
    "fifa_code": "GHA",
    "iso_alpha2": "GH",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gh.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 2,
    "international_reputation": 1,
    "primary_color": "#CE1126"
  },
  {
    "name": "그리스",
    "name_en": "Greece",
    "fifa_code": "GRE",
    "iso_alpha2": "GR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gr.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#0D5EAF"
  },
  {
    "name": "나이지리아",
    "name_en": "Nigeria",
    "fifa_code": "NGA",
    "iso_alpha2": "NG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ng.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 2,
    "primary_color": "#008753"
  },
  {
    "name": "노르웨이",
    "name_en": "Norway",
    "fifa_code": "NOR",
    "iso_alpha2": "NO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/no.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#ED2939"
  },
  {
    "name": "뉴질랜드",
    "name_en": "New Zealand",
    "fifa_code": "NZL",
    "iso_alpha2": "NZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/nz.svg",
    "confederation": "OFC",
    "fifa_reputation": 0,
    "continental_reputation": 6,
    "international_reputation": 1,
    "primary_color": "#000000"
  },
  {
    "name": "덴마크",
    "name_en": "Denmark",
    "fifa_code": "DEN",
    "iso_alpha2": "DK",
    "flag_url": "https://media.copero.com.ar/flags/4x3/dk.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#C8102E"
  },
  {
    "name": "루마니아",
    "name_en": "Romania",
    "fifa_code": "ROU",
    "iso_alpha2": "RO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ro.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#FFDE00"
  },
  {
    "name": "멕시코",
    "name_en": "Mexico",
    "fifa_code": "MEX",
    "iso_alpha2": "MX",
    "flag_url": "https://media.copero.com.ar/flags/4x3/mx.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 3,
    "continental_reputation": 5,
    "international_reputation": 1,
    "primary_color": "#006847"
  },
  {
    "name": "모로코",
    "name_en": "Morocco",
    "fifa_code": "MAR",
    "iso_alpha2": "MA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ma.svg",
    "confederation": "CAF",
    "fifa_reputation": 1,
    "continental_reputation": 4,
    "international_reputation": 3,
    "primary_color": "#C1272D"
  },
  {
    "name": "베네수엘라",
    "name_en": "Venezuela",
    "fifa_code": "VEN",
    "iso_alpha2": "VE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ve.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#C32148"
  },
  {
    "name": "베트남",
    "name_en": "Vietnam",
    "fifa_code": "VIE",
    "iso_alpha2": "VN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/vn.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#DA251D"
  },
  {
    "name": "벨기에",
    "name_en": "Belgium",
    "fifa_code": "BEL",
    "iso_alpha2": "BE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/be.svg",
    "confederation": "UEFA",
    "fifa_reputation": 1,
    "continental_reputation": 2,
    "international_reputation": 3,
    "primary_color": "#F31830"
  },
  {
    "name": "볼리비아",
    "name_en": "Bolivia",
    "fifa_code": "BOL",
    "iso_alpha2": "BO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bo.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#007934"
  },
  {
    "name": "북아일랜드",
    "name_en": "Northern Ireland",
    "fifa_code": "NIR",
    "iso_alpha2": "GB-NIR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gb-nir.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "불가리아",
    "name_en": "Bulgaria",
    "fifa_code": "BUL",
    "iso_alpha2": "BG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/bg.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "사우디아라비아",
    "name_en": "Saudi Arabia",
    "fifa_code": "KSA",
    "iso_alpha2": "SA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sa.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 1,
    "primary_color": "#165D31"
  },
  {
    "name": "세네갈",
    "name_en": "Senegal",
    "fifa_code": "SEN",
    "iso_alpha2": "SN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sn.svg",
    "confederation": "CAF",
    "fifa_reputation": 1,
    "continental_reputation": 4,
    "international_reputation": 3,
    "primary_color": "#0B7226"
  },
  {
    "name": "세르비아",
    "name_en": "Serbia",
    "fifa_code": "SRB",
    "iso_alpha2": "RS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/rs.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#C6363C"
  },
  {
    "name": "스웨덴",
    "name_en": "Sweden",
    "fifa_code": "SWE",
    "iso_alpha2": "SE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/se.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#005293"
  },
  {
    "name": "스위스",
    "name_en": "Switzerland",
    "fifa_code": "SUI",
    "iso_alpha2": "CH",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ch.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#FF0000"
  },
  {
    "name": "스코틀랜드",
    "name_en": "Scotland",
    "fifa_code": "SCO",
    "iso_alpha2": "GB-SCT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gb-sct.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#0065BD"
  },
  {
    "name": "슬로바키아",
    "name_en": "Slovakia",
    "fifa_code": "SVK",
    "iso_alpha2": "SK",
    "flag_url": "https://media.copero.com.ar/flags/4x3/sk.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#EE1C25"
  },
  {
    "name": "슬로베니아",
    "name_en": "Slovenia",
    "fifa_code": "SVN",
    "iso_alpha2": "SI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/si.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#0000BF"
  },
  {
    "name": "아랍에미리트",
    "name_en": "United Arab Emirates",
    "fifa_code": "UAE",
    "iso_alpha2": "AE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ae.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 1,
    "primary_color": "#FF0000"
  },
  {
    "name": "아이슬란드",
    "name_en": "Iceland",
    "fifa_code": "ISL",
    "iso_alpha2": "IS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/is.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#003897"
  },
  {
    "name": "아일랜드",
    "name_en": "Ireland",
    "fifa_code": "IRL",
    "iso_alpha2": "IE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ie.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#009A49"
  },
  {
    "name": "알제리",
    "name_en": "Algeria",
    "fifa_code": "ALG",
    "iso_alpha2": "DZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/dz.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 2,
    "primary_color": "#006233"
  },
  {
    "name": "에콰도르",
    "name_en": "Ecuador",
    "fifa_code": "ECU",
    "iso_alpha2": "EC",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ec.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#FFE800"
  },
  {
    "name": "오스트리아",
    "name_en": "Austria",
    "fifa_code": "AUT",
    "iso_alpha2": "AT",
    "flag_url": "https://media.copero.com.ar/flags/4x3/at.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#C8102E"
  },
  {
    "name": "우루과이",
    "name_en": "Uruguay",
    "fifa_code": "URU",
    "iso_alpha2": "UY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/uy.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 1,
    "continental_reputation": 3,
    "international_reputation": 3,
    "primary_color": "#0057B8"
  },
  {
    "name": "우즈베키스탄",
    "name_en": "Uzbekistan",
    "fifa_code": "UZB",
    "iso_alpha2": "UZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/uz.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 2,
    "international_reputation": 1,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "우크라이나",
    "name_en": "Ukraine",
    "fifa_code": "UKR",
    "iso_alpha2": "UA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ua.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#0057B8"
  },
  {
    "name": "웨일스",
    "name_en": "Wales",
    "fifa_code": "WAL",
    "iso_alpha2": "GB-WLS",
    "flag_url": "https://media.copero.com.ar/flags/4x3/gb-wls.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#D21034"
  },
  {
    "name": "이란",
    "name_en": "Iran",
    "fifa_code": "IRN",
    "iso_alpha2": "IR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ir.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 1,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "이집트",
    "name_en": "Egypt",
    "fifa_code": "EGY",
    "iso_alpha2": "EG",
    "flag_url": "https://media.copero.com.ar/flags/4x3/eg.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 2,
    "primary_color": "#CE1126"
  },
  {
    "name": "인도네시아",
    "name_en": "Indonesia",
    "fifa_code": "IDN",
    "iso_alpha2": "ID",
    "flag_url": "https://media.copero.com.ar/flags/4x3/id.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#E70011"
  },
  {
    "name": "자메이카",
    "name_en": "Jamaica",
    "fifa_code": "JAM",
    "iso_alpha2": "JM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/jm.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 1,
    "continental_reputation": 1,
    "international_reputation": 0,
    "primary_color": "#FFCC00"
  },
  {
    "name": "중국",
    "name_en": "China",
    "fifa_code": "CHN",
    "iso_alpha2": "CN",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cn.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 0,
    "primary_color": "#EE1C25"
  },
  {
    "name": "체코",
    "name_en": "Czechia",
    "fifa_code": "CZE",
    "iso_alpha2": "CZ",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cz.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 1,
    "primary_color": "#D7141A"
  },
  {
    "name": "칠레",
    "name_en": "Chile",
    "fifa_code": "CHI",
    "iso_alpha2": "CL",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cl.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 1,
    "primary_color": "#D52B1E"
  },
  {
    "name": "카메룬",
    "name_en": "Cameroon",
    "fifa_code": "CMR",
    "iso_alpha2": "CM",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cm.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 2,
    "primary_color": "#007A5E"
  },
  {
    "name": "카타르",
    "name_en": "Qatar",
    "fifa_code": "QAT",
    "iso_alpha2": "QA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/qa.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 1,
    "primary_color": "#8D1B3D"
  },
  {
    "name": "캐나다",
    "name_en": "Canada",
    "fifa_code": "CAN",
    "iso_alpha2": "CA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ca.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 2,
    "continental_reputation": 3,
    "international_reputation": 0,
    "primary_color": "#D52B1E"
  },
  {
    "name": "코스타리카",
    "name_en": "Costa Rica",
    "fifa_code": "CRC",
    "iso_alpha2": "CR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/cr.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 1,
    "continental_reputation": 2,
    "international_reputation": 0,
    "primary_color": "#D90000"
  },
  {
    "name": "코트디부아르",
    "name_en": "Côte d’Ivoire",
    "fifa_code": "CIV",
    "iso_alpha2": "CI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/ci.svg",
    "confederation": "CAF",
    "fifa_reputation": 0,
    "continental_reputation": 3,
    "international_reputation": 2,
    "primary_color": "#FF9A00"
  },
  {
    "name": "콜롬비아",
    "name_en": "Colombia",
    "fifa_code": "COL",
    "iso_alpha2": "CO",
    "flag_url": "https://media.copero.com.ar/flags/4x3/co.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 1,
    "continental_reputation": 3,
    "international_reputation": 3,
    "primary_color": "#FFE800"
  },
  {
    "name": "크로아티아",
    "name_en": "Croatia",
    "fifa_code": "CRO",
    "iso_alpha2": "HR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/hr.svg",
    "confederation": "UEFA",
    "fifa_reputation": 1,
    "continental_reputation": 2,
    "international_reputation": 3,
    "primary_color": "#FF0000"
  },
  {
    "name": "태국",
    "name_en": "Thailand",
    "fifa_code": "THA",
    "iso_alpha2": "TH",
    "flag_url": "https://media.copero.com.ar/flags/4x3/th.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#A51931"
  },
  {
    "name": "튀르키예",
    "name_en": "Türkiye",
    "fifa_code": "TUR",
    "iso_alpha2": "TR",
    "flag_url": "https://media.copero.com.ar/flags/4x3/tr.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#E30A17"
  },
  {
    "name": "파나마",
    "name_en": "Panama",
    "fifa_code": "PAN",
    "iso_alpha2": "PA",
    "flag_url": "https://media.copero.com.ar/flags/4x3/pa.svg",
    "confederation": "CONCACAF",
    "fifa_reputation": 1,
    "continental_reputation": 2,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "파라과이",
    "name_en": "Paraguay",
    "fifa_code": "PAR",
    "iso_alpha2": "PY",
    "flag_url": "https://media.copero.com.ar/flags/4x3/py.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#D52B1E"
  },
  {
    "name": "페루",
    "name_en": "Peru",
    "fifa_code": "PER",
    "iso_alpha2": "PE",
    "flag_url": "https://media.copero.com.ar/flags/4x3/pe.svg",
    "confederation": "CONMEBOL",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 1,
    "primary_color": "#D91023"
  },
  {
    "name": "폴란드",
    "name_en": "Poland",
    "fifa_code": "POL",
    "iso_alpha2": "PL",
    "flag_url": "https://media.copero.com.ar/flags/4x3/pl.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "핀란드",
    "name_en": "Finland",
    "fifa_code": "FIN",
    "iso_alpha2": "FI",
    "flag_url": "https://media.copero.com.ar/flags/4x3/fi.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 0,
    "international_reputation": 0,
    "primary_color": "#FFFFFF"
  },
  {
    "name": "헝가리",
    "name_en": "Hungary",
    "fifa_code": "HUN",
    "iso_alpha2": "HU",
    "flag_url": "https://media.copero.com.ar/flags/4x3/hu.svg",
    "confederation": "UEFA",
    "fifa_reputation": 0,
    "continental_reputation": 1,
    "international_reputation": 2,
    "primary_color": "#D43516"
  },
  {
    "name": "호주",
    "name_en": "Australia",
    "fifa_code": "AUS",
    "iso_alpha2": "AU",
    "flag_url": "https://media.copero.com.ar/flags/4x3/au.svg",
    "confederation": "AFC",
    "fifa_reputation": 0,
    "continental_reputation": 4,
    "international_reputation": 2,
    "primary_color": "#FFCD00"
  }
];

const LEAGUES_DATA = [
  {
    "id": "brasileirao",
    "name": "Brasileirão",
    "country_fifa_code": "BRA",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/BRA/L/brasileirao.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/BRA/brasileirao.png",
    "confederation": "CONMEBOL",
    "tier": 1,
    "domestic_cup_id": "bra-copa-do-brasil",
    "teams": [
      {
        "id": "botafogo",
        "name": "Botafogo",
        "short_name": "Botafogo",
        "abbreviation": "BOT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/botafogo.svg",
        "primary_color": "#000000",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Botafogo"
      },
      {
        "id": "corinthians",
        "name": "Corinthians",
        "short_name": "Corinthians",
        "abbreviation": "COR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/corinthians.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Corinthians"
      },
      {
        "id": "cruzeiro",
        "name": "Cruzeiro",
        "short_name": "Cruzeiro",
        "abbreviation": "CRU",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/cruzeiro.svg",
        "primary_color": "#2F529E",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Cruzeiro"
      },
      {
        "id": "flamengo",
        "name": "Flamengo",
        "short_name": "Flamengo",
        "abbreviation": "FLA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/flamengo.svg",
        "primary_color": "#C52613",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "플라멩구"
      },
      {
        "id": "fluminense",
        "name": "Fluminense",
        "short_name": "Fluminense",
        "abbreviation": "FLU",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/fluminense.svg",
        "primary_color": "#92062A",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Fluminense"
      },
      {
        "id": "gremio",
        "name": "Grêmio",
        "short_name": "Grêmio",
        "abbreviation": "GRE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/gremio.svg",
        "primary_color": "#0D80BF",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Grêmio"
      },
      {
        "id": "palmeiras",
        "name": "Palmeiras",
        "short_name": "Palmeiras",
        "abbreviation": "PAL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/palmeiras.svg",
        "primary_color": "#006437",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "파우메이라스"
      },
      {
        "id": "santos",
        "name": "Santos",
        "short_name": "Santos",
        "abbreviation": "SAN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/santos.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Santos"
      },
      {
        "id": "vasco-da-gama",
        "name": "Vasco da Gama",
        "short_name": "Vasco da Gama",
        "abbreviation": "VAS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/vasco-da-gama.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Vasco da Gama"
      },
      {
        "id": "atletico-paranaense",
        "name": "Athletico Paranaense",
        "short_name": "Athletico Paranaense",
        "abbreviation": "CAP",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/athletico-paranaense.svg",
        "primary_color": "#CF181F",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Athletico Paranaense"
      },
      {
        "id": "atletico-mg",
        "name": "Atlético Mineiro",
        "short_name": "Atlético-MG",
        "abbreviation": "MIN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/atletico-mineiro.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Atlético Mineiro"
      },
      {
        "id": "bahia",
        "name": "Bahia",
        "short_name": "Bahia",
        "abbreviation": "BAH",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/bahia.svg",
        "primary_color": "#006BB4",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Bahia"
      },
      {
        "id": "internacional",
        "name": "Internacional",
        "short_name": "Internacional",
        "abbreviation": "INT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/internacional.svg",
        "primary_color": "#E5050F",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Internacional"
      },
      {
        "id": "rb-bragantino",
        "name": "Red Bull Bragantino",
        "short_name": "RB Bragantino",
        "abbreviation": "BRA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/red-bull-bragantino.svg",
        "primary_color": "#001D46",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Red Bull Bragantino"
      },
      {
        "id": "sao-paulo",
        "name": "São Paulo",
        "short_name": "São Paulo",
        "abbreviation": "SAO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/sao-paulo.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "São Paulo"
      },
      {
        "id": "coritiba",
        "name": "Coritiba",
        "short_name": "Coritiba",
        "abbreviation": "COR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/coritiba.svg",
        "primary_color": "#005742",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Coritiba"
      },
      {
        "id": "mirassol",
        "name": "Mirassol",
        "short_name": "Mirassol",
        "abbreviation": "MIR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/mirassol.svg",
        "primary_color": "#166F3D",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Mirassol"
      },
      {
        "id": "vitoria",
        "name": "Vitoria",
        "short_name": "Vitoria",
        "abbreviation": "VIT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/vitoria.svg",
        "primary_color": "#FF1100",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Vitoria"
      },
      {
        "id": "chapecoense",
        "name": "Chapecoense",
        "short_name": "Chapecoense",
        "abbreviation": "CHA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/chapecoense-sc.svg",
        "primary_color": "#00A329",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Chapecoense"
      },
      {
        "id": "remo",
        "name": "Remo",
        "short_name": "Remo",
        "abbreviation": "REM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/BRA/L/remo.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Remo"
      }
    ]
  },
  {
    "id": "bundesliga",
    "name": "Bundesliga",
    "country_fifa_code": "GER",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/GER/L/bundesliga.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/GER/bundesliga.png",
    "confederation": "UEFA",
    "tier": 1,
    "domestic_cup_id": "ger-dfb-pokal",
    "teams": [
      {
        "id": "bayern-munchen",
        "name": "Bayern München",
        "short_name": "Bayern München",
        "abbreviation": "BAY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/fc-bayern-munchen.svg",
        "primary_color": "#ED0038",
        "domestic_reputation": 5,
        "continental_reputation": 5,
        "international_reputation": 5,
        "star_rating": 5.0,
        "name_ko": "바이에른 뮌헨"
      },
      {
        "id": "bayer-leverkusen",
        "name": "Bayer Leverkusen",
        "short_name": "Bayer Leverkusen",
        "abbreviation": "BAY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/bayer-04-leverkusen.svg",
        "primary_color": "#E22726",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "바이어 레버쿠젠"
      },
      {
        "id": "borussia-dortmund",
        "name": "Borussia Dortmund",
        "short_name": "Borussia Dortmund",
        "abbreviation": "DOR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/borussia-dortmund.svg",
        "primary_color": "#FFD900",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "보루시아 도르트문트"
      },
      {
        "id": "rb-leipzig",
        "name": "RB Leipzig",
        "short_name": "RB Leipzig",
        "abbreviation": "LEI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/rb-leipzig.svg",
        "primary_color": "#DD0741",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "RB Leipzig"
      },
      {
        "id": "vfb-stuttgart",
        "name": "VfB Stuttgart",
        "short_name": "Stuttgart",
        "abbreviation": "STU",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/vfb-stuttgart.svg",
        "primary_color": "#D40723",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "VfB Stuttgart"
      },
      {
        "id": "1-fc-koln",
        "name": "1. FC Köln",
        "short_name": "Köln",
        "abbreviation": "KOL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/1-fc-koln.svg",
        "primary_color": "#E20613",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "1. FC Köln"
      },
      {
        "id": "union-berlin",
        "name": "1. FC Union Berlin",
        "short_name": "Union Berlin",
        "abbreviation": "UNI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/1-fc-union-berlin.svg",
        "primary_color": "#EB1923",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "1. FC Union Berlin"
      },
      {
        "id": "1899-hoffenheim",
        "name": "1899 Hoffenheim",
        "short_name": "Hoffenheim",
        "abbreviation": "HOF",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/tsg-hoffenheim.svg",
        "primary_color": "#1961B5",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "1899 Hoffenheim"
      },
      {
        "id": "borussia-monchengladbach",
        "name": "Borussia Mönchengladbach",
        "short_name": "Borussia M'gladbach",
        "abbreviation": "BMG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/borussia-mgladbach.svg",
        "primary_color": "#000000",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Borussia Mönchengladbach"
      },
      {
        "id": "eintracht-frankfurt",
        "name": "Eintracht Frankfurt",
        "short_name": "Eintracht Frankfurt",
        "abbreviation": "EIN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/eintracht-frankfurt.svg",
        "primary_color": "#E1020C",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Eintracht Frankfurt"
      },
      {
        "id": "fc-augsburg",
        "name": "FC Augsburg",
        "short_name": "Augsburg",
        "abbreviation": "AUG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/fc-augsburg.svg",
        "primary_color": "#BA3733",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "FC Augsburg"
      },
      {
        "id": "fsv-mainz-05",
        "name": "FSV Mainz 05",
        "short_name": "Mainz 05",
        "abbreviation": "MAI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/1-fsv-mainz-05.svg",
        "primary_color": "#AE0F0A",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "FSV Mainz 05"
      },
      {
        "id": "sc-freiburg",
        "name": "SC Freiburg",
        "short_name": "Freiburg",
        "abbreviation": "FRE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/sc-freiburg.svg",
        "primary_color": "#E1020C",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "SC Freiburg"
      },
      {
        "id": "werder-bremen",
        "name": "Werder Bremen",
        "short_name": "Werder Bremen",
        "abbreviation": "WER",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/sv-werder-bremen.svg",
        "primary_color": "#1D9053",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Werder Bremen"
      },
      {
        "id": "fc-schalke-04",
        "name": "FC Schalke 04",
        "short_name": "Schalke 04",
        "abbreviation": "SCH",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/fc-schalke-04.svg",
        "primary_color": "#004B9C",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "FC Schalke 04"
      },
      {
        "id": "hamburger-sv",
        "name": "Hamburger SV",
        "short_name": "Hamburger",
        "abbreviation": "HAM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/hamburger-sv.svg",
        "primary_color": "#1E5CB3",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Hamburger SV"
      },
      {
        "id": "sc-paderborn-07",
        "name": "SC Paderborn 07",
        "short_name": "Paderborn 07",
        "abbreviation": "PAD",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/sc-paderborn-07.svg",
        "primary_color": "#005CA8",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "SC Paderborn 07"
      },
      {
        "id": "sv-elversberg",
        "name": "SV Elversberg",
        "short_name": "Elversberg",
        "abbreviation": "ELV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/GER/L/sv-elversberg.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "SV Elversberg"
      }
    ]
  },
  {
    "id": "championship",
    "name": "Championship",
    "country_fifa_code": "ENG",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/ENG/L/championship.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/ENG/championship.webp",
    "confederation": "UEFA",
    "tier": 2,
    "domestic_cup_id": "eng-fa-cup",
    "teams": [
      {
        "id": "burnley",
        "name": "Burnley",
        "short_name": "Burnley",
        "abbreviation": "BUR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/burnley.svg",
        "primary_color": "#5F0041",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Burnley"
      },
      {
        "id": "middlesbrough",
        "name": "Middlesbrough",
        "short_name": "Middlesbrough",
        "abbreviation": "MID",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/middlesbrough.svg",
        "primary_color": "#C8102E",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Middlesbrough"
      },
      {
        "id": "norwich",
        "name": "Norwich",
        "short_name": "Norwich",
        "abbreviation": "NOR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/norwich.svg",
        "primary_color": "#038C40",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Norwich"
      },
      {
        "id": "sheffield-utd",
        "name": "Sheffield United",
        "short_name": "Sheffield Utd",
        "abbreviation": "SHE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/sheffield.svg",
        "primary_color": "#EC2227",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Sheffield United"
      },
      {
        "id": "southampton",
        "name": "Southampton",
        "short_name": "Southampton",
        "abbreviation": "SOU",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/southampton.svg",
        "primary_color": "#ED1A3B",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Southampton"
      },
      {
        "id": "west-ham",
        "name": "West Ham",
        "short_name": "West Ham",
        "abbreviation": "WHA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/west-ham.svg",
        "primary_color": "#7C2C3B",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "West Ham"
      },
      {
        "id": "wolves",
        "name": "Wolves",
        "short_name": "Wolves",
        "abbreviation": "WOL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/wolverhampton.svg",
        "primary_color": "#FDB913",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Wolves"
      },
      {
        "id": "birmingham",
        "name": "Birmingham City",
        "short_name": "Birmingham",
        "abbreviation": "BIR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/birmingham-city.svg",
        "primary_color": "#1E3D8F",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Birmingham City"
      },
      {
        "id": "millwall",
        "name": "Millwall",
        "short_name": "Millwall",
        "abbreviation": "MIL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/millwall.svg",
        "primary_color": "#00367A",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Millwall"
      },
      {
        "id": "stoke-city",
        "name": "Stoke City",
        "short_name": "Stoke City",
        "abbreviation": "STO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/stoke-city.svg",
        "primary_color": "#D6172E",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Stoke City"
      },
      {
        "id": "swansea",
        "name": "Swansea City",
        "short_name": "Swansea",
        "abbreviation": "SWA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/swansea.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Swansea City"
      },
      {
        "id": "watford",
        "name": "Watford",
        "short_name": "Watford",
        "abbreviation": "WAT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/watford.svg",
        "primary_color": "#FBEE23",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Watford"
      },
      {
        "id": "wrexham",
        "name": "Wrexham",
        "short_name": "Wrexham",
        "abbreviation": "WRE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/wrexham.svg",
        "primary_color": "#E62E29",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Wrexham"
      },
      {
        "id": "blackburn",
        "name": "Blackburn Rovers",
        "short_name": "Blackburn",
        "abbreviation": "BLA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/blackburn-rovers.svg",
        "primary_color": "#1E3D8F",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Blackburn Rovers"
      },
      {
        "id": "bristol-city",
        "name": "Bristol City",
        "short_name": "Bristol City",
        "abbreviation": "BRI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/bristol-city.svg",
        "primary_color": "#E21A23",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Bristol City"
      },
      {
        "id": "cardiff",
        "name": "Cardiff City",
        "short_name": "Cardiff",
        "abbreviation": "CAR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/cardiff.svg",
        "primary_color": "#2B58AE",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Cardiff City"
      },
      {
        "id": "charlton",
        "name": "Charlton Athletic",
        "short_name": "Charlton",
        "abbreviation": "CHA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/charlton-athletic.svg",
        "primary_color": "#BE1E2D",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Charlton Athletic"
      },
      {
        "id": "derby",
        "name": "Derby County",
        "short_name": "Derby",
        "abbreviation": "DER",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/derby.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Derby County"
      },
      {
        "id": "portsmouth",
        "name": "Portsmouth",
        "short_name": "Portsmouth",
        "abbreviation": "POR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/portsmouth.svg",
        "primary_color": "#293F9C",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Portsmouth"
      },
      {
        "id": "preston",
        "name": "Preston",
        "short_name": "Preston",
        "abbreviation": "PRE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/preston.svg",
        "primary_color": "#002156",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Preston"
      },
      {
        "id": "qpr",
        "name": "Queen's Park Rangers",
        "short_name": "QPR",
        "abbreviation": "QPR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/qpr.svg",
        "primary_color": "#1D5BA4",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Queen's Park Rangers"
      },
      {
        "id": "west-brom",
        "name": "West Brom",
        "short_name": "West Brom",
        "abbreviation": "WBR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/west-brom.svg",
        "primary_color": "#091453",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "West Brom"
      },
      {
        "id": "bolton",
        "name": "Bolton Wanderers",
        "short_name": "Bolton",
        "abbreviation": "BOL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/bolton.svg",
        "primary_color": "#263C7E",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Bolton Wanderers"
      },
      {
        "id": "lincoln",
        "name": "Lincoln City",
        "short_name": "Lincoln",
        "abbreviation": "LNC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/lincoln.svg",
        "primary_color": "#E62831",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Lincoln City"
      }
    ]
  },
  {
    "id": "laliga",
    "name": "LaLiga",
    "country_fifa_code": "ESP",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/ESP/L/laliga.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/ESP/la-liga.png",
    "confederation": "UEFA",
    "tier": 1,
    "domestic_cup_id": "esp-copa-del-rey",
    "teams": [
      {
        "id": "barcelona",
        "name": "Barcelona",
        "short_name": "Barcelona",
        "abbreviation": "BAR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/barcelona.svg",
        "primary_color": "#004D98",
        "domestic_reputation": 5,
        "continental_reputation": 5,
        "international_reputation": 5,
        "star_rating": 5.0,
        "name_ko": "바르셀로나"
      },
      {
        "id": "real-madrid",
        "name": "Real Madrid",
        "short_name": "Real Madrid",
        "abbreviation": "RMA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/real-madrid.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 5,
        "continental_reputation": 5,
        "international_reputation": 5,
        "star_rating": 5.0,
        "name_ko": "레알 마드리드"
      },
      {
        "id": "atletico-madrid",
        "name": "Atlético Madrid",
        "short_name": "Atlético Madrid",
        "abbreviation": "ATM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/atletico-madrid.svg",
        "primary_color": "#E8151E",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "아틀레티코 마드리드"
      },
      {
        "id": "athletic-club",
        "name": "Athletic Club",
        "short_name": "Athletic Club",
        "abbreviation": "ATH",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/athletic-club.svg",
        "primary_color": "#EE2523",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Athletic Club"
      },
      {
        "id": "celta-vigo",
        "name": "Celta de Vigo",
        "short_name": "Celta",
        "abbreviation": "CEL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/celta-vigo.svg",
        "primary_color": "#8AC3EE",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Celta de Vigo"
      },
      {
        "id": "espanyol",
        "name": "Espanyol",
        "short_name": "Espanyol",
        "abbreviation": "ESP",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/espanyol.svg",
        "primary_color": "#0085CC",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Espanyol"
      },
      {
        "id": "real-betis",
        "name": "Real Betis",
        "short_name": "Real Betis",
        "abbreviation": "BET",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/real-betis.svg",
        "primary_color": "#00954C",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Real Betis"
      },
      {
        "id": "real-sociedad",
        "name": "Real Sociedad",
        "short_name": "Real Sociedad",
        "abbreviation": "RSO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/real-sociedad.svg",
        "primary_color": "#143C8B",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Real Sociedad"
      },
      {
        "id": "sevilla",
        "name": "Sevilla",
        "short_name": "Sevilla",
        "abbreviation": "SEV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/sevilla.svg",
        "primary_color": "#D70F21",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Sevilla"
      },
      {
        "id": "valencia",
        "name": "Valencia",
        "short_name": "Valencia",
        "abbreviation": "VAL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/valencia.svg",
        "primary_color": "#FFDF1C",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Valencia"
      },
      {
        "id": "villarreal",
        "name": "Villarreal",
        "short_name": "Villarreal",
        "abbreviation": "VIL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/villarreal.svg",
        "primary_color": "#005187",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Villarreal"
      },
      {
        "id": "alaves",
        "name": "Alaves",
        "short_name": "Alaves",
        "abbreviation": "ALA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/deportivo-alaves.svg",
        "primary_color": "#0232A0",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Alaves"
      },
      {
        "id": "deportivo-la-coruna",
        "name": "Deportivo La Coruña",
        "short_name": "Dépor",
        "abbreviation": "DEP",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/deportivo-la-coruna.svg",
        "primary_color": "#0085CC",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Deportivo La Coruña"
      },
      {
        "id": "elche",
        "name": "Elche",
        "short_name": "Elche",
        "abbreviation": "ELC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/elche.svg",
        "primary_color": "#05642C",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Elche"
      },
      {
        "id": "getafe",
        "name": "Getafe",
        "short_name": "Getafe",
        "abbreviation": "GET",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/getafe.svg",
        "primary_color": "#014F97",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Getafe"
      },
      {
        "id": "levante",
        "name": "Levante",
        "short_name": "Levante",
        "abbreviation": "LEV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/levante-ud.svg",
        "primary_color": "#005CA3",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Levante"
      },
      {
        "id": "osasuna",
        "name": "Osasuna",
        "short_name": "Osasuna",
        "abbreviation": "OSA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/osasuna.svg",
        "primary_color": "#D70F27",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Osasuna"
      },
      {
        "id": "racing-santander",
        "name": "Racing de Santander",
        "short_name": "Racing",
        "abbreviation": "RAC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/racing-santander.svg",
        "primary_color": "#2D9A29",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Racing de Santander"
      },
      {
        "id": "rayo-vallecano",
        "name": "Rayo Vallecano",
        "short_name": "Rayo Vallecano",
        "abbreviation": "RAY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/rayo-vallecano.svg",
        "primary_color": "#E3351C",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Rayo Vallecano"
      },
      {
        "id": "malaga",
        "name": "Malaga",
        "short_name": "Malaga",
        "abbreviation": "MAL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ESP/L/malaga.svg",
        "primary_color": "#A7D6F5",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Malaga"
      }
    ]
  },
  {
    "id": "liga-profesional",
    "name": "Liga Profesional",
    "country_fifa_code": "ARG",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/ARG/L/liga-profesional.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/ARG/liga-profesional.png",
    "confederation": "CONMEBOL",
    "tier": 1,
    "domestic_cup_id": "arg-copa-argentina",
    "teams": [
      {
        "id": "boca-juniors",
        "name": "Boca Juniors",
        "short_name": "Boca Juniors",
        "abbreviation": "BOC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/boca-juniors.svg",
        "primary_color": "#103F79",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "보카 주니어스"
      },
      {
        "id": "river-plate",
        "name": "River Plate",
        "short_name": "River Plate",
        "abbreviation": "RIV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/river-plate.svg",
        "primary_color": "#ED192D",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "리버 플레이트"
      },
      {
        "id": "estudiantes-de-rio-cuarto",
        "name": "Estudiantes de Rio Cuarto",
        "short_name": "Estudiantes (RC)",
        "abbreviation": "ERC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/estudiantes-de-rio-cuarto.svg",
        "primary_color": "#008BD0",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Estudiantes de Rio Cuarto"
      },
      {
        "id": "racing-club",
        "name": "Racing Club",
        "short_name": "Racing",
        "abbreviation": "RAC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/racing-club.svg",
        "primary_color": "#029CDC",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Racing Club"
      },
      {
        "id": "rosario-central",
        "name": "Rosario Central",
        "short_name": "Rosario Central",
        "abbreviation": "CEN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/rosario-central.svg",
        "primary_color": "#0A3D72",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Rosario Central"
      },
      {
        "id": "argentinos-jrs",
        "name": "Argentinos Juniors",
        "short_name": "Argentinos Jrs.",
        "abbreviation": "ARG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/argentinos-juniors.svg",
        "primary_color": "#E32021",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Argentinos Juniors"
      },
      {
        "id": "atletico-tucuman",
        "name": "Atlético Tucuman",
        "short_name": "Atlético Tucumán",
        "abbreviation": "ATU",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/atletico-tucuman.svg",
        "primary_color": "#6FAEDC",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Atlético Tucuman"
      },
      {
        "id": "belgrano",
        "name": "Belgrano",
        "short_name": "Belgrano",
        "abbreviation": "BEL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/belgrano.svg",
        "primary_color": "#00BBF1",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Belgrano"
      },
      {
        "id": "defensa-y-justicia",
        "name": "Defensa y Justicia",
        "short_name": "Defensa y Justicia",
        "abbreviation": "DYJ",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/defensa-y-justicia.svg",
        "primary_color": "#00722D",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Defensa y Justicia"
      },
      {
        "id": "gimnasia-m",
        "name": "Gimnasia de Mendoza",
        "short_name": "Gimnasia (M)",
        "abbreviation": "GEM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/gimnasia-mendoza.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Gimnasia de Mendoza"
      },
      {
        "id": "huracan",
        "name": "Huracán",
        "short_name": "Huracán",
        "abbreviation": "HUR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/huracan.svg",
        "primary_color": "#E30613",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Huracán"
      },
      {
        "id": "independiente",
        "name": "Independiente",
        "short_name": "Independiente",
        "abbreviation": "IND",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/independiente.svg",
        "primary_color": "#ED1C24",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Independiente"
      },
      {
        "id": "independiente-rivadavia",
        "name": "Independiente Rivadavia",
        "short_name": "Ind. Rivadavia",
        "abbreviation": "IRM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/independiente-rivadavia.svg",
        "primary_color": "#13007C",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Independiente Rivadavia"
      },
      {
        "id": "lanus",
        "name": "Lanús",
        "short_name": "Lanús",
        "abbreviation": "LAN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/lanus.svg",
        "primary_color": "#7C1F2C",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Lanús"
      },
      {
        "id": "newells-old-boys",
        "name": "Newell's Old Boys",
        "short_name": "Newell's",
        "abbreviation": "NEW",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/newells-old-boys.svg",
        "primary_color": "#F42121",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Newell's Old Boys"
      },
      {
        "id": "platense",
        "name": "Platense",
        "short_name": "Platense",
        "abbreviation": "PLA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/platense.svg",
        "primary_color": "#4A2E15",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Platense"
      },
      {
        "id": "san-lorenzo",
        "name": "San Lorenzo",
        "short_name": "San Lorenzo",
        "abbreviation": "SLO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/san-lorenzo.svg",
        "primary_color": "#263A54",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "San Lorenzo"
      },
      {
        "id": "talleres",
        "name": "Talleres de Córdoba",
        "short_name": "Talleres",
        "abbreviation": "TAL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/talleres.svg",
        "primary_color": "#040D2D",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Talleres de Córdoba"
      },
      {
        "id": "tigre",
        "name": "Tigre",
        "short_name": "Tigre",
        "abbreviation": "TIG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/tigre.svg",
        "primary_color": "#1E448D",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Tigre"
      },
      {
        "id": "union",
        "name": "Unión de Santa Fe",
        "short_name": "Unión",
        "abbreviation": "UNI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/union.svg",
        "primary_color": "#ED1C24",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Unión de Santa Fe"
      },
      {
        "id": "velez-sarsfield",
        "name": "Vélez Sarsfield",
        "short_name": "Vélez",
        "abbreviation": "VEL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/velez-sarsfield.svg",
        "primary_color": "#0A539C",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Vélez Sarsfield"
      },
      {
        "id": "aldosivi",
        "name": "Aldosivi",
        "short_name": "Aldosivi",
        "abbreviation": "ALD",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/aldosivi.svg",
        "primary_color": "#F3DB26",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Aldosivi"
      },
      {
        "id": "banfield",
        "name": "Banfield",
        "short_name": "Banfield",
        "abbreviation": "BAN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/banfield.svg",
        "primary_color": "#03953F",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Banfield"
      },
      {
        "id": "barracas-central",
        "name": "Barracas Central",
        "short_name": "Barracas Central",
        "abbreviation": "BAR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/barracas-central.svg",
        "primary_color": "#E30016",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Barracas Central"
      },
      {
        "id": "central-cordoba-de-santiago",
        "name": "Central Córdoba de Santiago del Estero",
        "short_name": "Central Córdoba (SdE)",
        "abbreviation": "CCO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/central-cordoba.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Central Córdoba de Santiago del Estero"
      },
      {
        "id": "deportivo-riestra",
        "name": "Deportivo Riestra",
        "short_name": "Riestra",
        "abbreviation": "RIE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/deportivo-riestra.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Deportivo Riestra"
      },
      {
        "id": "estudiantes",
        "name": "Estudiantes de La Plata",
        "short_name": "Estudiantes (LP)",
        "abbreviation": "EST",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/estudiantes-de-la-plata.svg",
        "primary_color": "#E21919",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Estudiantes de La Plata"
      },
      {
        "id": "gimnasia-lp",
        "name": "Gimnasia y Esgrima La Plata",
        "short_name": "Gimnasia (LP)",
        "abbreviation": "GIM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/gimnasia-lp.svg",
        "primary_color": "#121A61",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Gimnasia y Esgrima La Plata"
      },
      {
        "id": "instituto-cordoba",
        "name": "Instituto de Córdoba",
        "short_name": "Instituto",
        "abbreviation": "INS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/instituto-cordoba.svg",
        "primary_color": "#DF040B",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Instituto de Córdoba"
      },
      {
        "id": "sarmiento-junin",
        "name": "Sarmiento de Junin",
        "short_name": "Sarmiento (J)",
        "abbreviation": "SAR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ARG/L/sarmiento.svg",
        "primary_color": "#008349",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Sarmiento de Junin"
      }
    ]
  },
  {
    "id": "ligue-1",
    "name": "Ligue 1",
    "country_fifa_code": "FRA",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/FRA/L/ligue-1.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/FRA/ligue-1.png",
    "confederation": "UEFA",
    "tier": 1,
    "domestic_cup_id": "fra-coupe-de-france",
    "teams": [
      {
        "id": "paris-saint-germain",
        "name": "Paris Saint Germain",
        "short_name": "PSG",
        "abbreviation": "PSG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/paris-saint-germain.svg",
        "primary_color": "#004170",
        "domestic_reputation": 5,
        "continental_reputation": 5,
        "international_reputation": 5,
        "star_rating": 5.0,
        "name_ko": "파리 생제르맹 (PSG)"
      },
      {
        "id": "monaco",
        "name": "AS Monaco",
        "short_name": "Monaco",
        "abbreviation": "MON",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/as-monaco.svg",
        "primary_color": "#FF002E",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "AS Monaco"
      },
      {
        "id": "olympique-de-marseille",
        "name": "Olympique de Marseille",
        "short_name": "Marseille",
        "abbreviation": "MAR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/olympique-de-marseille.svg",
        "primary_color": "#0097D7",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Olympique de Marseille"
      },
      {
        "id": "olympique-lyonnais",
        "name": "Olympique Lyonnais",
        "short_name": "Lyon",
        "abbreviation": "LYO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/olympique-lyonnais.svg",
        "primary_color": "#0F23AA",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Olympique Lyonnais"
      },
      {
        "id": "rc-strasbourg",
        "name": "RC Strasbourg",
        "short_name": "Strasbourg",
        "abbreviation": "STR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/rc-strasbourg.svg",
        "primary_color": "#009FE3",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "RC Strasbourg"
      },
      {
        "id": "lens",
        "name": "Lens",
        "short_name": "Lens",
        "abbreviation": "LEN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/rc-lens.svg",
        "primary_color": "#B71315",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Lens"
      },
      {
        "id": "lille",
        "name": "Lille",
        "short_name": "Lille",
        "abbreviation": "LIL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/lille.svg",
        "primary_color": "#E01E13",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Lille"
      },
      {
        "id": "nice",
        "name": "Nice",
        "short_name": "Nice",
        "abbreviation": "NIC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/nice.svg",
        "primary_color": "#ED1C24",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Nice"
      },
      {
        "id": "paris-fc",
        "name": "Paris FC",
        "short_name": "Paris FC",
        "abbreviation": "PAR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/paris-fc.svg",
        "primary_color": "#0A0F2D",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Paris FC"
      },
      {
        "id": "stade-brestois",
        "name": "Stade Brestois",
        "short_name": "Brest",
        "abbreviation": "BRE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/stade-brestois.svg",
        "primary_color": "#ED1C24",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Stade Brestois"
      },
      {
        "id": "toulouse",
        "name": "Toulouse",
        "short_name": "Toulouse",
        "abbreviation": "TOU",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/toulouse.svg",
        "primary_color": "#38284F",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Toulouse"
      },
      {
        "id": "angers",
        "name": "Angers",
        "short_name": "Angers",
        "abbreviation": "ANG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/angers.svg",
        "primary_color": "#000000",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Angers"
      },
      {
        "id": "auxerre",
        "name": "Auxerre",
        "short_name": "Auxerre",
        "abbreviation": "AUX",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/auxerre.svg",
        "primary_color": "#004EA2",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Auxerre"
      },
      {
        "id": "lorient",
        "name": "Lorient",
        "short_name": "Lorient",
        "abbreviation": "LOR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/lorient.svg",
        "primary_color": "#F58113",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Lorient"
      },
      {
        "id": "stade-rennais",
        "name": "Stade Rennais",
        "short_name": "Rennes",
        "abbreviation": "REN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/stade-rennais.svg",
        "primary_color": "#E13327",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Stade Rennais"
      },
      {
        "id": "estac-troyes",
        "name": "Estac Troyes",
        "short_name": "Troyes",
        "abbreviation": "TRO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/estac-troyes.svg",
        "primary_color": "#006CB4",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Estac Troyes"
      },
      {
        "id": "le-havre",
        "name": "Le Havre",
        "short_name": "Le Havre",
        "abbreviation": "HAV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/le-havre.svg",
        "primary_color": "#193260",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Le Havre"
      },
      {
        "id": "le-mans",
        "name": "Le Mans",
        "short_name": "Le Mans",
        "abbreviation": "LMA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/FRA/L/le-mans.svg",
        "primary_color": "#E30613",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Le Mans"
      }
    ]
  },
  {
    "id": "premier-league",
    "name": "Premier League",
    "country_fifa_code": "ENG",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/ENG/L/premier-league.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/ENG/premier-league.png",
    "confederation": "UEFA",
    "tier": 1,
    "domestic_cup_id": "eng-fa-cup",
    "teams": [
      {
        "id": "arsenal",
        "name": "Arsenal",
        "short_name": "Arsenal",
        "abbreviation": "ARS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/arsenal.svg",
        "primary_color": "#E20613",
        "domestic_reputation": 5,
        "continental_reputation": 5,
        "international_reputation": 5,
        "star_rating": 5.0,
        "name_ko": "아스널"
      },
      {
        "id": "chelsea",
        "name": "Chelsea",
        "short_name": "Chelsea",
        "abbreviation": "CHE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/chelsea.svg",
        "primary_color": "#153D8A",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "첼시"
      },
      {
        "id": "liverpool",
        "name": "Liverpool",
        "short_name": "Liverpool",
        "abbreviation": "LIV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/liverpool.svg",
        "primary_color": "#DC0714",
        "domestic_reputation": 5,
        "continental_reputation": 5,
        "international_reputation": 5,
        "star_rating": 5.0,
        "name_ko": "리버풀"
      },
      {
        "id": "manchester-city",
        "name": "Manchester City",
        "short_name": "Manchester City",
        "abbreviation": "MCI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/manchester-city.svg",
        "primary_color": "#7AB2E1",
        "domestic_reputation": 5,
        "continental_reputation": 5,
        "international_reputation": 5,
        "star_rating": 5.0,
        "name_ko": "맨체스터 시티"
      },
      {
        "id": "manchester-united",
        "name": "Manchester United",
        "short_name": "Manchester United",
        "abbreviation": "MUN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/manchester-united.svg",
        "primary_color": "#DA020E",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "맨체스터 유나이티드"
      },
      {
        "id": "tottenham",
        "name": "Tottenham",
        "short_name": "Tottenham",
        "abbreviation": "TOT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/tottenham.svg",
        "primary_color": "#000A3C",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "토트넘 홋스퍼"
      },
      {
        "id": "aston-villa",
        "name": "Aston Villa",
        "short_name": "Aston Villa",
        "abbreviation": "AST",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/aston-villa.svg",
        "primary_color": "#94BEE5",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "Aston Villa"
      },
      {
        "id": "bournemouth",
        "name": "Bournemouth",
        "short_name": "Bournemouth",
        "abbreviation": "BOU",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/bournemouth.svg",
        "primary_color": "#CC080F",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Bournemouth"
      },
      {
        "id": "brighton",
        "name": "Brighton",
        "short_name": "Brighton",
        "abbreviation": "BRI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/brighton.svg",
        "primary_color": "#004899",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Brighton"
      },
      {
        "id": "crystal-palace",
        "name": "Crystal Palace",
        "short_name": "Crystal Palace",
        "abbreviation": "CRY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/crystal-palace.svg",
        "primary_color": "#0055A5",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Crystal Palace"
      },
      {
        "id": "everton",
        "name": "Everton",
        "short_name": "Everton",
        "abbreviation": "EVE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/everton.svg",
        "primary_color": "#014593",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Everton"
      },
      {
        "id": "newcastle",
        "name": "Newcastle United",
        "short_name": "Newcastle",
        "abbreviation": "NEW",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/newcastle-united.svg",
        "primary_color": "#000000",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "Newcastle United"
      },
      {
        "id": "nottingham-forest",
        "name": "Nottingham Forest",
        "short_name": "Nottingham Forest",
        "abbreviation": "NOT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/nottingham-forest.svg",
        "primary_color": "#DC0D15",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Nottingham Forest"
      },
      {
        "id": "brentford",
        "name": "Brentford",
        "short_name": "Brentford",
        "abbreviation": "BRE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/brentford.svg",
        "primary_color": "#D20000",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Brentford"
      },
      {
        "id": "coventry",
        "name": "Coventry City",
        "short_name": "Coventry",
        "abbreviation": "COV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/coventry-city.svg",
        "primary_color": "#7AB2E1",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Coventry City"
      },
      {
        "id": "fulham",
        "name": "Fulham",
        "short_name": "Fulham",
        "abbreviation": "FUL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/fulham.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Fulham"
      },
      {
        "id": "ipswich",
        "name": "Ipswich Town",
        "short_name": "Ipswich",
        "abbreviation": "IPS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/ipswich-town.svg",
        "primary_color": "#3A64A3",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Ipswich Town"
      },
      {
        "id": "leeds",
        "name": "Leeds",
        "short_name": "Leeds",
        "abbreviation": "LEE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/leeds-united.svg",
        "primary_color": "#FFDF00",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Leeds"
      },
      {
        "id": "sunderland",
        "name": "Sunderland",
        "short_name": "Sunderland",
        "abbreviation": "SUN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/sunderland.svg",
        "primary_color": "#E40520",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Sunderland"
      },
      {
        "id": "hull-city",
        "name": "Hull City",
        "short_name": "Hull City",
        "abbreviation": "HUL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ENG/L/hull-city.svg",
        "primary_color": "#F18A01",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Hull City"
      }
    ]
  },
  {
    "id": "serie-a",
    "name": "Serie A",
    "country_fifa_code": "ITA",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/ITA/L/serie-a.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/ITA/serie-a.png",
    "confederation": "UEFA",
    "tier": 1,
    "domestic_cup_id": "ita-coppa-italia",
    "teams": [
      {
        "id": "inter",
        "name": "Inter",
        "short_name": "Inter",
        "abbreviation": "INT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/inter.svg",
        "primary_color": "#00239C",
        "domestic_reputation": 5,
        "continental_reputation": 5,
        "international_reputation": 5,
        "star_rating": 5.0,
        "name_ko": "인테르"
      },
      {
        "id": "juventus",
        "name": "Juventus",
        "short_name": "Juventus",
        "abbreviation": "JUV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/juventus.svg",
        "primary_color": "#000000",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "유벤투스"
      },
      {
        "id": "ac-milan",
        "name": "AC Milan",
        "short_name": "AC Milan",
        "abbreviation": "MIL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/milan.svg",
        "primary_color": "#E4002B",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "AC Milan"
      },
      {
        "id": "as-roma",
        "name": "AS Roma",
        "short_name": "AS Roma",
        "abbreviation": "ROM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/roma.svg",
        "primary_color": "#970A2C",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "AS Roma"
      },
      {
        "id": "atalanta",
        "name": "Atalanta",
        "short_name": "Atalanta",
        "abbreviation": "ATA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/atalanta.svg",
        "primary_color": "#0067B2",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "Atalanta"
      },
      {
        "id": "como",
        "name": "Como",
        "short_name": "Como",
        "abbreviation": "COM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/como.svg",
        "primary_color": "#10416A",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Como"
      },
      {
        "id": "napoli",
        "name": "Napoli",
        "short_name": "Napoli",
        "abbreviation": "NAP",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/napoli.svg",
        "primary_color": "#01A7E1",
        "domestic_reputation": 4,
        "continental_reputation": 4,
        "international_reputation": 4,
        "star_rating": 4.5,
        "name_ko": "나폴리"
      },
      {
        "id": "bologna",
        "name": "Bologna",
        "short_name": "Bologna",
        "abbreviation": "BOL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/bologna.svg",
        "primary_color": "#1B2838",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Bologna"
      },
      {
        "id": "cagliari",
        "name": "Cagliari",
        "short_name": "Cagliari",
        "abbreviation": "CAG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/cagliari.svg",
        "primary_color": "#B01028",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Cagliari"
      },
      {
        "id": "fiorentina",
        "name": "Fiorentina",
        "short_name": "Fiorentina",
        "abbreviation": "FIO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/fiorentina.svg",
        "primary_color": "#61358B",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Fiorentina"
      },
      {
        "id": "genoa",
        "name": "Genoa",
        "short_name": "Genoa",
        "abbreviation": "GEN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/genoa.svg",
        "primary_color": "#AE1919",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Genoa"
      },
      {
        "id": "lazio",
        "name": "Lazio",
        "short_name": "Lazio",
        "abbreviation": "LAZ",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/lazio.svg",
        "primary_color": "#85D8F8",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Lazio"
      },
      {
        "id": "parma",
        "name": "Parma",
        "short_name": "Parma",
        "abbreviation": "PAR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/parma.svg",
        "primary_color": "#24338A",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Parma"
      },
      {
        "id": "sassuolo",
        "name": "Sassuolo",
        "short_name": "Sassuolo",
        "abbreviation": "SAS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/sassuolo.svg",
        "primary_color": "#1EA451",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Sassuolo"
      },
      {
        "id": "torino",
        "name": "Torino",
        "short_name": "Torino",
        "abbreviation": "TOR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/torino.svg",
        "primary_color": "#881F19",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Torino"
      },
      {
        "id": "udinese",
        "name": "Udinese",
        "short_name": "Udinese",
        "abbreviation": "UDI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/udinese.svg",
        "primary_color": "#000000",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Udinese"
      },
      {
        "id": "frosinone",
        "name": "Frosinone",
        "short_name": "Frosinone",
        "abbreviation": "FRO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/frosinone.svg",
        "primary_color": "#004393",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Frosinone"
      },
      {
        "id": "lecce",
        "name": "Lecce",
        "short_name": "Lecce",
        "abbreviation": "LEC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/lecce.svg",
        "primary_color": "#002856",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Lecce"
      },
      {
        "id": "monza",
        "name": "Monza",
        "short_name": "Monza",
        "abbreviation": "MON",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/monza.svg",
        "primary_color": "#ED1639",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Monza"
      },
      {
        "id": "venezia",
        "name": "Venezia",
        "short_name": "Venezia",
        "abbreviation": "VEN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/ITA/L/venezia.svg",
        "primary_color": "#A08C55",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Venezia"
      }
    ]
  },
  {
    "id": "por-primeira-liga",
    "name": "Primeira Liga",
    "country_fifa_code": "POR",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/POR/L/primeira-liga.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/POR/primeira-liga.svg",
    "confederation": "UEFA",
    "tier": 1,
    "domestic_cup_id": "por-taca-de-portugal",
    "teams": [
      {
        "id": "academico-viseu",
        "name": "Académico Viseu",
        "short_name": "Académico",
        "abbreviation": "ACV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/academico-viseu.svg",
        "primary_color": "#A11D21",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Académico Viseu"
      },
      {
        "id": "alverca",
        "name": "Alverca",
        "short_name": "Alverca",
        "abbreviation": "ALV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/alverca.svg",
        "primary_color": "#D71920",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Alverca"
      },
      {
        "id": "arouca",
        "name": "Arouca",
        "short_name": "Arouca",
        "abbreviation": "ARO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/arouca.svg",
        "primary_color": "#F7D117",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Arouca"
      },
      {
        "id": "benfica",
        "name": "Benfica",
        "short_name": "Benfica",
        "abbreviation": "BEN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/benfica.svg",
        "primary_color": "#E32221",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "벤피카"
      },
      {
        "id": "casa-pia",
        "name": "Casa Pia",
        "short_name": "Casa Pia",
        "abbreviation": "CAS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/casa-pia.svg",
        "primary_color": "#111111",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Casa Pia"
      },
      {
        "id": "estoril",
        "name": "Estoril",
        "short_name": "Estoril",
        "abbreviation": "EST",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/estoril.svg",
        "primary_color": "#F5D000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Estoril"
      },
      {
        "id": "estrela-amadora",
        "name": "Estrela Amadora",
        "short_name": "Estrela Amadora",
        "abbreviation": "EAM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/estrela-amadora.svg",
        "primary_color": "#FFD200",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Estrela Amadora"
      },
      {
        "id": "famalicao",
        "name": "Famalicão",
        "short_name": "Famalicão",
        "abbreviation": "FAM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/famalicao.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Famalicão"
      },
      {
        "id": "gil-vicente",
        "name": "Gil Vicente",
        "short_name": "Gil Vicente",
        "abbreviation": "GIL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/gil-vicente.svg",
        "primary_color": "#D32027",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Gil Vicente"
      },
      {
        "id": "maritimo",
        "name": "Marítimo",
        "short_name": "Marítimo",
        "abbreviation": "MAR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/maritimo.svg",
        "primary_color": "#007A3D",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Marítimo"
      },
      {
        "id": "nacional-por",
        "name": "Nacional",
        "short_name": "Nacional",
        "abbreviation": "NAC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/nacional-por.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Nacional"
      },
      {
        "id": "moreirense",
        "name": "Moreirense",
        "short_name": "Moreirense",
        "abbreviation": "MOR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/moreirense.svg",
        "primary_color": "#0B7A3B",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Moreirense"
      },
      {
        "id": "porto",
        "name": "Porto",
        "short_name": "Porto",
        "abbreviation": "POR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/porto.svg",
        "primary_color": "#003399",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "FC 포르투"
      },
      {
        "id": "rio-ave",
        "name": "Rio Ave",
        "short_name": "Rio Ave",
        "abbreviation": "RAV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/rio-ave.svg",
        "primary_color": "#009B4E",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Rio Ave"
      },
      {
        "id": "santa-clara",
        "name": "Santa Clara",
        "short_name": "Santa Clara",
        "abbreviation": "SCL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/santa-clara.svg",
        "primary_color": "#D71920",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Santa Clara"
      },
      {
        "id": "sporting-braga",
        "name": "Sporting Braga",
        "short_name": "Braga",
        "abbreviation": "BRA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/sporting-braga.svg",
        "primary_color": "#C8102E",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Sporting Braga"
      },
      {
        "id": "vitoria-guimaraes",
        "name": "Vitória Guimarães",
        "short_name": "Vitória",
        "abbreviation": "VGU",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/vitoria-guimaraes.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Vitória Guimarães"
      },
      {
        "id": "sporting-lisboa",
        "name": "Sporting Lisboa",
        "short_name": "Sporting",
        "abbreviation": "SCP",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/POR/L/sporting-lisboa.svg",
        "primary_color": "#008F5A",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Sporting Lisboa"
      }
    ]
  },
  {
    "id": "eredivisie",
    "name": "Eredivisie",
    "country_fifa_code": "NED",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/NED/L/eredivisie-iso.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/NED/eredivisie.png",
    "confederation": "UEFA",
    "tier": 1,
    "domestic_cup_id": "ned-knvb-cup",
    "teams": [
      {
        "id": "den-haag",
        "name": "Den Haag",
        "short_name": "Den Haag",
        "abbreviation": "ADO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/den-haag.svg",
        "primary_color": "#F7D117",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Den Haag"
      },
      {
        "id": "ajax",
        "name": "Ajax",
        "short_name": "Ajax",
        "abbreviation": "AJA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/ajax.svg",
        "primary_color": "#D2122E",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "아약스"
      },
      {
        "id": "az",
        "name": "AZ",
        "short_name": "AZ",
        "abbreviation": "AZ",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/az.svg",
        "primary_color": "#E30613",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "AZ"
      },
      {
        "id": "excelsior",
        "name": "Excelsior",
        "short_name": "Excelsior",
        "abbreviation": "EXC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/excelsior.svg",
        "primary_color": "#000000",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Excelsior"
      },
      {
        "id": "groningen",
        "name": "Groningen",
        "short_name": "Groningen",
        "abbreviation": "GRO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/groningen.svg",
        "primary_color": "#009A44",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Groningen"
      },
      {
        "id": "twente",
        "name": "Twente",
        "short_name": "Twente",
        "abbreviation": "TWE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/twente.svg",
        "primary_color": "#E31E24",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Twente"
      },
      {
        "id": "utrecht",
        "name": "Utrecht",
        "short_name": "Utrecht",
        "abbreviation": "UTR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/utrecht.svg",
        "primary_color": "#E30613",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Utrecht"
      },
      {
        "id": "feyenoord",
        "name": "Feyenoord",
        "short_name": "Feyenoord",
        "abbreviation": "FEY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/feyenoord.svg",
        "primary_color": "#D4001A",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "Feyenoord"
      },
      {
        "id": "fortuna-sittard",
        "name": "Fortuna Sittard",
        "short_name": "Fortuna",
        "abbreviation": "FOR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/fortuna-sittard.svg",
        "primary_color": "#F2E500",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Fortuna Sittard"
      },
      {
        "id": "go-ahead-eagles",
        "name": "Go Ahead Eagles",
        "short_name": "Go Ahead",
        "abbreviation": "GAE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/go-ahead-eagles.svg",
        "primary_color": "#C8102E",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Go Ahead Eagles"
      },
      {
        "id": "nec",
        "name": "NEC",
        "short_name": "NEC",
        "abbreviation": "NEC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/nec.svg",
        "primary_color": "#006633",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "NEC"
      },
      {
        "id": "zwolle",
        "name": "Zwolle",
        "short_name": "Zwolle",
        "abbreviation": "ZWO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/zwolle.svg",
        "primary_color": "#0075C9",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Zwolle"
      },
      {
        "id": "psv",
        "name": "PSV",
        "short_name": "PSV",
        "abbreviation": "PSV",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/psv.svg",
        "primary_color": "#D71920",
        "domestic_reputation": 4,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 4.0,
        "name_ko": "PSV"
      },
      {
        "id": "cambuur",
        "name": "Cambuur",
        "short_name": "Cambuur",
        "abbreviation": "CAM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/cambuur.svg",
        "primary_color": "#F7D117",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Cambuur"
      },
      {
        "id": "heerenveen",
        "name": "Heerenveen",
        "short_name": "Heerenveen",
        "abbreviation": "HEE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/heerenveen.svg",
        "primary_color": "#0057B8",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Heerenveen"
      },
      {
        "id": "sc-telstar",
        "name": "SC Telstar",
        "short_name": "Telstar",
        "abbreviation": "TEL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/sc-telstar.svg",
        "primary_color": "#1E90FF",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "SC Telstar"
      },
      {
        "id": "sparta-rotterdam",
        "name": "Sparta Rotterdam",
        "short_name": "Sparta",
        "abbreviation": "SPA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/sparta-rotterdam.svg",
        "primary_color": "#E30613",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Sparta Rotterdam"
      },
      {
        "id": "willem-ii",
        "name": "Willem II",
        "short_name": "Willem II",
        "abbreviation": "WIL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/NED/L/willem-ii.svg",
        "primary_color": "#C62828",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Willem II"
      }
    ]
  },
  {
    "id": "j1-league",
    "name": "J1 League",
    "country_fifa_code": "JPN",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/JPN/L/j1-league.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/JPN/j-league.png",
    "confederation": "AFC",
    "tier": 1,
    "domestic_cup_id": "copa-del-emperador",
    "teams": [
      {
        "id": "kashima-antlers",
        "name": "Kashima Antlers",
        "short_name": "Kashima Antlers",
        "abbreviation": "KAS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/kashima-antlers.svg",
        "primary_color": "#A61E2D",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Kashima Antlers"
      },
      {
        "id": "kashiwa-reysol",
        "name": "Kashiwa Reysol",
        "short_name": "Kashiwa Reysol",
        "abbreviation": "REY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/kashiwa-reysol.svg",
        "primary_color": "#F4D000",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Kashiwa Reysol"
      },
      {
        "id": "kyoto-sanga",
        "name": "Kyoto Sanga",
        "short_name": "Kyoto Sanga",
        "abbreviation": "KYO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/kyoto-sanga.svg",
        "primary_color": "#6A1B9A",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Kyoto Sanga"
      },
      {
        "id": "urawa-reds",
        "name": "Urawa Red Diamonds",
        "short_name": "Urawa Reds",
        "abbreviation": "URA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/urawa-reds.svg",
        "primary_color": "#D71920",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Urawa Red Diamonds"
      },
      {
        "id": "sanfrecce-hiroshima",
        "name": "Sanfrecce Hiroshima",
        "short_name": "Sanfrecce Hiroshima",
        "abbreviation": "SAN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/sanfrecce-hiroshima.svg",
        "primary_color": "#5E2D91",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Sanfrecce Hiroshima"
      },
      {
        "id": "vissel-kobe",
        "name": "Vissel Kobe",
        "short_name": "Vissel Kobe",
        "abbreviation": "VIS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/vissel-kobe.svg",
        "primary_color": "#7A263A",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Vissel Kobe"
      },
      {
        "id": "kawasaki-frontale",
        "name": "Kawasaki Frontale",
        "short_name": "Kawasaki Frontale",
        "abbreviation": "KAW",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/kawasaki-frontale.svg",
        "primary_color": "#4AA3DF",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Kawasaki Frontale"
      },
      {
        "id": "cerezo-osaka",
        "name": "Cerezo Osaka",
        "short_name": "Cerezo Osaka",
        "abbreviation": "CER",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/cerezo-osaka.svg",
        "primary_color": "#C2185B",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Cerezo Osaka"
      },
      {
        "id": "machida-zelvia",
        "name": "Machida Zelvia",
        "short_name": "Machida Zelvia",
        "abbreviation": "MAC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/machida-zelvia.svg",
        "primary_color": "#005BBB",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Machida Zelvia"
      },
      {
        "id": "shimizu-s-pulse",
        "name": "Shimizu S-Pulse",
        "short_name": "Shimizu S-Pulse",
        "abbreviation": "SHI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/shimizu-s-pulse.svg",
        "primary_color": "#F28C28",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Shimizu S-Pulse"
      },
      {
        "id": "avispa-fukuoka",
        "name": "Avispa Fukuoka",
        "short_name": "Avispa Fukuoka",
        "abbreviation": "AVI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/avispa-fukuoka.svg",
        "primary_color": "#2E86C1",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Avispa Fukuoka"
      },
      {
        "id": "gamba-osaka",
        "name": "Gamba Osaka",
        "short_name": "Gamba Osaka",
        "abbreviation": "GAM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/gamba-osaka.svg",
        "primary_color": "#1E3A8A",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Gamba Osaka"
      },
      {
        "id": "fagiano-okayama",
        "name": "Fagiano Okayama",
        "short_name": "Fagiano Okayama",
        "abbreviation": "FAG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/fagiano-okayama.svg",
        "primary_color": "#B71C4A",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Fagiano Okayama"
      },
      {
        "id": "tokyo-verdy",
        "name": "Tokyo Verdy",
        "short_name": "Tokyo Verdy",
        "abbreviation": "VER",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/tokyo-verdy.svg",
        "primary_color": "#1F7A3D",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Tokyo Verdy"
      },
      {
        "id": "nagoya-grampus",
        "name": "Nagoya Grampus",
        "short_name": "Nagoya Grampus",
        "abbreviation": "NAG",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/nagoya-grampus.svg",
        "primary_color": "#D32F2F",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "Nagoya Grampus"
      },
      {
        "id": "fc-tokyo",
        "name": "FC Tokyo",
        "short_name": "FC Tokyo",
        "abbreviation": "TOK",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/fc-tokyo.svg",
        "primary_color": "#1E3A8A",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "FC Tokyo"
      },
      {
        "id": "yokohama-f-marinos",
        "name": "Yokohama F. Marinos",
        "short_name": "Yokohama F. Marinos",
        "abbreviation": "YFM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/yokohama-f-marinos.svg",
        "primary_color": "#1E4FA3",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Yokohama F. Marinos"
      },
      {
        "id": "mito-hollyhock",
        "name": "Mito HollyHock",
        "short_name": "Mito HollyHock",
        "abbreviation": "MIT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/mito-hollyhock.svg",
        "primary_color": "#4A6FE3",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Mito HollyHock"
      },
      {
        "id": "jef-united-chiba",
        "name": "JEF United Chiba",
        "short_name": "JEF United Chiba",
        "abbreviation": "JEF",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/jef-united-chiba.svg",
        "primary_color": "#F4C300",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "JEF United Chiba"
      },
      {
        "id": "v-varen-nagasaki",
        "name": "V-Varen Nagasaki",
        "short_name": "V-Varen Nagasaki",
        "abbreviation": "VVN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/JPN/L/v-varen-nagasaki.svg",
        "primary_color": "#0142AA",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "V-Varen Nagasaki"
      }
    ]
  },
  {
    "id": "saudi-pro-league",
    "name": "Saudi Pro League",
    "country_fifa_code": "KSA",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/KSA/L/ksa-saudi-pro-league.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/KSA/saudi-pro-league.png",
    "confederation": "AFC",
    "tier": 1,
    "domestic_cup_id": "ksa-copa-del-rey",
    "teams": [
      {
        "id": "abha",
        "name": "Abha",
        "short_name": "Abha",
        "abbreviation": "ABH",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/abha.svg",
        "primary_color": "#135C7D",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Abha"
      },
      {
        "id": "al-fateh",
        "name": "Al Fateh",
        "short_name": "Al Fateh",
        "abbreviation": "FAT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-fateh.svg",
        "primary_color": "#00D83A",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al Fateh"
      },
      {
        "id": "al-ittihad",
        "name": "Al Ittihad",
        "short_name": "Al Ittihad",
        "abbreviation": "ITT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-ittihad.svg",
        "primary_color": "#F4E400",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Al Ittihad"
      },
      {
        "id": "al-qadsiah",
        "name": "Al Qadsiah",
        "short_name": "Al Qadsiah",
        "abbreviation": "QAD",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-qadsiah.svg",
        "primary_color": "#E30613",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al Qadsiah"
      },
      {
        "id": "diriyah-club",
        "name": "Diriyah Club",
        "short_name": "Diriyah",
        "abbreviation": "DIR",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/diriyah-club.svg",
        "primary_color": "#C9A277",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Diriyah Club"
      },
      {
        "id": "al-ahli",
        "name": "Al Ahli",
        "short_name": "Al Ahli",
        "abbreviation": "AHL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-ahli.svg",
        "primary_color": "#008C5A",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "Al Ahli"
      },
      {
        "id": "al-fayha",
        "name": "Al Fayha",
        "short_name": "Al Fayha",
        "abbreviation": "FAY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-fayha.svg",
        "primary_color": "#F58220",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al Fayha"
      },
      {
        "id": "al-khaleej",
        "name": "Al Khaleej",
        "short_name": "Al Khaleej",
        "abbreviation": "KHA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-khaleej.svg",
        "primary_color": "#007A3D",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al Khaleej"
      },
      {
        "id": "al-riyadh",
        "name": "Al Riyadh",
        "short_name": "Al Riyadh",
        "abbreviation": "RIY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-riyadh.svg",
        "primary_color": "#D9271C",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al Riyadh"
      },
      {
        "id": "neom-sc",
        "name": "Neom S.C.",
        "short_name": "Neom",
        "abbreviation": "NEO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/neom-sc.svg",
        "primary_color": "#1696B8",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Neom S.C."
      },
      {
        "id": "al-ettifaq",
        "name": "Al Ettifaq",
        "short_name": "Al Ettifaq",
        "abbreviation": "ETT",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-ettifaq.svg",
        "primary_color": "#007A53",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Al Ettifaq"
      },
      {
        "id": "al-hazem",
        "name": "Al Hazem",
        "short_name": "Al Hazem",
        "abbreviation": "HAZ",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-hazem.svg",
        "primary_color": "#F2C500",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al Hazem"
      },
      {
        "id": "al-kholood",
        "name": "Al Kholood",
        "short_name": "Al Kholood",
        "abbreviation": "KHO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-kholood.svg",
        "primary_color": "#8A1538",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al Kholood"
      },
      {
        "id": "al-shabab",
        "name": "Al Shabab",
        "short_name": "Al Shabab",
        "abbreviation": "SHA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-shabab.svg",
        "primary_color": "#FFFFFF",
        "domestic_reputation": 3,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 3.0,
        "name_ko": "Al Shabab"
      },
      {
        "id": "al-faisaly-fc",
        "name": "Al-Faisaly FC",
        "short_name": "Al Faisaly",
        "abbreviation": "FAI",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-faisaly-fc.svg",
        "primary_color": "#8C1D35",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al-Faisaly FC"
      },
      {
        "id": "al-hilal",
        "name": "Al Hilal",
        "short_name": "Al Hilal",
        "abbreviation": "HIL",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-hilal.svg",
        "primary_color": "#0037E6",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "알 힐랄"
      },
      {
        "id": "al-nassr",
        "name": "Al Nassr",
        "short_name": "Al Nassr",
        "abbreviation": "NAS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-nassr.svg",
        "primary_color": "#F5D000",
        "domestic_reputation": 3,
        "continental_reputation": 3,
        "international_reputation": 3,
        "star_rating": 3.5,
        "name_ko": "알 나스르"
      },
      {
        "id": "al-taawoun",
        "name": "Al Taawoun",
        "short_name": "Al Taawoun",
        "abbreviation": "TAW",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KSA/L/al-taawoun.svg",
        "primary_color": "#1D5790",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Al Taawoun"
      }
    ]
  },
  {
    "id": "k-league-1",
    "name": "K League 1",
    "country_fifa_code": "KOR",
    "logo_url": "https://media.copero.com.ar/logos/football/competitions/KOR/L/k-league-1.svg",
    "league_trophy_url": "https://media.copero.com.ar/trophies/football/national/KOR/k-league-1.png",
    "confederation": "AFC",
    "tier": 1,
    "domestic_cup_id": "kor-korea-cup",
    "teams": [
      {
        "id": "jeonbuk",
        "name": "Jeonbuk Hyundai Motors",
        "short_name": "Jeonbuk Hyundai Motors",
        "abbreviation": "JEO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/jeonbuk.svg",
        "primary_color": "#1E7F4F",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Jeonbuk Hyundai Motors"
      },
      {
        "id": "daejeon-hana-citizen",
        "name": "Daejeon Hana Citizen",
        "short_name": "Daejeon Hana Citizen",
        "abbreviation": "DAE",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/daejeon-hana-citizen.svg",
        "primary_color": "#027F6F",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "대전 하나 시티즌"
      },
      {
        "id": "gimcheon-sangmu",
        "name": "Gimcheon Sangmu FC",
        "short_name": "Gimcheon Sangmu FC",
        "abbreviation": "GIM",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/gimcheon-sangmu.svg",
        "primary_color": "#1E3A5F",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Gimcheon Sangmu FC"
      },
      {
        "id": "pohang-steelers",
        "name": "Pohang Steelers",
        "short_name": "Pohang Steelers",
        "abbreviation": "POH",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/pohang-steelers.svg",
        "primary_color": "#D71920",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "포항 스틸러스"
      },
      {
        "id": "gwangju",
        "name": "Gwangju FC",
        "short_name": "Gwangju FC",
        "abbreviation": "GWA",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/gwangju.svg",
        "primary_color": "#D8A526",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Gwangju FC"
      },
      {
        "id": "fc-seoul",
        "name": "FC Seoul",
        "short_name": "FC Seoul",
        "abbreviation": "SEO",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/fc-seoul.svg",
        "primary_color": "#C71E25",
        "domestic_reputation": 2,
        "continental_reputation": 2,
        "international_reputation": 2,
        "star_rating": 2.5,
        "name_ko": "FC 서울"
      },
      {
        "id": "ulsan-hd",
        "name": "Ulsan HD FC",
        "short_name": "Ulsan HD FC",
        "abbreviation": "ULS",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/ulsan-hd.svg",
        "primary_color": "#0057B8",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Ulsan HD FC"
      },
      {
        "id": "gangwon",
        "name": "Gangwon FC",
        "short_name": "Gangwon FC",
        "abbreviation": "GAN",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/gangwon.svg",
        "primary_color": "#F4A300",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Gangwon FC"
      },
      {
        "id": "anyang",
        "name": "FC Anyang",
        "short_name": "FC Anyang",
        "abbreviation": "ANY",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/anyang.svg",
        "primary_color": "#6A1B9A",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "FC Anyang"
      },
      {
        "id": "jeju",
        "name": "Jeju SK FC",
        "short_name": "Jeju SK FC",
        "abbreviation": "JEJ",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/jeju.svg",
        "primary_color": "#E53935",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Jeju SK FC"
      },
      {
        "id": "bucheon-1995",
        "name": "Bucheon FC 1995",
        "short_name": "Bucheon FC 1995",
        "abbreviation": "BUC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/bucheon-1995.svg",
        "primary_color": "#B71C1C",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "Bucheon FC 1995"
      },
      {
        "id": "incheon-united",
        "name": "Incheon United",
        "short_name": "Incheon United",
        "abbreviation": "INC",
        "logo_url": "https://media.copero.com.ar/logos/football/teams/KOR/L/incheon-united.svg",
        "primary_color": "#0047AB",
        "domestic_reputation": 2,
        "continental_reputation": 1,
        "international_reputation": 1,
        "star_rating": 2.0,
        "name_ko": "인천 유나이티드"
      }
    ]
  }
];

const CAREER_EVENTS_DATA = {
  "training_extra": {
    "title": "추가 개인 훈련",
    "description": "프리시즌 특훈 루틴: 빠르게 실력을 끌어올릴 수 있지만, 무리하면 부상 위험이 따릅니다.",
    "options": {
      "accept": {
        "label": "특훈 강행하기",
        "badge": "성공 65% (+2 OVR) / 실패 35% (-2 OVR)",
        "successProb": 0.65,
        "positive": {
          "ovrDelta": 2,
          "msg": "피나는 노력 끝에 기량이 발전했습니다! (OVR +2)"
        },
        "negative": {
          "ovrDelta": -2,
          "msg": "과부하로 가벼운 근육 부상을 입었습니다. (OVR -2)"
        }
      },
      "reject": {
        "label": "충분한 휴식 취하기",
        "badge": "변화 없음",
        "positive": {
          "ovrDelta": 0,
          "msg": "무리하지 않고 컨디션을 온전히 유지했습니다."
        }
      }
    }
  },
  "personal_coach": {
    "title": "개인 전담 코치 영입",
    "description": "전문 개인 코치가 새로운 슈팅/패스 메커니즘 수정을 제안했습니다. 잘 맞으면 기량이 발전하지만, 폼을 망칠 수도 있습니다.",
    "options": {
      "accept": {
        "label": "새로운 폼으로 교정",
        "badge": "성공 50% (+1 OVR) / 실패 50% (-1 OVR)",
        "successProb": 0.5,
        "positive": {
          "ovrDelta": 1,
          "msg": "새로운 기술이 몸에 익어 플레이가 날카로워졌습니다! (OVR +1)"
        },
        "negative": {
          "ovrDelta": -1,
          "msg": "오히려 기존 폼의 밸런스가 무너지며 슬럼프를 겪습니다. (OVR -1)"
        }
      },
      "reject": {
        "label": "기존 스타일 고수",
        "badge": "변화 없음",
        "positive": {
          "ovrDelta": 0,
          "msg": "본인만의 오리지널 스타일을 지켜나갑니다."
        }
      }
    }
  },
  "mysterious_substance": {
    "title": "의문의 영양 보충제",
    "description": "구단 밖 지인이 엄청난 체력과 파워를 보장하는 '특수 비타민'을 건넸습니다. 도핑 테스트에 적발되면 출장 정지 징계를 받습니다.",
    "options": {
      "consume": {
        "label": "보충제 복용하기",
        "badge": "성공 70% (+3 OVR) / 실패 30% (출장 정지)",
        "successProb": 0.7,
        "positive": {
          "ovrDelta": 3,
          "msg": "폭발적인 신체 능력을 얻으며 그라운드를 지배합니다! (OVR +3)"
        },
        "negative": {
          "ovrDelta": -3,
          "suspended": true,
          "msg": "도핑 테스트에 불시 적발되어 잔여 시즌 출장 정지 처분을 받았습니다! (OVR -3, 출장 정지)"
        }
      },
      "reject": {
        "label": "단호히 거절하기",
        "badge": "안전",
        "positive": {
          "ovrDelta": 0,
          "msg": "정정당당한 페어플레이 정신을 지켰습니다."
        }
      }
    }
  },
  "honesty_test": {
    "title": "승부조작 브로커의 유혹",
    "description": "어두운 그림자의 브로커가 다가와 다음 빅매치에서 일부러 태업하거나 실수를 하면 거액의 뒷돈을 주겠다고 제안합니다.",
    "options": {
      "accept": {
        "label": "돈의 유혹에 넘어가기",
        "badge": "성공 50% (재력 상승) / 실패 50% (자격 정지)",
        "successProb": 0.5,
        "positive": {
          "ovrDelta": 2,
          "msg": "아무도 눈치채지 못했고 거액의 재산을 축적했습니다. (OVR +2)"
        },
        "negative": {
          "ovrDelta": -6,
          "suspended": true,
          "msg": "승부조작 혐의로 내부 고발되어 영구제명 위기에 처했습니다! (OVR -6, 출장 정지)"
        }
      },
      "reject": {
        "label": "협박을 뿌리치고 거절",
        "badge": "클린 스포츠",
        "positive": {
          "ovrDelta": 1,
          "msg": "정의를 지키고 당당하게 그라운드를 누볐습니다! (멘탈 강화, OVR +1)"
        }
      }
    }
  },
  "indecent_proposal": {
    "title": "팀 동료의 연인과의 스캔들",
    "description": "팀 핵심 동료 선수의 연인이 당신에게 은밀한 호감을 표시하며 위험한 만남을 제안해 왔습니다.",
    "options": {
      "proceed": {
        "label": "위험한 만남 갖기",
        "badge": "50% 자신감 폭발 / 50% 발각 파문",
        "successProb": 0.5,
        "positive": {
          "ovrDelta": 2,
          "msg": "비밀 연애의 스릴로 오히려 자신감이 넘쳐납니다! (OVR +2)"
        },
        "negative": {
          "ovrDelta": -3,
          "msg": "라커룸에 소문이 퍼져 동료들에게 왕따를 당하고 팀 분위기가 파탄났습니다. (OVR -3)"
        }
      },
      "reject": {
        "label": "단칼에 거절하기",
        "badge": "동료애 유지",
        "positive": {
          "ovrDelta": 0,
          "msg": "라커룸의 평화를 지키고 축구에만 전념했습니다."
        }
      }
    }
  },
  "controversial_post": {
    "title": "가족의 SNS 폭탄 발언",
    "description": "당신의 가족이 SNS에 구단 전술과 감독의 기용 방식을 맹비난하는 글을 올려 팬들과 언론이 발칵 뒤집혔습니다.",
    "options": {
      "support_family": {
        "label": "가족을 감싸기",
        "badge": "감독 눈 밖에 남 (출전 시간 급감)",
        "positive": {
          "rolePenalty": 1,
          "ovrDelta": 0,
          "msg": "가족의 편을 들다 감독의 눈 밖에 나 출전 시간이 줄어들었습니다."
        }
      },
      "support_club": {
        "label": "구단과 감독에게 공개 사과",
        "badge": "가족 불화 (-2 OVR)",
        "positive": {
          "ovrDelta": -2,
          "msg": "프로페셔널하게 사과했으나 가족과의 갈등으로 극심한 스트레스를 받습니다. (OVR -2)"
        }
      }
    }
  },
  "season_load": {
    "title": "살인적인 시즌 일정과 체력 관리",
    "description": "리그와 컵 대회가 겹친 빡빡한 일정 속에서, 출전 욕심을 내어 더블 세션 훈련을 이어갈지 체력 안배를 할지 결정해야 합니다.",
    "options": {
      "accept": {
        "label": "전 경기 선발 출전 강행",
        "badge": "성공 70% (철인 주전) / 실패 30% (과로 부상)",
        "successProb": 0.7,
        "positive": {
          "ovrDelta": 2,
          "msg": "강철 체력으로 전 경기를 소화하며 팀의 영웅이 되었습니다! (OVR +2)"
        },
        "negative": {
          "ovrDelta": -3,
          "msg": "결국 햄스트링이 터져 병원 신세를 지게 되었습니다. (OVR -3)"
        }
      },
      "stay_calm": {
        "label": "로테이션 수용 및 체력 안배",
        "badge": "출전 시간 소폭 감소",
        "positive": {
          "ovrDelta": 0,
          "msg": "몸을 아끼며 롱런할 수 있는 체력을 보존했습니다."
        }
      }
    }
  },
  "position_change": {
    "title": "감독의 포지션 변경 제안",
    "description": "새로 부임한 감독이 당신의 전술적 다재다능함을 보고 다른 포지션으로의 영구 전환을 강력히 권유합니다.",
    "options": {
      "accept": {
        "label": "새로운 포지션 수락",
        "badge": "확고한 주전 보장 / 적응 기간 필요",
        "positive": {
          "ovrDelta": 1,
          "msg": "새 포지션에 완벽히 정착하며 감독의 핵심 황태자로 거듭났습니다! (OVR +1)"
        }
      },
      "reject": {
        "label": "원래 포지션 고집",
        "badge": "주전 경쟁 심화",
        "positive": {
          "ovrDelta": 0,
          "rolePenalty": 1,
          "msg": "감독의 눈 밖에 나며 로테이션 멤버로 밀려났습니다."
        }
      }
    }
  },
  "position_competition": {
    "title": "동 포지션 경쟁자의 영입",
    "description": "구단이 당신의 자리에 천문학적인 이적료를 들여 월드클래스 라이벌 선수를 영입했습니다. 정면승부하시겠습니까?",
    "options": {
      "compete": {
        "label": "목숨 걸고 주전 경쟁하기",
        "badge": "50% 승리(주전 독점) / 50% 패배(벤치 신세)",
        "successProb": 0.5,
        "positive": {
          "ovrDelta": 3,
          "msg": "피나는 노력으로 라이벌을 압도하고 확고한 넘버원 주전 자리를 지켰습니다! (OVR +3)"
        },
        "negative": {
          "ovrDelta": -1,
          "rolePenalty": 1,
          "msg": "경쟁에서 밀리며 컵 대회용 로테이션 멤버로 전락했습니다. (OVR -1)"
        }
      }
    }
  },
  "unexpected_prospect": {
    "title": "초특급 유망주 원더키드의 등장",
    "description": "유스 팀에서 제2의 메시라 불리는 천재 소년이 1군에 콜업되었습니다. 당신의 자리를 위협할 수도 있습니다.",
    "options": {
      "mentor": {
        "label": "선배로서 멘토링 해주기",
        "badge": "팀 우승 확률 UP / 개인 출전 시간 양보",
        "positive": {
          "ovrDelta": 1,
          "teamBuff": true,
          "msg": "후배를 훌륭히 이끌며 팀에 환상적인 시너지를 불어넣었습니다! (OVR +1, 우승 확률 UP)"
        }
      },
      "search_exit": {
        "label": "주전 보장되는 타 구단 알아보기",
        "badge": "이적 추진",
        "positive": {
          "transferBoost": true,
          "msg": "새로운 도전을 위해 에이전트에게 이적을 지시했습니다."
        }
      }
    }
  },
  "club_priority": {
    "title": "구단의 시즌 목표 선택",
    "description": "시즌 후반기, 구단 수뇌부가 리그 우승과 대륙 대항전(챔피언스리그) 중 하나에 전력을 올인하려 합니다.",
    "options": {
      "prioritize_league": {
        "label": "국내 리그 제패에 집중",
        "badge": "리그 우승 확률 2배 / 챔스 확률 감소",
        "positive": {
          "leagueBoost": true,
          "msg": "리그 경기마다 맹활약하며 승점을 쓸어 담습니다!"
        }
      },
      "prioritize_continental": {
        "label": "대륙 챔피언스리그 정복에 올인",
        "badge": "챔스 우승 확률 2배 / 리그 확률 감소",
        "positive": {
          "uclBoost": true,
          "msg": "별들의 무대 챔피언스리그 토너먼트에서 영웅적 활약을 펼칩니다!"
        }
      }
    }
  },
  "rival_offer": {
    "title": "숙적 라이벌 구단의 메가 오퍼",
    "description": "현재 소속팀의 최대 앙숙인 라이벌 구단이 거액의 연봉과 트로피 보장을 약속하며 파격적인 이적 제안을 건넸습니다.",
    "options": {
      "accept": {
        "label": "라이벌 구단으로 이적 (배신자 루트)",
        "badge": "우승 확률 대폭 상승 / 팬들의 살해 협박",
        "positive": {
          "ovrDelta": 1,
          "rivalTransfer": true,
          "msg": "라이벌 팀의 슈퍼 스쿼드에 합류해 곧바로 트로피에 도전합니다! (OVR +1)"
        }
      },
      "reject": {
        "label": "의리를 지키고 거절 (클럽 레전드 루트)",
        "badge": "홈 팬들의 절대적 지지",
        "positive": {
          "ovrDelta": 1,
          "msg": "팬들에게 영원한 영웅이자 충신으로 각인되었습니다! (OVR +1)"
        }
      }
    }
  },
  "club_crisis": {
    "title": "소속 구단의 재정 위기 & 성적 침체",
    "description": "구단주가 바뀌고 재정 페어플레이(FFP) 위반으로 팀이 흔들리며 주축 선수들이 줄줄이 팔려나가고 있습니다.",
    "options": {
      "stay_and_fight": {
        "label": "난파선에 남아 끝까지 싸우기",
        "badge": "고난의 행군 / 낭만 레전드",
        "positive": {
          "ovrDelta": 0,
          "msg": "팀의 캡틴으로서 끝까지 팀을 지키며 팬들의 눈시울을 붉혔습니다."
        }
      },
      "search_exit": {
        "label": "탈출구(이적) 모색하기",
        "badge": "빅클럽 이적 추진",
        "positive": {
          "transferBoost": true,
          "msg": "자신의 커리어를 지키기 위해 발 빠르게 새 팀을 찾아 떠납니다."
        }
      }
    }
  },
  "fan_backlash": {
    "title": "팬들의 거센 야유와 SNS 테러",
    "description": "최근 몇 경기 동안의 침체기로 인해 성난 서포터즈가 당신에게 야유를 퍼붓고 출퇴근길을 가로막았습니다.",
    "options": {
      "stay_and_fight": {
        "label": "그라운드에서 실력으로 증명하기",
        "badge": "멘탈 압박 (-2 OVR 또는 반등)",
        "successProb": 0.6,
        "positive": {
          "ovrDelta": 2,
          "msg": "다음 경기 해트트릭을 작렬하며 비판론자들의 입을 다물게 했습니다! (OVR +2)"
        },
        "negative": {
          "ovrDelta": -2,
          "msg": "심리적 위축으로 자신감을 잃고 폼이 저하되었습니다. (OVR -2)"
        }
      },
      "search_exit": {
        "label": "환경 변화를 위해 이적 요청",
        "badge": "새로운 리그 도전",
        "positive": {
          "transferBoost": true,
          "msg": "새로운 팀에서 새 출발을 다짐합니다."
        }
      }
    }
  },
  "return_home": {
    "title": "고향 팀의 복귀 러브콜",
    "description": "해외 리그 생활에 지친 당신에게 고국의 명문 구단과 가족들이 집으로 돌아와 마지막 전성기를 빛내달라고 요청합니다.",
    "options": {
      "stay_abroad": {
        "label": "해외 무대 잔류 및 도전 지속",
        "badge": "가족과의 거리감 (-1 OVR) / 정상급 경쟁",
        "positive": {
          "ovrDelta": 1,
          "msg": "세계 최고 수준의 무대에서 치열하게 싸워나갑니다!"
        },
        "negative": {
          "ovrDelta": -1,
          "msg": "향수병으로 인해 약간의 피로감이 누적됩니다."
        }
      },
      "return_home": {
        "label": "금의환향하여 고국 복귀",
        "badge": "국내 리그 제패 도전",
        "positive": {
          "returnHome": true,
          "ovrDelta": 1,
          "msg": "고국 팬들의 열렬한 환영 속에 국내 리그의 슈퍼스타로 군림합니다! (OVR +1)"
        }
      }
    }
  },
  "giant_tattoo": {
    "title": "유명 타투이스트의 전신 문신 제안",
    "description": "유명 타투이스트가 당신의 등 전체에 거대한 호랑이와 날개 문신을 새겨주겠다고 무료 협찬을 제안했습니다.",
    "options": {
      "accept": {
        "label": "문신 새기기",
        "badge": "성공 70% (간지 폭발 +2 OVR) / 실패 30% (피부 염증)",
        "successProb": 0.7,
        "positive": {
          "ovrDelta": 2,
          "msg": "강렬한 카리스마로 경기장 위를 압도합니다! (OVR +2)"
        },
        "negative": {
          "ovrDelta": -2,
          "msg": "피부 감염으로 고열에 시달려 훈련을 거르게 되었습니다. (OVR -2)"
        }
      },
      "reject": {
        "label": "정중히 거절",
        "badge": "단정함 유지",
        "positive": {
          "ovrDelta": 0,
          "msg": "깔끔한 본래 모습을 유지했습니다."
        }
      }
    }
  },
  "tax_trouble": {
    "title": "국세청의 세무 조사 및 탈세 스캔들",
    "description": "초상권 계약 관련 세무 조사 대상에 올라 신문 1면을 장식하며 엄청난 추징금 위기에 처했습니다.",
    "options": {
      "stay_and_fight": {
        "label": "법정 다툼 및 벌금 납부",
        "badge": "스트레스 (-2 OVR)",
        "positive": {
          "ovrDelta": -2,
          "msg": "벌금을 납부하고 사태를 수습했으나 심적 소모가 컸습니다. (OVR -2)"
        }
      },
      "search_exit": {
        "label": "세금 부담 적은 타국 리그로 이적",
        "badge": "타 리그 이적",
        "positive": {
          "transferBoost": true,
          "msg": "신속하게 해외 타 리그로 이적하며 논란을 벗어납니다."
        }
      }
    }
  },
  "foreign_grandfather": {
    "title": "외국 혈통 발견 & 귀화 국가대표 제안",
    "description": "조부모 중 한 분이 다른 축구 강국 국적을 가졌음이 확인되어, 해당 국가대표팀 감독이 직접 귀화 발탁을 타진해왔습니다.",
    "options": {
      "switch_national_team": {
        "label": "새로운 국가대표팀 선택",
        "badge": "대표팀 변경 / 메이저 대회 진출 기회",
        "positive": {
          "switchNation": true,
          "msg": "새로운 국기를 가슴에 달고 국제 대회 우승에 도전합니다!"
        }
      },
      "keep_national_team": {
        "label": "기존 조국 대표팀 고수",
        "badge": "애국심과 낭만",
        "positive": {
          "ovrDelta": 1,
          "msg": "조국을 향한 헌신을 다짐하며 국민적 영웅으로 남습니다! (OVR +1)"
        }
      }
    }
  },
  "finish_high_school": {
    "title": "학업 병행 및 졸업장 취득",
    "description": "프로 조기 데뷔로 중단했던 학업을 마칠 기회가 생겼습니다. 공부와 운동을 병행하시겠습니까?",
    "options": {
      "accept": {
        "label": "야간 학업 이수 및 졸업",
        "badge": "멘탈 성숙 (+1 OVR) / 약간의 피로",
        "positive": {
          "ovrDelta": 1,
          "msg": "지적 성숙과 함께 경기 읽는 눈이 넓어졌습니다! (OVR +1)"
        }
      },
      "reject": {
        "label": "축구에만 올인",
        "badge": "변화 없음",
        "positive": {
          "ovrDelta": 0,
          "msg": "오직 축구공 하나에만 인생을 걸었습니다."
        }
      }
    }
  },
  "controversial_statement": {
    "title": "경기 후 인터뷰 설화 & 기자회견 사과",
    "description": "패배 직후 흥분한 상태에서 '동료들의 수준이 낮아 질 수밖에 없었다'고 발언해 라커룸이 뒤집어졌습니다.",
    "options": {
      "apologize": {
        "label": "선수단과 팬들에게 머리 숙여 사과",
        "badge": "자존심 굽히기 / 출전 시간 일시 감소",
        "positive": {
          "ovrDelta": -1,
          "msg": "진심 어린 사과로 파국을 면했으나 동료들의 신뢰 회복에 시간이 걸립니다. (OVR -1)"
        }
      }
    }
  },
  "club_national_team_conflict": {
    "title": "소속팀 vs 국가대표팀 차출 갈등",
    "description": "소속팀 감독이 중요한 리그 일정을 이유로 A매치 친선경기 차출을 거부하라며 강하게 압박합니다.",
    "options": {
      "go_anyway": {
        "label": "국가의 부름에 응하기 (비행기 탑승)",
        "badge": "국대 주전 보장 / 구단 징계",
        "positive": {
          "ovrDelta": 0,
          "rolePenalty": 1,
          "msg": "태극마크(국대)를 위해 날아갔고, 구단에서는 잠시 벤치로 밀려났습니다."
        }
      },
      "comply": {
        "label": "구단 잔류 및 휴식",
        "badge": "구단 주전 확보 / 대표팀 낙마 위기",
        "positive": {
          "ovrDelta": 1,
          "msg": "클럽에 집중해 맹활약했으나 대표팀 내 입지는 좁아졌습니다. (OVR +1)"
        }
      }
    }
  },
  "injury_at_peak": {
    "title": "대회 결승전을 앞둔 비극적 부상",
    "description": "결승전 직전 발목 인대 손상을 입었습니다. 진통제를 맞고 무리해서 뛰시겠습니까, 아니면 안전을 위해 결장하시겠습니까?",
    "options": {
      "play_injured": {
        "label": "진통제 투혼 강행 (부상 투혼)",
        "badge": "우승 확률 대폭 상승 / 영구 손상 위험 (-2 OVR)",
        "positive": {
          "ovrDelta": -2,
          "trophyBoost": true,
          "msg": "절뚝거리며 결승골을 터뜨려 팀을 우승시켰지만 무릎 연골이 닳았습니다! (우승 확률 UP, OVR -2)"
        }
      },
      "recover": {
        "label": "치료와 회복에 전념 (결장)",
        "badge": "안전한 완쾌 / 벤치에서 관전",
        "positive": {
          "ovrDelta": 0,
          "msg": "무리하지 않고 부상을 완치하여 롱런을 기약합니다."
        }
      }
    }
  },
  "injury": {
    "title": "시즌 중 불의의 부상 발생",
    "description": "경기 도중 거친 태클을 당해 들것에 실려 나갔습니다. 재활 치료가 필요합니다.",
    "options": {
      "continue": {
        "label": "재활 훈련 시작하기",
        "badge": "재활 기간 돌입",
        "positive": {
          "ovrDelta": -2,
          "msg": "피나는 재활 끝에 그라운드로 복귀했습니다."
        }
      }
    }
  },
  "decisive_penalty": {
    "title": "승부차기 마지막 5번 키커",
    "description": "메이저 대회 결승전, 승부차기 마지막 키커로 당신이 공 앞에 섰습니다. 어느 방향으로 차시겠습니까?",
    "options": {
      "left": {
        "label": "왼쪽 구석으로 강하게 슈팅!",
        "badge": "성공 50% (우승) / 실패 50% (실축)",
        "successProb": 0.5,
        "positive": {
          "trophyWin": true,
          "ovrDelta": 2,
          "msg": "골망을 시원하게 가르며 팀의 우승을 확정지었습니다! GOAL! (OVR +2)"
        },
        "negative": {
          "trophyWin": false,
          "ovrDelta": -2,
          "msg": "골키퍼의 슈퍼 세이브에 막히며 눈물을 삼켰습니다... (OVR -2)"
        }
      },
      "right": {
        "label": "오른쪽 구석으로 정교하게 슈팅!",
        "badge": "성공 50% (우승) / 실패 50% (실축)",
        "successProb": 0.5,
        "positive": {
          "trophyWin": true,
          "ovrDelta": 2,
          "msg": "골키퍼의 타이밍을 완전히 빼앗으며 골망을 흔들었습니다! 우승! (OVR +2)"
        },
        "negative": {
          "trophyWin": false,
          "ovrDelta": -2,
          "msg": "골대를 맞고 튕겨져 나오며 아쉽게 준우승에 머물렀습니다... (OVR -2)"
        }
      }
    }
  }
};

const ACHIEVEMENTS_DATA = {
  "king_of_america": {
    "title": "아메리카의 제왕",
    "desc": "한 커리어에서 코파 아메리카와 코파 리베르타도레스 우승 동시 달성",
    "icon": "👑"
  },
  "one_club_legend": {
    "title": "원클럽 레전드",
    "desc": "이적 없이 오직 한 클럽에서만 활약하며 리그, 컵, 대륙 대회 3대 메이저 우승",
    "icon": "🛡️"
  },
  "europe_owner": {
    "title": "유럽 5대 리그 정복자",
    "desc": "유럽 5대 빅리그(EPL, 라리가, 세리에A, 분데스리가, 리그1) 모두에서 리그 우승 달성",
    "icon": "🏰"
  },
  "mr_champions": {
    "title": "미스터 챔피언스",
    "desc": "UEFA 챔피언스리그 통산 5회 이상 우승",
    "icon": "⭐"
  },
  "goat": {
    "title": "축구의 신 (G.O.A.T)",
    "desc": "월드컵 1회, 대륙컵 2회, 발롱도르 8회, 챔피언스리그 4회 우승 달성 (메시급 위업)",
    "icon": "🐐"
  },
  "only_pele": {
    "title": "펠레의 환생",
    "desc": "월드컵 3회 우승 및 통산 1,000골 돌파",
    "icon": "⚽"
  },
  "black_spider": {
    "title": "검은 거미 (야신의 후예)",
    "desc": "올해의 골키퍼 상(야신상/골든글러브) 통산 6회 이상 수상",
    "icon": "🧤"
  },
  "net_terror": {
    "title": "골망의 파괴자",
    "desc": "골든슈(득점왕) 통산 6회 이상 수상",
    "icon": "👟"
  },
  "complete_football": {
    "title": "축구 올클리어",
    "desc": "클럽 및 국가대표의 모든 주요 메이저 대회와 개인상 석권",
    "icon": "🌟"
  },
  "most_decorated": {
    "title": "역대 최다 우승자",
    "desc": "통산 팀 공식 우승 트로피 49개 이상 수집",
    "icon": "🏆"
  },
  "ringless": {
    "title": "무관의 제왕",
    "desc": "화려한 개인 기량에도 불구하고 팀 메이저 트로피 0개로 은퇴 (케인 스타일)",
    "icon": "💔"
  },
  "national_hero": {
    "title": "조국의 영웅",
    "desc": "월드컵 우승 경험이 없던 비전통 강호 국가(한국 등)를 이끌고 월드컵 첫 우승",
    "icon": "🇰🇷"
  },
  "the_world_is_yours": {
    "title": "세상은 너의 것",
    "desc": "FIFA 월드컵과 FIFA 클럽 월드컵을 모두 제패",
    "icon": "🌍"
  },
  "from_the_periphery": {
    "title": "변방의 반란",
    "desc": "유럽/남미가 아닌 아시아, 아프리카, 북중미, 오세아니아 국적으로 발롱도르 수상",
    "icon": "🌏"
  },
  "ushuaia_to_darien": {
    "title": "남미 대륙 정복자",
    "desc": "남미 10개국 리그 클럽에서 모두 활약",
    "icon": "🗺️"
  },
  "nomad": {
    "title": "방랑자 (저니맨)",
    "desc": "전 세계 6개 대륙의 클럽에서 활약",
    "icon": "✈️"
  },
  "from_the_bottom": {
    "title": "밑바닥 신화",
    "desc": "3부 리그 팀에서 시작해 같은 팀을 이끌고 1부 리그 우승 견인",
    "icon": "🧗"
  },
  "matagigantes": {
    "title": "언더독의 기적 (자이언트 킬러)",
    "desc": "명성 0의 중소 클럽 소속으로 챔피언스리그 또는 리베르타도레스 우승",
    "icon": "⚡"
  },
  "the_treble": {
    "title": "트레블 달성",
    "desc": "단일 시즌에 리그, FA컵, 대륙 챔피언스리그 3관왕 달성",
    "icon": "✨"
  },
  "baldosero": {
    "title": "풍운아",
    "desc": "커리어 통산 24개 이상의 구단에서 활약",
    "icon": "🧳"
  }
};

const INJURIES_DATA = [
  {
    "type": "hamstring",
    "name": "햄스트링 파열",
    "ovrDelta": -3,
    "weight": 24
  },
  {
    "type": "meniscus",
    "name": "반월판 연골 손상",
    "ovrDelta": -2,
    "weight": 18
  },
  {
    "type": "acl",
    "name": "전방십자인대(ACL) 파열",
    "ovrDelta": -5,
    "weight": 14
  },
  {
    "type": "tibia_fibula",
    "name": "경골 및 비골 골절",
    "ovrDelta": -8,
    "weight": 8
  },
  {
    "type": "achilles",
    "name": "아킬레스건 파열",
    "ovrDelta": -10,
    "weight": 4
  },
  {
    "type": "ankle_sprain",
    "name": "발목 인대 염좌",
    "ovrDelta": -1,
    "weight": 14
  },
  {
    "type": "calf_tear",
    "name": "종아리 근육 파열",
    "ovrDelta": -2,
    "weight": 8
  },
  {
    "type": "metatarsal_fracture",
    "name": "중족골 골절",
    "ovrDelta": -4,
    "weight": 5
  },
  {
    "type": "shoulder_dislocation",
    "name": "어깨 관절 탈구",
    "ovrDelta": -4,
    "weight": 3
  },
  {
    "type": "disc_hernia",
    "name": "허리 디스크",
    "ovrDelta": -5,
    "weight": 2
  }
];

const TOURNAMENTS_INFO = {
  world_cup: { name: "FIFA 월드컵", cycle: 4, icon: "🏆", badge: "국제 메이저" },
  club_world_cup: { name: "FIFA 클럽 월드컵", cycle: 4, icon: "🌐", badge: "세계 클럽" },
  UEFA: {
    continental_primary: { name: "UEFA 챔피언스리그", icon: "⭐" },
    continental_secondary: { name: "UEFA 유로파리그", icon: "🥈" },
    national_continental: { name: "UEFA 유로 (유럽선수권)", cycle: 4, icon: "🇪🇺" }
  },
  CONMEBOL: {
    continental_primary: { name: "코파 리베르타도레스", icon: "🏆" },
    continental_secondary: { name: "코파 수다메리카나", icon: "🥈" },
    national_continental: { name: "코파 아메리카", cycle: 4, icon: "🌎" }
  },
  AFC: {
    continental_primary: { name: "AFC 챔피언스리그 엘리트", icon: "🏆" },
    continental_secondary: { name: "AFC 챔피언스리그 2", icon: "🥈" },
    national_continental: { name: "AFC 아시안컵", cycle: 4, icon: "🌏" }
  },
  CONCACAF: {
    continental_primary: { name: "북중미 챔피언스컵", icon: "🏆" },
    national_continental: { name: "북중미 골드컵", cycle: 2, icon: "🏆" }
  },
  CAF: {
    continental_primary: { name: "CAF 챔피언스리그", icon: "🏆" },
    continental_secondary: { name: "CAF 컨페더레이션컵", icon: "🥈" },
    national_continental: { name: "아프리카 네이션스컵", cycle: 2, icon: "🌍" }
  },
  OFC: {
    continental_primary: { name: "OFC 챔피언스리그", icon: "🏆" },
    national_continental: { name: "OFC 네이션스컵", cycle: 4, icon: "🏆" }
  }
};
