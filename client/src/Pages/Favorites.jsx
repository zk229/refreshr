import { React } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import Auth from '../utils/auth';

const Favorites = () => {
    if (!Auth.loggedIn()) {
        
    }
    
    return (
        <div>
            <Navbar />
                Favorites
            <Footer />
        </div>
    )
}

export default Favorites;