import { useState } from 'react';

import Nav from "./Nav"

export default function Footer (props) {
    const [headerLinks] = useState ([
        "Home",
        "Women's",
        "Men's",
        "On the Street",
        "The Catwalk",
        "AdWatch",
        "About"
    ]);


    return (
        <header>
            <h1>Satre's List</h1>
            <h2>Better-Dressed People</h2>
        <Nav links={headerLinks} navClass={'header-nav'}/>
        <p>&copy; 2013 Valet Industries Inc.</p>
        </header>
    )
}