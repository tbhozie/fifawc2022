import axios from 'axios';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({cookies}) {

    // if token cookie is set then set loggedIn to true
    const loggedIn = cookies.get('token') ? true : false;

    return {
        loggedIn: loggedIn
    };

    
}