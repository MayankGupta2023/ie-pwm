import Cors from 'cors';
import initMiddleware from '../../lib/cors'
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
  );



  export default async function handler(req, res) {

    const { selectedClass, selectedSubject,selectedChapter,selectedLanguage,notes,topics,mindmap,faqs,questions } = req.body;
    await cors(req, res);
  
    try {
      
        const formData = new FormData();
        formData.append('class', selectedClass);
        formData.append('subject', selectedSubject);
        formData.append('chapter', selectedChapter);
        formData.append('language',selectedLanguage);
        if(notes){
            formData.append('notes', notes);
        }
        if(topics){
            formData.append('topic', topics);
        }
        if(mindmap){
            formData.append('mindmap', mindmap);
        }
        if(faqs){
            formData.append('faqs', faqs);
        }
        if(questions){
            formData.append('question', questions);
        }
      

console.log('formData:', formData);
      const response = await fetch('https://instant-edudoc.onrender.com/generate_notes', {
        method: 'POST',
      
   body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }
  
     const data = await response.json();
  
  console.log('response:', data);
    
   //   console.log('Data:', data);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }