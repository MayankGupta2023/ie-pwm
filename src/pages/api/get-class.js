import { fetchDataFromGoogleSheet } from './google-sheet';

export default async function handler(req, res) {
    try {
        const data = await fetchDataFromGoogleSheet();

        let mySet = new Set();
        for(let i = 0; i < data.length; i++) {
            mySet.add(data[i][0]);
        }

        return res.status(200).json({ error: false, data: Array.from(mySet) });
    } catch (error) {
        console.error("Error handling request:", error);
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
}
