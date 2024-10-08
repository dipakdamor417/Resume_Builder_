import { Grid, Card, CardContent } from '@material-ui/core'
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fade from 'react-reveal/Fade';
import Helmet from 'react-helmet'


import './Contributors.css';
import Profile from '../../assets/images/png/Profile.png'


const contribData = [
    {
        id: 1,
        name: 'Rajdeep Dangar',
        github: '',
        image: Profile
    },
    {
        id: 2,
        name: 'Prince Dhameliya',
        github: '',
        image: Profile
    },
    {
        id: 3,
        name: 'Dipak Damor',
        github: '',
        image: Profile
    },
]

function Contributors() {

    var contributors = contribData
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

    return (
        <div className="contributors">
            <Helmet>
                <title>Resume Builder - Contributors</title>
            </Helmet>

            <h1>CONTRIBUTORS</h1>

            <div className="contrib_container">
                <Grid className="contrib-grid" container direction="row" alignItems="center" justify="center">
                    {contributors.map((contrib) => (
                        <Fade bottom>
                            <Card className="contrib-card" elevation={10} >
                                <CardContent>
                                    <div className="contrib-cardcontent">

                                        <h1>{contrib.name}</h1>
                                        <div className="contrib-description">
                                            <img src={contrib.image} alt="" />
                                            <a href={contrib.github} className="contrib-icon" target="_blank" rel="noreferrer">
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Fade>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Contributors
