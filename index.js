const axios=require("axios");
const cheerio=require("cheerio");
async function getir(){
var veri=await axios.get("https://www.sondakika.com/");
var numberOfData=5;
const $=cheerio.load(veri.data);
for(var i=1; i<=numberOfData; i++){
var baslik=$("#manset"+i +"> a > div.bx-caption > span").text();
var saat=$("#manset"+i +"> a > div.Mansettime > span").text();
console.log(saat+" - "+baslik);
}}
return getir();
