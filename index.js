const axios=require("axios");
const cheerio=require("cheerio");
async function getir(){
var veri=await axios.get("https://www.sondakika.com/");
const $=cheerio.load(veri.data);
var numberOfData=5;
var tarih=new Date();
var today=tarih.getDay()+"."+tarih.getMonth+"."+tarih.getFullYear();
for(var i=1; i<=numberOfData; i++){
var baslik=$("#manset"+i +"> a > div.bx-caption > span").text();
var saat=$("#manset"+i +"> a > div.Mansettime > span").text();
console.log(saat+" - "+baslik);
}}
return getir();