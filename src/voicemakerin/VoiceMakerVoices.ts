/**
 * all available voices
 * 
 * outputed from https://developer.voicemaker.in/apidocs
 * codes = [];
 * for (X of $$('tr > td:nth-child(3) > em')) {
 *   lng = X.parentElement.parentElement.querySelector('td:nth-child(2) > em').textContent;
 *   codes.push(`  "${lng}": ["${X.textContent.split(/[, ]+/).join('", "')}"] as const;`);
 * }
 * copy(codes.join('\r\n'));
 * 
 * // https://developer.voicemaker.in/voice/list
 * 
 */
export const voiceMakerVoice = {
    "en-US": [
        "ai2-John",
        "ai2-Kathy",
        "ai3-Jony",
        "ai2-Isabella",
        "ai2-Stacy",
        "ai4-Ronald",
        "ai2-Nikola",
        "ai4-Doris",
        "ai3-Nova",
        "ai1-Joanna",
        "ai3-Aria",
        "ai4-Samantha",
        "ai2-Robert",
        "ai2-Scott",
        "ai2-Jerry",
        "ai3-Jenny",
        "ai3-Kingsley",
        "ai1-Kendra",
        "ai4-Amanda",
        "ai2-Katie",
        "ai1-Kimberly",
        "ai3-Olive",
        "ai1-Salli",
        "ai1-Joey",
        "ai3-Evan",
        "ai3-Kailey",
        "ai3-Addyson",
        "ai2-Scarlet",
        "ai3-Jason",
        "ai1-Justin",
        "ai1-Kevin",
        "ai3-Gary",
        "ai4-Sophia",
        "ai3-Taylor",
        "ai1-Matthew",
        "ai3-Emily",
        "ai3-Vienna",
        "ai4-Edward",
        "ai4-Roger",
        "ai1-Ivy",
        "ai3-en-US-Kaiya"
    ] as const,
    "en-GB": [
        "ai1-Amy",
        "ai1-Emma",
        "ai1-Brian",
        "ai2-Jessica",
        "ai2-Freddie",
        "ai2-Emily",
        "ai3-Libby",
        "ai2-Victoria",
        "ai2-William",
        "ai3-Ryan",
        "ai4-Elizabeth",
        "ai4-Harry",
        "ai3-Mia",
        "ai4-Niamh",
        "ai3-en-GB-Maria",
        "ai3-en-GB-Bella",
        "ai3-en-GB-Lyra",
        "ai3-en-GB-Hannah",
        "ai3-en-GB-Hollie",
        "ai3-en-GB-Rose",
        "ai3-en-GB-Hudson",
        "ai3-en-GB-Dylan",
        "ai3-en-GB-David",
        "ai3-en-GB-Jasper",
        "ai3-en-GB-Thomas",
        "ai3-en-GB-Alexander"
    ] as const,
    "en-AU": [
        "ai1-Olivia",
        "ai2-Harry",
        "ai2-Amelia",
        "ai2-Matilda",
        "ai2-Oliver",
        "ai4-Grace",
        "ai3-Natasha",
        "ai4-James",
        "ai3-William"
    ] as const,
    "de-DE": [
        "ai2-de-DE-Dustin",
        "ai2-de-DE-Patrick",
        "ai2-de-DE-Fabienne",
        "ai4-de-DE-Paul",
        "ai3-de-DE-Conrad",
        "ai2-de-DE-Thomas",
        "ai4-de-DE-Gabriele",
        "ai3-de-DE-Katja",
        "ai4-de-DE-Anja",
        "ai2-de-DE-Mona",
        "ai2-de-DE-Pia",
        "ai1-de-DE-Fiona",
        "ai3-de-DE-Marie",
        "ai3-de-DE-Johanna",
        "ai3-de-DE-Marlene",
        "ai3-de-DE-Galliena",
        "ai3-de-DE-Kerryl",
        "ai3-de-DE-Maja",
        "ai3-de-DE-Yettie",
        "ai3-de-DE-Schmidt",
        "ai3-de-DE-Rheinbeck",
        "ai3-de-DE-Kasper",
        "ai3-de-DE-Brunon",
        "ai3-de-DE-Ermanno",
        "ai3-de-DE-Rodriguez"
    ] as const,
    "arb": [
        "ai3-ar-XA-Salma",
        "ai2-ar-XA-Iman",
        "ai2-ar-XA-Nadir",
        "ai3-ar-XA-Shakir",
        "ai2-ar-XA-Sana",
        "ai2-ar-XA-Fatima"
    ] as const,
    "bn-IN": [
        "ai2-bn-IN-Charu",
        "ai2-bn-IN-Binod",
        "ai3-bn-IN-Koel",
        "ai3-bn-IN-Neel"
    ] as const,
    "ar-SA": [
        "ai3-ar-SA-Hamed",
        "ai3-ar-SA-Zariyah"
    ] as const,
    "bg-BG": [
        "ai3-bg-BG-Boyan",
        "ai3-bg-BG-Gergana"
    ] as const,
    "ca-ES": [
        "ai3-ca-ES-Alba",
        "ai3-ca-ES-Joana",
        "ai3-ca-ES-Enric"
    ] as const,
    "cmn-CN": [
        "ai2-cmn-CN-Claire",
        "ai2-cmn-CN-Vincent",
        "ai2-cmn-CN-Sue",
        "ai2-cmn-CN-Yao",
        "ai3-cmn-CN-Xiaoyou",
        "ai3-cmn-CN-Xiaoxiao",
        "ai3-cmn-CN-Xariyah",
        "ai3-cmn-CN-Yunye",
        "ai3-cmn-CN-Yunyang",
        "ai3-cmn-CN-Xylia",
        "ai3-cmn-CN-Xiomara",
        "ai3-cmn-CN-Carissa",
        "ai3-cmn-CN-Xander",
        "ai4-zh-CN-Zhang",
        "ai4-zh-CN-Shu",
        "ai4-zh-CN-Caihong",
        "ai3-cmn-CN-Xiaosheng",
        "ai3-cmn-CN-Mingxia",
        "ai3-cmn-CN-Xiulin",
        "ai3-cmn-CN-Ayaka"
    ] as const,
    "zh-HK": [
        "ai3-zh-HK-HiuGaai",
        "ai3-zh-HK-HiuMaan",
        "ai3-zh-HK-WanLung"
    ] as const,
    "cmn-TW": [
        "ai2-cmn-TW-Ting",
        "ai2-cmn-TW-Bao",
        "ai2-cmn-TW-Qiang",
        "ai3-cmn-TW-HsiaoYu",
        "ai3-cmn-TW-HsiaoChen",
        "ai3-cmn-TW-Sachihiro"
    ] as const,
    "cs-CZ": [
        "ai3-cs-CZ-Vlasta",
        "ai2-cs-CZ-Eliska",
        "ai3-cs-CZ-Antonin"
    ] as const,
    "da-DK": [
        "ai2-da-DK-Johan",
        "ai2-da-DK-Abbie",
        "ai2-da-DK-Julie",
        "ai2-da-DK-Signe",
        "ai3-da-DK-Christel",
        "ai3-da-DK-Jeppe"
    ] as const,
    "de-CH": [
        "ai3-de-CH-Noah",
        "ai3-de-CH-Anja"
    ] as const,
    "ga-IE": [
        "ai3-ga-IE-Eabha",
        "ai3-ga-IE-Rian"
    ] as const,
    "hr-HR": [
        "ai3-hr-HR-Dmitar",
        "ai3-hr-HR-Vitomira"
    ] as const,
    "mt-MT": [
        "ai3-mt-MT-Xavier",
        "ai3-mt-MT-Alessia"
    ] as const,
    "nl-NL": [
        "ai3-nl-NL-Colette",
        "ai2-nl-NL-Gerben",
        "ai2-nl-NL-Sterre",
        "ai2-nl-NL-Rogier",
        "ai2-nl-NL-Roosje",
        "ai2-nl-NL-Arenda",
        "ai3-nl-NL-Fenna",
        "ai3-nl-NL-Maarten"
    ] as const,
    "en-IN": [
        "ai2-en-IN-Alisha",
        "ai2-en-IN-Rohan",
        "ai2-en-IN-Luv",
        "ai3-en-IN-Neerja",
        "ai3-en-IN-Prabhas",
        "ai2-en-IN-Tanvi"
    ] as const,
    "en-CA": [
        "ai3-en-CA-Clara",
        "ai3-en-CA-Liam"
    ] as const,
    "en-IE": [
        "ai3-en-IE-Connor",
        "ai3-en-IE-Emily"
    ] as const,
    "et-EE": [
        "ai3-et-EE-Tuudur",
        "ai3-et-EE-Edenema"
    ] as const,
    "fil-PH": [
        "ai2-fil-PH-Jennly",
        "ai2-fil-PH-Nathan",
        "ai2-fil-PH-Camille",
        "ai2-fil-PH-Gabriel"
    ] as const,
    "fi-FI": [
        "ai2-fi-FI-Karoliina",
        "ai3-fi-FI-Selma",
        "ai3-fi-FI-Harri",
        "ai3-fi-FI-Noora"
    ] as const,
    "fr-FR": [
        "ai2-fr-FR-Dylan",
        "ai2-fr-FR-Erwan",
        "ai2-fr-FR-Amandine",
        "ai2-fr-FR-Valentine",
        "ai2-fr-FR-Cassandra",
        "ai4-fr-FR-Blaise",
        "ai3-fr-FR-Denise",
        "ai3-fr-FR-Henri",
        "ai1-fr-FR-Jeanne",
        "ai3-fr-FR-Camille",
        "ai3-fr-FR-Victoire",
        "ai3-fr-FR-Claire",
        "ai3-fr-FR-Austine",
        "ai3-fr-FR-Liana",
        "ai3-fr-FR-Emmy",
        "ai3-fr-FR-Manie",
        "ai3-fr-FR-Tayler",
        "ai3-fr-FR-Nevil",
        "ai3-fr-FR-Cannan",
        "ai3-fr-FR-Roel",
        "ai3-fr-FR-Tyssen"
    ] as const,
    "fr-CA": [
        "ai1-Gianna",
        "ai3-fr-CA-Sylvie",
        "ai2-fr-CA-Scarlett",
        "ai3-fr-CA-Jean",
        "ai2-fr-CA-Christophe",
        "ai2-fr-CA-Paul",
        "ai3-fr-CA-Kylian",
        "ai2-fr-CA-MariePier"
    ] as const,
    "hi-IN": [
        "ai2-hi-IN-Dhru",
        "ai3-hi-IN-Madhur",
        "ai2-hi-IN-Zoya",
        "ai3-hi-IN-Swara",
        "ai2-hi-IN-Anamika",
        "ai2-hi-IN-Nikhil"
    ] as const,
    "el-GR": [
        "ai3-el-GR-Athina",
        "ai3-el-GR-Topher",
        "ai2-el-GR-Anastasia"
    ] as const,
    "hu-HU": [
        "ai3-hu-HU-Noemi",
        "ai2-hu-HU-Eszter",
        "ai3-hu-HU-Tamas"
    ] as const,
    "he-IL": [
        "ai3-he-IL-Guy",
        "ai3-he-IL-Shira"
    ] as const,
    "fr-CH": [
        "ai3-fr-CH-Lena",
        "ai3-fr-CH-Leandro"
    ] as const,
    "id-ID": [
        "ai2-id-ID-Putri",
        "ai2-id-ID-Henry",
        "ai2-id-ID-David",
        "ai2-id-ID-Salsabilla",
        "ai3-id-ID-Ardi",
        "ai3-id-ID-Fitri"
    ] as const,
    "lv-LV": [
        "ai3-lv-LV-Edgar",
        "ai3-lv-LV-Laura2"
    ] as const,
    "ja-JP": [
        "ai2-ja-JP-Yuka",
        "ai3-ja-JP-Keita",
        "ai2-ja-JP-Ayaka",
        "ai4-ja-JP-Akari",
        "ai2-ja-JP-Masa",
        "ai2-ja-JP-Taiyo",
        "ai3-ja-JP-Nanami",
        "ai1-ja-JP-Haruto"
    ] as const,
    "lt-LT": [
        "ai3-lt-LT-Vasara",
        "ai3-lt-LT-Jokubas"
    ] as const,
    "it-IT": [
        "ai2-it-IT-Dario",
        "ai2-it-IT-Federica",
        "ai3-it-IT-Isabella",
        "ai2-it-IT-Siliva",
        "ai2-it-IT-Alessandro",
        "ai3-it-IT-Diego",
        "ai4-it-IT-Sara",
        "ai3-it-IT-Elsa",
        "ai1-it-IT-Viola"
    ] as const,
    "ko-KR": [
        "ai2-ko-KR-Hannah",
        "ai2-ko-KR-DongMin",
        "ai3-ko-KR-SunHi",
        "ai2-ko-KR-JiYeon",
        "ai3-ko-KR-InJoon",
        "ai2-ko-KR-Minseok"
    ] as const,
    "nb-NO": [
        "ai2-nb-NO-Margrete",
        "ai2-nb-NO-Henrik",
        "ai2-nb-NO-Lukas",
        "ai2-nb-NO-Norah",
        "ai2-nb-NO-Terese",
        "ai3-nb-NO-Iselin",
        "ai3-nb-NO-Magnus",
        "ai3-nb-NO-Anita"
    ] as const,
    "pt-PT": [
        "ai2-pt-PT-Margarida",
        "ai2-pt-PT-Diogo",
        "ai2-pt-PT-Gabriel",
        "ai3-pt-PT-Raquel",
        "ai2-pt-PT-Ines",
        "ai3-pt-PT-Fernanda",
        "ai3-pt-PT-Duarte"
    ] as const,
    "pl-PL": [
        "ai2-pl-PL-Alicja",
        "ai2-pl-PL-Julia",
        "ai2-pl-PL-Hanna",
        "ai2-pl-PL-Franciszek",
        "ai3-pl-PL-Zofia",
        "ai3-pl-PL-Lena",
        "ai3-pl-PL-Kacper",
        "ai2-pl-PL-Wojciech"
    ] as const,
    "pt-BR": [
        "ai1-pt-BR-Camila",
        "ai3-pt-BR-Antonio",
        "ai3-pt-BR-Francisca",
        "ai2-pt-BR-Keira",
        "ai4-pt-BR-Fernanda",
        "ai2-pt-BR-Paulo"
    ] as const,
    "ru-RU": [
        "ai2-ru-RU-Czar",
        "ai2-ru-RU-Samara",
        "ai2-ru-RU-Igor",
        "ai3-ru-RU-Dariya",
        "ai2-ru-RU-Tassa",
        "ai3-ru-RU-Yelena",
        "ai2-ru-RU-Tianna",
        "ai3-ru-RU-Dmitry"
    ] as const,
    "es-ES": [
        "ai3-es-ES-Alvaro",
        "ai3-es-ES-Elvira",
        "ai4-es-ES-Matlab",
        "ai4-es-ES-Savannah",
        "ai1-es-ES-Patricia",
        "ai2-es-ES-Ricardo",
        "ai2-es-ES-Luciana",
        "ai2-es-ES-Vega"
    ] as const,
    "sk-SK": [
        "ai2-sk-SK-Kristina",
        "ai3-sk-SK-Viktoria",
        "ai3-sk-SK-Lukas"
    ] as const,
    "ro-RO": [
        "ai3-ro-RO-Alexandru",
        "ai3-ro-RO-Alina",
        "ai2-ro-RO-Corina"
    ] as const,
    "es-MX": [
        "ai3-es-MX-Dalia",
        "ai3-es-MX-Jorge"
    ] as const,
    "es-US": [
        "ai1-es-US-Lupe",
        "ai3-es-US-Paz",
        "ai4-es-US-Luz2",
        "ai3-es-US-Alberto",
        "ai2-es-US-Savanna",
        "ai2-es-US-Manolito",
        "ai2-es-US-Orlando"
    ] as const,
    "sv-SE": [
        "ai3-sv-SE-Mattias",
        "ai2-sv-SE-Elsa",
        "ai3-sv-SE-Hillevi",
        "ai3-sv-SE-Sofie",
        "ai2-sv-SE-Emilie",
        "ai2-sv-SE-Victor",
        "ai2-sv-SE-Lea",
        "ai2-sv-SE-Ludvig"
    ] as const,
    "tr-TR": [
        "ai2-tr-TR-Tabeeb",
        "ai2-tr-TR-Neylan",
        "ai2-tr-TR-Candana",
        "ai2-tr-TR-Roxelana",
        "ai3-tr-TR-Emel",
        "ai2-tr-TR-Gulizar"
    ] as const,
    "ta-IN": [
        "ai3-ta-IN-Valluvar",
        "ai3-ta-IN-Pallavi",
        "ai2-ta-IN-Smita",
        "ai2-ta-IN-Illayavan"
    ] as const,
    "sl-SI": [
        "ai3-sl-SI-Patrik",
        "ai3-sl-SI-Izabela"
    ] as const,
    "te-IN": [
        "ai3-te-IN-Mohan",
        "ai3-te-IN-Shruti"
    ] as const,
    "th-TH": [
        "ai3-th-TH-Achara",
        "ai3-th-TH-Premwadee",
        "ai3-th-TH-Narong"
    ] as const,
    "vi-VN": [
        "ai3-vi-VN-HoaiMy",
        "ai2-vi-VN-Thi",
        "ai2-vi-VN-Hyunh",
        "ai2-vi-VN-Xuan",
        "ai2-vi-VN-Binh",
        "ai3-vi-VN-Phuong"
    ] as const,
    "uk-UA": [
        "ai3-uk-UA-Olena",
        "ai2-uk-UA-Aleksandra",
        "ai3-uk-UA-Pavlo"
    ] as const,
    "en-PH": [
        "ai3-en-PH-Luwalhati",
        "ai3-en-PH-Magiting"
    ] as const,
    "nl-BE": [
        "ai2-nl-BE-Markus",
        "ai3-nl-BE-Marit",
        "ai3-nl-BE-Aldert",
        "ai2-nl-BE-Capucine"
    ] as const,
    "cy-GB": [
        "ai3-cy-GB-Catrin",
        "ai3-cy-GB-Gareth"
    ] as const,
    "ur-PK": [
        "ai3-ur-PK-Aslam",
        "ai3-ur-PK-Mehreen"
    ] as const,
    "mr-IN": [
        "ai3-mr-IN-Sandhya",
        "ai3-mr-IN-Prashant"
    ] as const,
    "en-HK": [
        "ai3-en-HK-Zach",
        "ai3-en-HK-Rachel"
    ] as const,
    "en-NZ": [
        "ai3-en-NZ-Sebastian",
        "ai3-en-NZ-Becca",
        "ai1-Amelia"
    ] as const,
    "fr-BE": [
        "ai3-fr-BE-Leonie",
        "ai3-fr-BE-Gabriel"
    ] as const,
    "en-SG": [
        "ai3-en-SG-Juan",
        "ai3-en-SG-Richard"
    ] as const,
    "gu-IN": [
        "ai3-gu-IN-Prachi",
        "ai3-gu-IN-Mihir",
        "ai2-gu-IN-Minal",
        "ai2-gu-IN-Varun"
    ] as const,
    "en-ZA": [
        "ai3-en-ZA-Amara",
        "ai3-en-ZA-Evans",
        "ai1-Mandisa"
    ] as const,
    "es-AR": [
        "ai3-es-AR-Malen",
        "ai3-es-AR-Hernan"
    ] as const,
    "es-CO": [
        "ai3-es-CO-Brandon",
        "ai3-es-CO-Luciana"
    ] as const,
    "sw-KE": [
        "ai3-sw-KE-Obuya",
        "ai3-sw-KE-Fanaka"
    ] as const,
    "es-LA": [
        "ai4-es-LA-Luz"
    ] as const,
    "de-AT": [
        "ai3-de-AT-Jonas",
        "ai3-de-AT-Ingrid"
    ] as const,
    "ms-MY": [
        "ai2-ms-MY-Aadam",
        "ai2-ms-MY-Marina",
        "ai3-ms-MY-Osman",
        "ai2-ms-MY-Zaafer",
        "ai3-ms-MY-Yasmin",
        "ai2-ms-MY-Suzana"
    ] as const,
    "af-ZA": [
        "ai3-af-ZA-Sura",
        "ai3-af-ZA-Kungawo"
    ] as const,
    "bn-BD": [
        "ai3-bn-BD-Devyani",
        "ai3-bn-BD-Omar"
    ] as const,
    "en-KE": [
        "ai3-en-KE-Almasi",
        "ai3-en-KE-Reth"
    ] as const,
    "en-NG": [
        "ai3-en-NG-Adaeze",
        "ai3-en-NG-Gicicio"
    ] as const,
    "en-TZ": [
        "ai3-en-TZ-Neema",
        "ai3-en-TZ-Vinza"
    ] as const,
    "jv-ID": [
        "ai3-jv-ID-Angkasa",
        "ai3-jv-ID-Rimbo"
    ] as const,
    "ur-IN": [
        "ai3-ur-IN-Fatima",
        "ai3-ur-IN-Salman"
    ] as const,
    "kn-IN": [
        "ai2-kn-IN-Vaani",
        "ai2-kn-IN-Aadi",
        "ai3-kn-IN-Deepa",
        "ai3-kn-IN-Vijay"
    ] as const,
    "ml-IN": [
        "ai2-ml-IN-Tina",
        "ai2-ml-IN-Harsh",
        "ai3-ml-IN-Revathi",
        "ai3-ml-IN-Indrajit"
    ] as const,
    "pa-IN": [
        "ai2-pa-IN-Maahi",
        "ai2-pa-IN-Daler",
        "ai2-pa-IN-Chitra",
        "ai2-pa-IN-Ranbir"
    ] as const,
    "es-VE": [
        "ai3-es-VE-Lucia",
        "ai3-es-VE-Ricardo"
    ] as const,
    "es-UY": [
        "ai3-es-UY-Valentina",
        "ai3-es-UY-Santino"
    ] as const
}

export type VoiceMakerLangs = keyof typeof voiceMakerVoice;
export type VoiceMakerVoices = typeof voiceMakerVoice[VoiceMakerLangs][number];

export const voiceMakerVoiceCache: { [key in VoiceMakerVoices]: VoiceMakerLangs } = {} as { [key in VoiceMakerVoices]: VoiceMakerLangs };

for (const lng of Object.keys(voiceMakerVoice)) {
    for (const ent of voiceMakerVoice[lng as VoiceMakerLangs]) {
        const voice = ent as VoiceMakerVoices;
        voiceMakerVoiceCache[voice] = lng as VoiceMakerLangs;
    }
}

export function getLangFromVoice(voice: VoiceMakerVoices): VoiceMakerLangs {
    return voiceMakerVoiceCache[voice];
}

export const ALL_VOICEMAKE_VOICES = Object.keys(voiceMakerVoiceCache);