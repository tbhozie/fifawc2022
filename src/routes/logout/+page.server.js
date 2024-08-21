import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {

    // remove token from cookies
    cookies
        .set('token', '', {
            maxAge: 0
        });


        return {
            loggedIn: false
        };

};