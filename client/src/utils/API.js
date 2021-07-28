

// export const searchGoogleBooks = (query) => {
//     return fetch(`https://www.carboninterface.com/api/v1/${query}`);
//   }

//.env.API_KEY
// require('dotenv').config({path: "./../../../.env"});


// Example POST method implementation:
//API connection done w/ tutor
// postData = async (url = '') => {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer Nkj80KhE6QAyzdw2GdNsig'
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   //   body: JSON.stringify() // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }
// //Responds to the click of the finish button
// finishHandler = () => {
//     if (this.state.currentIndex === QuestionsData.length - 1) {
//       this.postData("https://www.carboninterface.com/api/v1/estimates").then(
//         (data) => {
//           console.log(data); // JSON data parsed by `data.json()` call
//         }
//       );
//       this.setState({
//         surveyEnd: true,
//       });
//     }
//   };