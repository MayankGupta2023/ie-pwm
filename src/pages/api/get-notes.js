import Cors from 'cors';
import initMiddleware from '../../lib/cors';
import fs from 'fs-extra';
import path from 'path';
// Initialize CORS middleware properly
const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
);

export default async function handler(req, res) {
    // Call CORS middleware
    await cors(req, res);
    const assetsFolderPath = path.join(__dirname, 'assets');
    if (!fs.existsSync(assetsFolderPath)) {
        fs.mkdirSync(assetsFolderPath);
    }
    console.log("here");
    const { selectedClass, selectedSubject, selectedChapter, selectedLanguage, notes, topics, mindmap, faqs, questions } = req.body;

    console.log(req.body);
    try {
        const formData = new FormData();
        formData.append('class', selectedClass);
        formData.append('subject', selectedSubject);
        formData.append('chapter', selectedChapter);
        if (selectedLanguage) {
            formData.append('language', selectedLanguage);
        }
        if (notes) {
            formData.append('notes', notes);
        }
        if (topics) {
            formData.append('topic', topics);
        }
        if (mindmap) {
            formData.append('mindmap', mindmap);
        }
        if (faqs) {
            formData.append('faqs', faqs);
        }
        if (questions) {
            formData.append('question', questions);
        }

        console.log('formData:', formData);
        const response = await fetch('https://testing-mjbcb2fuvq-em.a.run.app/generate_notes', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            console.error(`Error response from server: ${response.status} ${response.statusText}`);
            const responseBody = await response.text();
            console.error(`Response body: ${responseBody}`);
            throw new Error('Failed to fetch PDF');
        }

        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/pdf')) {
            const pdfBuffer = await response.arrayBuffer(); // Use arrayBuffer() instead of buffer()
            const filePath = path.join(process.cwd(), 'public', 'assets', 'gen_pdf.pdf');
            await fs.ensureDir(path.dirname(filePath));
            await fs.writeFile(filePath, Buffer.from(pdfBuffer));
            //fs.writeFileSync(pdfFilePath, Buffer.from(pdfBuffer)); // Write the PDF buffer to a file
            // res.setHeader('Content-Type', 'application/pdf');
            // res.setHeader('Content-Disposition', 'inline; filename="document.pdf"');
            // res.send(Buffer.from(pdfBuffer));
            res.status(200).json({ pdf: true, success: true });
        } else {
            const data = await response.json();
            console.log("vadia ")
            res.status(200).json({data , pdf : false});
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
