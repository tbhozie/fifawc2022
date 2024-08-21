import axios from 'axios';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {

    // get brackets

    // get token from cookies
    const token = cookies.get('token');

    if(!token) {
        // redirect to login page
        throw redirect(307, '/login');
    }

    // base64 decode token
    const decoded = Buffer.from(token, 'base64').toString('ascii');

    // axios get https://jov5t5p4.directus.app/items/Entries/?access_token=
    const { data } = await axios.get(`https://jov5t5p4.directus.app/items/Entries/?access_token=${decoded}`);

    return {
        data
    };
};