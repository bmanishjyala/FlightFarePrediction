const state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
const Airline=["Jet Airways","Indigo","Air India","Vistara","GoAir"];
var codePush='';
state.forEach(e => {
    
     codePush+=`<option value=${e}>${e}</option>`
});
var airPush='';
Airline.forEach(e => {
    
     airPush+=`<option value=${e}>${e}</option>`
});
document.getElementById('inputGroupSelect01').innerHTML+=codePush;
document.getElementById('inputGroupSelect02').innerHTML+=codePush;
document.getElementById('inputGroupSelect03').innerHTML+=airPush;