import axios from 'axios';
import { invalid } from '@sveltejs/kit';
import { PRIVATE_ACCESS_TOKEN } from '$env/static/private';

export const actions = {
    default: async ({ cookies, request }) => {
      
        const data = await request.formData();

        // get form data
        const email = data.get('email');
        const password = data.get('password');
        const name = data.get('name');
        const venmo_username = data.get('venmo_username');
        const role = 'efd127e8-3c09-4987-96b0-837f64d18219';

        if (!email || !password || !name || !venmo_username) {
			return invalid(400, { email, missing: true });
		}

        // randomly generate token
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        const obj = {
            first_name: name,
            email: email,
            password: password,
            Venmo_Username: venmo_username,
            role: role,
            token: password,
            status: 'active'
        }

        /// send to server
        const response = axios.post(`https://jov5t5p4.directus.app/users?access_token=${PRIVATE_ACCESS_TOKEN}`, obj)
        .then(function (response) {

            return { success: true };
        })
        .catch(function (error) {
            let errors = error.response.data.errors[0].message
            console.log(errors)
            if(errors === 'Field "email" has to be unique.') {
                return invalid(400, { email, exists: true });
            } else if(errors === 'Field "token" has to be unique.') {
                return invalid(400, { email, passinvalid: true });
            } else {
                return invalid(400, { email, error: true });
            }
            
        });

        return response;

    }
  };