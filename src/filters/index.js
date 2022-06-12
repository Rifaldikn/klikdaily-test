import Vue from "vue";

// Setup Format Date
import moment from "moment";
moment.locale("idn");

Vue.filter("toFormatDate", (timestamp, toFormat) => {
  if (timestamp) {
    return moment(timestamp).format(toFormat);
  } else {
    return timestamp;
  }
});

Vue.filter("toUnixTime", (timestamp) => {
  return moment.unix(timestamp);
});

Vue.filter("momentFormat", (timestamp, format) => {
  return moment(timestamp, format);
});
