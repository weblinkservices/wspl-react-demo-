import React, {Fragment} from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Index from './pages/index'
import About from './pages/about'



export const Home = () => {
    return (
        <Fragment>
            <Header/>
            <About/>
            <Footer/>
        </Fragment>
    )
}
