// ==UserScript==
// @name        Display Reddit Polandball countries
// @namespace   wadcann_reddit/pbc
// @description Forces showing of Reddit polandball flair country names
// @include     http://*.reddit.com/r/polandball/*
// @include     https://*.reddit.com/r/polandball/*
// @version     1
// ==/UserScript==
var linkRedditFlair = {
    ballMap: {
        "pl": "Poland",
        "al": "Albania",
        "dz": "Algeria",
        "ar": "Argentina",
        "am": "Armenia",
        "au": "Australia",
        "at": "Austria",
        "az": "Azerbaijan",
        "bh": "Bahrain",
        "bd": "Bangladesh",
        "by": "Belarus",
        "be": "Belgium",
        "bo": "Bolivia",
        "ba": "Bosnia",
        "br": "Brazil",
        "bg": "Bulgaria",
        "ca": "Canada",
        "cl": "Chile",
        "cn": "China",
        "co": "Colombia",
        "cd": "Congo",
        "cr": "Costa Rica",
        "hr": "Croatia",
        "cu": "Cuba",
        "cy": "Cyprus",
        "cz": "Czech Republic",
        "dk": "Denmark",
        "dj": "Djibouti",
        "do": "Dominican Republic",
        "ec": "Ecuador",
        "eg": "Egypt",
        "sv": "El Salvador",
        "ee": "Estonia",
        "fi": "Finland",
        "fr": "France",
        "ge": "Georgia",
        "de": "Germany",
        "gr": "Greece",
        "polish-hussar": "Polish Hussar",
        "poland-lithuania": "Poland-Lithuania",
        "acadia": "Acadia",
        "alabama": "Alabama",
        "aland-islands": "Aland Islands",
        "alaska": "Alaska",
        "alberta": "Alberta",
        "antarctica": "Antarctica",
        "arizona": "Arizona",
        "arkansas": "Arkansas",
        "asturias": "Asturias",
        "austria-hungary": "Austria-Hungary",
        "baden": "Baden",
        "basque": "Basque",
        "bavaria": "Bavaria",
        "berlin": "Berlin",
        "brazilian-empire": "Brazilian Empire",
        "bremen": "Bremen",
        "britain-working-class": "Britain Working Class",
        "british-columbia": "British Columbia",
        "british-empire": "British Empire",
        "brittany": "Brittany",
        "byzantine-empire": "Byzantine Empire",
        "cajun": "Cajun",
        "california": "California",
        "cascadia": "Cascadia",
        "catalonia": "Catalonia",
        "cayman-islands": "Cayman Islands",
        "cccp": "CCCP",
        "celtic-union": "Celtic Union",
        "cherokee": "Cherokee Nation",
        "colorado": "Colorado",
        "connecticut": "Connecticut",
        "cornwall": "Cornwall",
        "csa": "CSA",
        "dacia": "Dacia",
        "delaware": "Delaware",
        "england": "England",
        "european-union": "European Union",
        "faroe-islands": "Faroe Islands",
        "flanders": "Flanders",
        "florida": "Florida",
        "france-first-empire": "France First Empire",
        "friesland": "Friesland",
        "galicia": "Galicia",
        "gdr": "GDR",
        "gelderland": "Gelderland",
        "georgia": "Georgia",
        "german-empire": "German Empire",
        "gibraltar": "Gibraltar",
        "greater-netherlands": "Greater Netherlands",
        "greenland": "Greenland",
        "groningen": "Groningen",
        "hamburg": "Hamburg",
        "hawaii": "Hawaii",
        "gt": "Guatemala",
        "hu": "Hungary",
        "is": "Iceland",
        "in": "India",
        "id": "Indonesia",
        "ir": "Iran",
        "ie": "Ireland",
        "il": "Israel",
        "it": "Italy",
        "jm": "Jamaica",
        "jp": "Japan",
        "jo": "Jordan",
        "kz": "Kazakhstan",
        "kw": "Kuwait",
        "kg": "Kyrgyzstan",
        "lv": "Latvia",
        "lb": "Lebanon",
        "lr": "Liberia",
        "lt": "Lithuania",
        "lu": "Luxembourg",
        "mk": "Macedonia",
        "my": "Malaysia",
        "mt": "Malta",
        "mr": "Mauritania",
        "mu": "Mauritius",
        "mx": "Mexico",
        "md": "Moldova",
        "mn": "Mongolia",
        "ma": "Morocco",
        "nr": "Nauru",
        "np": "Nepal",
        "nl": "Netherlands",
        "nz": "New Zealand",
        "ni": "Nicaragua",
        "kp": "North Korea",
        "no": "Norway",
        "om": "Oman",
        "pk": "Pakistan",
        "hesse": "Hesse",
        "holy-roman-empire": "Holy Roman Empire",
        "hongkong": "Hong Kong",
        "iberia": "Iberia",
        "idaho": "Idaho",
        "illinois": "Illinois",
        "inca-empire": "Inca Empire",
        "india-turban": "India with a turban",
        "indiana": "Indiana",
        "iowa": "Iowa",
        "irish-kingdom": "Irish Kingdom",
        "isle-of-man": "Isle of Man",
        "japanese-empire": "Japanese Empire",
        "jersey": "Jersey",
        "kalmar": "Kalmar Union",
        "kansas": "Kansas",
        "kashmir": "Kashmir",
        "kentucky": "Kentucky",
        "kosovo": "Kosovo",
        "kurdistan": "Kurdistan",
        "lancashire": "Lancashire",
        "lincolnshire": "Lincolnshire",
        "louisiana": "Louisiana",
        "lower-saxony": "Lower Saxony",
        "lssr": "LSSR",
        "maine": "Maine",
        "manitoba": "Manitoba",
        "maryland": "Maryland",
        "massachusetts": "Massachusetts",
        "mercia": "Mercia",
        "michigan": "Michigan",
        "minnesota": "Minnesota",
        "mississippi": "Mississippi",
        "missouri": "Missouri",
        "montana": "Montana",
        "moravia": "Moravia",
        "murica": "MURICA",
        "nebraska": "Nebraska",
        "nevada": "Nevada",
        "new-brunswick": "New Brunswick",
        "new-england": "New England",
        "new-hampshire": "New Hampshire",
        "new-jersey": "New Jersey",
        "new-mexico": "New Mexico",
        "new-york": "New York",
        "newfoundland": "Newfoundland",
        "north-carolina": "North Carolina",
        "northern-ireland": "Northern Ireland",
        "northwest-territories": "Northwest Territories",
        "nova-scotia": "Nova Scotia",
        "ohio": "Ohio",
        "oklahoma": "Oklahoma",
        "ontario": "Ontario",
        "orange-free-state": "Orange Free State",
        "oregon": "Oregon",
        "ps": "Palestina",
        "pa": "Panama",
        "py": "Paraguay",
        "pe": "Peru",
        "ph": "Philippines",
        "pt": "Portugal",
        "ro": "Romania",
        "ru": "Russia",
        "sm": "San Marino",
        "sa": "Saudi Arabia",
        "rs": "Serbia",
        "sc": "Seychelles",
        "sg": "Singapore",
        "sk": "Slovakia",
        "si": "Slovenia",
        "so": "Somalia",
        "za": "South Africa",
        "kr": "South Korea",
        "ss": "South Sudan",
        "es": "Spain",
        "lk": "Sri Lanka",
        "sd": "Sudan",
        "se": "Sweden",
        "ch": "Switzerland",
        "sy": "Syria",
        "tw": "Taiwan",
        "th": "Thailand",
        "tt": "Trinidad and Tobago",
        "tn": "Tunisia",
        "tr": "Turkey",
        "ua": "Ukraine",
        "ae": "United Arab Emirates",
        "gb": "United Kingdom",
        "us": "United States",
        "uy": "Uruguay",
        "va": "Vatican City",
        "ve": "Venezuela",
        "vn": "Vietnam",
        "ottoman-empire": "Ottoman Empire",
        "oxfordshire": "Oxfordshire",
        "pennsylvania": "Pennsylvania",
        "persian-empire": "Persian Empire",
        "portuguese-empire": "Portuguese Empire",
        "prussia": "Prussia",
        "puerto-rico": "Puerto Rico",
        "quebec": "Quebec",
        "rhine-republic": "Rhine Republic",
        "rhineland-palatinate": "Rhineland Palatinate",
        "rhode-island": "Rhode Island",
        "rio-grande-do-sul": "Rio Grande do Sul",
        "roman-empire": "Roman Empire",
        "russian-empire": "Russian Empire",
        "sami": "Sami",
        "sao-paulo-state": "Sao Paulo State",
        "saskatchewan": "Saskatchewan",
        "saxony": "Saxony",
        "scania": "Scania",
        "scotland": "Scotland",
        "second-spanish-republic": "Second Spanish Republic",
        "serbian-empire": "Serbian Empire",
        "sicily": "Sicily",
        "smaland": "Smaland",
        "south-african-republic": "South African Republic",
        "south-african-union": "South African Union",
        "south-carolina": "South Carolina",
        "south-dakota": "South Dakota",
        "south-vietnam": "South Vietnam",
        "sweden-norway": "Sweden-Norway",
        "tennessee": "Tennessee",
        "state-teutonic-order": "Teutonic Order State",
        "texas": "Texas",
        "thirteen-colonies": "Thirteen Colonies",
        "tibet": "Tibet",
        "transylvania-vampire": "Transylvania",
        "tyne-and-wear": "Tyne And Wear",
        "utah": "Utah",
        "vermont-republic": "Vermont Republic",
        "virginia": "Virginia",
        "wales": "Wales",
        "washington": "Washington",
        "washington-dc": "Washington DC",
        "west-gothland": "West Gothland",
        "west-virginia": "West Virginia",
        "wisconsin": "Wisconsin",
        "wyoming": "Wyoming",
        "yorkshire": "Yorkshire",
        "yugoslavia": "Yugoslavia",
        "cccpy": "УССР",
        "earth": "Earth",
        "multiculti": "Multiculti",
        "sealand-mini": "Sealand",
        "unknown": "Unknown",
        "viking": "Viking",
    },
    changeFlairText: function () {
        var theFlairs = document.getElementsByClassName("flair");
        for (var iFlair = 0, iFlairTotal = theFlairs.length;
             iFlair < iFlairTotal;
             iFlair++) {
            flairText = theFlairs[iFlair].innerHTML;
            flairClass = theFlairs[iFlair].className;
            flairClass = flairClass.replace("flair flair-", "");
            if (flairClass in this.ballMap) {
                if (this.ballMap[flairClass] == flairText) {
                    // No changes to text; leave alone.
                    var humanText = flairText
                } else {
                    // Flair text was modified.  Prefix with the default.
                    var humanText = this.ballMap[flairClass] + ":" + flairText;
                }
            } else {
                // We're missing a mapping.  Display both the class
                // name and the user flair
                var humanText = flairClass + ":" + flairText;
            }
            theFlairs[iFlair].title = humanText;
            theFlairs[iFlair].innerHTML = humanText;
        }
    }, 
    init: function() {
        this.changeFlairText();
    }
}

document.addEventListener('load',linkRedditFlair.init(),true);