import { fetchDataFromGoogleSheet } from './google-sheet';

export default async function handler(req, res) {
    const { className, subjectName,chapterName } = req.query;
    try {
        const data = await fetchDataFromGoogleSheet();
        const ger = data.filter(row => row[0] === className && row[1] === subjectName && row[2] === chapterName);
        if (ger.length > 0) {
            const  arr=[ger[0][3]];
           // return ger[0][3]; // Extract language (fourth column)
           return res.status(200).json({ error: false, data: arr});
        } else {
            return res.status(200).json({ error: false, data: []});
        }
     
    } catch (error) {
        console.error("Error handling request:", error);
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
}
