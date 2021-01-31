class Validator {
       constructor() {}

       isValidate(value) {
              try {
                     if (typeof value !== "undefined" && value !== "") {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNotValidate(value) {
              try {
                     if (typeof value === undefined && value === "") {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNumber(value) {
              try {
                     const numberParse = parseInt(value);
                     if (numberParse) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNumberOrCero(value) {
              try {
                     if (value === "0" || value === 0) {
                            return true;
                     }
                     const numberParse = parseInt(value);
                     if (numberParse) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isUnoOrCero(value) {
              try {
                     const numberParse = parseInt(value);
                     if (numberParse === 1 || numberParse === 0) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNotNumber(value) {
              try {
                     const numberParse = parseInt(value);
                     if (!numberParse) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isEmpty(value) {
              try {
                     if (value === "") {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNotEmpty(value) {
              try {
                     if (value !== "") {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isUndefined(value) {
              try {
                     if (typeof value === undefined) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }

       isNotUndefined(value) {
              try {
                     if (typeof value === undefined) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     throw error;
              }
       }
}

module.exports = new Validator();
