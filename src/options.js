'use strict';

/**
 * Default date options.
 *
 * @type {Object}
 */
var defaults = {

  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],

  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],

  daysShort: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ],

  /**
   * Short representations of time measurements.
   *
   * @type {Object}
   */
  indicators: {
    year:         "y",
    month:        "m",
    week:         "w",
    day:          "d",
    hour:         "h",
    minute:       "m",
    second:       "s",
    milliseconds: "ms"
  }

};

export default defaults;