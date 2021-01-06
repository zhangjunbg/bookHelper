const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite');
const gushiHttp = "https://so.gushiwen.org/shiwenv_";
const savePath = path.join(__dirname, '../../static/poem/mp3/');
const orignPoem = require('../helper/peom')
// const poemList = [
//   "ef9cd9ba44bb", "b6bd9a33dfd7", "eeb3869b6242", "6e878b858e01", "8616581bb564", "8bc9e1cc2b8f",
//   "c35a60c1a8e2", "63bcf81b5d09", "a8f44614071a", "31dd7d07323c", "ccee5691ba93", "ca9eaf40a6ce",
//   "40954072f541", "0f6ad3fb3d95", "c90ff9ea5a71", "62802abab937", "85f036fcc038", "f996111bff75",
//   "846e626d74d3", "200d28227643", "58313be2d918", "425fb837c387", "9936770100ef", "3ab4125fd0f1",
//   "549473b5211c", "b7820a12ebaa", "4859914a4e16", "d88e3533fc4a", "3c36881bd247", "c987db20a4d7",
//   "7ccd1778ba07", "97e6296bfb8d", "8949464433f0", "880912218fc8", "d08246ab36e2", "58699ebb5e93",
//   "0f81015a040c", "c953220f9f52", "e5e7911da1d2", "cd140bf494da", "fbbd80710c5e", "bf758d053fca",
//   "a167901c9c90", "d3e3283daac5", "d75a706935de", "6ad0636b01a9", "f6bd6356c843", "5e26797704a7",
//   "0daa9748bcb5", "f2f5469a6044", "8f1be8b774c2", "1104052ed0fc", "b9e14c6e09aa", "9312f5349cd7",
//   "e4cd80aceb52", "cfeddc2459c2", "e9b1a8b4def0", "caef25db347c", "4b3ccba01be6", "6e4b9596b2f3",
//   "f92fb36ff846", "03e80e28a0c2", "f433a64dd504", "9a9463173105", "82fd6027caf3", "a640d462c006",
//   "9236b601a746", "e8c610c2308b", "85e46c4b3dbc", "0cf974c0b70a", "1da5349ad9e4", "966c8a76211f", "63f2cb1073ff", "838d9b401572", "9ebe5eef393d", "44ba4afb80db", "6fb73f607ad3", "0a4d69889c65", "04f7c4ccfa13", "c8414cce04e1", "e152d043be94", "ee72baa043c8", "4c1364cb1da5", "dd1c97accf6e", "9d5e3f5ee21f", "4bb194abd528", "be04bba6288c", "d1129db241ec", "dbabcfab1a1b", "519029b7355c", "d52e05980359", "af4715c0208f", "161d06b0b556", "8ec950bd1395", "3963afd966bc", "d3f231047aef", "07f5e3403665", "63d3ff8f6b61", "0eda7b78250a", "f090d65212f4", "a1e7559dada7", "857567307e6a", "33cbdb2cf9b3", "3d787de04152", "a00028c4f0be", "7c170d5debdf", "4a0d548bebb3", "97f3412c43e2", "ba4626c44270", "f459f8ed8d23", "f26e62f4bfc8", "7f09a756c9c0", "2367f5ae6dee", "55174e6ebe20", "c6c93895df0a", "e5c9337524b7", "7dddb391682f", "b4a451fa375a", "183d69f50755", "fa087546c81b", "12a2295aa76b", "d48451f00541", "7e09f12b287c", "4b21381d3a76", "df14e6fd217b", "a31b957aba53", "ee1bd6238d4a", "a9a16104dd1b", "315cf2d8892b",]
// const poemList = [
//   '8616581bb564', '63bcf81b5d09',
//   '4859914a4e16', 'd08246ab36e2',
//   'cd140bf494da', 'bf758d053fca',
//   '1104052ed0fc', 'cfeddc2459c2',
//   '4b3ccba01be6', 'a640d462c006',
//   '9236b601a746', '9ebe5eef393d',
//   '04f7c4ccfa13', 'dbabcfab1a1b',
//   'd52e05980359', '3d787de04152',
//   '7c170d5debdf', '97f3412c43e2',
//   'b4a451fa375a', 'fa087546c81b',
//   '315cf2d8892b'
// ];
const poemList = [
  // 'bf758d053fca', '9ebe5eef393d', '04f7c4ccfa13', 'b4a451fa375a'
  'bf758d053fca', '9ebe5eef393d', '04f7c4ccfa13', 'b4a451fa375a'
]
const allObj = {
  "ef9cd9ba44bb": "70885",
  "b6bd9a33dfd7": "71047",
  "eeb3869b6242": "4017",
  "6e878b858e01": "1013631",
  "8616581bb564": "",
  "8bc9e1cc2b8f": "3493",
  "c35a60c1a8e2": "7816",
  "63bcf81b5d09": "",
  "a8f44614071a": "71298",
  "31dd7d07323c": "70970",
  "ccee5691ba93": "7494",
  "ca9eaf40a6ce": "8014",
  "40954072f541": "31653",
  "0f6ad3fb3d95": "71962",
  "c90ff9ea5a71": "13034",
  "62802abab937": "71193",
  "85f036fcc038": "71217",
  "f996111bff75": "48041",
  "846e626d74d3": "70927",
  "200d28227643": "40035",
  "58313be2d918": "18302",
  "425fb837c387": "71046",
  "9936770100ef": "5122",
  "3ab4125fd0f1": "70971",
  "549473b5211c": "71194",
  "b7820a12ebaa": "21818",
  "4859914a4e16": "",
  "d88e3533fc4a": "71027",
  "3c36881bd247": "27824",
  "c987db20a4d7": "70939",
  "7ccd1778ba07": "71195",
  "97e6296bfb8d": "8328",
  "8949464433f0": "70938",
  "880912218fc8": "19085",
  "d08246ab36e2": "",
  "58699ebb5e93": "71038",
  "0f81015a040c": "8345",
  "c953220f9f52": "71218",
  "e5e7911da1d2": "71212",
  "cd140bf494da": "",
  "fbbd80710c5e": "69119",
  "a167901c9c90": "69086",
  "d3e3283daac5": "71248",
  "d75a706935de": "5780",
  "6ad0636b01a9": "2077",
  "f6bd6356c843": "9098",
  "5e26797704a7": "22098",
  "0daa9748bcb5": "22492",
  "f2f5469a6044": "69101",
  "8f1be8b774c2": "70989",
  "1104052ed0fc": "",
  "b9e14c6e09aa": "70869",
  "9312f5349cd7": "70844",
  "e4cd80aceb52": "70957",
  "cfeddc2459c2": "",
  "e9b1a8b4def0": "5737",
  "caef25db347c": "29084",
  "4b3ccba01be6": "",
  "6e4b9596b2f3": "71215",
  "f92fb36ff846": "70972",
  "03e80e28a0c2": "57611",
  "f433a64dd504": "70843",
  "9a9463173105": "70883",
  "82fd6027caf3": "69175",
  "a640d462c006": "",
  "9236b601a746": "",
  "e8c610c2308b": "71266",
  "85e46c4b3dbc": "71213",
  "0cf974c0b70a": "35987",
  "1da5349ad9e4": "8411",
  "966c8a76211f": "69134",
  "63f2cb1073ff": "70973",
  "838d9b401572": "71044",
  "44ba4afb80db": "5636",
  "6fb73f607ad3": "12271",
  "0a4d69889c65": "70751",
  "c8414cce04e1": "2347",
  "e152d043be94": "24482",
  "ee72baa043c8": "71049",
  "4c1364cb1da5": "69142",
  "dd1c97accf6e": "72144",
  "9d5e3f5ee21f": "69140",
  "4bb194abd528": "71297",
  "be04bba6288c": "71216",
  "d1129db241ec": "71207",
  "dbabcfab1a1b": "",
  "519029b7355c": "11064",
  "d52e05980359": "",
  "af4715c0208f": "72166",
  "161d06b0b556": "19328",
  "8ec950bd1395": "5753",
  "3963afd966bc": "70868",
  "d3f231047aef": "8086",
  "07f5e3403665": "70979",
  "63d3ff8f6b61": "7501",
  "0eda7b78250a": "1013639",
  "f090d65212f4": "57678",
  "a1e7559dada7": "76092",
  "857567307e6a": "71253",
  "33cbdb2cf9b3": "27620",
  "3d787de04152": "",
  "a00028c4f0be": "72489",
  "7c170d5debdf": "",
  "4a0d548bebb3": "7411",
  "97f3412c43e2": "",
  "ba4626c44270": "70974",
  "f459f8ed8d23": "70849",
  "f26e62f4bfc8": "12445",
  "7f09a756c9c0": "47873",
  "2367f5ae6dee": "16151",
  "55174e6ebe20": "71220",
  "c6c93895df0a": "69198",
  "e5c9337524b7": "69361",
  "7dddb391682f": "71101",
  "183d69f50755": "70886",
  "fa087546c81b": "",
  "12a2295aa76b": "5782",
  "d48451f00541": "10968",
  "7e09f12b287c": "71202",
  "4b21381d3a76": "72390",
  "df14e6fd217b": "69089",
  "a31b957aba53": "70981",
  "ee1bd6238d4a": "65231",
  "a9a16104dd1b": "49573",
  "315cf2d8892b": "",
  "bf758d053fca": ""
}
const soundUrl = {
  "ef9cd9ba44bb": "https://song.gushiwen.cn/song/jiangweiwei/ef9cd9ba44bb.mp3",
  // "b6bd9a33dfd7": "https://song.gushiwen.cn/song/jiangweiwei/b6bd9a33dfd7.mp3",
  // "eeb3869b6242": "https://song.gushiwen.cn/song/chenlang/eeb3869b6242.mp3",
  // "6e878b858e01": "https://song.gushiwen.cn/song/chenlang/6e878b858e01.mp3",
  // "8bc9e1cc2b8f": "https://song.gushiwen.cn/song/chenlang/8bc9e1cc2b8f.mp3",
  // "c35a60c1a8e2": "https://song.gushiwen.cn/song/jiangweiwei/c35a60c1a8e2.mp3",
  // "a8f44614071a": "https://song.gushiwen.cn/song/chenlang/a8f44614071a.mp3",
  // "31dd7d07323c": "https://song.gushiwen.cn/song/jiangweiwei/31dd7d07323c.mp3",
  // "ccee5691ba93": "https://song.gushiwen.cn/song/jiangweiwei/ccee5691ba93.mp3",
  // "ca9eaf40a6ce": "https://song.gushiwen.cn/song/jiangweiwei/ca9eaf40a6ce.mp3",
  // "40954072f541": "https://song.gushiwen.cn/song/chenlang/40954072f541.mp3",
  // "0f6ad3fb3d95": "https://song.gushiwen.cn/song/chenlang/0f6ad3fb3d95.mp3",
  // "c90ff9ea5a71": "https://song.gushiwen.cn/song/jiangweiwei/c90ff9ea5a71.mp3",
  // "62802abab937": "https://song.gushiwen.cn/song/jiangweiwei/62802abab937.mp3",
  // "85f036fcc038": "https://song.gushiwen.cn/song/chenlang/85f036fcc038.mp3",
  // "f996111bff75": "https://song.gushiwen.cn/song/chenlang/f996111bff75.mp3",
  // "846e626d74d3": "https://song.gushiwen.cn/song/jiangweiwei/846e626d74d3.mp3",
  // "200d28227643": "https://song.gushiwen.cn/song/chenlang/200d28227643.mp3",
  // "58313be2d918": "https://song.gushiwen.cn/song/jiangweiwei/58313be2d918.mp3",
  // "425fb837c387": "https://song.gushiwen.cn/song/jiangweiwei/425fb837c387.mp3",
  // "9936770100ef": "https://song.gushiwen.cn/song/jiangweiwei/9936770100ef.mp3",
  // "3ab4125fd0f1": "https://song.gushiwen.cn/song/jiangweiwei/3ab4125fd0f1.mp3",
  // "549473b5211c": "https://song.gushiwen.cn/song/jiangweiwei/549473b5211c.mp3",
  // "b7820a12ebaa": "https://song.gushiwen.cn/song/jiangweiwei/b7820a12ebaa.mp3",
  // "d88e3533fc4a": "https://song.gushiwen.cn/song/chenlang/d88e3533fc4a.mp3",
  // "3c36881bd247": "https://song.gushiwen.cn/song/chenlang/3c36881bd247.mp3",
  // "c987db20a4d7": "https://song.gushiwen.cn/song/chenlang/c987db20a4d7.mp3",
  // "7ccd1778ba07": "https://song.gushiwen.cn/song/chenlang/7ccd1778ba07.mp3",
  // "97e6296bfb8d": "https://song.gushiwen.cn/song/chenlang/97e6296bfb8d.mp3",
  // "8949464433f0": "https://song.gushiwen.cn/song/jiangweiwei/8949464433f0.mp3",
  // "880912218fc8": "https://song.gushiwen.cn/song/chenlang/880912218fc8.mp3",
  // "58699ebb5e93": "https://song.gushiwen.cn/song/caociyi/58699ebb5e93.mp3",
  // "0f81015a040c": "https://song.gushiwen.cn/song/chenlang/0f81015a040c.mp3",
  // "c953220f9f52": "https://song.gushiwen.cn/song/chenlang/c953220f9f52.mp3",
  // "e5e7911da1d2": "https://song.gushiwen.cn/song/chenlang/e5e7911da1d2.mp3",
  // "fbbd80710c5e": "https://song.gushiwen.cn/song/chenlang/fbbd80710c5e.mp3",
  // "a167901c9c90": "https://song.gushiwen.cn/song/jiangweiwei/a167901c9c90.mp3",
  // "d3e3283daac5": "https://song.gushiwen.cn/song/jiangweiwei/d3e3283daac5.mp3",
  // "d75a706935de": "https://song.gushiwen.cn/song/jiangweiwei/d75a706935de.mp3",
  // "6ad0636b01a9": "https://song.gushiwen.cn/song/chenlang/6ad0636b01a9.mp3",
  // "f6bd6356c843": "https://song.gushiwen.cn/song/chenlang/f6bd6356c843.mp3",
  // "5e26797704a7": "https://song.gushiwen.cn/song/jiangweiwei/5e26797704a7.mp3",
  // "0daa9748bcb5": "https://song.gushiwen.cn/song/chenlang/0daa9748bcb5.mp3",
  // "f2f5469a6044": "https://song.gushiwen.cn/song/jiangweiwei/f2f5469a6044.mp3",
  // "8f1be8b774c2": "https://song.gushiwen.cn/song/chenlang/8f1be8b774c2.mp3",
  // "b9e14c6e09aa": "https://song.gushiwen.cn/song/chenlang/b9e14c6e09aa.mp3",
  // "9312f5349cd7": "https://song.gushiwen.cn/song/jiangweiwei/9312f5349cd7.mp3",
  // "e4cd80aceb52": "https://song.gushiwen.cn/song/chenlang/e4cd80aceb52.mp3",
  // "e9b1a8b4def0": "https://song.gushiwen.cn/song/jiangweiwei/e9b1a8b4def0.mp3",
  // "caef25db347c": "https://song.gushiwen.cn/song/jiangweiwei/caef25db347c.mp3",
  // "6e4b9596b2f3": "https://song.gushiwen.cn/song/chenlang/6e4b9596b2f3.mp3",
  // "f92fb36ff846": "https://song.gushiwen.cn/song/make/f92fb36ff846.mp3",
  // "03e80e28a0c2": "https://song.gushiwen.cn/song/jiangweiwei/03e80e28a0c2.mp3",
  // "f433a64dd504": "https://song.gushiwen.cn/song/jiangweiwei/f433a64dd504.mp3",
  // "9a9463173105": "https://song.gushiwen.cn/song/chenlang/9a9463173105.mp3",
  // "82fd6027caf3": "https://song.gushiwen.cn/song/jiangweiwei/82fd6027caf3.mp3",
  // "e8c610c2308b": "https://song.gushiwen.cn/song/jiangweiwei/e8c610c2308b.mp3",
  // "85e46c4b3dbc": "https://song.gushiwen.cn/song/caociyi/85e46c4b3dbc.mp3",
  // "0cf974c0b70a": "https://song.gushiwen.cn/song/chenlang/0cf974c0b70a.mp3",
  // "1da5349ad9e4": "https://song.gushiwen.cn/song/chenlang/1da5349ad9e4.mp3",
  // "966c8a76211f": "https://song.gushiwen.cn/song/yiyesheng/966c8a76211f.mp3",
  // "63f2cb1073ff": "https://song.gushiwen.cn/song/chenlang/63f2cb1073ff.mp3",
  // "838d9b401572": "https://song.gushiwen.cn/song/chenlang/838d9b401572.mp3",
  // "44ba4afb80db": "https://song.gushiwen.cn/song/jiangweiwei/44ba4afb80db.mp3",
  // "6fb73f607ad3": "https://song.gushiwen.cn/song/chenlang/6fb73f607ad3.mp3",
  // "0a4d69889c65": "https://song.gushiwen.cn/song/jiangweiwei/0a4d69889c65.mp3",
  // "c8414cce04e1": "https://song.gushiwen.cn/song/chenlang/c8414cce04e1.mp3",
  // "e152d043be94": "https://song.gushiwen.cn/song/chenlang/e152d043be94.mp3",
  // "ee72baa043c8": "https://song.gushiwen.cn/song/jiangweiwei/ee72baa043c8.mp3",
  // "4c1364cb1da5": "https://song.gushiwen.cn/song/chenlang/4c1364cb1da5.mp3",
  // "dd1c97accf6e": "https://song.gushiwen.cn/song/chenlang/dd1c97accf6e.mp3",
  // "9d5e3f5ee21f": "https://song.gushiwen.cn/song/chenlang/9d5e3f5ee21f.mp3",
  // "4bb194abd528": "https://song.gushiwen.cn/song/chenlang/4bb194abd528.mp3",
  // "be04bba6288c": "https://song.gushiwen.cn/song/make/be04bba6288c.mp3",
  // "d1129db241ec": "https://song.gushiwen.cn/song/chenlang/d1129db241ec.mp3",
  // "519029b7355c": "https://song.gushiwen.cn/song/jiangweiwei/519029b7355c.mp3",
  // "af4715c0208f": "https://song.gushiwen.cn/song/make/af4715c0208f.mp3",
  // "161d06b0b556": "https://song.gushiwen.cn/song/jiangweiwei/161d06b0b556.mp3",
  // "8ec950bd1395": "https://song.gushiwen.cn/song/jiangweiwei/8ec950bd1395.mp3",
  // "3963afd966bc": "https://song.gushiwen.cn/song/chenlang/3963afd966bc.mp3",
  // "d3f231047aef": "https://song.gushiwen.cn/song/jiangweiwei/d3f231047aef.mp3",
  // "07f5e3403665": "https://song.gushiwen.cn/song/chenlang/07f5e3403665.mp3",
  // "63d3ff8f6b61": "https://song.gushiwen.cn/song/chenlang/63d3ff8f6b61.mp3",
  // "0eda7b78250a": "https://song.gushiwen.cn/song/chenlang/0eda7b78250a.mp3",
  // "f090d65212f4": "https://song.gushiwen.cn/song/jiangweiwei/f090d65212f4.mp3",
  // "a1e7559dada7": "https://song.gushiwen.cn/song/caociyi/a1e7559dada7.mp3",
  // "857567307e6a": "https://song.gushiwen.cn/song/chenlang/857567307e6a.mp3",
  // "33cbdb2cf9b3": "https://song.gushiwen.cn/song/jiangweiwei/33cbdb2cf9b3.mp3",
  // "a00028c4f0be": "https://song.gushiwen.cn/song/make/a00028c4f0be.mp3",
  // "4a0d548bebb3": "https://song.gushiwen.cn/song/jiangweiwei/4a0d548bebb3.mp3",
  // "ba4626c44270": "https://song.gushiwen.cn/song/jiangweiwei/ba4626c44270.mp3",
  // "f459f8ed8d23": "https://song.gushiwen.cn/song/chenlang/f459f8ed8d23.mp3",
  // "f26e62f4bfc8": "https://song.gushiwen.cn/song/chenlang/f26e62f4bfc8.mp3",
  // "7f09a756c9c0": "https://song.gushiwen.cn/song/chenlang/7f09a756c9c0.mp3",
  // "2367f5ae6dee": "https://song.gushiwen.cn/song/chenlang/2367f5ae6dee.mp3",
  // "55174e6ebe20": "https://song.gushiwen.cn/song/chenlang/55174e6ebe20.mp3",
  // "c6c93895df0a": "https://song.gushiwen.cn/song/chenlang/c6c93895df0a.mp3",
  // "e5c9337524b7": "https://song.gushiwen.cn/song/chenlang/e5c9337524b7.mp3",
  // "7dddb391682f": "https://song.gushiwen.cn/song/make/7dddb391682f.mp3",
  // "183d69f50755": "https://song.gushiwen.cn/song/jiangweiwei/183d69f50755.mp3",
  // "12a2295aa76b": "https://song.gushiwen.cn/song/jiangweiwei/12a2295aa76b.mp3",
  // "d48451f00541": "https://song.gushiwen.cn/song/jiangweiwei/d48451f00541.mp3",
  // "7e09f12b287c": "https://song.gushiwen.cn/song/chenlang/7e09f12b287c.mp3",
  // "4b21381d3a76": "https://song.gushiwen.cn/song/chenlang/4b21381d3a76.mp3",
  // "df14e6fd217b": "https://song.gushiwen.cn/song/jiangweiwei/df14e6fd217b.mp3",
  // "a31b957aba53": "https://song.gushiwen.cn/song/make/a31b957aba53.mp3",
  // "ee1bd6238d4a": "https://song.gushiwen.cn/song/chenlang/ee1bd6238d4a.mp3",
  // "a9a16104dd1b": "https://song.gushiwen.cn/song/jiangweiwei/a9a16104dd1b.mp3"
};
const errList = [];
const alreadyObj = {};
var curIndex = 0;
/**
 * @controller 数据库操作
 */

