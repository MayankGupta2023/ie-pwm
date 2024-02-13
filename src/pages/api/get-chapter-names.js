import { fetchDataFromGoogleSheet } from './google-sheet';

export default async function handler(req, res) {
    const { className, subjectName,language } = req.query;
    try {
        const data = await fetchDataFromGoogleSheet();
        let ger;
if(language){
 
ger=   data.filter(row => row[0] === className && row[1] === subjectName && row[3] === language)
    .map(row => row[2]);
}else{
ger = data.filter(row => row[0] === className && row[1] === subjectName).map(row => row[2]);
}
      
        //return ger.map(row => row[2]); 

        return res.status(200).json({ error: false, data:  ger});
    } catch (error) {
        console.error("Error handling request:", error);
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
}
