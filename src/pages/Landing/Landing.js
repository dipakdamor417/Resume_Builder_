import React from 'react'
import Helmet from 'react-helmet'

import { Main, Footer } from '../../components'


function Landing() {

    
    return (
        <div className="landing">
            <Helmet>
                <title>Resume Builder</title>
            </Helmet>
            <Main />
            <Footer />
        </div>
    )
}

export default Landing