module.exports = app => {
  return class PoemController extends app.Controller {
    async saveAllSound(ctx) {
      for (let k in soundUrl) {
        if (soundUrl[k]) {
          await ctx.curl(`https://so.gushiwen.org/viewplay.aspx?id=${soundUrl[k]}`, {
            headers: {
              "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "accept-encoding": "gzip, deflate, br",
              "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
              "cache-control": "no-cache",
              "pragma": "no-cache",
              "sec-ch-ua": 'Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
              "sec-fetch-dest": "document",
              "sec-fetch-mode": "navigate",
              "sec-fetch-site": "none",
              "upgrade-insecure-requests": "1",
              "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
            }
          }).then(res => {
            console.log(res);
            // fs.appendFile(savePath + k + ".mp3", res.data, (error) => {
            //   if (error) return console.log("追加文件失败" + error.message);
            // });
            ctx.body = {
              code: '00',
              data: res
            }
          })
        }
      }

    }
    // 获取具体古诗
    getPoem3(ctx) {
      // let url = 'ef9cd9ba44bb' + '.aspx';
      // this.getPoem2(ctx);
      // console.log(curIndex);
      ctx.body = {
        code: "00",
        data: {}
      }
    }
    // 获取所有列表
    async getPoem4(ctx) {
      // getAllList(ctx) {
      // 查询列表页
      // let options = ctx.request.body || {};
      let type = "Poem";
      let result = await this.service.db.getResourceList(ctx, type, {});
      let relationObj = {};
      result.rows.forEach(item => {
        relationObj[item.key] = item.sound;
      })
      ctx.body = {
        code: "00",
        data: relationObj
      }
    }

    async getPoem(ctx) {
      for (let k in allObj) {
        if (allObj[k]) {
          await ctx.curl(`https://so.gushiwen.org/viewplay.aspx?id=${allObj[k]}`, {}).then(res => {

            let resData = iconv.decode(res.data, 'utf-8');
            let curContent = this.formatSound(resData);
            if (curContent) {
              soundUrl[k] = curContent;
            }
          })
        }
      }
      ctx.body = {
        code: '00',
        data: soundUrl
      }
    }
    formatSound(orignData) {
      // orignData = `

      // <style type="text/css">
      // video::-webkit-media-controls-enclosure {
      //     overflow:hidden;
      // }
      // video::-webkit-media-controls-panel {
      //     width: calc(100% + 30px);
      // }
      // audio::-internal-media-controls-download-button {
      //     display:none;
      // }

      // audio::-webkit-media-controls-enclosure {
      //     overflow:hidden;
      // }

      // audio::-webkit-media-controls-panel {
      //     width: calc(100% + 30px);
      // }
      // </style>
      // <div style="clear:both; height:auto; margin-top:10px; margin-bottom:10px; overflow:hidden;">
      // <audio style=" cursor:pointer;outline:none; float:left; margin-left:20px; width:450px;" src="https://song.gushiwen.cn/song/jiangweiwei/ef9cd9ba44bb.mp3" controls="controls" autoplay controlsList="nodownload"></audio>
      // <span style="margin-left:10px; float:left; margin-top:7px; font-size:14px;">（朗读：蒋伟伟）</span>
      // </div>`

      let sound = orignData.match(/<audio style=" cursor:pointer;outline:none; float:left; margin-left:20px; width:450px;" src="(.*?)" controls="controls" autoplay controlsList="nodownload"><\/audio>/)
      return sound ? sound[1] : false;

    }

    // 获取所有音频
    getAllAudio() {
      // 保存单个mp3文件
      // fs.append();
    }
    // 设置level
    setLevel(ctx) {

    }
    getPoem2(ctx) {
      // curIndex = 0;
      let url = poemList[curIndex];
      if (url) {
        ctx.curl(`${gushiHttp}${url}.aspx`, {}).then(res => {

          // let resData = res.data.toString('gb2312');
          let resData = iconv.decode(res.data, 'utf-8');
          // console.log("=================================", resData.toString())
          let curContent = this.formatContent(resData);
          if (curContent) {
            this.savePoem(ctx, curContent, () => {
              curIndex++;
              this.getPoem2(ctx);
            });
          } else {
            curIndex++;
            this.getPoem2(ctx);
          }
        })
      } else {
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log("++++++++++++++++++++", errList, "+++++++++++++++++");

      }

    }
    async savePoem(ctx, data, cb) {
      if (alreadyObj[data.key]) {

        cb(result);
      } else {
        alreadyObj[data.key] = true;
        const singleData = new ctx.model.Poem(data);
        let result = singleData.save();
        cb(result);
      }

    }
    formatContent(orign) {
      // let orign = orignPoem;
      // let orignData = orign.match(/(<h1 style="font-size:20px; line-height:22px; height:22px; margin-bottom:10px;">[.\s\S\r\n]*?)\<p\>注释\<br \/>/)[1] || "";
      let cleanData = "";
      // console.log("========== : ", cleanData, " : ==========")
      let title = "";
      let subTitle = "";
      let author = "";
      let dynasty = "";
      let content = "";
      let sound = "";
      let fanyi = "";
      try {
        cleanData = orign.match(/<h1 style="font-size:20px; line-height:22px; height:22px; margin-bottom:10px;">([\s\S]*?)<p>(<strong>)?注释(<\/strong>)?\<br \/>/);
        if (!cleanData)
          cleanData = orign.match(/<h1 style="font-size:20px; line-height:22px; height:22px; margin-bottom:10px;">([\s\S]*?)<br \/>注释<br \/>/);
        console.log(cleanData);
        cleanData = cleanData[1];
        title = cleanData.match(/(.*?)<\/h1>/)[1];
        subTitle = title.split('·')[1] || "";
        title = title.split('·')[0]
        author = cleanData.match(/\<p class="source"\>\<a href=".*?"\>(.*?)<\/a\> \<a href=".*?">〔(.*?)〕<\/a><\/p>/)[1];
        dynasty = cleanData.match(/\<p class="source"\>\<a href=".*?"\>(.*?)<\/a\> \<a href=".*?">〔(.*?)〕<\/a><\/p>/)[2];
        content = cleanData.match(/\<div class="contson" id=".*?"\>[\s\S\r\n]*?([.\s\S\r\n]*?)\<\/div\>/)[1].replace(/[\n ]/g, '');
        let t = cleanData.match(/javascript:Play\(([\d]{1,9}),/);
        sound = t ? t[1] : '';
        let m1 = cleanData.match(/<p>(<strong>)?译文(<\/strong>)?<br \/>([\s\S]*?)<\/p>/);
        if (!m1) m1 = cleanData.match(/译文<br \/>([\s\S]*?)<br \/>/);
        fanyi = m1[3];
      } catch (err) {
        console.log("========== : ", poemList[curIndex], " : ==========")
        console.log("========== : ", cleanData, " : ==========")
        errList.push(poemList[curIndex]);
      } finally {
        if (!cleanData) {
          return false;
        } else {
          return {
            key: poemList[curIndex],
            title, subTitle, dynasty, content, author, sound, fanyi
          };
        }

      }
    }
    // 批量新增
    async multiAdd(ctx) {
      let data = ctx.request.body || {};
      let peomList = data.list;

      // let result = await this.service.db.insertMultiple(ctx, type, multiData);
      ctx.body = {
        code: '00', data: {}
      };
    }
    // 批量新增
    async wordMultiAdd(ctx) {
      let data = ctx.request.body || {};
      let { level, content, pinyin } = data;
      let multiData = [];
      let contentArr = content.split(/[,:;、-]/g);
      let pinyinArr = pinyin.split(/[,:;、-] /g)
      contentArr.forEach((item, index) => {
        multiData.push({
          content: item, level: level, pinyin: pinyinArr[index]
        });
      });
      let result = await ctx.model.Word.insertMany(multiData)
      ctx.body = result;
    }
    // 批量修改
    async wordMultiUpdate(ctx) {
      let data = ctx.request.body || {};
      let idList = [];
      let idObjs = {};
      data.forEach(item => {
        idObjs[item._id] = item;
        idList.push(item._id);
        delete item._id;
      })
      function updateData(item) {
        ctx.model.Word.findOneAndUpdate({
          _id: item
        }, {
          $set: { ...idObjs[item] }
        }, (err, raw) => {
          if (err) {
            console.log("db-updateData: ", err);
          }
        });
      }
      idList.forEach(item => {
        let tm = item;
        updateData(tm)
      })
      // ctx.model.Word.updateMany({level: 'beijing'
      // }, {
      //   $set: {level:'2'}
      // },(err,raw)=>{
      //   if(err) {
      //     console.log("db-updateData: ",err);
      //   }
      // });

      ctx.body = {
        code: "00", data: {}
      };
    }
    // 重置学习状态
    async cleanStudyStatus(ctx) {
      await ctx.model.Word.updateMany({}, {
        $set: {
          studied: '0', learnTimes: 0, errorTimes: 0, successTimes: 0, lastLearnTime: null
        }
      }, (err, raw) => {
        if (err) {
          console.log("db-updateData: ", err);
        }
      });
      ctx.body = {
        code: "00", data: {}
      };
    }
    // 批量新增
    async termMultiAdd(ctx) {
      let insertData = ctx.request.body || {};
      let type = 'term';
      let result = await this.service.db.insertMultiple(ctx, type, insertData);
      ctx.body = result;
    }
    // 批量新增
    async idiomMultiAdd(ctx) {
      let insertData = ctx.request.body || {};
      let type = 'idiom';
      let result = await this.service.db.insertMultiple(ctx, type, insertData);
      ctx.body = result;
    }
    // 批量新增
    async storyMultiAdd(ctx) {
      let insertData = ctx.request.body || {};
      let type = 'story';
      let result = await this.service.db.insertMultiple(ctx, type, insertData);
      ctx.body = result;
    }
    // 批量新增
    async eImgMultiAdd(ctx) {
      let insertData = ctx.request.body || {};
      let type = 'eImg';
      let result = await this.service.db.insertMultiple(ctx, type, insertData);
      ctx.body = result;
    }
    // 查询列表页
    async wordList(ctx) {
      let options = ctx.request.body || {};
      let type = "Word";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = {
        code: "00", data: result
      };
    }
    // 查询列表页
    async termList(ctx) {
      let options = ctx.request.body || {};
      let type = "term";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = result;
    }
    // 查询列表页
    async idiomList(ctx) {
      let options = ctx.request.body || {};
      let type = "idiom";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = result;
    }
    // 查询列表页
    async storyList(ctx) {
      let options = ctx.request.body || {};
      let type = "story";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = result;
    }
    // 查询列表页
    async eImgList(ctx) {
      let options = ctx.request.body || {};
      let type = "eImg";
      let result = await this.service.db.getResourceList(ctx, type, options);
      ctx.body = result;
    }

  }
}