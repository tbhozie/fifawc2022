import axios from 'axios';
import { invalid } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies, request }) => {

        const data = await request.formData();

        // get form data
        const email = data.get('email');
        const password = data.get('password');

        if (!email || !password) {
            return invalid(400, { email, missing: true });
        }

        // send to server
        const response = await axios.post('https://jov5t5p4.directus.app/auth/login', {
            email: email,
            password: password
        })
        .then(function (response) {

            // base64 encode password
            const base64 = Buffer.from(`${password}`).toString('base64');

            // add token to cookies for 30 days
            cookies.set('token', base64, {
                maxAge: 60 * 60 * 24 * 30
            });
    

            return { success: true};
        })
        .catch(function (error) {
            console.log(error.response.data)
            return invalid(400, { email, error: true });
        });

        // if success redirect to dashboard
        if (response.success) {
            throw redirect(303, '/brackets');
        } else {
            return response;
        }


    }
}