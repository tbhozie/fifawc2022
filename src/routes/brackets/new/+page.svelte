<script>
    import { page } from '$app/stores';
	let loggedIn = $page.data.loggedIn;

    export let form;

    let group_a_1;
    let group_a_2;
    let group_b_1;
    let group_b_2;
    let group_c_1;
    let group_c_2;
    let group_d_1;
    let group_d_2;
    let group_e_1;
    let group_e_2;
    let group_f_1;
    let group_f_2;
    let group_g_1;
    let group_g_2;
    let group_h_1;
    let group_h_2;

    let round_16_1;
    let round_16_2;
    let round_16_3;
    let round_16_4;
    let round_16_5;
    let round_16_6;
    let round_16_7;
    let round_16_8;

    let qf_1;
    let qf_2;
    let qf_3;
    let qf_4;

    let sf_1;
    let sf_2;

    let final;

    let thirdplace_1;
    let thirdplace_2;

    let groupFilled = false;

    let group_a = [
		{ id: 209, text: 'Ecuador', img: 'https://a.espncdn.com/i/teamlogos/countries/500/ecu.png' },
		{ id: 4398, text: 'Qatar', img: 'https://a.espncdn.com/i/teamlogos/countries/500/qat.png' },
		{ id: 654, text: 'Senegal', img: 'https://a.espncdn.com/i/teamlogos/countries/500/sen.png' },
        { id: 449, text: 'Netherlands', img: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png' }
	];

    let group_b = [
        { id: 448, text: 'England', img: 'https://a.espncdn.com/i/teamlogos/countries/500/eng.png' },
        { id: 469, text: 'Iran', img: 'https://a.espncdn.com/i/teamlogos/countries/500/irn.png' },
        { id: 660, text: 'USA', img: 'https://a.espncdn.com/i/teamlogos/countries/500/usa.png' },
        { id: 578, text: 'Wales', img: 'https://a.espncdn.com/i/teamlogos/countries/500/wal.png' }
    ]

    let group_c = [
        { id: 202, text: 'Argentina', img: 'https://a.espncdn.com/i/teamlogos/countries/500/arg.png' },
        { id: 203, text: 'Mexico', img: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png' },
        { id: 471, text: 'Poland', img: 'https://a.espncdn.com/i/teamlogos/countries/500/pol.png' },
        { id: 655, text: 'Saudi Arabia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/ksa.png' }
    ]

    let group_d = [
        { id: 478, text: 'France', img: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png' },
        { id: 479, text: 'Denmark', img: 'https://a.espncdn.com/i/teamlogos/countries/500/den.png' },
        { id: 628, text: 'Australia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png' },
        { id: 659, text: 'Tunisia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/tun.png' }
    ]

    let group_e = [
        { id: 164, text: 'Spain', img: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png' },
        { id: 214, text: 'Costa Rica', img: 'https://a.espncdn.com/i/teamlogos/countries/500/crc.png' },
        { id: 481, text: 'Germany', img: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png' },
        { id: 627, text: 'Japan', img: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png' }
    ]

    let group_f = [
        { id: 206, text: 'Canada', img: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png' },
        { id: 459, text: 'Belgium', img: 'https://a.espncdn.com/i/teamlogos/countries/500/bel.png' },
        { id: 477, text: 'Croatia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/cro.png' },
        { id: 2869, text: 'Morocco', img: 'https://a.espncdn.com/i/teamlogos/countries/500/mar.png' }
    ]
    
    let group_g = [
        { id: 205, text: 'Brazil', img: 'https://a.espncdn.com/i/teamlogos/countries/500/bra.png' },
        { id: 475, text: 'Switzerland', img: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png' },
        { id: 656, text: 'Cameroon', img: 'https://a.espncdn.com/i/teamlogos/countries/500/crm.png' },
        { id: 6757, text: 'Serbia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/srb.png' }
    ]

    let group_h = [
        { id: 212, text: 'Uruguay', img: 'https://a.espncdn.com/i/teamlogos/countries/500/uru.png' },
        { id: 451, text: 'South Korea', img: 'https://a.espncdn.com/i/teamlogos/countries/500/kors.png' },
        { id: 482, text: 'Portugal', img: 'https://a.espncdn.com/i/teamlogos/countries/500/por.png' },
        { id: 4469, text: 'Ghana', img: 'https://a.espncdn.com/i/teamlogos/countries/500/gha.png' }
    ]
        

    function doSubmit() {
        console.log('submitting');
        // disable submit button
        let submitButton = document.getElementById("submit-btn");
        submitButton.disabled = true;
    }

    function checkValid() {

        // foreach groups
        let groups = document.getElementsByClassName("group");
        for (let i = 0; i < groups.length; i++) {
            // get data-group
            let group = groups[i].getAttribute("data-group");

            // check if #group_group_1 selected value disable option in #group_group_2
            let group_1 = document.getElementById("group_" + group + "_1");
            let group_2 = document.getElementById("group_" + group + "_2");

            // get selected value
            let selectedValue = group_1.options[group_1.selectedIndex].text;
            let selectedValue2 = group_2.options[group_2.selectedIndex].text;

            // disable selected value in group_2
            for (let j = 0; j < group_2.options.length; j++) {
                if (group_2.options[j].text == selectedValue) {
                    group_2.options[j].disabled = true;
                } else {
                    group_2.options[j].disabled = false;
                }
            }

            // disable selected value in group_1
            for (let j = 0; j < group_1.options.length; j++) {
                if (group_1.options[j].text == selectedValue2) {
                    group_1.options[j].disabled = true;
                } else {
                    group_1.options[j].disabled = false;
                }
            }
            

        }

        // check if all groups have a value, if so set groupFilled to true
        for (let i = 0; i < groups.length; i++) {
            let group = groups[i].getAttribute("data-group");
            let group_1 = document.getElementById("group_" + group + "_1");
            let group_2 = document.getElementById("group_" + group + "_2");

            if (group_1.value == "" || group_2.value == "") {
                groupFilled = false;
            } else {
                groupFilled = true;
            }
        }
    }
</script>

<svelte:head>
    <title>Create New Bracket</title>
</svelte:head>

<h1>Create New Bracket</h1>
<p class="description">$20 per bracket</p>

{#if loggedIn}

    <h2>Bracket creation has ended</h2>

{:else}
    <p>You are not logged in</p>
{/if}

<style>
    h1 {
        text-align: center;
        margin: 0;
    }
    .description {
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        margin: 10px 0 40px 0;
    }
    .success {
        font-size: 18px;
        text-align: center;
        background-color: #4CAF50;
        color: white;
        padding: 10px;
    }
    .error {
        font-size: 18px;
        text-align: center;
        background-color: #f44336;
        color: white;
        padding: 10px;
    }
    .groups {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    .group {
        padding: 0;
        margin-bottom: 1rem;
        box-sizing: border-box;
    }
    .group h3 {
        margin: 0 0 10px 0;
        text-align: center;
    }
    .group .team {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0;
        padding: 5px 5px;
        border: 1px solid #ccc;
        border-bottom: 0;
    }
    .group .team h2 {
        display: flex;
        margin: 0;
        align-items: center;
        width: 100%;
    }
    .group .team .rank {
        margin-left: auto;
    }
    .group .team h2 img {
        display: block;
        max-width: 100%;
        width: auto;
        height: 32px;
        margin-right: 10px;
    }
    .group .select {
        padding: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        border: 1px solid #ccc;
    }
    .group .select label {
        display: block;
        font-weight: bold;
        font-weight: 16px;
        margin: 0 0 5px 0;
    }
    .group .select select {
        border: 1px solid #ccc;
        padding: 10px;
        font-size: 16px;
    }
    .bracket {
        display: flex;
        gap: 20px;
        margin-top: 3rem;
    }
    .bracket .match {
        border: 1px solid #ccc;
        padding: 5px 10px;
    }
    .bracket .team {
        display: flex;
        align-items: center;
    }
    .bracket .team img {
        display: block;
        max-width: 100%;
        width: auto;
        height: 32px;
        margin-right: 10px;
    }
    .round-16 {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .bracket h4 {
        margin: 0 0 0px 0;
        text-align: center;
    }
    .match label {
        display: block;
        font-weight: 16px;
        margin: 5px 0;
    }
    .match input {
        position: absolute;
        opacity: 0;
        z-index: -1;
    }
    .match input:checked + .team {
        font-weight: bold;
    }
    .quarter-finals .matches  {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-around;
        height: 100%;
        margin: 0 3vw;
    }

    .semi-finals .matches {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-around;
        height: 100%;
        margin: 0 2vw;
    }

    .finals .matches {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        height: 100%;
        margin: 0 1vw;
        position: relative;
    }
    .finals .tiebreaker {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        position: absolute;
        top: 62%;
        transform: translateY(-50%);
    }
    .tiebreaker h4 {
        flex-basis: 100%;
    }
    .tiebreaker label {
        display: block;
        font-size: 14px;
        font-weight: bold;
    }
    .tiebreaker .score {
        width: 41%;
        text-align: center;
    }
    .tiebreaker input {
        display: block;
        box-sizing: border-box;
        text-align: center;
        margin: auto;
        width: 100%;
    }
    #submit-btn {
        display: block;
        margin: 2rem auto;
        padding: 10px 20px;
        font-size: 18px;
        font-weight: bold;
        background-color: #8A1538;
        color: white;
        border: none;
        border-radius: 0;
        cursor: pointer;
    }
    @media(max-width: 600px) {
        .group {
            flex-basis: 100%;
        }
        .bracket {
            max-width: 100%;
            width: 100%;
            display: block;
            margin-top: 0;
        }
        .bracket h4 {
            margin: 40px 0 10px 0;
        }
        .bracket .matches {
            margin: 0;
        }
        .finals .tiebreaker {
            position: relative;
            margin: 30px 0 0rem 0;
        }
    }
</style>