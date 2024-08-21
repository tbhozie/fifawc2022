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

    // base64 decode token
    const decoded = Buffer.from(token, 'base64').toString('ascii');

    // axios get https://jov5t5p4.directus.app/items/Entries/?access_token=
    const { data } = await axios.get(`https://jov5t5p4.directus.app/items/Entries/${id}?fields=*,user_created.*&access_token=${PRIVATE_ACCESS_TOKEN}`);

    return {
        data
    };
};

export const actions = {
    default: async ({ cookies, request, params }) => {

        const id = params.id;

        // get form data
        const data = await request.formData();

        const group_a_1 = data.get('group_a_1');
        const group_a_2 = data.get('group_a_2');
        const group_b_1 = data.get('group_b_1');
        const group_b_2 = data.get('group_b_2');
        const group_c_1 = data.get('group_c_1');
        const group_c_2 = data.get('group_c_2');
        const group_d_1 = data.get('group_d_1');
        const group_d_2 = data.get('group_d_2');
        const group_e_1 = data.get('group_e_1');
        const group_e_2 = data.get('group_e_2');
        const group_f_1 = data.get('group_f_1');
        const group_f_2 = data.get('group_f_2');
        const group_g_1 = data.get('group_g_1');
        const group_g_2 = data.get('group_g_2');
        const group_h_1 = data.get('group_h_1');
        const group_h_2 = data.get('group_h_2');
        const Round_16_1 = data.get('Round_16_1');
        const Round_16_2 = data.get('Round_16_2');
        const Round_16_3 = data.get('Round_16_3');
        const Round_16_4 = data.get('Round_16_4');
        const Round_16_5 = data.get('Round_16_5');
        const Round_16_6 = data.get('Round_16_6');
        const Round_16_7 = data.get('Round_16_7');
        const Round_16_8 = data.get('Round_16_8');
        const Quarter_Finals_1 = data.get('Quarter_16_1');
        const Quarter_Finals_2 = data.get('Quarter_16_2');
        const Quarter_Finals_3 = data.get('Quarter_16_3');
        const Quarter_Finals_4 = data.get('Quarter_16_4');
        const Semi_Finals_1 = data.get('Semi_16_1');
        const Semi_Finals_2 = data.get('Semi_16_2');
        const Final = data.get('Final');
        const Third_Place = data.get('Third_Place');

        const team_1_score = data.get('team_1_score');
        const team_2_score = data.get('team_2_score');

        // get token from cookies
        const token = cookies.get('token');
        // base64 decode token
        const decoded = Buffer.from(token, 'base64').toString('ascii');

        const response = await axios.patch(`https://jov5t5p4.directus.app/items/Entries/${id}?access_token=${decoded}`, {
            Group_A_1: group_a_1,
            Group_A_2: group_a_2,
            Group_B_1: group_b_1,
            Group_B_2: group_b_2,
            Group_C_1: group_c_1,
            Group_C_2: group_c_2,
            Group_D_1: group_d_1,
            Group_D_2: group_d_2,
            Group_E_1: group_e_1,
            Group_E_2: group_e_2,
            Group_F_1: group_f_1,
            Group_F_2: group_f_2,
            Group_G_1: group_g_1,
            Group_G_2: group_g_2,
            Group_H_1: group_h_1,
            Group_H_2: group_h_2,
            Round_16_1: Round_16_1,
            Round_16_2: Round_16_2,
            Round_16_3: Round_16_3,
            Round_16_4: Round_16_4,
            Round_16_5: Round_16_5,
            Round_16_6: Round_16_6,
            Round_16_7: Round_16_7,
            Round_16_8: Round_16_8,
            Quarter_Finals_1: Quarter_Finals_1,
            Quarter_Finals_2: Quarter_Finals_2,
            Quarter_Finals_3: Quarter_Finals_3,
            Quarter_Finals_4: Quarter_Finals_4,
            Semi_Finals_1: Semi_Finals_1,
            Semi_Finals_2: Semi_Finals_2,
            Final: Final,
            Final_Score_1: team_1_score,
            Final_Score_2: team_2_score,
            Third_Place: Third_Place
        })
        .then(function (response) {
            return { success: true };
        })
        .catch(function (error) {
            console.log(error.response.data)
            return { error: true };
        });

        return response;


    }
};