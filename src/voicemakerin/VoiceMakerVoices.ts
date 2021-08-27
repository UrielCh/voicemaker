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
 */
export const voiceMakerVoice = {
    "en-US": ["ai1-Ivy", "ai1-Joanna", "ai1-Kendra", "ai1-Kimberly", "ai1-Salli", "ai1-Joey", "ai1-Justin", "ai1-Kevin", "ai1-Matthewai2-John", "ai2-Stacy", "ai2-Nikola", "ai2-Scott", "ai2-Katie", "ai2-Scarlet", "ai2-Kathy", "ai2-Isabella", "ai2-Robert", "ai2-Jerryai3-Jony", "ai3-Aria", "ai3-Jenny", "ai3-Nova", "ai3-Olive", "ai3-Taylor", "ai3-Vienna", "ai3-Kailey", "ai3-Addyson", "ai3-Emily", "ai3-Gary", "ai3-Kingsley", "ai3-Jason", "ai3-Evanai4-Sophia", "ai4-Amanda", "ai4-Edward", "ai4-Ronald", "ai4-Samantha", "ai4-Roger", "ai4-Doris"] as const,
    "en-GB": ["ai1-Amy", "ai1-Emma", "ai1-Brianai2-Emily", "ai2-Jessica", "ai2-William", "ai2-Freddie", "ai2-Victoriaai3-Libby", "ai3-Mia", "ai3-Ryana", "i4-Elizabeth", "ai4-Harry", "ai4-Niamh"] as const,
    "en-AU": ["ai1-Olivia", "ai2-Amelia", "ai2-William", "ai2-Matilda", "ai2-Harry", "ai3-Natasha", "ai3-Williamai4-James", "ai4-Grace"] as const,
    "en-HK": ["ai3-en-HK-Rachel", "ai3-en-HK-Zach"] as const,
    "en-NZ": ["ai3-en-NZ-Becca", "ai3-en-NZ-Sebastian"] as const,
    "en-SG": ["ai3-en-SG-Juan", "ai3-en-SG-Richard"] as const,
    "en-ZA": ["ai3-en-ZA-Amara", "ai3-en-ZA-Evans"] as const,
    "de-DE": ["ai2-de-DE-Pia", "ai2-de-DE-Patrick", "ai2-de-DE-Fabienne", "ai2-de-DE-Dustin", "ai2-de-DE-Thomas", "ai2-de-DE-Mona", "ai3-de-DE-Katja", "ai3-de-DE-Conrad", "ai4-de-DE-Anja", "ai4-de-DE-Paul", "ai4-de-DE-Gabriele"] as const,
    "ar-XA": ["ai2-ar-XA-Sana", "ai2-ar-XA-Iman", "ai2-ar-XA-Nadir", "ai3-ar-XA-Salma", "ai3-ar-XA-Shakir"] as const,
    "ar-SA": ["ai3-ar-SA-Zariyah", "ai3-ar-SA-Hamed"] as const,
    "bn-IN": ["ai2-bn-IN-Charu", "ai2-bn-IN-Binod"] as const,
    "bg-BG": ["ai3-bg-BG-Boyan", "ai3-bg-BG-Gergana"] as const,
    "ca-ES": ["ai3-ca-ES-Alba", "ai3-ca-ES-Joana", "ai3-ca-ES-Enric"] as const,
    "cmn-CN": ["ai2-cmn-CN-Claire", "ai2-cmn-CN-Yao", "ai2-cmn-CN-Vincent", "ai2-cmn-CN-Sue", "ai3-cmn-CN-Xiaoxiao", "ai3-cmn-CN-Xiaoyou", "ai3-cmn-CN-Yunyang", "ai3-cmn-CN-Yunye", "ai3-cmn-CN-Xariyah", "ai3-cmn-CN-Xiomara", "ai3-cmn-CN-Carissa", "ai3-cmn-CN-Xylia", "ai3-cmn-CN-Xander", "ai4-zh-CN-Caihong", "ai4-zh-CN-Zhang", "ai4-zh-CN-Shu"] as const,
    "zh-HK": ["ai3-zh-HK-HiuGaai", "ai3-zh-HK-HiuMaan", "ai3-zh-HK-WanLung"] as const,
    "cmn-TW": ["ai2-cmn-TW-Ting", "ai2-cmn-TW-Bao", "ai2-cmn-TW-Qiangai3-cmn-TW-HsiaoYu", "ai3-cmn-TW-HsiaoChen", "ai3-cmn-TW-Sachihiro"] as const,
    "cy-GB": ["ai3-cy-GB-Catrin", "ai3-cy-GB-Gareth"] as const,
    "cs-CZ": ["ai2-cs-CZ-Eliska", "ai3-cs-CZ-Vlasta", "ai3-cs-CZ-Antonin"] as const,
    "da-DK": ["ai2-da-DK-Abbie", "ai2-da-DK-Johan", "ai2-da-DK-Julie", "ai2-da-DK-Signea", "i3-da-DK-Christel", "ai3-da-DK-Jeppe"] as const,
    "de-CH": ["ai3-de-CH-Anja", "ai3-de-CH-Noah"] as const,
    "es-AR": ["ai3-es-AR-Malen", "ai3-es-AR-Hernan"] as const,
    "es-CO": ["ai3-es-CO-Luciana", "ai3-es-CO-Brandon"] as const,
    "es-US": ["ai1-es-US-Lupe", "ai4-es-US-Luz2", "ai3-es-US-Paz", "ai3-es-US-Alberto"] as const,
    "ga-IE": ["ai3-ga-IE-Eabha", "ai3-ga-IE-Rian"] as const,
    "gu-IN": ["ai3-gu-IN-Prachi", "ai3-gu-IN-Mihir"] as const,
    "hr-HR": ["ai3-hr-HR-Vitomira", "ai3-hr-HR-Dmitar"] as const,
    "mr-IN": ["ai3-mr-IN-Sandhya", "ai3-mr-IN-Prashant"] as const,
    "mt-MT": ["ai3-mt-MT-Alessia", "ai3-mt-MT-Xavier"] as const,
    "nl-NL": ["ai2-nl-NL-Sterre", "ai2-nl-NL-Gerben", "ai2-nl-NL-Rogier", "ai2-nl-NL-Arenda", "ai2-nl-NL-Roosjeai3-nl-NL-Colette", "ai3-nl-NL-Fenna", "ai3-nl-NL-Maarten"] as const,
    "nl-BE": ["ai3-nl-BE-Marit", "ai3-nl-BE-Aldert"] as const,
    "en-CA": ["ai3-en-CA-Clara", "ai3-en-CA-Liam"] as const,
    "en-IN": ["ai2-en-IN-Alisha", "ai2-en-IN-Luv", "ai2-en-IN-Rohan", "ai2-en-IN-Tanviai3-en-IN-Neerja", "ai3-en-IN-Prabhas"] as const,
    "en-IE": ["ai3-en-IE-Emily", "ai3-en-IE-Connor"] as const,
    "et-EE": ["ai3-et-EE-Edenema", "ai3-et-EE-Tuudur"] as const,
    "en-PH": ["ai3-en-PH-Luwalhati", "ai3-en-PH-Magiting"] as const,
    "fil-PH": ["ai2-fil-PH-Camille", "ai2-fil-PH-Jennly", "ai2-fil-PH-Nathan", "ai2-fil-PH-Gabriel"] as const,
    "fi-FI": ["ai2-fi-FI-Karoliinaai3-fi-FI-Noora", "ai3-fi-FI-Selma", "ai3-fi-FI-Harri"] as const,
    "fr-BE": ["ai3-fr-BE-Leonie", "ai3-fr-BE-Gabriel"] as const,
    "fr-FR": ["ai2-fr-FR-Amandine", "ai2-fr-FR-Dylan", "ai2-fr-FR-Valentine", "ai2-fr-FR-Erwan", "ai2-fr-FR-Cassandra", "ai3-fr-FR-Denise", "ai3-fr-FR-Henriai4-fr-FR-Chance", "ai4-fr-FR-Blaise"] as const,
    "fr-CA": ["ai2-fr-CA-Scarlett", "ai2-fr-CA-MariePier", "ai2-fr-CA-Christophe", "ai2-fr-CA-Paula", "i3-fr-CA-Sylvie", "ai3-fr-CA-Jean", "ai3-fr-CA-Kylian"] as const,
    "fr-CH": ["ai3-fr-CH-Lena", "ai3-fr-CH-Leandro"] as const,
    "el-GR": ["ai2-el-GR-Anastasia", "ai3-el-GR-Athina", "ai3-el-GR-Topher"] as const,
    "he-IL": ["ai3-he-IL-Shira", "ai3-he-IL-Guy"] as const,
    "hi-IN": ["ai2-hi-IN-Anamika", "ai2-hi-IN-Nikhil", "ai2-hi-IN-Dhru", "ai2-hi-IN-Zoyaai3-hi-IN-Swara", "ai3-hi-IN-Madhur"] as const,
    "hu-HU": ["ai2-hu-HU-Eszterai3-hu-HU-Noemi", "ai3-hu-HU-Tamas"] as const,
    "id-ID": ["ai2-id-ID-Putri", "ai2-id-ID-David", "ai2-id-ID-Henry", "ai2-id-ID-Salsabilla", "ai3-id-ID-Ardi", "ai3-id-ID-Fitri"] as const,
    "it-IT": ["ai2-it-IT-Federica", "ai2-it-IT-Siliva", "ai2-it-IT-Alessandro", "ai2-it-IT-Dario", "ai3-it-IT-Elsa", "ai3-it-IT-Isabella", "ai3-it-IT-Diego", "ai4-it-IT-Sara"] as const,
    "ja-JP": ["ai2-ja-JP-Yuka", "ai2-ja-JP-Ayaka", "ai2-ja-JP-Masa", "ai2-ja-JP-Taiyo", "ai3-ja-JP-Nanami", "ai3-ja-JP-Keitaai4-ja-JP-Akari"] as const,
    "lv-LV": ["ai3-lv-LV-Laura2", "ai3-lv-LV-Edgar"] as const,
    "lt-LT": ["ai3-lt-LT-Vasara", "ai3-lt-LT-Jokubas"] as const,
    "ko-KR": ["ai2-ko-KR-JiYeon", "ai2-ko-KR-Hannah", "ai2-ko-KR-DongMin", "ai2-ko-KR-Minseokai3-ko-KR-SunHi", "ai3-ko-KR-InJoon"] as const,
    "nb-NO": ["ai2-nb-NO-Margrete", "ai2-nb-NO-Henrik", "ai2-nb-NO-Terese", "ai2-nb-NO-Lukas", "ai2-nb-NO-Noraha", "i3-nb-NO-Iselin", "ai3-nb-NO-Anita", "i3-nb-NO-Magnus"] as const,
    "pl-PL": ["ai2-pl-PL-Julia", "ai2-pl-PL-Franciszek", "ai2-pl-PL-Wojciech", "ai2-pl-PL-Alicja", "ai2-pl-PL-Hanna", "ai3-pl-PL-Zofia", "ai3-pl-PL-Lena", "ai3-pl-PL-Kacper"] as const,
    "pt-PT": ["ai2-pt-PT-Margarida", "ai2-pt-PT-Diogo", "ai2-pt-PT-Gabriel", "ai2-pt-PT-Inesa", "i3-pt-PT-Fernanda", "ai3-pt-PT-Raquel", "ai3-pt-PT-Duarte"] as const,
    "pt-BR": ["ai1-pt-BR-Camila", "ai2-pt-BR-Keira", "ai3-pt-BR-Francisca", "ai3-pt-BR-Antonio", "ai4-pt-BR-Fernanda"] as const,
    "ro-RO": ["ai3-ro-RO-Alina", "ai3-ro-RO-Alexandru"] as const,
    "ru-RU": ["ai2-ru-RU-Samara", "ai2-ru-RU-Igor", "ai2-ru-RU-Tianna", "ai2-ru-RU-Czar", "ai2-ru-RU-Tassaa", "i3-ru-RU-Dariya", "ai3-ru-RU-Yelena"] as const,
    "sk-SK": ["ai2-sk-SK-Kristinaai3-sk-SK-Viktoria"] as const,
    "sw-KE": ["ai3-sw-KE-Fanaka", "ai3-sw-KE-Obuya"] as const,
    "es-ES": ["ai3-es-ES-Elvira", "ai3-es-ES-Alvaro", "ai4-es-ES-Matlab", "ai4-es-ES-Savannah"] as const,
    "es-MX": ["ai3-es-MX-Dalia", "ai3-es-MX-Jorge"] as const,
    "es-LA": ["ai4-es-LA-Luz"] as const,
    "sl-SI": ["ai3-sl-SI-Izabela", "ai3-sl-SI-Patrik"] as const,
    "sv-SE": ["ai2-sv-SE-Elsaai3-sv-SE-Hillevi", "ai3-sv-SE-Sofie", "ai3-sv-SE-Mattias"] as const,
    "tr-TR": ["ai2-tr-TR-Gulizar", "ai2-tr-TR-Candana", "ai2-tr-TR-Neylan", "ai2-tr-TR-Roxelana", "ai2-tr-TR-Tabeeb", "ai3-tr-TR-Emel"] as const,
    "ta-IN": ["ai3-ta-IN-Pallavi", "ai3-ta-IN-Valluvar"] as const,
    "te-IN": ["ai3-te-IN-Shruti", "ai3-te-IN-Mohan"] as const,
    "th-TH": ["ai3-th-TH-Achara", "ai3-th-TH-Premwadee", "ai3-th-TH-Narong"] as const,
    "uk-UA": ["ai2-uk-UA-Aleksandraai3-uk-UA-Olena", "ai3-uk-UA-Pavlo"] as const,
    "ur-PK": ["ai3-ur-PK-Mehreen", "ai3-ur-PK-Aslam"] as const,
    "vi-VN": ["ai2-vi-VN-Hyunh", "ai2-vi-VN-Xuan", "ai2-vi-VN-Thi", "ai2-vi-VN-Binh", "ai3-vi-VN-HoaiMy", "ai3-vi-VN-Phuong"] as const,
}

export type VoiceMakerLangs = keyof typeof voiceMakerVoice;
export type VoiceMakerVoices = typeof voiceMakerVoice[VoiceMakerLangs][number];

export const voiceMakerVoiceCache: {[key in VoiceMakerVoices]: VoiceMakerLangs} = {} as {[key in VoiceMakerVoices]: VoiceMakerLangs};

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