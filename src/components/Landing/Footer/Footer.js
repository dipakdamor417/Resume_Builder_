import React from 'react';
import {Link} from "react-router-dom";

import GroupIcon from '@material-ui/icons/Group';

import './Footer.css'


function Footer() {

    var year=new Date().getFullYear();
    return (
        <div className="footer">
            <div className="group">
                <Link to="/contributors">
                    <GroupIcon className="contributors_icon"/>
                </Link>
            </div>
            <p>Copyright © {year} | Resume Builder</p>
        </div>
    )
}

export default Footer
