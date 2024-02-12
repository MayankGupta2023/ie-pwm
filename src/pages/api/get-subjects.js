import { fetchDataFromGoogleSheet } from './google-sheet';

export default async function handler(req, res) {
const { className } = req.query;

    try {
        const data = await fetchDataFromGoogleSheet();

                 const subjects = [];
 
            for (const row of data) {
                const [classStr, subject] = row.slice(0, 2);
                if (classStr === className) {
                    subjects.push(subject);
                }
            }
            let mySet = new Set();
            for(let i = 0; i < subjects.length; i++) {
                mySet.add(subjects[i]);
            }

        return res.status(200).json({ error: false, data:Array.from(mySet)});
    } catch (error) {
        console.error("Error handling request:", error);
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
}
