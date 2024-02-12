// import { google } from "googleapis";
// import keys from "../../../instant-edudoc";

// export default function handler(req, res) {
//     try {
//         const client = new google.auth.JWT(
//             keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
//         );

//         client.authorize(async function(err, tokens) {
//             if (err) {
//                 return res.status(400).send(JSON.stringify({error: true}));
//             }

//             const gsapi = google.sheets({version:'v4', auth: client});

//             //CUSTOMIZATION FROM HERE
//             const opt = {
//                 spreadsheetId: '1uAGb_f3Fy47ySpE_QNzIQr8jFqSe7pQhVcNN6BLORe0',
//                 range: 'Sheet1!A2:E'
//             };

//             let data = await gsapi.spreadsheets.values.get(opt);
//             let mySet = new Set();
//             // for(let i=0;i<data.data.values.length;i++){
//             //     mySet.add(data.data.values[i][0]);
//             // }

// //             const subjects = [];
// //  const className= "Class 12"
// //             for (const row of data.data.values) {
// //                 const [classStr, subject] = row.slice(0, 2);
// //                 if (classStr === className) {
// //                     subjects.push(subject);
// //                 }
// //             }
        
//          //   return subjects;

//          return data.data.values;
//             //return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
//         });
//     } catch (e) {
//         return res.status(400).send(JSON.stringify({error: true, message: e.message}));
//     }
// }





import { google } from "googleapis";
import keys from "../../../instant-edudoc";

const client = new google.auth.JWT(
    keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
);

const gsapi = google.sheets({version:'v4', auth: client});

const fetchDataFromGoogleSheet = async () => {
    const opt = {
        spreadsheetId: '1uAGb_f3Fy47ySpE_QNzIQr8jFqSe7pQhVcNN6BLORe0',
        range: 'Sheet1!A2:E'
    };

    try {
        const response = await gsapi.spreadsheets.values.get(opt);
        return response.data.values;
    } catch (error) {
        console.error("Error fetching data from Google Sheet:", error);
        return [];
    }
};

export { fetchDataFromGoogleSheet };
