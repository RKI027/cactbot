'use strict';

[{
  zoneRegex: {
    en: /^Eden's Gate: Resurrection$/,
    cn: /^伊甸希望乐园 \(觉醒之章1\)$/,
    ko: /^희망의 낙원 에덴: 각성편 \(1\)$/,
  },
  timelineFile: 'e1n.txt',
  triggers: [
    {
      id: 'E1N Eden\'s Gravity',
      regex: Regexes.startsUsing({ id: '3D94', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3D94', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3D94', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3D94', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3D94', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3D94', source: '에덴 프라임', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'E1N Fragor Maximus',
      regex: Regexes.startsUsing({ id: '3DA4', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3DA4', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3DA4', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3DA4', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3DA4', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3DA4', source: '에덴 프라임', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'E1N Dimensional Shift',
      regex: Regexes.startsUsing({ id: '3D9C', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3D9C', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3D9C', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3D9C', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3D9C', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3D9C', source: '에덴 프라임', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'E1N Eden\'s Flare',
      regex: Regexes.startsUsing({ id: '3D97', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3D97', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3D97', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3D97', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3D97', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3D97', source: '에덴 프라임', capture: false }),
      response: Responses.getUnder('alert'),
    },
    {
      id: 'E1N Vice of Vanity You',
      regex: Regexes.tether({ id: '0011', target: 'Eden Prime' }),
      regexDe: Regexes.tether({ id: '0011', target: 'Prim-Eden' }),
      regexFr: Regexes.tether({ id: '0011', target: 'Primo-Éden' }),
      regexJa: Regexes.tether({ id: '0011', target: 'エデン・プライム' }),
      regexCn: Regexes.tether({ id: '0011', target: '至尊伊甸' }),
      regexKo: Regexes.tether({ id: '0011', target: '에덴 프라임' }),
      condition: function(data, matches) {
        return data.me == matches.source;
      },
      alertText: {
        en: 'Tank Laser on YOU',
        de: 'Tank Laser auf DIR',
        fr: 'Tank laser sur VOUS',
        cn: '坦克射线点名',
        ko: '나에게 탱커 빔',
      },
    },
    {
      id: 'E1N Spear Of Paradise',
      regex: Regexes.startsUsing({ id: '3DA1', source: 'Eden Prime' }),
      regexDe: Regexes.startsUsing({ id: '3DA1', source: 'Prim-Eden' }),
      regexFr: Regexes.startsUsing({ id: '3DA1', source: 'Primo-Éden' }),
      regexJa: Regexes.startsUsing({ id: '3DA1', source: 'エデン・プライム' }),
      regexCn: Regexes.startsUsing({ id: '3DA1', source: '至尊伊甸' }),
      regexKo: Regexes.startsUsing({ id: '3DA1', source: '에덴 프라임' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'tank' || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'E1N Vice of Apathy Mark',
      regex: Regexes.headMarker({ id: '001C' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      alertText: {
        en: 'Drop Puddle, Run Middle',
        de: 'Flächen ablegen, danach in die Mitte',
        fr: 'Placez les flaques, courez au centre',
        cn: '放圈，回中央',
        ko: '장판 깔고 중앙으로',
      },
    },
    {
      // 10.5 second cast, maybe warn 6 seconds ahead so that folks bait outside.
      id: 'E1N Pure Light',
      regex: Regexes.startsUsing({ id: '3DA3', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3DA3', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3DA3', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3DA3', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3DA3', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3DA3', source: '에덴 프라임', capture: false }),
      delaySeconds: 4.5,
      response: Responses.getBehind(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Eden Prime': 'Prim-Eden',
        'Eden(?! )': 'Eden',
        'Guardian of Paradise': 'Hüter von Eden',
      },
      'replaceText': {
        'Vice Of Vanity': 'Laster der Eitelkeit',
        'Vice Of Apathy': 'Laster der Apathie',
        'Vice And Virtue': 'Laster und Tugend',
        'Unto Dust': 'Sprengung',
        'Unknown Ability': 'Unknown Ability',
        'Sunder Pressure': 'Druck',
        'Spear Of Paradise': 'Paradiesspeer',
        'Pure Light': 'Läuterndes Licht',
        'Pure Beam': 'Läuternder Strahl',
        'Primeval Stasis': 'Urzeitliche Stase',
        'Paradise Lost': 'Verlorenes Paradies',
        'Paradisal Dive': 'Paradiessturz',
        'Mana Slice': 'Manahieb',
        'Mana Burst': 'Manastoß',
        'Heavensunder': 'Himmelsdonner',
        'Fragor Maximus': 'Fragor Maximus',
        'Eternal Breath': 'Ewiger Atem',
        'Eden\'s Thunder III': 'Eden-Blitzga',
        'Eden\'s Gravity': 'Eden-Gravitas',
        'Eden\'s Flare': 'Eden-Flare',
        'Eden\'s Fire III': 'Eden-Feuga',
        'Eden\'s Blizzard III': 'Eden-Eisga',
        'Dimensional Shift': 'Dimensionsverschiebung',
        'Delta Attack': 'Delta-Attacke',
      },
      '~effectNames': {
        'Summon Order': 'Egi-Attacke I',
        'Heavy': 'Gewicht',
        'Fetters': 'Gefesselt',
        'Brink of Death': 'Sterbenselend',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Eden Prime': 'Primo-Éden',
        'Guardian of Paradise': 'gardien du jardin',
      },
      'replaceText': {
        'Spear Of Paradise': 'Lance du paradis',
        'Vice of Vanity': 'Péché de vanité',
        'Vice of Apathy': 'Péché d\'apathie',
        'Vice and Virtue': 'Vice et vertue',
        'Unto Dust': 'Déflagration',
        'Unknown Ability': 'Unknown Ability',
        'Sunder Pressure': 'Force de pesanteur',
        'Spear of Paradise': 'Lance du paradis',
        'Pure Light': 'Lumière purificatrice',
        'Pure Beam': 'Rayon purificateur',
        'Primeval Stasis': 'Stase primordiale',
        'Paradise Lost': 'Paradis perdu',
        'Paradisal Dive': 'Piqué du paradis',
        'Mana Slice': 'Taillade de mana',
        'Mana Burst': 'Explosion de mana',
        'Heavensunder': 'Ravageur de paradis',
        'Fragor Maximus': 'Fragor Maximus',
        'Eternal Breath': 'Souffle de l\'éternel',
        'Eden\'s Thunder III': 'Méga Foudre édénique',
        'Eden\'s Gravity': 'Gravité édénique',
        'Eden\'s Flare': 'Brasier édénique',
        'Eden\'s Fire III': 'Méga Feu édénique',
        'Eden\'s Blizzard III': 'Méga Glace édénique',
        'Dimensional Shift': 'Translation dimensionnelle',
        'Delta Attack': 'Attaque Delta',
      },
      '~effectNames': {
        'Summon Order': 'Action en attente: 1',
        'Heavy': 'Pesanteur',
        'Fetters': 'Attache',
        'Brink of Death': 'Mourant',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Eden Prime': 'エデン・プライム',
        'Guardian of Paradise': 'エデン・ガーデナー',
      },
      'replaceText': {
        'Vice of Vanity': 'ヴァイス・オブ・ヴァニティー',
        'Vice of Apathy': 'ヴァイス・オブ・アパシー',
        'Vice and Virtue': 'ヴァイス・アンド・ヴァーチュー',
        'Unto Dust': '爆裂',
        'Unknown Ability': 'Unknown Ability',
        'Sunder Pressure': '重圧',
        'Spear of Paradise': 'スピア・オブ・パラダイス',
        'Pure Light': 'ピュアライト',
        'Pure Beam': 'ピュアレイ',
        'Primeval Stasis': 'プライムイーバルステーシス',
        'Paradise Lost': 'パラダイスロスト',
        'Paradisal Dive': 'パラダイスダイブ',
        'Mana Slice': 'マナスラッシュ',
        'Mana Burst': 'マナバースト',
        'Heavensunder': 'ヘヴンサンダー',
        'Fragor Maximus': 'フラゴルマクシマス',
        'Eternal Breath': 'エターナル・ブレス',
        'Eden\'s Thunder III': 'エデン・サンダガ',
        'Eden\'s Gravity': 'エデン・グラビデ',
        'Eden\'s Flare': 'エデン・フレア',
        'Eden\'s Fire III': 'エデン・ファイガ',
        'Eden\'s Blizzard III': 'エデン・ブリザガ',
        'Dimensional Shift': 'ディメンションシフト',
        'Delta Attack': 'デルタアタック',
      },
      '~effectNames': {
        'Summon Order': 'アクション実行待機I',
        'Heavy': 'ヘヴィ',
        'Fetters': '拘束',
        'Brink of Death': '衰弱［強］',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Eden Prime': '至尊伊甸',
        'Eden(?! )': '伊甸',
        'Guardian of Paradise': '伊甸守护者',
      },
      'replaceText': {
        'Vice [oO]f Vanity': '虚荣之恶',
        'Vice [oO]f Apathy': '冷漠之恶',
        'Vice [aA]nd Virtue': '恶习与美德',
        'Unto Dust': '归于尘土',
        'Sunder Pressure': '超重压',
        'Spear [oO]f Paradise': '乐园之枪',
        'Pure Light': '净土之光',
        'Pure Beam': '净土射线',
        'Primeval Stasis': '原初停滞',
        'Paradise Lost': '失乐园',
        'Paradisal Dive': '乐园冲',
        'Mana Slice': '魔力斩击',
        'Mana Burst': '魔力爆发',
        'Heavensunder': '天国分断',
        'Fragor Maximus': '极大爆炸',
        'Eternal Breath': '永恒吐息',
        'Eden\'s Thunder III': '伊甸暴雷',
        'Eden\'s Gravity': '伊甸重力',
        'Eden\'s Flare': '伊甸核爆',
        'Eden\'s Fire III': '伊甸爆炎',
        'Eden\'s Blizzard III': '伊甸冰封',
        'Dimensional Shift': '空间转换',
        'Delta Attack': '三角攻击',
      },
      '~effectNames': {
        'Summon Order': '发动技能待命I',
        'Heavy': '加重',
        'Fetters': '拘束',
        'Brink of Death': '濒死',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Eden Prime': '에덴 프라임',
        'Eden(?! )': '에덴',
        'Guardian of Paradise': '에덴 정원사',
      },
      'replaceText': {
        'Vice [oO]f Vanity': '허영의 악덕',
        'Vice [oO]f Apathy': '냉담의 악덕',
        'Vice [aA]nd Virtue': '선과 악',
        'Unto Dust': '폭렬',
        'Sunder Pressure': '중압',
        'Spear [oO]f Paradise': '낙원의 창',
        'Pure Light': '완전한 빛',
        'Pure Beam': '완전한 광선',
        'Primeval Stasis': '태초의 안정',
        'Paradise Lost': '실낙원',
        'Paradisal Dive': '낙원 강하',
        'Mana Slice': '마나 베기',
        'Mana Burst': '마나 폭발',
        'Heavensunder': '천국의 낙뢰',
        'Fragor Maximus': '우주 탄생',
        'Eternal Breath': '영원의 숨결',
        'Eden\'s Thunder III': '에덴 선더가',
        'Eden\'s Gravity': '에덴 그라비데',
        'Eden\'s Flare': '에덴 플레어',
        'Eden\'s Fire III': '에덴 파이가',
        'Eden\'s Blizzard III': '에덴 블리자가',
        'Dimensional Shift': '차원 전환',
        'Delta Attack': '델타 공격',
      },
      '~effectNames': {
        'Summon Order': 'Summon Order',
        'Heavy': 'Heavy',
        'Fetters': 'Fetters',
        'Brink of Death': 'Brink of Death',
      },
    },
  ],
}];
