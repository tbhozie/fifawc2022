import axios from 'axios';
import { redirect } from '@sveltejs/kit';
import { PRIVATE_ACCESS_TOKEN } from '$env/static/private';


/** @type {import('./$types').PageServerLoad} */
export async function load({cookies, params}) {

    // get id from url
    const id = params.id;

    // get token from cookies
    const token = cookies.get('token');

    if(!token) {
        // redirect to login page
        throw redirect(307, '/login');
    }

    // axios get https://jov5t5p4.directus.app/items/Entries/?access_token=
    const { data } = await axios.get(`https://jov5t5p4.directus.app/items/Entries/?fields=id,Final,Points,user_created.*&access_token=${PRIVATE_ACCESS_TOKEN}`);

    return {
        data
    };
};