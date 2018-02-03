// O8S - Sigmascape 4.0 Savage
[{
  zoneRegex: /Sigmascape V4\.0 \(Savage\)/,
  timelineFile: 'o8s.txt',
  triggers: [
    {
      id: 'O8S Thing',
      regex: /:1EDD:Alte Roite starts using/,
      infoText: function(data, matches) {
      },
      tts: function(data, matches) {
      },
    },
    {
      id: 'O8S Headmarker',
      regex: /1B:........:(\y{Name}):....:....:00XX:0000:0000:0000:/,
      condition: function(data, matches) { return matches[1] == data.me; },
      infoText: function(data) {
      },
      tts: function(data, matches) {
      },
    },
  ]
}]