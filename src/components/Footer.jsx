import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [formData, setFormData] = useState({
    productService: '',
    productSlno: '',
    quantity: '',
    unit: '',
    details: '',
    name: '',
    email: '',
    country: 'IN^91',
    phoneIsd: '+91',
    phone: ''
  })

  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showUnitSuggestions, setShowUnitSuggestions] = useState(false)
  const [unitSuggestions, setUnitSuggestions] = useState([])
  const [isUnitReadOnly, setIsUnitReadOnly] = useState(true)
  const [showQuantity, setShowQuantity] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const autocompleteRef = useRef(null)
  const unitRef = useRef(null)

  // Product/Service list
  const products = [
    { label: "1000-2000 LPH Water Softener Plant", id: 7319520, unit: "Unit", type: "0" },
    { label: "2000-5000 LPH Water Softener Plant", id: 7319524, unit: "Unit", type: "0" },
    { label: "2400 BPH Automatic Pet Stretch Blow Moulding Machine", id: 7287625, unit: "Machine", type: "0" },
    { label: "Alkaline Mineral Water Plant", id: 7286830, unit: "Plant", type: "0" },
    { label: "Automatic BOPP Hot Glue Labelling Machine", id: 7287658, unit: "Machine", type: "0" },
    { label: "Automatic Drinking Water Filling Machine", id: 7287431, unit: "Plant", type: "0" },
    { label: "Automatic Mineral Water Plant", id: 7286861, unit: "Plant", type: "0" },
    { label: "Automatic Pet Bottle Rinser Filler Capper Machine", id: 7287418, unit: "Plant", type: "0" },
    { label: "Automatic RO Plant", id: 7286744, unit: "piece", type: "0" },
    { label: "Automatic Shrink Wrapping Machine", id: 7287482, unit: "Machine", type: "0" },
    { label: "Automatic Sleeve Applicator", id: 7287652, unit: "Piece", type: "0" },
    { label: "Automatic Sticker Labelling Machine", id: 7287649, unit: "Machine", type: "0" },
    { label: "Bag Filters", id: 7287898, unit: "Piece", type: "0" },
    { label: "Beverage Manufacturing Plant", id: 7287780, unit: "Plant", type: "0" },
    { label: "Carbonated Beverage Manufacturing Plant", id: 7287797, unit: "Plant", type: "0" },
    { label: "Carbonated Soft Drink Filling Plant", id: 6095773, unit: "Piece", type: "0" },
    { label: "Carbonated Soft Drinks Filling Machine", id: 7287435, unit: "Machine", type: "0" },
    { label: "Cartridge Filters", id: 7287892, unit: "Piece", type: "0" },
    { label: "Commercial Alkaline Ionizer", id: 7287706, unit: "Machine", type: "0" },
    { label: "Commercial Reverse Osmosis Plant", id: 7319484, unit: "Unit", type: "0" },
    { label: "Commercial Reverse Osmosis System", id: 7206907, unit: "piece", type: "0" },
    { label: "Common Effluent Treatment Plant", id: 7319667, unit: "Unit", type: "0" },
    { label: "Demineralization Water Plant", id: 6434861, unit: "Piece", type: "0" },
    { label: "Dialysis Ro Plant", id: 6074670, unit: "Plant", type: "0" },
    { label: "DM Plant", id: 7319700, unit: "Unit", type: "0" },
    { label: "Drinking Water Plant", id: 7287397, unit: "Plant", type: "0" },
    { label: "Effluent Treatment Plant", id: 6074573, unit: "Container", type: "0" },
    { label: "effluent water treatment plant", id: 7432336, unit: "Set", type: "0" },
    { label: "FRP Automatic Reverse Osmosis Plant", id: 7319498, unit: "Unit", type: "0" },
    { label: "FRP Commercial Reverse Osmosis Plant", id: 7319454, unit: "Unit", type: "0" },
    { label: "FRP Semi-Automatic Reverse Osmosis Plant", id: 7319463, unit: "Unit", type: "0" },
    { label: "Fully Automatic 20 Liter Jar Rinsing Filling Capping Machine", id: 7287448, unit: "Machine", type: "0" },
    { label: "Fully Automatic Mineral Water Plant", id: 7286826, unit: "Pack", type: "0" },
    { label: "Fully Automatic Pet Stretch Blow Moulding Machine", id: 7287632, unit: "Machine", type: "0" },
    { label: "Fully Automatic Soda Soft Drink Plant", id: 7287839, unit: "Plant", type: "0" },
    { label: "Industrial Effluent Treatment Plant", id: 7319679, unit: "Unit", type: "0" },
    { label: "Industrial Reverse Osmosis Plant", id: 6074656, unit: "Plant", type: "0" },
    { label: "Industrial RO Plant", id: 7286722, unit: "Plant", type: "0" },
    { label: "Iron Removal Filters", id: 6074542, unit: "Plant", type: "0" },
    { label: "ISI Mineral Water Plant", id: 7287389, unit: "Pack", type: "0" },
    { label: "Jar Washing And Cleaning Machine", id: 7287460, unit: "Machine", type: "0" },
    { label: "Juice Bottle Filling Machine", id: 7287443, unit: "Machine", type: "0" },
    { label: "Mineral Water Bottling Plant", id: 7286869, unit: "Plant", type: "0" },
    { label: "Mineral Water Filling Machine", id: 7287404, unit: "Machine", type: "0" },
    { label: "Non ISI Mineral Water Plant", id: 7287691, unit: "Plant", type: "0" },
    { label: "Packaged Drinking Water Filling Machine", id: 6074581, unit: "Plant", type: "0" },
    { label: "Packaged Drinking Water Plant", id: 7287370, unit: "Plant", type: "0" },
    { label: "Portable Effluent Treatment Plant", id: 7319688, unit: "Unit", type: "0" },
    { label: "RO Antiscalant Chemical", id: 7287880, unit: "Litre", type: "0" },
    { label: "RO Membranes", id: 7287863, unit: "Piece", type: "0" },
    { label: "Seawater Desalination Plant", id: 7286728, unit: "Plant", type: "0" },
    { label: "Semi Automatic Pet Stretch Blow Moulding Machine", id: 7287615, unit: "Machine", type: "0" },
    { label: "Semi Automatic Shrink Wrapping Machine", id: 7287465, unit: "Machine", type: "0" },
    { label: "Sewage Treatment Plant", id: 6074532, unit: "Plant", type: "0" },
    { label: "Soft Drink Making Machinery", id: 7287825, unit: "Plant", type: "0" },
    { label: "Soft Drink Manufacturing Plant", id: 7287815, unit: "Plant", type: "0" },
    { label: "Stainless Steel RO Plant", id: 7286759, unit: "Piece", type: "0" },
    { label: "Stp Plant", id: 7432338, unit: "piece", type: "0" },
    { label: "Turnkey Mineral Water Project", id: 7287382, unit: "Plant", type: "0" },
    { label: "Uf Filter", id: 7319721, unit: "Unit", type: "0" },
    { label: "Ultra Filtration Plant", id: 7286774, unit: "Plant", type: "0" },
    { label: "Water Bottle Filling Machine", id: 7287412, unit: "Plant", type: "0" },
    { label: "Water Chiller Machine", id: 6232748, unit: "Piece", type: "0" },
    { label: "Water Filtration System", id: 7286797, unit: "Piece", type: "0" },
    { label: "Water Plant Machinery", id: 7287393, unit: "Plant", type: "0" },
    { label: "Water Softener", id: 7319577, unit: "Unit", type: "0" },
    { label: "Water Softening Plant", id: 6074634, unit: "Plant", type: "0" },
    { label: "Water Softening System", id: 7319530, unit: "Unit", type: "0" },
    { label: "Sewage Treatment Equipment", id: 7319604, unit: "Unit", type: "0" },
    { label: "MBR Sewage Treatment Plant", id: 7319591, unit: "Unit", type: "0" },
    { label: "SBR Sewage Treatment Plant", id: 7319600, unit: "Unit", type: "0" },
    { label: "Stp Plant Project Work", id: 7319625, unit: "Unit", type: "0" }
  ]

  // Complete units list from the provided JavaScript
  const units = [
    "piece", "pc", "pieces", "pcs", "Kilogram", "kg", "Kilograms", "kgs", "Bag", "Bags", "Unit", "Units", "Pair", "Pairs", "Set", "Sets", "Meter", "m", "Ton", "Tn", "Tons", "Metric Ton", "MT", "Metric Tons", "Box", "Boxes", "Square Feet", "Sq. Ft.", "Roll", "Rolls", "Bottle", "Bottles", "Litre", "Ltr", "Litres", "Ltrs", "Packet", "Pkt", "Packets", "Pkts", "Sheet", "Sheets", "Dozen", "Doz", "Dozens", "Carton", "CTN", "Cartons", "Container", "CNT", "Containers", "Pack", "Packs", "Ream", "Reams", "Gram", "gm", "Grams", "gms", "Ounce", "oz", "Pound", "lb", "Pounds", "lbs", "Gallon", "gal", "Gallons", "Bushel", "bsh", "Kilometer", "Km", "Kilometers", "Kms", "Square Meter", "Sq. Mtr.", "Square Meters", "Sq. Mtrs", "Hectare", "hect", "Hectares", "Short Ton", "short tn", "Short Tons", "Long Ton", "long tn", "Long Tons", "Foot", "Ft.", "Feet", "Carat", "ct", "Milliliter", "ml", "Quintal", "qq", "Quintals", "Strip", "Strips", "Square Inch", "Sq. in.", "Inch", "in", "Inches", "Decimeter", "dm", "Decimeters", "Cubic Feet", "cu ft", "Yard", "yd", "Yards", "yds", "Centimeter", "cm", "Centimeters", "cms", "Number", "No", "Numbers", "Nos", "Bale", "Bales", "Bundle", "Bundles", "Buckle", "Buckles", "Can", "Cans", "Cubic meter", "cu. m.", "Cubic Centimeter", "ccm", "cm3", "Drum", "Drums", "Great Gross", "gr gr", "Gross", "gr", "Kilolitre", "kl", "Kilolitres", "Square yard", "Sq. Yd.", "Square yards", "Sq. Yds.", "Barrel", "Barrels", "hour", "hr", "hours", "hrs", "Millimeter", "mm", "Square Centimeter", "cm2", "Mile", "Cubic Inch", "in3", "Imperial Teaspoon", "Imperial tsp", "Imperial TableSpoon", "Imperial Tbsp", "Fluid Ounce", "fl oz", "Imperial Cup", "Imperial Pint", "Imperial Quart", "Imperial Gallon", "US teaspoon", "US tsp", "US Tablespoon", "US tbsp", "US Legal Cup", "US Liquid Pint", "US Liquid Quart", "US Liquid Gallon", "Minute", "Day", "Week", "Month", "Year", "Decade", "Century", "Nautical Mile", "nmi", "Acre", "milligram", "mg", "milligrams", "Bunch", "Jar", "Jars", "Capsule", "cap.", "Capsules", "Board", "Boards", "Watt", "Kilowatt", "Machine", "Plant"
  ]

  // Complete countries list
  const countries = [
    { value: "AF^93", label: "Afghanistan" },
    { value: "AL^335", label: "Albania" },
    { value: "DZ^213", label: "Algeria" },
    { value: "AS^684", label: "American Samoa" },
    { value: "AD^376", label: "Andorra" },
    { value: "AO^244", label: "Angola" },
    { value: "AI^264", label: "Anguilla" },
    { value: "AQ^672", label: "Antarctica" },
    { value: "AG^268", label: "Antigua and Barbuda" },
    { value: "AR^54", label: "Argentina" },
    { value: "AM^374", label: "Armenia" },
    { value: "AW^297", label: "Aruba" },
    { value: "AU^61", label: "Australia" },
    { value: "AT^43", label: "Austria" },
    { value: "AZ^994", label: "Azerbaijan" },
    { value: "BS^242", label: "Bahamas" },
    { value: "BH^973", label: "Bahrain" },
    { value: "BD^880", label: "Bangladesh" },
    { value: "BB^246", label: "Barbados" },
    { value: "BY^375", label: "Belarus" },
    { value: "BE^32", label: "Belgium" },
    { value: "BZ^501", label: "Belize" },
    { value: "BJ^229", label: "Benin" },
    { value: "BM^441", label: "Bermuda" },
    { value: "BT^975", label: "Bhutan" },
    { value: "BO^591", label: "Bolivia" },
    { value: "BA^387", label: "Bosnia and Herzegowina" },
    { value: "BW^267", label: "Botswana" },
    { value: "BV^47", label: "Bouvet Island" },
    { value: "BR^55", label: "Brazil" },
    { value: "IO^246", label: "British Indian Ocean Territory" },
    { value: "BN^673", label: "Brunei Darussalam" },
    { value: "BG^359", label: "Bulgaria" },
    { value: "BF^226", label: "Burkina Faso" },
    { value: "BI^257", label: "Burundi" },
    { value: "KH^855", label: "Cambodia" },
    { value: "CM^237", label: "Cameroon" },
    { value: "CA^1", label: "Canada" },
    { value: "CV^238", label: "Cape Verde" },
    { value: "KY^345", label: "Cayman Islands" },
    { value: "CF^236", label: "Central African Republic" },
    { value: "TD^235", label: "Chad" },
    { value: "CL^56", label: "Chile" },
    { value: "CN^86", label: "China" },
    { value: "CX^61", label: "Christmas Island" },
    { value: "CC^61", label: "Cocos (Keeling) Islands" },
    { value: "CO^57", label: "Colombia" },
    { value: "KM^269", label: "Comoros" },
    { value: "CG^242", label: "Congo" },
    { value: "CK^682", label: "Cook Islands" },
    { value: "CR^506", label: "Costa Rica" },
    { value: "CI^225", label: "Cote D'Ivoire" },
    { value: "HR^385", label: "Croatia" },
    { value: "CU^53", label: "Cuba" },
    { value: "CY^357", label: "Cyprus" },
    { value: "CZ^420", label: "Czech Republic" },
    { value: "DK^45", label: "Denmark" },
    { value: "DJ^253", label: "Djibouti" },
    { value: "DM^767", label: "Dominica" },
    { value: "DO^809", label: "Dominican Republic" },
    { value: "TP^670", label: "East Timor" },
    { value: "EC^593", label: "Ecuador" },
    { value: "EG^20", label: "Egypt" },
    { value: "SV^503", label: "El Salvador" },
    { value: "GQ^240", label: "Equatorial Guinea" },
    { value: "ER^291", label: "Eritrea" },
    { value: "EE^372", label: "Estonia" },
    { value: "ET^251", label: "Ethiopia" },
    { value: "FK^500", label: "Falkland Islands (Malvinas)" },
    { value: "FO^298", label: "Faroe Islands" },
    { value: "FJ^679", label: "Fiji" },
    { value: "FI^358", label: "Finland" },
    { value: "FR^33", label: "France" },
    { value: "FX^590", label: "France, Metropolitan" },
    { value: "GF^594", label: "French Guiana" },
    { value: "PF^689", label: "French Polynesia" },
    { value: "TF^590", label: "French Southern Territories" },
    { value: "GA^241", label: "Gabon" },
    { value: "GM^220", label: "Gambia" },
    { value: "GE^995", label: "Georgia" },
    { value: "DE^49", label: "Germany" },
    { value: "GH^233", label: "Ghana" },
    { value: "GI^350", label: "Gibraltar" },
    { value: "GR^30", label: "Greece" },
    { value: "GL^299", label: "Greenland" },
    { value: "GD^809", label: "Grenada" },
    { value: "GP^590", label: "Guadeloupe" },
    { value: "GU^1", label: "Guam" },
    { value: "GT^502", label: "Guatemala" },
    { value: "GN^224", label: "Guinea" },
    { value: "GW^245", label: "Guinea-bissau" },
    { value: "GY^592", label: "Guyana" },
    { value: "HT^509", label: "Haiti" },
    { value: "HM^61", label: "Heard and Mc Donald Islands" },
    { value: "HN^504", label: "Honduras" },
    { value: "HK^852", label: "Hong Kong" },
    { value: "HU^36", label: "Hungary" },
    { value: "IS^354", label: "Iceland" },
    { value: "IN^91", label: "India", selected: true },
    { value: "ID^62", label: "Indonesia" },
    { value: "IR^98", label: "Iran (Islamic Republic of)" },
    { value: "IQ^964", label: "Iraq" },
    { value: "IE^353", label: "Ireland" },
    { value: "IL^972", label: "Israel" },
    { value: "IT^39", label: "Italy" },
    { value: "JM^876", label: "Jamaica" },
    { value: "JP^81", label: "Japan" },
    { value: "JO^962", label: "Jordan" },
    { value: "KZ^7", label: "Kazakhstan" },
    { value: "KE^254", label: "Kenya" },
    { value: "KI^686", label: "Kiribati" },
    { value: "KP^850", label: "Korea, Democratic People's Republic of" },
    { value: "KR^82", label: "Korea, Republic of" },
    { value: "KW^965", label: "Kuwait" },
    { value: "KG^7", label: "Kyrgyzstan" },
    { value: "LA^856", label: "Lao People's Democratic Republic" },
    { value: "LV^371", label: "Latvia" },
    { value: "LB^961", label: "Lebanon" },
    { value: "LS^266", label: "Lesotho" },
    { value: "LR^231", label: "Liberia" },
    { value: "LY^218", label: "Libya" },
    { value: "LI^423", label: "Liechtenstein" },
    { value: "LT^370", label: "Lithuania" },
    { value: "LU^352", label: "Luxembourg" },
    { value: "MO^853", label: "Macau" },
    { value: "MK^389", label: "Macedonia, The Former Yugoslav Republic of" },
    { value: "MG^261", label: "Madagascar" },
    { value: "MW^265", label: "Malawi" },
    { value: "MY^60", label: "Malaysia" },
    { value: "MV^960", label: "Maldives" },
    { value: "ML^223", label: "Mali" },
    { value: "MT^356", label: "Malta" },
    { value: "MH^692", label: "Marshall Islands" },
    { value: "MQ^596", label: "Martinique" },
    { value: "MR^222", label: "Mauritania" },
    { value: "MU^230", label: "Mauritius" },
    { value: "YT^269", label: "Mayotte" },
    { value: "MX^52", label: "Mexico" },
    { value: "FM^691", label: "Micronesia, Federated States of" },
    { value: "MD^373", label: "Moldova, Republic of" },
    { value: "MC^377", label: "Monaco" },
    { value: "MN^976", label: "Mongolia" },
    { value: "ME^382", label: "Montenegro" },
    { value: "MS^664", label: "Montserrat" },
    { value: "MA^212", label: "Morocco" },
    { value: "MZ^258", label: "Mozambique" },
    { value: "MM^95", label: "Myanmar" },
    { value: "NA^264", label: "Namibia" },
    { value: "NR^674", label: "Nauru" },
    { value: "NP^977", label: "Nepal" },
    { value: "NL^31", label: "Netherlands" },
    { value: "AN^599", label: "Netherlands Antilles" },
    { value: "NC^687", label: "New Caledonia" },
    { value: "NZ^64", label: "New Zealand" },
    { value: "NI^505", label: "Nicaragua" },
    { value: "NE^227", label: "Niger" },
    { value: "NG^234", label: "Nigeria" },
    { value: "NU^683", label: "Niue" },
    { value: "NF^672", label: "Norfolk Island" },
    { value: "MP^670", label: "Northern Mariana Islands" },
    { value: "NO^47", label: "Norway" },
    { value: "OM^968", label: "Oman" },
    { value: "PK^92", label: "Pakistan" },
    { value: "PW^680", label: "Palau" },
    { value: "PS^970", label: "Palestine" },
    { value: "PA^507", label: "Panama" },
    { value: "PG^675", label: "Papua New Guinea" },
    { value: "PY^595", label: "Paraguay" },
    { value: "PE^51", label: "Peru" },
    { value: "PH^63", label: "Philippines" },
    { value: "PN^872", label: "Pitcairn" },
    { value: "PL^48", label: "Poland" },
    { value: "PT^351", label: "Portugal" },
    { value: "PR^787", label: "Puerto Rico" },
    { value: "QA^974", label: "Qatar" },
    { value: "RE^262", label: "Reunion" },
    { value: "RO^40", label: "Romania" },
    { value: "RU^7", label: "Russian Federation" },
    { value: "RW^250", label: "Rwanda" },
    { value: "KN^869", label: "Saint Kitts and Nevis" },
    { value: "LC^758", label: "Saint Lucia" },
    { value: "VC^784", label: "Saint Vincent and the Grenadines" },
    { value: "WS^685", label: "Samoa" },
    { value: "SM^378", label: "San Marino" },
    { value: "ST^239", label: "Sao Tome and Principe" },
    { value: "SA^966", label: "Saudi Arabia" },
    { value: "SN^221", label: "Senegal" },
    { value: "RS^381", label: "Serbia" },
    { value: "SC^248", label: "Seychelles" },
    { value: "SL^232", label: "Sierra Leone" },
    { value: "SG^65", label: "Singapore" },
    { value: "SK^421", label: "Slovakia (Slovak Republic)" },
    { value: "SI^386", label: "Slovenia" },
    { value: "SB^677", label: "Solomon Islands" },
    { value: "SO^252", label: "Somalia" },
    { value: "ZA^27", label: "South Africa" },
    { value: "GS^44", label: "South Georgia and the South Sandwich Islands" },
    { value: "SS^211", label: "South Sudan" },
    { value: "ES^34", label: "Spain" },
    { value: "LK^94", label: "Sri Lanka" },
    { value: "SH^290", label: "St. Helena" },
    { value: "PM^508", label: "St. Pierre and Miquelon" },
    { value: "SD^249", label: "Sudan" },
    { value: "SR^597", label: "Suriname" },
    { value: "SJ^47", label: "Svalbard and Jan Mayen Islands" },
    { value: "SZ^268", label: "Swaziland" },
    { value: "SE^46", label: "Sweden" },
    { value: "CH^41", label: "Switzerland" },
    { value: "SY^963", label: "Syrian Arab Republic" },
    { value: "TW^886", label: "Taiwan" },
    { value: "TJ^992", label: "Tajikistan" },
    { value: "TZ^255", label: "Tanzania, United Republic of" },
    { value: "TH^66", label: "Thailand" },
    { value: "TG^228", label: "Togo" },
    { value: "TK^64", label: "Tokelau" },
    { value: "TO^676", label: "Tonga" },
    { value: "TT^868", label: "Trinidad and Tobago" },
    { value: "TN^216", label: "Tunisia" },
    { value: "TR^90", label: "Turkey" },
    { value: "TM^993", label: "Turkmenistan" },
    { value: "TC^649", label: "Turks and Caicos Islands" },
    { value: "TV^688", label: "Tuvalu" },
    { value: "UG^256", label: "Uganda" },
    { value: "UA^380", label: "Ukraine" },
    { value: "AE^971", label: "United Arab Emirates" },
    { value: "UK^44", label: "United Kingdom" },
    { value: "US^1", label: "United States" },
    { value: "UM^1", label: "United States Minor Outlying Islands" },
    { value: "UY^598", label: "Uruguay" },
    { value: "UZ^998", label: "Uzbekistan" },
    { value: "VU^678", label: "Vanuatu" },
    { value: "VA^39", label: "Vatican City State (Holy See)" },
    { value: "VE^58", label: "Venezuela" },
    { value: "VN^84", label: "Viet Nam" },
    { value: "VG^1", label: "Virgin Islands (British)" },
    { value: "VI^1", label: "Virgin Islands (U.S.)" },
    { value: "WF^681", label: "Wallis and Futuna Islands" },
    { value: "EH^212", label: "Western Sahara" },
    { value: "YE^967", label: "Yemen" },
    { value: "YU^381", label: "Yugoslavia" },
    { value: "ZR^243", label: "Zaire" },
    { value: "ZM^260", label: "Zambia" },
    { value: "ZW^263", label: "Zimbabwe" }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
      if (unitRef.current && !unitRef.current.contains(event.target)) {
        setShowUnitSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleProductChange = (e) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, productService: value }))
    
    if (value.length > 0) {
      const filtered = products.filter(p => 
        p.label.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const selectProduct = (product) => {
    setFormData(prev => ({
      ...prev,
      productService: product.label,
      productSlno: product.id,
      unit: product.unit || '',
      quantity: '1'
    }))
    setShowSuggestions(false)
    setShowQuantity(true)
    setIsUnitReadOnly(true)
  }

  const handleUnitChange = (e) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, unit: value }))
    
    if (value.length > 0) {
      const filtered = units.filter(unit =>
        unit.toLowerCase().includes(value.toLowerCase())
      )
      setUnitSuggestions(filtered)
      setShowUnitSuggestions(true)
    } else {
      setShowUnitSuggestions(false)
    }
  }

  const handleUnitSuggestionClick = (unit) => {
    setFormData(prev => ({ ...prev, unit }))
    setShowUnitSuggestions(false)
    setIsUnitReadOnly(true)
  }

  const handleCountryChange = (e) => {
    const value = e.target.value
    if (value) {
      const isdCode = value.split('^')[1] || '91'
      setFormData(prev => ({
        ...prev,
        country: value,
        phoneIsd: `+${isdCode}`
      }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          productService: '',
          productSlno: '',
          quantity: '',
          unit: '',
          details: '',
          name: '',
          email: '',
          country: 'IN^91',
          phoneIsd: '+91',
          phone: ''
        })
        setShowQuantity(false)
        setSubmitSuccess(false)
        setIsUnitReadOnly(true)
      }, 3000)
    }, 1000)
  }

  return (
    <footer className="bg-[#231f20] text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* Enquiry Form Section */}
        <div className="bg-[#d19336] py-6 mb-6 rounded-lg">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              {submitSuccess ? (
                <div className="text-center py-4">
                  <p className="text-xl font-semibold mb-2">Thank you</p>
                  <p>Your Enquiry has been sent successfully.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
                    Tell us what you are <b>looking</b> for?
                  </h3>

                  {/* Product/Service */}
                  <div className="mb-3 relative" ref={autocompleteRef}>
                    <input
                      type="text"
                      value={formData.productService}
                      onChange={handleProductChange}
                      placeholder="Name of Product / Service"
                      className="w-full px-4 py-3 rounded-md border-2 border-transparent focus:border-white focus:outline-none text-gray-800"
                    />
                    {showSuggestions && filteredSuggestions.length > 0 && (
                      <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {filteredSuggestions.slice(0, 10).map((product, index) => (
                          <div
                            key={index}
                            onClick={() => selectProduct(product)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                          >
                            {product.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quantity and Unit */}
                  {showQuantity && (
                    <div className="mb-3 flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max="9999999"
                        value={formData.quantity}
                        onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                        placeholder="Estimated Quantity"
                        className="flex-1 px-4 py-3 rounded-md border-2 border-transparent focus:border-white focus:outline-none text-gray-800"
                      />
                      <div className="relative w-40" ref={unitRef}>
                        <input
                          type="text"
                          value={formData.unit}
                          onChange={handleUnitChange}
                          placeholder="Unit Type"
                          readOnly={isUnitReadOnly}
                          className="w-full px-4 py-3 rounded-md border-2 border-transparent focus:border-white focus:outline-none text-gray-800 bg-gray-100"
                        />
                        {!isUnitReadOnly && showUnitSuggestions && unitSuggestions.length > 0 && (
                          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                            {unitSuggestions.slice(0, 8).map((unit, index) => (
                              <div
                                key={index}
                                onClick={() => handleUnitSuggestionClick(unit)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                              >
                                {unit}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {isUnitReadOnly && (
                        <button
                          type="button"
                          onClick={() => setIsUnitReadOnly(false)}
                          className="text-sm text-white underline px-2 py-3 flex items-center gap-1"
                        >
                          <i className="fas fa-pencil-square-o"></i> Edit
                        </button>
                      )}
                    </div>
                  )}

                  {/* Details */}
                  <div className="mb-3">
                    <textarea
                      rows="4"
                      value={formData.details}
                      onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                      placeholder="Describe your requirement in detail:"
                      className="w-full px-4 py-3 rounded-md border-2 border-transparent focus:border-white focus:outline-none text-gray-800 resize-none"
                    />
                  </div>

                  {/* Name and Email */}
                  <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="px-4 py-3 rounded-md border-2 border-transparent focus:border-white focus:outline-none text-gray-800"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="px-4 py-3 rounded-md border-2 border-transparent focus:border-white focus:outline-none text-gray-800"
                    />
                  </div>

                  {/* Country and Phone */}
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleCountryChange}
                      className="px-4 py-3 rounded-md border-2 border-transparent focus:border-white focus:outline-none text-gray-800"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                    <div className="relative flex">
                      <input
                        type="text"
                        name="phone_isd"
                        id="phone_isd"
                        value={formData.phoneIsd}
                        readOnly
                        className="w-24 px-3 py-3 rounded-l-md border-2 border-r-0 border-transparent bg-gray-100 text-gray-800 text-sm"
                      />
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile"
                        className="flex-1 px-4 py-3 rounded-r-md border-2 border-transparent focus:border-white focus:outline-none text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#231f20] text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Now'}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#d19336] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#d19336] transition">About Us</Link></li>
              <li><Link to="/products" className="hover:text-[#d19336] transition">Products</Link></li>
              <li><Link to="/videos" className="hover:text-[#d19336] transition">Videos</Link></li>
              <li><Link to="/contact" className="hover:text-[#d19336] transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-[#d19336] mt-1"></i>
                <span>Moti Nagar, Delhi</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-phone text-[#d19336] mt-1"></i>
                <span>+91-7230092401</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-envelope text-[#d19336] mt-1"></i>
                <a href="mailto:hcplbharat@gmail.com" className="hover:text-[#d19336] transition">
                  hcplbharat@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Haleypremiumwater" target="_blank" rel="noopener noreferrer" className="hover:text-[#d19336] transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://twitter.com/HaleyWaterIndia" target="_blank" rel="noopener noreferrer" className="hover:text-[#d19336] transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com/haleywaterindia" target="_blank" rel="noopener noreferrer" className="hover:text-[#d19336] transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p className="mb-2">All Rights Reserved. <strong>HALEY CIBUS PVT. LTD.</strong></p>
          <p>Developed & Managed By <a href="https://www.weblink.in" rel="nofollow" target="_blank" className="hover:text-[#d19336] transition">Weblink.In Pvt. Ltd.</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
