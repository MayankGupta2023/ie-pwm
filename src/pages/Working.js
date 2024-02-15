import React, { useEffect, useState } from 'react';
import Cors from 'cors';
import initMiddleware from '../lib/cors'
import Navbar from '../components/navbar2';
import DropdownButton1 from '../components/dropdown1';
import app from '../firebaseConfig';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


import DropdownButton2 from '../components/dropdown2';
import DropdownButton3 from '../components/dropdown3';
import DropdownButton4 from '../components/dropdown4';
import Footer from '../components/footer';

import PDFViewer from '../components/pdfViewer';


import menu from '../assets/menu2.svg';
import styles from '../styles/working.module.css';
import cross from '../assets/crossw.svg';

const auth = getAuth(app);
const firestore = getFirestore(app);
const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
);
const Working = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState(null);
    const [hamburger, setHamburger] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [secondDropdownItems, setSecondDropdownItems] = useState([]);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [isLoadingClasses, setIsLoadingClasses] = useState(false);
    const [isLoadingChapter, setIsLoadingChapter] = useState(false);
    const [isLoadingSubjects, setIsLoadingSubjects] = useState(false);
    const [isLoadingLanguages, setIsLoadingLanguages] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [classes, setClasses] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [credits, setCurrentCredits] = useState('');

    const [notes, setNotes] = useState(0);
    const [topics, setTopics] = useState(0);
    const [mindmap, setMindMap] = useState(0);
    const [faqs, setFaqs] = useState(0);
    const [resfaqs, setResFaqs] = useState('');
    const [questions, setQuestions] = useState(0);
    const [fetchPdfTrigger, setFetchPdfTrigger] = useState(false);






    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                const userDocRef = doc(firestore, 'users', authUser.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    setUser({
                        uid: authUser.uid,
                        email: authUser.email,
                        displayName: userDocSnap.data().name,
                    });
                } else {
                    setUser({
                        uid: authUser.uid,
                        email: authUser.email,
                    });
                }
            } else {
                window.location.href = '/login';
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchClasses = async () => {
            setIsLoadingClasses(true);
            try {
                const res = await fetch('/api/get-class');
                const data = await res.json();
                setClasses(data.data);
            } catch (error) {
                console.error("Error fetching classes:", error);
            } finally {
                setIsLoadingClasses(false);
            }
        }

        fetchClasses();
    }, []);

    const handleClassSelect = (classItem) => {
        setSelectedClass(classItem);
    };
    const handleSubjectSelect = (subjectItem) => {
        setSelectedSubject(subjectItem);
    };

    const handleChapterSelect = (chapterItem) => {
        setSelectedChapter(chapterItem);
    };
    const handleLanguageSelect = (languageItem) => {
        setSelectedLanguage(languageItem);
    };



    const handleNotesClick = () => {
        setFaqs(0);
        setQuestions(0);
        setTopics(0);
        setMindMap(0);

        setNotes(1);
    };

    const handleFAQSClick = () => {
         if(selectedChapter && selectedSubject && selectedClass){
      
        setFaqs(1);
        setQuestions(0);
        setTopics(0);
        setMindMap(0);
        setNotes(0);
        setFetchPdfTrigger(prev => !prev);   
         }
    };



    const handleQuestionClick = () => {
        setFaqs(0);
        setQuestions(1);
        setTopics(0);
        setMindMap(0);
        setNotes(0);
    };



    useEffect(() => {

        setSelectedSubject(null);
        setSelectedChapter(null);
        setSelectedLanguage(null);
        const fetchSubjects = async () => {
            setIsLoadingSubjects(true);
            try {
                const res = await fetch(`/api/get-subjects?className=${encodeURIComponent(selectedClass)}`);
                const data = await res.json();
                setSubjects(data.data);
            } catch (error) {
                console.error("Error fetching Chapters:", error);
            } finally {
                setIsLoadingSubjects(false);
            }
        }





        if (selectedClass) {
            // Fetch data for the second dropdown when selectedClass changes
            fetchSubjects();
        }
    }, [selectedClass]);





    useEffect(() => {
        setSelectedChapter(null);
        setSelectedLanguage(null);
        const fetchChapters = async () => {
            setIsLoadingChapter(true);
            try {
                const res = await fetch(`/api/get-chapter-names?className=${encodeURIComponent(selectedClass)}&subjectName=${encodeURIComponent(selectedSubject)}`);
                const data = await res.json();
                setChapters(data.data);
            } catch (error) {
                console.error("Error fetching Chapters:", error);
            } finally {
                setIsLoadingChapter(false);
            }
        }


        const fetchLanguages = async () => {
            setIsLoadingLanguages(true);
            try {
                const res = await fetch(`/api/get-language?className=${encodeURIComponent(selectedClass)}&subjectName=${encodeURIComponent(selectedSubject)}&language=${encodeURIComponent(selectedLanguage)}`);
                const data = await res.json();
                setLanguages(data.data);
            } catch (error) {
                console.error("Error fetching Languages:", error);
            } finally {
                setIsLoadingLanguages(false);
            }
        }

        if (selectedSubject) {
            // Fetch data for the third dropdown when selectedSubject changes
            if (selectedSubject === "Computer Science") {
                fetchLanguages();
            } else {
                fetchChapters();
            }

        }
    }, [selectedSubject]);





    useEffect(() => {
        setSelectedChapter(null);

        const fetchChapters = async () => {
            setIsLoadingChapter(true);
            try {
                const res = await fetch(`/api/get-chapter-names?className=${encodeURIComponent(selectedClass)}&subjectName=${encodeURIComponent(selectedSubject)}&language=${encodeURIComponent(selectedLanguage)}`);
                const data = await res.json();
                setChapters(data.data);
            } catch (error) {
                console.error("Error fetching Chapters:", error);
            } finally {
                setIsLoadingChapter(false);
            }
        }




        if (selectedLanguage) {
            // Fetch data for the third dropdown when selectedSubject changes

            fetchChapters();
        }
    }, [selectedLanguage]);


    useEffect( () => {

        console.log("use effect called")


        const decrementCredits = async () => {
            try {
                const db = getFirestore(app);
                const userRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    const userData = docSnap.data();


                    console.log("here");
                    var credits = userData.credits;
                    credits--;

                    await setDoc(userRef, { credits }, { merge: true });
                }



                console.log('Credits decremented successfully.');
            } catch (error) {
                console.error('Error decrementing credits:', error);
            }
        };



        const checkAvailablecredits = async () => {
            try {
                const db = getFirestore(app);
                const userRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    const userData = docSnap.data();


                    console.log("here");
                    var credits = userData.credits;
                    if(credits>0){
                        return true;
                    }else{
                        console.log("Not enough credits");
                        return false;
                    }

                }



               
            } catch (error) {
                console.error('Error decrementing credits:', error);
            }
        };








        const fetchPdf = async () => {
            if (await checkAvailablecredits()) {
                try {
                    setIsLoading(true);
                    const requestData = {
                        selectedClass: selectedClass,
                        selectedSubject: selectedSubject,
                        selectedChapter: selectedChapter,
                        selectedLanguage: selectedLanguage,
                        notes: notes,
                        topics: topics,
                        mindmap: mindmap,
                        faqs: faqs,
                        question: questions,
                    };
                    const requestBody = JSON.stringify(requestData);
                    const response = await fetch('/api/get-notes', {
                        method: 'POST',
                        body: requestBody,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
        
                    if (!response.ok) {
                        throw new Error('Failed to fetch PDF');
                    }
        
                    const contentType = response.headers.get('Content-Type');
                    if (contentType && contentType.includes('application/pdf')) {
                        const blob = await response.blob();
                        setPdfUrl(URL.createObjectURL(blob));
                    } else {
                        const responseData = await response.json();
                        let modifiedData = responseData.message;
                        modifiedData = modifiedData.replace(/\n/g, '<br>');
                        modifiedData = modifiedData.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        setResFaqs(modifiedData);
                        await decrementCredits();
                        setIsLoading(false);
                    }
                } catch (error) {
                    console.error('Error fetching PDF:', error);
                    setIsLoading(false);
                }
            } else {
                alert("You don't have enough credits to access this feature. Please buy credits to continue.");
            }
        };
        
        if (selectedChapter && selectedSubject && selectedClass) {
           
                fetchPdf();
                setFetchPdfTrigger(false);
          
        }



        return () => {
            // Clean up the URL object to avoid memory leaks
            URL.revokeObjectURL(pdfUrl)


        };
    }, [fetchPdfTrigger,topics, mindmap, faqs, questions, notes]);




















    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);






    return (
        <div>
            <div className='h-20 fixed l-0 t-0 w-full z-50 '>
                <Navbar />
            </div>

            <div className='h-20'>

            </div>

            <div className={`h-20 text-5xl font-inter font-semibold text-center flex justify-center font-inter items-center ${styles.notes}`}>Get your Notes</div>

            <div className={`h-fit font-inter flex justify-center items-center ${styles.outbox} `}>
                <div className={`h-fit w-5/6 pt-4 flex relative ${styles.container}`}>
                    <div className={`w-3/6 min-h-screen h-fit pt-10 ${styles.left}`}>
                        <div className='w-full h-fit gap-8 flex pt-4 flex-wrap flex-col'>
                            <div className='flex flex-col gap-6'>
                                <DropdownButton1
                                    selectedItem={selectedClass}
                                    secondDropdownItems={classes}
                                    onSelect={handleClassSelect}
                                    onToggle={() => { }}
                                />
                                {isLoadingClasses && <div>Loading classes...</div>}

                                <DropdownButton2
                                    selectedItem={selectedSubject}
                                    secondDropdownItems={subjects}
                                    onSelect={handleSubjectSelect}
                                    onToggle={() => { }}
                                />
                                {isLoadingSubjects && <div>Loading Subjects...</div>}




                                {selectedSubject === "Computer Science" && (

                                    <div>
                                        <DropdownButton4
                                            selectedItem={selectedLanguage}
                                            secondDropdownItems={languages}
                                            onSelect={handleLanguageSelect}
                                            onToggle={() => { }}
                                            hint={"Select Language"}
                                        />
                                        {isLoadingLanguages && <div>Loading Languages...</div>}
                                    </div>
                                )}



                                <DropdownButton3

                                    selectedItem={selectedChapter}
                                    secondDropdownItems={chapters}
                                    onSelect={handleChapterSelect}
                                    onToggle={() => { }}


                                />
                                {isLoadingChapter && <div>Loading Chapters...</div>}



                            </div>
                        </div>
                        <div className={`mt-16   flex gap-4 items-center ${styles.topic}`}>
                            <button style={{ background: "#fe7544" }} className='p-2 px-1 text-center text-white w-56 rounded-lg shadow-xl bg-white'>Get Topic-wise Notes</button>
                            <input className=' px-2 py-1 border-b-4 h-10 border-black  ' type="text" id="enterTopic" name="enterTopic" placeholder="Enter your topic here"  ></input>
                        </div>
                        <div className={`mt-16   flex gap-4 items-center ${styles.topic}`}>
                            <button style={{ background: "#fe7544" }} className='p-2 px-1 text-center text-white w-56  rounded-lg shadow-xl bg-white '>Ask any Question</button>
                            <input className=' px-2 py-1 border-b-4 h-10 border-black  ' type="text" id="enterTopic" name="enterTopic" placeholder="Enter your topic here" ></input>
                        </div>
                        <button style={{ background: "#fe7544" }} className='font-inter font-semibold text-white py-2 w-full text-center mt-16 rounded-lg shadow-xl bg-white'>Get Chapter-Wise Notes</button>
                        <button style={{ background: "#fe7544" }} onClick={handleFAQSClick} className='font-inter font-semibold text-white py-2 w-full text-center mt-16 rounded-lg shadow-xl bg-white'>Get FAQs</button>
                    </div>
                    <div className={`w-3/6 min-h-screen  bg-white p-8 border-2 border ml-2  ${styles.right}`}>
                        <div className='font-bold text-2xl'>Results</div>
                        <div className='mt-4 h-screen w-full'>
                            {isLoading ? (
                                <p>Loading PDF...</p>
                            ) : pdfUrl ? (
                                <PDFViewer style={{ width: '100%', height: '100vh' }}>
                                    <iframe src={pdfUrl} style={{ width: '100%', height: '100%' }} />
                                </PDFViewer>
                            ) : resfaqs ? (

                                <p dangerouslySetInnerHTML={{ __html: resfaqs }} />

                            ) :
                                (
                                    // <PDFViewer pdfUrl="https://drive.google.com/file/d/1BxMV35FcHYVKhWDYrJv8ohuWvvMROXna/view?usp=sharing" />
                                    <div className="pdf-container h-full w-full">
                                    <iframe className=' h-full w-full'  src="https://drive.google.com/file/d/1BxMV35FcHYVKhWDYrJv8ohuWvvMROXna/preview" frameborder="0"></iframe>
                                  </div>
                                )}
                        </div>
                    </div>
                </div>
               
       
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Working;
