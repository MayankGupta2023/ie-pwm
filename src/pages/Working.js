import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar2';
import DropdownButton1 from '../components/dropdown1';
import DropdownButton2 from '../components/dropdown2';
import DropdownButton3 from '../components/dropdown3';
import Footer from '../components/footer';
import { getAuth } from 'firebase/auth';
import app from '../firebaseConfig';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import menu from '../assets/menu2.svg';
import styles from '../styles/working.module.css';
import cross from '../assets/crossw.svg';

const auth = getAuth(app);
const firestore = getFirestore(app);

const Working = () => {
    const [user, setUser] = useState(null);
    const [hamburger, setHamburger] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [secondDropdownItems, setSecondDropdownItems] = useState([]);
    const [isLoadingClasses, setIsLoadingClasses] = useState(false);
    const [isLoadingChapter, setIsLoadingChapter] = useState(false);
    const [isLoadingSubjects, setIsLoadingSubjects] = useState(false);
    const [classes, setClasses] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [subjects, setSubjects] = useState([]);
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

    useEffect(() => {


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
    
        if (selectedSubject) {
            // Fetch data for the third dropdown when selectedSubject changes
            fetchChapters();
        }
    }, [selectedSubject]);
    

































    return (
        <div>
            <div className='h-20 fixed l-0 t-0 w-full z-50 '>
              <Navbar />
            </div>

            <div className='h-20'>

            </div>

            <div className='h-20 text-5xl font-inter font-semibold text-center flex justify-center items-center '>Get your Notes</div>

            <div className='h-fit  flex justify-center items-center'>
                <div className='h-fit   w-5/6 p-4 flex relative'>
                    <div className='w-2/6 h-screen    pt-10'>
                        <div className='w-full h-fit gap-8 flex pt-4 flex-wrap flex-col'>
                            <div>
                                <DropdownButton1
                                    selectedItem={selectedClass}
                                    secondDropdownItems={classes}
                                    onSelect={handleClassSelect}
                                    onToggle={() => { }}
                                />
                                {isLoadingClasses && <div>Loading classes...</div>}
                            </div>
                            <div className='flex justify-between pr-8 mt-10 flex-wrap gap-6'>
                            <DropdownButton2
                                    selectedItem={selectedSubject}
                                    secondDropdownItems={subjects}
                                    onSelect={handleSubjectSelect}
                                    onToggle={() => { }}
                                />
                                {isLoadingSubjects && <div>Loading Subjects...</div>}
                                <DropdownButton3
                                
                                selectedItem={selectedChapter}
                                secondDropdownItems={chapters}
                                onSelect={handleChapterSelect}
                                onToggle={() => { }}
                                
                                />
                                    {isLoadingChapter && <div>Loading Chapters...</div>}
                            </div>
                        </div>
                        <div className='mt-16   flex gap-4 items-center'>
                            <button style={{ background: "#fe7544" }} className='p-2 px-1 text-center text-white w-44  rounded-lg '>Get Topic-wise Notes</button>
                            <input className=' px-2 py-1 border-2 h-10 border-gray-400 rounded ' type="text" id="enterTopic" name="enterTopic" value='Enter topic or Notes'></input>
                        </div>
                        <div className='mt-16   flex gap-4 items-center'>
                            <button style={{ background: "#fe7544" }} className='p-2 px-1 text-center text-white w-44  rounded-lg '>Ask any Question</button>
                            <input className=' px-2 py-1 border-2 h-10 border-gray-400 rounded ' type="text" id="enterQuestion" name="enterQuestion" value='Questions'></input>
                        </div>
                        <button style={{ background: "#fe7544" }} className='font-inter font-semibold text-white py-2 w-full text-center mt-16 rounded-lg'>Get Chapter-Wise Notes</button>
                        <button style={{ background: "#fe7544" }} className='font-inter font-semibold text-white py-2 w-full text-center mt-16 rounded-lg'>Get FAQs</button>
                    </div>
                    <div className='w-4/6 h-screen bg-white p-8 border-2 border ml-2 '>
                        <div className='font-bold text-2xl'>Results</div>
                        <div className='mt-4'>Result will appear here based on your selections and queries.</div>
                    </div>
                </div>
                <button onClick={() => { setHamburger(true) }} style={{ background: '#fe7544' }} className='fixed h-10 w-10 cursor-pointer right-0 top-20 flex justify-center items-center'>
                    <img src={menu.src} />
                </button>
                <div className={hamburger ? `w-40 flex pt-10 flex-col fixed bg-white border-2 top-20 right-0 ${styles.sidemenu}` : 'hidden'}>
                    <div style={{ color: '#333333' }} className='text-center cursor-pointer text-lg font-inter font-medium pt-4 '> Item-1 </div>
                    <div style={{ color: '#333333' }} className='text-center cursor-pointer text-lg font-inter font-medium pt-4 '> Item-2 </div>
                    <div style={{ color: '#333333' }} className='text-center cursor-pointer text-lg font-inter font-medium pt-4 '> Item-3 </div>
                    <div style={{ color: '#333333' }} className='text-center cursor-pointer text-lg font-inter font-medium pt-4 '> Item-4 </div>
                    <button onClick={() => { setHamburger(false) }} style={{ background: '#fe7544' }} className='fixed h-10 w-10 cursor-pointer right-0 top-20 flex justify-center items-center'>
                        <img src={cross.src} />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Working;
