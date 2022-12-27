import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import NewsPage from './pages/newsPage/NewsPage'
import Footer from './pages/Propertice/Footer'
import Propertice from './pages/Propertice/Propertice'

function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/'  element= { <HomePage />  }/>
                <Route path='/news'  element= { <NewsPage />  }/>
                <Route path='/Propertice' element={<Propertice />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Routing;