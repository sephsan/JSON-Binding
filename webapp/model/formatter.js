sap.ui.define([], function (Constants) {
  "use strict";
  return {
    /*
     * Sets the date format to dd.MM.yyyy
     * @params {string}  sDate - date
     * @return {string} formatted date
     */
    formatDateToddMMyyyy: function (sDate) {
      var oDateFormatted = "";
      if (sDate) {
        var oDateFormatDisplay = "dd.MM.yyyy",
          oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
            pattern: oDateFormatDisplay,
          });
        oDateFormatted = oDateFormat.format(new Date(sDate));
      }
      return oDateFormatted;
    },
    /*
     * Sets the time format to HH:mm
     * @params {string}  sDate - date
     * @return {string} formatted date
     */
    formatTimeToHHmm: function (sTime) {
      var sTimeFormatted = "";
      if (sTime) {
        var sTimeFormatDisplay = "HH:mm",
          oTimeFormat = sap.ui.core.format.DateFormat.getTimeInstance({
            pattern: sTimeFormatDisplay,
          });
        // Apply the correct time format
        sTimeFormatted = oTimeFormat.format(oTimeFormat.parse(sTime));
      }

      return sTimeFormatted;
    },
    /*
     * Checks if row is deleted
     * @params {string}  - deletion indicator
     * @return {boolean} - disables field
     */
    formatCheckDeletionIndicator: function (sDeletionInDicator) {
      var bEnabled = true;
      if (sDeletionInDicator === "X") {
        bEnabled = false;
      } else {
        bEnabled = true;
      }
      return bEnabled;
    },
  };
});
