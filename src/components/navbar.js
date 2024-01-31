import React from 'react';
import logo  from '../assets/logo.png';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('You have been logged out.');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className={`h-full flex justify-between px-4 items-center text-xl rounded-l`}>
      <div className='flex text-black gap-4 items-center text-3xl'>
        {/* Your logo and site name */}
        Instant EduDoc
      </div>

            <div className='flex justify-around min-w-96 p-2 '>


                <Link href="/">Home</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/Working">Get Notes</Link>
                <Link href="/login">Login</Link>

            </div>


        </div>
    )
}
      <div className='flex justify-around min-w-96 p-2 '>
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/dashboard">Get Notes</Link>

        {isLoggedIn ? (
          // If the user is logged in, show "Logout" option
          <button onClick={handleLogout}>Logout</button>
        ) : (
          // If the user is not logged in, show "Login" option
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
