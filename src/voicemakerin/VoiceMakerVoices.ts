/**
 * all available voices
 *
 * extracted from https://developer.voicemaker.in/apidocs
 * codes = [];
 * for (let lang of $$('tr > td:nth-child(3) > em')) {
 *   let voices = lang.parentElement.parentElement.querySelector('td:nth-child(4) > em').innerHTML.replace(/<br>/g, ', ');
 *   codes.push(`  "${lang.textContent}": ["${voices.split(/[, ]+/).join('", "')}"] as const,`);
 * }
 * copy(codes.join('\r\n'));
 *
 * // https://developer.voicemaker.in/voice/list
 *
 */
export const voiceMakerVoice = {
  "af-ZA": ["ai3-af-ZA-Sura", "ai3-af-ZA-Kungawo"] as const,
  "am-ET": ["ai3-am-ET-Mazaa", "ai3-am-ET-Tamru"] as const,
  "ar-AE": ["ai3-ar-AE-Hamiz", "ai3-ar-AE-Paree", "ai1-ar-AE-Nura"] as const,
  "ar-BH": ["ai3-ar-BH-Ali", "ai3-ar-BH-Pareesha"] as const,
  "ar-DZ": ["ai3-ar-DZ-Samia", "ai3-ar-DZ-Khalil"] as const,
  "ar-IQ": ["ai3-ar-IQ-Vaneeza", "ai3-ar-IQ-Ganief"] as const,
  "ar-JO": ["ai3-ar-JO-Saabiha", "ai3-ar-JO-Ebrahim"] as const,
  "ar-KW": ["ai3-ar-KW-Fyaz", "ai3-ar-KW-Naaz"] as const,
  "ar-LB": ["ai3-ar-LB-Delkash", "ai3-ar-LB-Hamees"] as const,
  "ar-LY": ["ai3-ar-LY-Ieesha", "ai3-ar-LY-Mahfuj"] as const,
  "ar-MA": ["ai3-ar-MA-Lajin", "ai3-ar-MA-Ozza"] as const,
  "ar-OM": ["ai3-ar-OM-Zulima", "ai3-ar-OM-Adnan"] as const,
  "ar-QA": ["ai3-ar-QA-Azma", "ai3-ar-QA-Nabeel"] as const,
  "ar-SA": ["ai3-ar-SA-Hamed", "ai3-ar-SA-Zariyah"] as const,
  "ar-SY": ["ai3-ar-SY-Gulbar", "ai3-ar-SY-Sumiya"] as const,
  "ar-TN": ["ai3-ar-TN-Hadeeqa", "ai3-ar-TN-Hadeeqa"] as const,
  "ar-YE": ["ai3-ar-YE-Parwaz", "ai3-ar-YE-Wabisa"] as const,
  arb: [
    "ai2-ar-XA-Nadir",
    "ai2-ar-XA-Sana",
    "ai2-ar-XA-Iman",
    "ai2-ar-XA-Fatima",
    "ai3-ar-XA-Shakir",
    "ai3-ar-XA-Salma",
  ] as const,
  "az-AZ": ["ai3-az-AZ-Farid", "ai3-az-AZ-Leyla"] as const,
  "bg-BG": ["ai3-bg-BG-Gergana", "ai3-bg-BG-Boyan"] as const,
  "bn-BD": ["ai3-bn-BD-Devyani", "ai3-bn-BD-Omar"] as const,
  "bn-IN": [
    "ai2-bn-IN-Charu",
    "ai2-bn-IN-Binod",
    "ai3-bn-IN-Neel",
    "ai3-bn-IN-Koel",
  ] as const,
  "bs-BA": ["ai3-bs-BA-Behrem", "ai3-bs-BA-Farid"] as const,
  "ca-ES": [
    "ai3-ca-ES-Alba",
    "ai3-ca-ES-Joana",
    "ai3-ca-ES-Enric",
    "ai1-ca-ES-Estel",
  ] as const,
  "cmn-CN": [
    "ai3-cmn-CN-Xiaoyou",
    "ai3-cmn-CN-Yunye",
    "ai3-cmn-CN-Xiaoxiao",
    "ai3-cmn-CN-Yunyang",
    "ai3-cmn-CN-Xariyah",
    "ai3-cmn-CN-Xylia",
    "ai3-cmn-CN-Xiomara",
    "ai3-cmn-CN-Carissa",
    "ai3-cmn-CN-Xander",
    "ai3-cmn-CN-Mingxia",
    "ai3-cmn-CN-Xiaosheng",
    "ai3-cmn-CN-Ayaka",
    "ai3-cmn-CN-Xiulin",
    "ai3-cmn-CN-Yichen",
    "ai3-cmn-CN-Junfeng",
    "ai3-cmn-CN-Mei",
    "ai3-cmn-CN-Yunze",
    "ai3-cmn-CN-Yuhang",
    "ai3-cmn-CN-Fang",
    "ai3-cmn-CN-Jiahui",
    "ai3-cmn-CN-Zihan",
    "ai2-cmn-CN-Claire",
    "ai2-cmn-CN-Yao",
    "ai2-cmn-CN-Sue",
    "ai2-cmn-CN-Vincent",
    "ai1-cmn-CN-Shiyun",
  ] as const,
  "cmn-TW": [
    "ai3-cmn-TW-HsiaoYu",
    "ai3-cmn-TW-HsiaoChen",
    "ai3-cmn-TW-Sachihiro",
    "ai2-cmn-TW-Ting",
    "ai2-cmn-TW-Bao",
    "ai2-cmn-TW-Qiang",
  ] as const,
  "cs-CZ": [
    "ai2-cs-CZ-Eliska",
    "ai3-cs-CZ-Vlasta",
    "ai3-cs-CZ-Antonin",
  ] as const,
  "cy-GB": ["ai3-cy-GB-Gareth", "ai3-cy-GB-Catrin"] as const,
  "da-DK": [
    "ai2-da-DK-Signe",
    "ai2-da-DK-Abbie",
    "ai2-da-DK-Johan",
    "ai2-da-DK-Julie",
    "ai3-da-DK-Christel",
    "ai3-da-DK-Jeppe",
  ] as const,
  "de-AT": [
    "ai3-de-AT-Ingrid",
    "ai3-de-AT-Jonas",
    "ai1-de-AT-Melissa",
  ] as const,
  "de-CH": ["ai3-de-CH-Noah", "ai3-de-CH-Anja"] as const,
  "de-DE": [
    "ai4-de-DE-Paul",
    "ai4-de-DE-Anja",
    "ai4-de-DE-Gabriele",
    "ai2-de-DE-Patrick",
    "ai2-de-DE-Mona",
    "ai2-de-DE-Pia",
    "ai2-de-DE-Dustin",
    "ai2-de-DE-Fabienne",
    "ai2-de-DE-Thomas",
    "ai3-de-DE-Conrad",
    "ai3-de-DE-Katja",
    "ai3-de-DE-Johanna",
    "ai3-de-DE-Galliena",
    "ai3-de-DE-Rheinbeck",
    "ai3-de-DE-Ermanno",
    "ai3-de-DE-Rodriguez",
    "ai3-de-DE-Schmidt",
    "ai3-de-DE-Marlene",
    "ai3-de-DE-Kasper",
    "ai3-de-DE-Kerryl",
    "ai3-de-DE-Marie",
    "ai3-de-DE-Brunon",
    "ai3-de-DE-Yettie",
    "ai3-de-DE-Maja",
    "ai1-de-DE-Fiona",
    "ai1-de-DE-Stefan",
  ] as const,
  "el-GR": [
    "ai3-el-GR-Athina",
    "ai3-el-GR-Topher",
    "ai2-el-GR-Anastasia",
  ] as const,
  "en-AU": [
    "ai1-Olivia",
    "ai2-Harry",
    "ai2-Oliver",
    "ai2-Matilda",
    "ai2-Amelia",
    "ai2-en-AU-Amelia2",
    "ai2-en-AU-Matilda2",
    "ai2-en-AU-Harry2",
    "ai2-en-AU-Oliver2",
    "ai3-Natasha",
    "ai3-William",
    "ai3-en-AU-Maddison",
    "ai3-en-AU-Logan",
    "ai3-en-AU-Edward",
    "ai3-en-AU-Joshua",
    "ai3-en-AU-Sonny",
    "ai3-en-AU-Jacob",
    "ai3-en-AU-Stella",
    "ai3-en-AU-Emma",
    "ai3-en-AU-Sienna",
    "ai3-en-AU-Claire",
    "ai3-en-AU-Daisy",
    "ai3-en-AU-Grace",
    "ai4-en-AU-Amaya",
    "ai4-en-AU-Nelson",
  ] as const,
  "en-CA": ["ai3-en-CA-Clara", "ai3-en-CA-Liam"] as const,
  "en-GB": [
    "ai2-Jessica",
    "ai2-Freddie",
    "ai2-William",
    "ai2-Emily",
    "ai2-Victoria",
    "ai2-en-GB-Bella2",
    "ai2-en-GB-Lily2",
    "ai2-en-GB-William2",
    "ai2-en-GB-Victoria2",
    "ai2-en-GB-Jessica2",
    "ai2-en-GB-Freddie2",
    "ai1-Emma",
    "ai1-Brian",
    "ai1-Amy",
    "ai1-en-GB-George",
    "ai3-Ryan",
    "ai3-Mia",
    "ai3-Libby",
    "ai3-en-GB-Maria",
    "ai3-en-GB-Dylan",
    "ai3-en-GB-Lyra",
    "ai3-en-GB-Hudson",
    "ai3-en-GB-Hannah",
    "ai3-en-GB-Jasper",
    "ai3-en-GB-Hollie",
    "ai3-en-GB-Rose",
    "ai3-en-GB-Thomas",
    "ai3-en-GB-David",
    "ai3-en-GB-Alexander",
    "ai3-en-GB-Bella",
    "ai4-Niamh",
    "ai4-Harry",
    "ai4-Elizabeth",
  ] as const,
  "en-HK": ["ai3-en-HK-Rachel", "ai3-en-HK-Zach"] as const,
  "en-IE": ["ai3-en-IE-Connor", "ai3-en-IE-Emily"] as const,
  "en-IN": [
    "ai2-en-IN-Alisha",
    "ai2-en-IN-Luv",
    "ai2-en-IN-Rohan",
    "ai2-en-IN-Tanvi",
    "ai3-en-IN-Neerja",
    "ai3-en-IN-Prabhas",
    "ai1-en-IN-Kavya",
  ] as const,
  "en-KE": ["ai3-en-KE-Reth", "ai3-en-KE-Almasi"] as const,
  "en-NG": ["ai3-en-NG-Adaeze", "ai3-en-NG-Gicicio"] as const,
  "en-NZ": ["ai3-en-NZ-Sebastian", "ai3-en-NZ-Becca", "ai1-Amelia"] as const,
  "en-PH": ["ai3-en-PH-Luwalhati", "ai3-en-PH-Magiting"] as const,
  "en-SG": ["ai3-en-SG-Richard", "ai3-en-SG-Juan"] as const,
  "en-TZ": ["ai3-en-TZ-Vinza", "ai3-en-TZ-Neema"] as const,
  "en-US": [
    "ai2-Stacy",
    "ai2-Kathy",
    "ai2-Isabella",
    "ai2-John2",
    "ai2-Nikola",
    "ai2-Robert2",
    "ai2-Jerry",
    "ai2-Scott",
    "ai2-Scarlet",
    "ai2-Katie",
    "ai2-en-US-Jaxson2",
    "ai2-John",
    "ai2-en-US-Jerry2",
    "ai2-en-US-Stacy2",
    "ai2-en-US-Kathy2",
    "ai2-en-US-Isabella2",
    "ai2-en-US-Scarlet2",
    "ai2-en-US-Katie2",
    "ai2-Robert",
    "ai3-Jony",
    "ai3-Nova",
    "ai3-Jenny",
    "ai3-Evan",
    "ai3-Kingsley",
    "ai3-Kailey",
    "ai3-Taylor",
    "ai3-Addyson",
    "ai3-Olive",
    "ai3-Gary",
    "ai3-Emily",
    "ai3-Vienna",
    "ai3-Jason",
    "ai3-Aria",
    "ai3-en-US-Kaiya",
    "ai3-en-US-Madison",
    "ai3-en-US-Alexander",
    "ai3-en-US-Ashley",
    "ai3-en-US-Joshua",
    "ai3-en-US-Jayden",
    "ai3-en-US-Lucas",
    "ai3-en-US-Sage",
    "ai3-en-US-Austin",
    "ai4-Ronald",
    "ai4-Samantha",
    "ai4-Amanda",
    "ai4-Roger",
    "ai4-Doris",
    "ai4-Edward",
    "ai4-Sophia",
    "ai4-en-US-Ariana",
    "ai1-Kendra",
    "ai1-Joey",
    "ai1-Matthew",
    "ai1-Justin",
    "ai1-Kevin",
    "ai1-Joanna",
    "ai1-Salli",
    "ai1-Kimberly",
    "ai1-Ivy",
    "ai1-en-US-Luna",
    "ai1-en-US-Jack",
    "ai12-Male-2",
    "ai12-Male-1",
    "ai12-Male-3",
    "ai12-Male-0",
  ] as const,
  "en-ZA": ["ai3-en-ZA-Amara", "ai3-en-ZA-Evans", "ai1-Mandisa"] as const,
  "es-AR": ["ai3-es-AR-Hernan", "ai3-es-AR-Malen"] as const,
  "es-BO": ["ai3-es-BO-Labanya", "ai3-es-BO-Eduardo"] as const,
  "es-CL": ["ai3-es-CL-Vicente", "ai3-es-CL-Eliana"] as const,
  "es-CO": ["ai3-es-CO-Brandon", "ai3-es-CO-Luciana"] as const,
  "es-CR": ["ai3-es-CR-Rosa", "ai3-es-CR-Antonio"] as const,
  "es-CU": ["ai3-es-CU-Gabriel", "ai3-es-CU-Rosario"] as const,
  "es-DO": ["ai3-es-DO-Zoraida", "ai3-es-DO-Fernando"] as const,
  "es-EC": ["ai3-es-EC-Jacob", "ai3-es-EC-Cristina"] as const,
  "es-ES": [
    "ai3-es-ES-Elvira",
    "ai3-es-ES-Alvaro",
    "ai3-es-ES-Lia",
    "ai3-es-ES-Maura",
    "ai3-es-ES-Juana",
    "ai3-es-ES-Oscar",
    "ai3-es-ES-Xiomara",
    "ai3-es-ES-Cristina",
    "ai3-es-ES-Lorenzo",
    "ai3-es-ES-Cruz",
    "ai3-es-ES-Blanca",
    "ai3-es-ES-Domingo",
    "ai3-es-ES-Carlos",
    "ai3-es-ES-Ramiro",
    "ai3-es-ES-Silvio",
    "ai3-es-ES-Viviana",
    "ai4-es-ES-Savannah",
    "ai4-es-ES-Matlab",
    "ai1-es-ES-Patricia",
    "ai1-es-ES-Casper",
    "ai1-es-ES-Casper",
    "ai2-es-ES-Ricardo",
    "ai2-es-ES-Luciana",
    "ai2-es-ES-Vega",
    "ai2-es-ES-Ruben2",
    "ai2-es-ES-Azura2",
    "ai2-es-ES-Reyna2",
  ] as const,
  "es-GQ": ["ai3-es-GQ-Marcela", "ai3-es-GQ-Sebastian"] as const,
  "es-GT": ["ai3-es-GT-Ramiro", "ai3-es-GT-Leticia"] as const,
  "es-HN": ["ai3-es-HN-Karla", "ai3-es-HN-Carlos"] as const,
  "es-LA": ["ai4-es-LA-Luz"] as const,
  "es-MX": [
    "ai3-es-MX-Jorge",
    "ai3-es-MX-Dalia",
    "ai3-es-MX-Ximena",
    "ai3-es-MX-Lucia",
    "ai3-es-MX-Romina",
    "ai3-es-MX-Tadeo",
    "ai3-es-MX-Leonel",
    "ai3-es-MX-Alexander",
    "ai3-es-MX-Santiago",
    "ai3-es-MX-Elisa",
    "ai3-es-MX-Emilio",
    "ai3-es-MX-Fernanda",
    "ai3-es-MX-Elizabeth",
    "ai3-es-MX-Axel",
    "ai3-es-MX-Isabella",
    "ai1-es-MX-Camila",
    "ai1-es-MX-Luis",
  ] as const,
  "es-NI": ["ai3-es-NI-Estrella", "ai3-es-NI-Vidal"] as const,
  "es-PA": ["ai3-es-PA-Domingo", "ai3-es-PA-Belinda"] as const,
  "es-PE": ["ai3-es-PE-Alex", "ai3-es-PE-Camila"] as const,
  "es-PR": ["ai3-es-PR-Karina", "ai3-es-PR-Victor"] as const,
  "es-PY": ["ai3-es-PY-Tomas", "ai3-es-PY-Maria"] as const,
  "es-SV": ["ai3-es-SV-Mateo", "ai3-es-SV-Juana"] as const,
  "es-US": [
    "ai3-es-US-Paz",
    "ai3-es-US-Alberto",
    "ai1-es-US-Lupe",
    "ai1-es-US-Diego",
    "ai4-es-US-Luz2",
    "ai2-es-US-Manolito",
    "ai2-es-US-Savanna",
    "ai2-es-US-Orlando",
    "ai2-es-US-Savanna2",
    "ai2-es-US-Manolito2",
    "ai2-es-US-Orlando2",
  ] as const,
  "es-UY": ["ai3-es-UY-Santino", "ai3-es-UY-Valentina"] as const,
  "es-VE": ["ai3-es-VE-Lucia", "ai3-es-VE-Ricardo"] as const,
  "et-EE": ["ai3-et-EE-Tuudur", "ai3-et-EE-Edenema"] as const,
  "eu-ES": ["ai3-eu-ES-Ximena", "ai3-eu-ES-Leonel"] as const,
  "fa-IR": ["ai3-fa-IR-Wadid", "ai3-fa-IR-Naavya"] as const,
  "fi-FI": [
    "ai2-fi-FI-Karoliina",
    "ai3-fi-FI-Selma",
    "ai3-fi-FI-Noora",
    "ai3-fi-FI-Harri",
    "ai1-fi-FI-Marjatta",
  ] as const,
  "fil-PH": [
    "ai2-fil-PH-Jennly",
    "ai2-fil-PH-Nathan",
    "ai2-fil-PH-Gabriel",
    "ai2-fil-PH-Camille",
    "ai3-fil-PH-Joshua",
    "ai3-fil-PH-Gloria",
  ] as const,
  "fr-BE": ["ai3-fr-BE-Leonie", "ai3-fr-BE-Gabriel"] as const,
  "fr-CA": [
    "ai1-Gianna",
    "ai1-fr-CA-Mylan",
    "ai3-fr-CA-Sylvie",
    "ai3-fr-CA-Jean",
    "ai3-fr-CA-Kylian",
    "ai2-fr-CA-Paul",
    "ai2-fr-CA-Scarlett",
    "ai2-fr-CA-Christophe",
    "ai2-fr-CA-MariePier",
    "ai4-fr-CA-Avril",
  ] as const,
  "fr-CH": ["ai3-fr-CH-Leandro", "ai3-fr-CH-Lena"] as const,
  "fr-FR": [
    "ai2-fr-FR-Amandine",
    "ai2-fr-FR-Valentine",
    "ai2-fr-FR-Cassandra",
    "ai2-fr-FR-Erwan",
    "ai2-fr-FR-Dylan",
    "ai4-fr-FR-Blaise",
    "ai4-fr-FR-Charles",
    "ai3-fr-FR-Denise",
    "ai3-fr-FR-Henri",
    "ai3-fr-FR-Austine",
    "ai3-fr-FR-Nevil",
    "ai3-fr-FR-Tayler",
    "ai3-fr-FR-Camille",
    "ai3-fr-FR-Liana",
    "ai3-fr-FR-Roel",
    "ai3-fr-FR-Tyssen",
    "ai3-fr-FR-Claire",
    "ai3-fr-FR-Cannan",
    "ai3-fr-FR-Manie",
    "ai3-fr-FR-Emmy",
    "ai3-fr-FR-Victoire",
    "ai1-fr-FR-Jeanne",
    "ai1-fr-FR-Bernado",
  ] as const,
  "ga-IE": ["ai3-ga-IE-Rian", "ai3-ga-IE-Eabha"] as const,
  "gl-ES": ["ai3-gl-ES-Marcos", "ai3-gl-ES-Evita"] as const,
  "gu-IN": [
    "ai3-gu-IN-Prachi",
    "ai3-gu-IN-Mihir",
    "ai2-gu-IN-Minal",
    "ai2-gu-IN-Varun",
  ] as const,
  "he-IL": ["ai3-he-IL-Guy", "ai3-he-IL-Shira"] as const,
  "hi-IN": [
    "ai2-hi-IN-Dhru",
    "ai2-hi-IN-Zoya",
    "ai2-hi-IN-Anamika",
    "ai2-hi-IN-Nikhil",
    "ai3-hi-IN-Madhur",
    "ai3-hi-IN-Swara",
    "ai1-hi-IN-Kavya",
  ] as const,
  "hr-HR": ["ai3-hr-HR-Vitomira", "ai3-hr-HR-Dmitar"] as const,
  "hu-HU": ["ai2-hu-HU-Eszter", "ai3-hu-HU-Noemi", "ai3-hu-HU-Tamas"] as const,
  "hy-AM": ["ai3-hy-AM-Carine", "ai3-hy-AM-Tigran"] as const,
  "id-ID": [
    "ai2-id-ID-Putri",
    "ai2-id-ID-Henry",
    "ai2-id-ID-David",
    "ai2-id-ID-Salsabilla",
    "ai3-id-ID-Ardi",
    "ai3-id-ID-Fitri",
  ] as const,
  "is-IS": ["ai3-is-IS-Ulfr", "ai3-is-IS-Svana"] as const,
  "it-IT": [
    "ai2-it-IT-Dario",
    "ai2-it-IT-Siliva",
    "ai2-it-IT-Federica",
    "ai2-it-IT-Alessandro",
    "ai4-it-IT-Sara",
    "ai3-it-IT-Diego",
    "ai3-it-IT-Isabella",
    "ai3-it-IT-Elsa",
    "ai3-it-IT-Natalia",
    "ai3-it-IT-Regina",
    "ai3-it-IT-Aitana",
    "ai3-it-IT-Fabiola",
    "ai3-it-IT-Valeria",
    "ai3-it-IT-Ludovica",
    "ai3-it-IT-Gerardo",
    "ai3-it-IT-Ennio",
    "ai3-it-IT-Francesco",
    "ai3-it-IT-Tito",
    "ai3-it-IT-Matteo",
    "ai3-it-IT-Massimo",
    "ai1-it-IT-Viola",
    "ai1-it-IT-Tommaso",
  ] as const,
  "ja-JP": [
    "ai2-ja-JP-Yuka",
    "ai2-ja-JP-Ayaka",
    "ai2-ja-JP-Taiyo",
    "ai2-ja-JP-Masa",
    "ai3-ja-JP-Keita",
    "ai3-ja-JP-Nanami",
    "ai3-ja-JP-Niko",
    "ai3-ja-JP-Ren",
    "ai3-ja-JP-Minato",
    "ai3-ja-JP-Himari",
    "ai3-ja-JP-Sakura",
    "ai4-ja-JP-Akari",
    "ai1-ja-JP-Haruto",
    "ai1-ja-JP-Masako",
    "ai1-ja-JP-Kanna",
  ] as const,
  "jv-ID": ["ai3-jv-ID-Rimbo", "ai3-jv-ID-Angkasa"] as const,
  "ka-GE": ["ai3-ka-GE-Otar", "ai3-ka-GE-Louisa"] as const,
  "kk-KZ": ["ai3-kk-KZ-Batima", "ai3-kk-KZ-Kanat"] as const,
  "km-KH": ["ai3-km-KH-Choum", "ai3-km-KH-Vanna"] as const,
  "kn-IN": [
    "ai2-kn-IN-Aadi",
    "ai2-kn-IN-Vaani",
    "ai3-kn-IN-Vijay",
    "ai3-kn-IN-Deepa",
  ] as const,
  "ko-KR": [
    "ai2-ko-KR-DongMin",
    "ai2-ko-KR-Hannah",
    "ai2-ko-KR-JiYeon",
    "ai2-ko-KR-Minseok",
    "ai3-ko-KR-InJoon",
    "ai3-ko-KR-SunHi",
    "ai3-ko-KR-Hyuk",
    "ai3-ko-KR-Bitna",
    "ai3-ko-KR-Sena",
    "ai3-ko-KR-Geon",
    "ai3-ko-KR-Kyong",
    "ai3-ko-KR-Yong",
    "ai3-ko-KR-Yong",
    "ai1-ko-KR-Seoyeon",
  ] as const,
  "lo-LA": ["ai3-lo-LA-Anuson", "ai3-lo-LA-Sawan"] as const,
  "lt-LT": ["ai3-lt-LT-Jokubas", "ai3-lt-LT-Vasara"] as const,
  "lv-LV": ["ai3-lv-LV-Laura2", "ai3-lv-LV-Edgar"] as const,
  "mk-MK": ["ai3-mk-MK-Risto", "ai3-mk-MK-Eurydike"] as const,
  "ml-IN": [
    "ai2-ml-IN-Tina",
    "ai2-ml-IN-Harsh",
    "ai2-ml-IN-Charu",
    "ai2-ml-IN-Ashok",
    "ai3-ml-IN-Indrajit",
    "ai3-ml-IN-Revathi",
  ] as const,
  "mn-MN": ["ai3-mn-MN-Yagaan", "ai3-mn-MN-Khasar"] as const,
  "mr-IN": [
    "ai3-mr-IN-Prashant",
    "ai3-mr-IN-Sandhya",
    "ai2-mr-IN-Komal",
    "ai2-mr-IN-Rohan",
    "ai2-mr-IN-Disha",
  ] as const,
  "ms-MY": [
    "ai3-ms-MY-Osman",
    "ai3-ms-MY-Yasmin",
    "ai2-ms-MY-Suzana",
    "ai2-ms-MY-Marina",
    "ai2-ms-MY-Aadam",
    "ai2-ms-MY-Zaafer",
  ] as const,
  "mt-MT": ["ai3-mt-MT-Alessia", "ai3-mt-MT-Xavier"] as const,
  "my-MM": ["ai3-my-MM-Khine", "ai3-my-MM-Inzali"] as const,
  "nb-NO": [
    "ai2-nb-NO-Margrete",
    "ai2-nb-NO-Terese",
    "ai2-nb-NO-Norah",
    "ai2-nb-NO-Henrik",
    "ai2-nb-NO-Lukas",
    "ai3-nb-NO-Iselin",
    "ai3-nb-NO-Anita",
    "ai3-nb-NO-Magnus",
    "ai1-nb-NO-Frida",
  ] as const,
  "ne-NP": ["ai3-ne-NP-Chimini", "ai3-ne-NP-Utsav"] as const,
  "nl-BE": [
    "ai3-nl-BE-Aldert",
    "ai3-nl-BE-Marit",
    "ai2-nl-BE-Capucine",
    "ai2-nl-BE-Markus",
  ] as const,
  "nl-NL": [
    "ai3-nl-NL-Colette",
    "ai3-nl-NL-Maarten",
    "ai3-nl-NL-Fenna",
    "ai2-nl-NL-Sterre",
    "ai2-nl-NL-Arenda",
    "ai2-nl-NL-Rogier",
    "ai2-nl-NL-Roosje",
    "ai2-nl-NL-Gerben",
    "ai1-nl-NL-Liva",
  ] as const,
  "pa-IN": [
    "ai2-pa-IN-Maahi",
    "ai2-pa-IN-Ranbir",
    "ai2-pa-IN-Daler",
    "ai2-pa-IN-Chitra",
  ] as const,
  "pl-PL": [
    "ai2-pl-PL-Julia",
    "ai2-pl-PL-Wojciech",
    "ai2-pl-PL-Hanna",
    "ai2-pl-PL-Alicja",
    "ai2-pl-PL-Franciszek",
    "ai3-pl-PL-Lena",
    "ai3-pl-PL-Zofia",
    "ai3-pl-PL-Kacper",
    "ai1-pl-PL-Kalina",
  ] as const,
  "ps-AF": ["ai3-ps-AF-Shahpur", "ai3-ps-AF-Naghma"] as const,
  "pt-BR": [
    "ai2-pt-BR-Keira",
    "ai2-pt-BR-Paulo",
    "ai2-pt-BR-Juliana",
    "ai4-pt-BR-Fernanda",
    "ai1-pt-BR-Camila",
    "ai1-pt-BR-Bruno",
    "ai3-pt-BR-Francisca",
    "ai3-pt-BR-Antonio",
    "ai3-pt-BR-Alandra",
    "ai3-pt-BR-Lucas",
    "ai3-pt-BR-Humberto",
    "ai3-pt-BR-Manuella",
    "ai3-pt-BR-Leila",
    "ai3-pt-BR-Rio",
    "ai3-pt-BR-Rafael",
    "ai3-pt-BR-Jaren",
    "ai3-pt-BR-Yara",
    "ai3-pt-BR-Salvador",
    "ai3-pt-BR-Bernardo",
    "ai3-pt-BR-Alice",
    "ai3-pt-BR-Giovanna",
  ] as const,
  "pt-PT": [
    "ai2-pt-PT-Margarida",
    "ai2-pt-PT-Diogo",
    "ai2-pt-PT-Ines",
    "ai2-pt-PT-Gabriel",
    "ai3-pt-PT-Fernanda",
    "ai3-pt-PT-Duarte",
    "ai3-pt-PT-Raquel",
    "ai1-pt-PT-Laura",
  ] as const,
  "ro-RO": [
    "ai3-ro-RO-Alexandru",
    "ai3-ro-RO-Alina",
    "ai2-ro-RO-Corina",
  ] as const,
  "ru-RU": [
    "ai2-ru-RU-Samara",
    "ai2-ru-RU-Czar",
    "ai2-ru-RU-Tianna",
    "ai2-ru-RU-Igor",
    "ai2-ru-RU-Tassa",
    "ai3-ru-RU-Yelena",
    "ai3-ru-RU-Dariya",
    "ai3-ru-RU-Dmitry",
    "ai5-ru-RU-Vladimir",
    "ai5-ru-RU-Yuri",
    "ai5-ru-RU-Sofia",
    "ai5-ru-RU-Alisa",
    "ai5-ru-RU-Konstantin",
    "ai5-ru-RU-Ekaterina",
  ] as const,
  "si-LK": ["ai3-si-LK-Vedant", "ai3-si-LK-Charuka"] as const,
  "sk-SK": [
    "ai2-sk-SK-Kristina",
    "ai3-sk-SK-Viktoria",
    "ai3-sk-SK-Lukas",
  ] as const,
  "sl-SI": ["ai3-sl-SI-Patrik", "ai3-sl-SI-Izabela"] as const,
  "so-SO": ["ai3-so-SO-Fowsio", "ai3-so-SO-Cumar"] as const,
  "sq-AL": ["ai3-sq-AL-Anila", "ai3-sq-AL-Ilir"] as const,
  "sr-RS": ["ai3-sr-RS-Nemanja", "ai3-sr-RS-Katarina"] as const,
  "su-ID": ["ai3-su-ID-Cindy", "ai3-su-ID-Pratam"] as const,
  "sv-SE": [
    "ai3-sv-SE-Mattias",
    "ai3-sv-SE-Sofie",
    "ai3-sv-SE-Hillevi",
    "ai2-sv-SE-Elsa",
    "ai2-sv-SE-Lea",
    "ai2-sv-SE-Ludvig",
    "ai2-sv-SE-Victor",
    "ai2-sv-SE-Emilie",
    "ai1-sv-SE-Agnes",
  ] as const,
  "sw-KE": ["ai3-sw-KE-Fanaka", "ai3-sw-KE-Obuya"] as const,
  "sw-TZ": ["ai3-sw-TZ-Firyali", "ai3-sw-TZ-Peter"] as const,
  "ta-IN": [
    "ai3-ta-IN-Valluvar",
    "ai3-ta-IN-Pallavi",
    "ai2-ta-IN-Smita",
    "ai2-ta-IN-Illayavan",
    "ai2-ta-IN-Vihan",
    "ai2-ta-IN-Bhanumathi",
  ] as const,
  "ta-LK": ["ai3-ta-LK-Shreenika", "ai3-ta-LK-Viraj"] as const,
  "ta-MY": ["ai3-ta-MY-Surya", "ai3-ta-MY-Moshika"] as const,
  "ta-SG": ["ai3-ta-SG-Jabin", "ai3-ta-SG-Aaksara"] as const,
  "te-IN": ["ai3-te-IN-Mohan", "ai3-te-IN-Shruti"] as const,
  "th-TH": [
    "ai3-th-TH-Achara",
    "ai3-th-TH-Narong",
    "ai3-th-TH-Premwadee",
  ] as const,
  "tr-TR": [
    "ai2-tr-TR-Neylan",
    "ai2-tr-TR-Candana",
    "ai2-tr-TR-Tabeeb",
    "ai2-tr-TR-Roxelana",
    "ai2-tr-TR-Gulizar",
    "ai3-tr-TR-Emel",
  ] as const,
  "uk-UA": [
    "ai3-uk-UA-Olena",
    "ai3-uk-UA-Pavlo",
    "ai2-uk-UA-Aleksandra",
  ] as const,
  "ur-IN": ["ai3-ur-IN-Salman", "ai3-ur-IN-Fatima"] as const,
  "ur-PK": ["ai3-ur-PK-Aslam", "ai3-ur-PK-Mehreen"] as const,
  "uz-UZ": ["ai3-uz-UZ-Diliya", "ai3-uz-UZ-Akbar"] as const,
  "vi-VN": [
    "ai3-vi-VN-HoaiMy",
    "ai3-vi-VN-Phuong",
    "ai2-vi-VN-Thi",
    "ai2-vi-VN-Binh",
    "ai2-vi-VN-Xuan",
    "ai2-vi-VN-Hyunh",
  ] as const,
  "wuu-CN": ["ai3-wuu-CN-Jiang", "ai3-wuu-CN-SunLi"] as const,
  "yue-CN": ["ai3-yue-CN-Yang", "ai3-yue-CN-Wang"] as const,
  "zh-HK": [
    "ai3-zh-HK-HiuMaan",
    "ai3-zh-HK-HiuGaai",
    "ai3-zh-HK-WanLung",
  ] as const,
  "zu-ZA": ["ai3-zu-ZA-Gauteng", "ai3-zu-ZA-Nonhle"] as const,
};

export type VoiceMakerLangs = keyof typeof voiceMakerVoice;
export type VoiceMakerVoices =
  (typeof voiceMakerVoice)[VoiceMakerLangs][number];

export const voiceMakerVoiceCache: {
  [key in VoiceMakerVoices]: VoiceMakerLangs;
} = {} as { [key in VoiceMakerVoices]: VoiceMakerLangs };

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
