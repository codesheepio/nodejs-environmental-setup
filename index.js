var moment = require('moment-timezone');

var now = moment();
var timezones = [
  'Europe/London',
  'Asia/Bangkok',
  'Asia/Tokyo',
];

timezones.forEach(function (timezone) {
  console.log(now.tz(timezone).format('lll z'));
});
