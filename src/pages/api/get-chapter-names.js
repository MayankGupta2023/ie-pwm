import { fetchDataFromGoogleSheet } from './google-sheet';

export default async function handler(req, res) {
    const { className, subjectName } = req.query;
    try {
        const data = await fetchDataFromGoogleSheet();

        const ger = data.filter(row => row[0] === className && row[1] === subjectName);
        //return ger.map(row => row[2]); 

        return res.status(200).json({ error: false, data:  ger.map(row => row[2])});
    } catch (error) {
        console.error("Error handling request:", error);
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
}
