import axios from "axios";
export const api = axios.create({
  baseURL: 'https://graph.tractive.com/3/bmi-calculation/calculate',
    "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Tractive fphpmh8cgsdbue3ewpggejhm",
    "content-type": "application/json",
    "x-tractive-client": "59bf7ff91d733cd9f7e8aa51"
  },
});
// 21:00 - 23:00
// export const getDogBreed =  () =>{
  
//   const res = axios.get('https://tractive.com/bmi/data/Breeds.csv',{
//     headers: {
//       "Access-Control-Allow-Origin" : "*",
//       "authorization": "Tractive fphpmh8cgsdbue3ewpggejhm",
//       // "content-type": "application/json",
//       "x-tractive-client": "59bf7ff91d733cd9f7e8aa51"
//     },
//     mode:"no-cors",
      
//   }).then(response => {
//     console.log("response",response);
//   });
  
//   console.log("res", res)
// }
// // https://tractive.com/bmi/data/Breeds.csv
// // fetch("https://graph.tractive.com/3/bmi-calculation/calculate", {
// //   "headers": {
// //     "accept": "application/json, text/plain, */*",
// //     "accept-language": "en-US,en;q=0.9",
// //     "authorization": "Tractive fphpmh8cgsdbue3ewpggejhm",
// //     "content-type": "application/json",
// //     "sec-fetch-dest": "empty",
// //     "sec-fetch-mode": "cors",
// //     "sec-fetch-site": "same-site",
// //     "sec-gpc": "1",
// //     "x-tractive-client": "59bf7ff91d733cd9f7e8aa51"
// //   },
// //   "referrer": "https://tractive.com/",
// //   "referrerPolicy": "strict-origin-when-cross-origin",
// //   "body": "{\n  \"pet_type\": \"DOG\",\n  \"name\": \"re\",\n  \"birthday\": 1638986673,\n  \"height_unit\": \"cm\",\n  \"gender\": \"F\",\n  \"upper_bmi_limit\": 54,\n  \"lower_bmi_limit\": 37,\n  \"weight_unit\": \"kg\",\n  \"weight\": 22,\n  \"height\": 2,\n  \"breed_id\": \"979\"\n}",
// //   "method": "POST",
// //   "mode": "cors",
// //   "credentials": "include"
// // });

// // fetch("https://graph.tractive.com/3/bmi-calculation/calculate", {
// //   "headers": {
// //     "accept": "application/json, text/plain, */*",
// //     "accept-language": "en-US,en;q=0.9",
// //     "authorization": "Tractive fphpmh8cgsdbue3ewpggejhm",
// //     "content-type": "application/json",
// //     "sec-fetch-dest": "empty",
// //     "sec-fetch-mode": "cors",
// //     "sec-fetch-site": "same-site",
// //     "sec-gpc": "1",
// //     "x-tractive-client": "59bf7ff91d733cd9f7e8aa51"
// //   },
// //   "referrer": "https://tractive.com/",
// //   "referrerPolicy": "strict-origin-when-cross-origin",
// //   "body": "{\n  \"pet_type\": \"CAT\",\n  \"name\": \"re\",\n  \"birthday\": 1638382182,\n  \"height_unit\": \"cm\",\n  \"gender\": \"F\",\n  \"upper_bmi_limit\": 30,\n  \"lower_bmi_limit\": 12,\n  \"lim\": 2,\n  \"ribcage\": 22\n}",
// //   "method": "POST",
// //   "mode": "cors",
// //   "credentials": "include"
// // });
// // const cat={
// //   "pet_type": "CAT",
// //   "name": "re",
// //   "birthday": 1638382182,
// //   "height_unit": "cm",
// //   "gender": "F",
// //   "upper_bmi_limit": 30,
// //   "lower_bmi_limit": 12,
// //   "lim": 2,
// //   "ribcage": 22
// // }

// // const dog = {
// //   "pet_type": "DOG",
// //   "name": "re",
// //   "birthday": 1638382182,
// //   "height_unit": "cm",
// //   "gender": "F",
// //   "upper_bmi_limit": 60,
// //   "lower_bmi_limit": 58,
// //   "weight_unit": "kg",
// //   "weight": 22,
// //   "height": 2,
// //   "breed_id": "7"
// // }

// // fetch("https://tractive.com/bmi/data/Breeds.csv", {
// //   "headers": {
// //     "accept": "application/json, text/plain, */*"
// //   },
// //   "referrer": "https://tractive.com/bmi/dog",
// //   "referrerPolicy": "strict-origin-when-cross-origin",
// //   "body": null,
// //   "method": "GET",
// //   "mode": "cors",
// //   "credentials": "omit"
// // });