
export const ALL_WATSON_VOICES = [
    "ar-AR_OmarVoice", "ar-MS_OmarVoice",
    "de-DE_BirgitVoice", "de-DE_BirgitV3Voice", "de-DE_DieterVoice", "de-DE_DieterV3Voice", "de-DE_ErikaV3Voice",
    "en-AU-CraigVoice", "en-AU-MadisonVoice",
    "en-GB_CharlotteV3Voice", "en-GB_JamesV3Voice", "en-GB_KateVoice", "en-GB_KateV3Voice",
    "en-US_AllisonVoice", "en-US_AllisonV3Voice", "en-US_EmilyV3Voice", "en-US_HenryV3Voice", "en-US_KevinV3Voice", "en-US_LisaVoice", "en-US_LisaV3Voice", "en-US_MichaelVoice", "en-US_MichaelV3Voice", "en-US_OliviaV3Voice",
    "es-ES_EnriqueVoice", "es-ES_EnriqueV3Voice", "es-ES_LauraVoice", "es-ES_LauraV3Voice", "es-LA_SofiaVoice", "es-LA_SofiaV3Voice", "es-US_SofiaVoice", "es-US_SofiaV3Voice",
    "fr-CA_LouiseV3Voice", "fr-FR_NicolasV3Voice", "fr-FR_ReneeVoice", "fr-FR_ReneeV3Voice",
    "it-IT_FrancescaVoice", "it-IT_FrancescaV3Voice",
    "ja-JP_EmiVoice", "ja-JP_EmiV3Voice",
    "ko-KR_HyunjunVoice", "ko-KR_SiWooVoice", "ko-KR_YoungmiVoice", "ko-KR_YunaVoice",
    "nl-BE_AdeleVoice", "nl-NL_EmmaVoice", "nl-NL_LiamVoice",
    "pt-BR_IsabelaVoice", "pt-BR_IsabelaV3Voice",
    "zh-CN_LiNaVoice", "zh-CN_WangWeiVoice", "zh-CN_ZhangJingVoice"] as const;

export type WatsonVoices = typeof ALL_WATSON_VOICES[number];

export const WATSON_VOICES_SET: Set<WatsonVoices> = new Set(ALL_WATSON_VOICES);