var addDays = require("date-fns/addDays");
var format = require("date-fns/format");

let changedate = (days) => {
   let targetdate = addDays(new Date(2020, 07, 22), days);
   return format(targetdate, "dd-MM-yyyy");

};
module.exports = changedate;

//console.log(targetdate);
let days = 5;
  let formattedres  = changedate(days);


console.log(formattedres);

