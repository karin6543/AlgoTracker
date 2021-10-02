import React from 'react'
import "../header.css"
import { NavLink as Link, useHistory, Switch , BrowserRouter as Router} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function PageNav() {
    return (
        <div className='single_pages'>
            <span className='single_page 
            header__option--active'>
            <AddIcon />
            <Link to="/">Problems</Link>
            </span>

            <span className='single_page'>
            <ErrorOutlineIcon />
            <Link to="/error">Error Analysis</Link>
            </span>

            <span className='single_page'>
            <CompareArrowsIcon />
            <Link to="/benchmark">Benchmarking</Link>
            </span>
        </div>
    )
}

export default PageNav
