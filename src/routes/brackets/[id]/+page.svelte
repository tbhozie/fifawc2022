<script>
    import { page } from '$app/stores';
	let loggedIn = $page.data.loggedIn;

    export let data;
    // console.log(data);

    let group_a_1 = data.data.data.Group_A_1;
    let group_a_2 = data.data.data.Group_A_2;
    let group_b_1 = data.data.data.Group_B_1;
    let group_b_2 = data.data.data.Group_B_2;
    let group_c_1 = data.data.data.Group_C_1;
    let group_c_2 = data.data.data.Group_C_2;
    let group_d_1 = data.data.data.Group_D_1;
    let group_d_2 = data.data.data.Group_D_2;
    let group_e_1 = data.data.data.Group_E_1;
    let group_e_2 = data.data.data.Group_E_2;
    let group_f_1 = data.data.data.Group_F_1;
    let group_f_2 = data.data.data.Group_F_2;
    let group_g_1 = data.data.data.Group_G_1;
    let group_g_2 = data.data.data.Group_G_2;
    let group_h_1 = data.data.data.Group_H_1;
    let group_h_2 = data.data.data.Group_H_2;

    let round_16_1 = data.data.data.Round_16_1;
    let round_16_2 = data.data.data.Round_16_2;
    let round_16_3 = data.data.data.Round_16_3;
    let round_16_4 = data.data.data.Round_16_4;
    let round_16_5 = data.data.data.Round_16_5;
    let round_16_6 = data.data.data.Round_16_6;
    let round_16_7 = data.data.data.Round_16_7;
    let round_16_8 = data.data.data.Round_16_8;

    let qf_1 = data.data.data.Quarter_Finals_1;
    let qf_2 = data.data.data.Quarter_Finals_2;
    let qf_3 = data.data.data.Quarter_Finals_3;
    let qf_4 = data.data.data.Quarter_Finals_4;

    let sf_1 = data.data.data.Semi_Finals_1;
    let sf_2 = data.data.data.Semi_Finals_2;

    let final = data.data.data.Final;

    let final_score_1 = data.data.data.Final_Score_1;
    let final_score_2 = data.data.data.Final_Score_2;

    let thirdplace_1 = data.data.data.Third_Place;
    let thirdplace_2;
    if (qf_1 != thirdplace_1 && qf_1 != sf_1 && qf_1 != sf_2 && qf_1 != final) {
        thirdplace_2 = qf_1;
    } else if (qf_2 != thirdplace_1 && qf_2 != sf_1 && qf_2 != sf_2 && qf_2 != final) {
        thirdplace_2 = qf_2;
    } else if (qf_3 != thirdplace_1 && qf_3 != sf_1 && qf_3 != sf_2 && qf_3 != final) {
        thirdplace_2 = qf_3;
    } else if (qf_4 != thirdplace_1 && qf_4 != sf_1 && qf_4 != sf_2 && qf_4 != final) {
        thirdplace_2 = qf_4;
    }

    let groupFilled = true;

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

    let allTeams = 
    [
        { id: 209, text: 'Ecuador', img: 'https://a.espncdn.com/i/teamlogos/countries/500/ecu.png' },
		{ id: 4398, text: 'Qatar', img: 'https://a.espncdn.com/i/teamlogos/countries/500/qat.png' },
		{ id: 654, text: 'Senegal', img: 'https://a.espncdn.com/i/teamlogos/countries/500/sen.png' },
        { id: 449, text: 'Netherlands', img: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png' },

        { id: 448, text: 'England', img: 'https://a.espncdn.com/i/teamlogos/countries/500/eng.png' },
        { id: 469, text: 'Iran', img: 'https://a.espncdn.com/i/teamlogos/countries/500/irn.png' },
        { id: 660, text: 'USA', img: 'https://a.espncdn.com/i/teamlogos/countries/500/usa.png' },
        { id: 578, text: 'Wales', img: 'https://a.espncdn.com/i/teamlogos/countries/500/wal.png' },

        { id: 202, text: 'Argentina', img: 'https://a.espncdn.com/i/teamlogos/countries/500/arg.png' },
        { id: 203, text: 'Mexico', img: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png' },
        { id: 471, text: 'Poland', img: 'https://a.espncdn.com/i/teamlogos/countries/500/pol.png' },
        { id: 655, text: 'Saudi Arabia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/ksa.png' },

        { id: 478, text: 'France', img: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png' },
        { id: 479, text: 'Denmark', img: 'https://a.espncdn.com/i/teamlogos/countries/500/den.png' },
        { id: 628, text: 'Australia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png' },
        { id: 659, text: 'Tunisia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/tun.png' },
 
        { id: 164, text: 'Spain', img: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png' },
        { id: 214, text: 'Costa Rica', img: 'https://a.espncdn.com/i/teamlogos/countries/500/crc.png' },
        { id: 481, text: 'Germany', img: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png' },
        { id: 627, text: 'Japan', img: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png' },

        { id: 206, text: 'Canada', img: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png' },
        { id: 459, text: 'Belgium', img: 'https://a.espncdn.com/i/teamlogos/countries/500/bel.png' },
        { id: 477, text: 'Croatia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/cro.png' },
        { id: 2869, text: 'Morocco', img: 'https://a.espncdn.com/i/teamlogos/countries/500/mar.png' },
 
        { id: 205, text: 'Brazil', img: 'https://a.espncdn.com/i/teamlogos/countries/500/bra.png' },
        { id: 475, text: 'Switzerland', img: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png' },
        { id: 656, text: 'Cameroon', img: 'https://a.espncdn.com/i/teamlogos/countries/500/crm.png' },
        { id: 6757, text: 'Serbia', img: 'https://a.espncdn.com/i/teamlogos/countries/500/srb.png' },

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

    let editing = false;
    function editOptions() {
        editing = true;

        // add class to all .select
        let selects = document.getElementsByClassName("select");
        for (let i = 0; i < selects.length; i++) {
            selects[i].classList.add("show");
        }

        // get all input radio fields
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "radio") {
                // set to unchecked
                inputs[i].checked = false;
            }
        }

    }
</script>

<svelte:head>
    <title>Bracket</title>
</svelte:head>

{#if loggedIn}

<h1>{data.data.data.user_created.first_name} Bracket</h1>

<form method="POST" on:submit={doSubmit}>

        <div class="groups">

            <div class="group group-a" data-group="a">
                <h3>Group A</h3>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/ecu.png" alt="Ecuador" /></span> Ecuador <span class="rank">Rank: 44</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/qat.png" alt="Qatar"></span> Qatar <span class="rank">Rank: 50</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/sen.png" alt="Senegal"></span> Senegal <span class="rank">Rank: 18</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/ned.png" alt="Netherlands"></span> Netherlands <span class="rank">Rank: 8</span></h2>
                </div>

                <div class="select">
                    <div class="field">
                        <label for="group_a_1">Winner</label>
                        <p>{group_a.find(x => x.id === parseInt(group_a_1)).text}</p>
                        <select id="group_a_1" 
                        on:change={
                            () => {
                                group_a_1 = document.getElementById("group_a_1").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_a as team}
                                {#if group_a_1 == team.id}
                                <option value={team.id} selected>{team.text}</option>
                                {:else}
                                    <option value={team.id}>{team.text}</option>
                                {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_a_1" value={group_a_1}>

                    </div>
                    <div class="field">
                        <label for="group_a_2">Runner-Up</label>
                        <p>{group_a.find(x => x.id === parseInt(group_a_2)).text}</p>
                        <select id="group_a_2" 
                        on:change={
                            () => {
                                group_a_2 = document.getElementById("group_a_2").value;
                                checkValid();
                            }
                        } 
                         required>
                            <option value="">Select Team</option>
                            {#each group_a as team}
                                {#if group_a_2 == team.id}
                                    <option value={team.id} selected>{team.text}</option>
                                {:else}
                                    <option value={team.id}>{team.text}</option>
                                {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_a_2" value={group_a_2}>

                    </div>
                </div>
            </div>

            <div class="group group-b" data-group="b">
                <h3>Group B</h3>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/eng.png" alt="England" /></span> England <span class="rank">Rank: 5</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/irn.png" alt="Iran"></span> Iran <span class="rank">Rank: 20</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/usa.png" alt="USA"></span> USA <span class="rank">Rank: 16</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/wal.png" alt="Wales"></span> Wales <span class="rank">Rank: 19</span></h2>
                </div>

                <div class="select">
                    <div class="field">
                        <label for="group_b_1">Winner</label>
                        <p>{group_b.find(x => x.id === parseInt(group_b_1)).text}</p>
                        <select id="group_b_1" 
                        on:change={
                            () => {
                                group_b_1 = document.getElementById("group_b_1").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_b as team}
                                {#if group_b_1 == team.id}
                                    <option value={team.id} selected>{team.text}</option>
                                {:else}
                                    <option value={team.id}>{team.text}</option>
                                {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_b_1" value={group_b_1}>
                    </div>
                    <div class="field">
                        <label for="group_b_2">Runner-Up</label>
                        <p>{group_b.find(x => x.id === parseInt(group_b_2)).text}</p>
                        <select id="group_b_2" 
                        on:change={
                            () => {
                                group_b_2 = document.getElementById("group_b_2").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_b as team}
                                {#if group_b_2 == team.id}
                                    <option value={team.id} selected>{team.text}</option>
                                {:else}
                                    <option value={team.id}>{team.text}</option>
                                {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_b_2" value={group_b_2}>
                    </div>
                </div>
            </div>

            <div class="group group-c" data-group="c">
                <h3>Group C</h3>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/arg.png" alt="Argentina" /></span> Argentina <span class="rank">Rank: 3</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/mex.png" alt="Mexico"></span> Mexico <span class="rank">Rank: 26</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/pol.png" alt="Poland"></span> Poland <span class="rank">Rank: 13</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/ksa.png" alt="Saudi Arabia"></span> Saudi Arabia <span class="rank">Rank: 51</span></h2>
                </div>

                <div class="select">
                    <div class="field">
                        <label for="group_c_1">Winner</label>
                        <p>{group_c.find(x => x.id === parseInt(group_c_1)).text}</p>
                        <select id="group_c_1" 
                        on:change={
                            () => {
                                group_c_1 = document.getElementById("group_c_1").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_c as team}
                                {#if group_c_1 == team.id}
                                    <option value={team.id} selected>{team.text}</option>
                                {:else}
                                    <option value={team.id}>{team.text}</option>
                                {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_c_1" value={group_c_1}>
                    </div>
                    <div class="field">
                        <label for="group_c_2">Runner-Up</label>
                        <p>{group_c.find(x => x.id === parseInt(group_c_2)).text}</p>
                        <select id="group_c_2" 
                        on:change={
                            () => {
                                group_c_2 = document.getElementById("group_c_2").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_c as team}
                                {#if group_c_2 == team.id}
                                    <option value={team.id} selected>{team.text}</option>
                                {:else}
                                    <option value={team.id}>{team.text}</option>
                                {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_c_2" value={group_c_2}>
                    </div>
                </div>
            </div>

            <div class="group group-d" data-group="d">
                <h3>Group D</h3>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/fra.png" alt="France" /></span> France <span class="rank">Rank: 4</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/den.png" alt="Denmark"></span> Denmark <span class="rank">Rank: 10</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/aus.png" alt="Australia"></span> Australia <span class="rank">Rank: 38</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/tun.png" alt="Tunisia"></span> Tunisia <span class="rank">Rank: 30</span></h2>
                </div>

                <div class="select">
                    <div class="field">
                        <label for="group_d_1">Winner</label>
                        <p>{group_d.find(x => x.id === parseInt(group_d_1)).text}</p>
                        <select id="group_d_1" 
                        on:change={
                            () => {
                                group_d_1 = document.getElementById("group_d_1").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_d as team}
                                {#if group_d_1 == team.id}
                                    <option value={team.id} selected>{team.text}</option>
                                {:else}
                                    <option value={team.id}>{team.text}</option>
                                {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_d_1" value={group_d_1}>
                    </div>
                    <div class="field">
                        <label for="group_d_2">Runner-Up</label>
                        <p>{group_d.find(x => x.id === parseInt(group_d_2)).text}</p>
                        <select id="group_d_2" 
                        on:change={
                            () => {
                                group_d_2 = document.getElementById("group_d_2").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_d as team}
                            {#if group_d_2 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_d_2" value={group_d_2}>
                    </div>
                </div>
            </div>

            <div class="group group-e" data-group="e">
                <h3>Group E</h3>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/spa.png" alt="Spain" /></span> Spain <span class="rank">Rank: 7</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/crc.png" alt="Costa Rica"></span> Costa Rica <span class="rank">Rank: 31</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/ger.png" alt="Germany"></span> Germany <span class="rank">Rank: 11</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/jpn.png" alt="Japan"></span> Japan <span class="rank">Rank: 24</span></h2>
                </div>

                <div class="select">
                    <div class="field">
                        <label for="group_e_1">Winner</label>
                        <p>{group_e.find(x => x.id === parseInt(group_e_1)).text}</p>
                        <select id="group_e_1" 
                        on:change={
                            () => {
                                group_e_1 = document.getElementById("group_e_1").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_e as team}
                            {#if group_e_1 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_e_1" value={group_e_1}>
                    </div>
                    <div class="field">
                        <label for="group_e_2">Runner-Up</label>
                        <p>{group_e.find(x => x.id === parseInt(group_e_2)).text}</p>
                        <select id="group_e_2" 
                        on:change={
                            () => {
                                group_e_2 = document.getElementById("group_e_2").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_e as team}
                            {#if group_e_2 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_e_2" value={group_e_2}>
                    </div>
                </div>
            </div>

            <div class="group group-f" data-group="f">
                <h3>Group F</h3>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/can.png" alt="Canada" /></span> Canada <span class="rank">Rank: 41</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/bel.png" alt="Belgium"></span> Belgium <span class="rank">Rank: 2</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/cro.png" alt="Croatia"></span> Croatia <span class="rank">Rank: 12</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/mar.png" alt="Morocco"></span> Morocco <span class="rank">Rank: 22</span></h2>
                </div>

                <div class="select">
                    <div class="field">
                        <label for="group_f_1">Winner</label>
                        <p>{group_f.find(x => x.id === parseInt(group_f_1)).text}</p>
                        <select id="group_f_1"
                        on:change={
                            () => {
                                group_f_1 = document.getElementById("group_f_1").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_f as team}
                            {#if group_f_1 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_f_1" value={group_f_1}>
                    </div>
                    <div class="field">
                        <label for="group_f_2">Runner-Up</label>
                        <p>{group_f.find(x => x.id === parseInt(group_f_2)).text}</p>
                        <select id="group_f_2" 
                        on:change={
                            () => {
                                group_f_2 = document.getElementById("group_f_2").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_f as team}
                            {#if group_f_2 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_f_2" value={group_f_2}>
                    </div>
                </div>
            </div>

            <div class="group group-g" data-group="g">
                <h3>Group G</h3>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/bra.png" alt="Brazil" /></span> Brazil <span class="rank">Rank: 1</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/sui.png" alt="Switzerland"></span> Switzerland <span class="rank">Rank: 15</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/crm.png" alt="Cameroon"></span> Cameroon <span class="rank">Rank: 43</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/sba.png" alt="Serbia"></span> Serbia <span class="rank">Rank: 21</span></h2>
                </div>

                <div class="select">
                    <div class="field">
                        <label for="group_g_1">Winner</label>
                        <p>{group_g.find(x => x.id === parseInt(group_g_1)).text}</p>
                        <select id="group_g_1" 
                        on:change={
                            () => {
                                group_g_1 = document.getElementById("group_g_1").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_g as team}
                            {#if group_g_1 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_g_1" value={group_g_1}>
                    </div>
                    <div class="field">
                        <label for="group_g_2">Runner-Up</label>
                        <p>{group_g.find(x => x.id === parseInt(group_g_2)).text}</p>
                        <select id="group_g_2" 
                        on:change={
                            () => {
                                group_g_2 = document.getElementById("group_g_2").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_g as team}
                            {#if group_g_2 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_g_2" value={group_g_2}>
                    </div>
                </div>
            </div>

            <div class="group group-h" data-group="h">
                <h3>Group H</h3>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/uru.png" alt="Uruguay" /></span> Uruguay <span class="rank">Rank: 14</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/kors.png" alt="South Korea"></span> South Korea <span class="rank">Rank: 28</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/por.png" alt="Portugal"></span> Portugal <span class="rank">Rank: 9</span></h2>
                </div>
                <div class="team">
                    <h2><span><img src="https://a.espncdn.com/i/teamlogos/countries/500/gha.png" alt="Ghana"></span> Ghana <span class="rank">Rank: 61</span></h2>
                </div>

                <div class="select">
                    <div class="field">
                        <label for="group_h_1">Winner</label>
                        <p>{group_h.find(x => x.id === parseInt(group_h_1)).text}</p>
                        <select id="group_h_1" 
                        on:change={
                            () => {
                                group_h_1 = document.getElementById("group_h_1").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_h as team}
                            {#if group_h_1 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_h_1" value={group_h_1}>
                    </div>
                    <div class="field">
                        <label for="group_h_2">Runner-Up</label>
                        <p>{group_h.find(x => x.id === parseInt(group_h_2)).text}</p>
                        <select id="group_h_2" 
                        on:change={
                            () => {
                                group_h_2 = document.getElementById("group_h_2").value;
                                checkValid();
                            }
                        } 
                        required>
                            <option value="">Select Team</option>
                            {#each group_h as team}
                            {#if group_h_2 == team.id}
                            <option value={team.id} selected>{team.text}</option>
                        {:else}
                            <option value={team.id}>{team.text}</option>
                        {/if}
                            {/each}
                        </select>
                        <input type="hidden" name="group_h_2" value={group_h_2}>
                    </div>
                </div>
            </div>

            
        </div>

        <!-- <button id="knockout">Knockout Stage</button> -->

        {#if groupFilled}

        <div class="bracket">

            <div class="round-16">
                <h4>Round of 16</h4>
                <div class="match" data-match="1">
                    <label for="game_1_option_1">
                        <input type="radio" name="Round_16_1" id="game_1_option_1" 
                            bind:group={round_16_1} value={group_a_1} required>
                        <span class="team">
                            <span>
                                <img src="{group_a.find(x => x.id === parseInt(group_a_1)).img}" alt="{group_a.find(x => x.id === parseInt(group_a_1)).text}">
                            </span> 
                            {group_a.find(x => x.id === parseInt(group_a_1)).text}
                        </span>
                         
                    </label>
                    <label for="game_1_option_2">
                        <input type="radio" name="Round_16_1" id="game_1_option_2" 
                            bind:group={round_16_1} value={group_b_2} required>
                        <span class="team">
                            <span>
                                <img src="{group_b.find(x => x.id === parseInt(group_b_2)).img}" alt="{group_b.find(x => x.id === parseInt(group_b_2)).text}">
                            </span> 
                            {group_b.find(x => x.id === parseInt(group_b_2)).text}
                        </span>
                    </label>
                </div>

                <div class="match" data-match="2">
                    <label for="game_2_option_1">
                        <input type="radio" name="Round_16_2" id="game_2_option_1" 
                            bind:group={round_16_2} value={group_c_1} required>
                        <span class="team">
                            <span>
                                <img src="{group_c.find(x => x.id === parseInt(group_c_1)).img}" alt="{group_c.find(x => x.id === parseInt(group_c_1)).text}">
                            </span> 
                            {group_c.find(x => x.id === parseInt(group_c_1)).text}
                        </span>
                    </label>
                    <label for="game_2_option_2">
                        <input type="radio" name="Round_16_2" id="game_2_option_2" 
                            bind:group={round_16_2} value={group_d_2} 
                            readonly={!editing}
                             required>
                        <span class="team">
                            <span>
                                <img src="{group_d.find(x => x.id === parseInt(group_d_2)).img}" alt="{group_d.find(x => x.id === parseInt(group_d_2)).text}">
                            </span> 
                            {group_d.find(x => x.id === parseInt(group_d_2)).text}
                        </span>
                    </label>
                </div>

                <div class="match" data-match="3">
                    <label for="game_3_option_1">
                        <input type="radio" name="Round_16_3" id="game_3_option_1" 
                            bind:group={round_16_3} value={group_e_1} required>
                        <span class="team">
                            <span>
                                <img src="{group_e.find(x => x.id === parseInt(group_e_1)).img}" alt="{group_e.find(x => x.id === parseInt(group_e_1)).text}">
                            </span> 
                            {group_e.find(x => x.id === parseInt(group_e_1)).text}
                        </span>
                    </label>
                    <label for="game_3_option_2">
                        <input type="radio" name="Round_16_3" id="game_3_option_2" 
                            bind:group={round_16_3} value={group_f_2} required>
                        <span class="team">
                            <span>
                                <img src="{group_f.find(x => x.id === parseInt(group_f_2)).img}" alt="{group_f.find(x => x.id === parseInt(group_f_2)).text}">
                            </span> 
                            {group_f.find(x => x.id === parseInt(group_f_2)).text}
                        </span>
                    </label>
                </div>

                <div class="match" data-match="4">
                    <label for="game_4_option_1">
                        <input type="radio" name="Round_16_4" id="game_4_option_1" 
                            bind:group={round_16_4} value={group_g_1} required>
                        <span class="team">
                            <span>
                                <img src="{group_g.find(x => x.id === parseInt(group_g_1)).img}" alt="{group_g.find(x => x.id === parseInt(group_g_1)).text}">
                            </span> 
                            {group_g.find(x => x.id === parseInt(group_g_1)).text}
                        </span>
                    </label>
                    <label for="game_4_option_2">
                        <input type="radio" name="Round_16_4" id="game_4_option_2" 
                            bind:group={round_16_4} value={group_h_2} required>
                        <span class="team">
                            <span>
                                <img src="{group_h.find(x => x.id === parseInt(group_h_2)).img}" alt="{group_h.find(x => x.id === parseInt(group_h_2)).text}">
                            </span> 
                            {group_h.find(x => x.id === parseInt(group_h_2)).text}
                        </span>
                    </label>
                </div>

                <div class="match" data-match="5">
                    <label for="game_5_option_1">
                        <input type="radio" name="Round_16_5" id="game_5_option_1" 
                            bind:group={round_16_5} value={group_b_1} required>
                        <span class="team">
                            <span>
                                <img src="{group_b.find(x => x.id === parseInt(group_b_1)).img}" alt="{group_b.find(x => x.id === parseInt(group_b_1)).text}">
                            </span> 
                            {group_b.find(x => x.id === parseInt(group_b_1)).text}
                        </span>
                    </label>
                    <label for="game_5_option_2">
                        <input type="radio" name="Round_16_5" id="game_5_option_2" 
                            bind:group={round_16_5} value={group_a_2} required>
                        <span class="team">
                            <span>
                                <img src="{group_a.find(x => x.id === parseInt(group_a_2)).img}" alt="{group_a.find(x => x.id === parseInt(group_a_2)).text}">
                            </span> 
                            {group_a.find(x => x.id === parseInt(group_a_2)).text}
                        </span>
                    </label>
                </div>

                <div class="match" data-match="6">
                    <label for="game_6_option_1">
                        <input type="radio" name="Round_16_6" id="game_6_option_1" 
                            bind:group={round_16_6} value={group_d_1} required>
                        <span class="team">
                            <span>
                                <img src="{group_d.find(x => x.id === parseInt(group_d_1)).img}" alt="{group_d.find(x => x.id === parseInt(group_d_1)).text}">
                            </span> 
                            {group_d.find(x => x.id === parseInt(group_d_1)).text}
                        </span>
                    </label>
                    <label for="game_6_option_2">
                        <input type="radio" name="Round_16_6" id="game_6_option_2" 
                            bind:group={round_16_6} value={group_c_2} required>
                        <span class="team">
                            <span>
                                <img src="{group_c.find(x => x.id === parseInt(group_c_2)).img}" alt="{group_c.find(x => x.id === parseInt(group_c_2)).text}">
                            </span> 
                            {group_c.find(x => x.id === parseInt(group_c_2)).text}
                        </span>
                    </label>
                </div>

                <div class="match" data-match="7">
                    <label for="game_7_option_1">
                        <input type="radio" name="Round_16_7" id="game_7_option_1" 
                            bind:group={round_16_7} value={group_f_1} required>
                        <span class="team">
                            <span>
                                <img src="{group_f.find(x => x.id === parseInt(group_f_1)).img}" alt="{group_f.find(x => x.id === parseInt(group_f_1)).text}">
                            </span> 
                            {group_f.find(x => x.id === parseInt(group_f_1)).text}
                        </span>
                    </label>
                    <label for="game_7_option_2">
                        <input type="radio" name="Round_16_7" id="game_7_option_2" 
                            bind:group={round_16_7} value={group_e_2} required>
                        <span class="team">
                            <span>
                                <img src="{group_e.find(x => x.id === parseInt(group_e_2)).img}" alt="{group_e.find(x => x.id === parseInt(group_e_2)).text}">
                            </span> 
                            {group_e.find(x => x.id === parseInt(group_e_2)).text}
                        </span>
                    </label>
                </div>

                <div class="match" data-match="8">
                    <label for="game_8_option_1">
                        <input type="radio" name="Round_16_8" id="game_8_option_1" 
                            bind:group={round_16_8} value={group_h_1} required>
                        <span class="team">
                            <span>
                                <img src="{group_h.find(x => x.id === parseInt(group_h_1)).img}" alt="{group_h.find(x => x.id === parseInt(group_h_1)).text}">
                            </span> 
                            {group_h.find(x => x.id === parseInt(group_h_1)).text}
                        </span>
                    </label>
                    <label for="game_8_option_2">
                        <input type="radio" name="Round_16_8" id="game_8_option_2" 
                            bind:group={round_16_8} value={group_g_2} required>
                        <span class="team">
                            <span>
                                <img src="{group_g.find(x => x.id === parseInt(group_g_2)).img}" alt="{group_g.find(x => x.id === parseInt(group_g_2)).text}">
                            </span> 
                            {group_g.find(x => x.id === parseInt(group_g_2)).text}
                        </span>
                    </label>
                </div>
            </div>

            <div class="quarter-finals">
                <h4>Quarter Finals</h4>
                <div class="matches">
                    <div class="match" data-match="9">
                        <label for="game_9_option_1">
                            <input type="radio" name="Quarter_16_1" id="game_9_option_1" 
                            bind:group={qf_1} value={round_16_1} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(round_16_1)).img}" alt="{allTeams.find(x => x.id === parseInt(round_16_1)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(round_16_1)).text}
                            </span>
                        </label>
                        <label for="game_9_option_2">
                            <input type="radio" name="Quarter_16_1" id="game_9_option_2" 
                            bind:group={qf_1} value={round_16_2} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(round_16_2)).img}" alt="{allTeams.find(x => x.id === parseInt(round_16_2)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(round_16_2)).text}
                            </span>
                             
                        </label>
                    </div>
    
                    <div class="match" data-match="10">
                        <label for="game_10_option_1">
                            <input type="radio" name="Quarter_16_2" id="game_10_option_1" 
                            bind:group={qf_2} value={round_16_3} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(round_16_3)).img}" alt="{allTeams.find(x => x.id === parseInt(round_16_3)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(round_16_3)).text}
                            </span>
                             
                        </label>
                        <label for="game_10_option_2">
                            <input type="radio" name="Quarter_16_2" id="game_10_option_2" 
                            bind:group={qf_2} value={round_16_4} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(round_16_4)).img}" alt="{allTeams.find(x => x.id === parseInt(round_16_4)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(round_16_4)).text}
                            </span>
                             
                        </label>
                    </div>
    
                    <div class="match" data-match="11">
                        <label for="game_11_option_1">
                            <input type="radio" name="Quarter_16_3" id="game_11_option_1" 
                            bind:group={qf_3} value={round_16_5} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(round_16_5)).img}" alt="{allTeams.find(x => x.id === parseInt(round_16_5)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(round_16_5)).text}
                            </span>
                             
                        </label>
                        <label for="game_11_option_2">
                            <input type="radio" name="Quarter_16_3" id="game_11_option_2" 
                            bind:group={qf_3} value={round_16_6} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(round_16_6)).img}" alt="{allTeams.find(x => x.id === parseInt(round_16_6)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(round_16_6)).text}
                            </span>
                             
                        </label>
                    </div>
    
                    <div class="match" data-match="12">
                        <label for="game_12_option_1">
                            <input type="radio" name="Quarter_16_4" id="game_12_option_1" 
                            bind:group={qf_4} value={round_16_7} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(round_16_7)).img}" alt="{allTeams.find(x => x.id === parseInt(round_16_7)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(round_16_7)).text}
                            </span>
                             
                        </label>
                        <label for="game_12_option_2">
                            <input type="radio" name="Quarter_16_4" id="game_12_option_2" 
                            bind:group={qf_4} value={round_16_8} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(round_16_8)).img}" alt="{allTeams.find(x => x.id === parseInt(round_16_8)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(round_16_8)).text}
                            </span>
                             
                        </label>
                    </div>
                </div>
            </div>

            <div class="semi-finals">
                <h4>Semi Finals</h4>
                <div class="matches">
                    <div class="match" data-match="13">
                        <label for="game_13_option_1">
                            <input type="radio" name="Semi_16_1" id="game_13_option_1" 
                            bind:group={sf_1} value={qf_1} required
                            >
                            
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(qf_1)).img}" alt="{allTeams.find(x => x.id === parseInt(qf_1)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(qf_1)).text}
                            </span>
                             
                        </label>
                        <label for="game_13_option_2">
                            <input type="radio" name="Semi_16_1" id="game_13_option_2" 
                            bind:group={sf_1} value={qf_2} required
                            >
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(qf_2)).img}" alt="{allTeams.find(x => x.id === parseInt(qf_2)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(qf_2)).text}
                            </span>
                             
                        </label>
                    </div>
    
                    <div class="match" data-match="14">
                        <label for="game_14_option_1">
                            <input type="radio" name="Semi_16_2" id="game_14_option_1" 
                            bind:group={sf_2} value={qf_3} required
                            >
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(qf_3)).img}" alt="{allTeams.find(x => x.id === parseInt(qf_3)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(qf_3)).text}
                            </span>
                             
                        </label>
                        <label for="game_14_option_2">
                            <input type="radio" name="Semi_16_2" id="game_14_option_2" 
                            bind:group={sf_2} value={qf_4} required
                            >
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(qf_4)).img}" alt="{allTeams.find(x => x.id === parseInt(qf_4)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(qf_4)).text}
                            </span>
                             
                        </label>
                    </div>
                </div>
            </div>

            <div class="finals">
                <h4>Finals</h4>
                <div class="matches">
                    <div class="match" data-match="15">
                        <label for="game_15_option_1">
                            <input type="radio" name="Final" id="game_15_option_1" 
                            bind:group={final} value={sf_1} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(sf_1)).img}" alt="{allTeams.find(x => x.id === parseInt(sf_1)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(sf_1)).text}
                            </span>
                             
                        </label>
                        <label for="game_15_option_2">
                            <input type="radio" name="Final" id="game_15_option_2" 
                            bind:group={final} value={sf_2} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(sf_2)).img}" alt="{allTeams.find(x => x.id === parseInt(sf_2)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(sf_2)).text}
                            </span>
                             
                        </label>
                    </div>
                    <div class="tiebreaker">
                        <h4>Tiebreaker</h4>
                        <div class="score">
                            <label for="team_1_score">Team 1 Score</label>
                            <input type="number" name="team_1_score" id="team_1_score" readonly={!editing} min="0" max="10" bind:value={final_score_1} />
                        </div>
                        <div class="score">
                            <label for="team_2_score">Team 2 Score</label>
                            <input type="number" name="team_2_score" id="team_2_score" readonly={!editing} min="0" max="10" bind:value={final_score_2} />
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top: auto;" class="thirdplace">
                <h4>Third Place</h4>
                <div class="matches">
                    <div class="match" data-match="16">
                        <label for="game_16_option_1">
                            <input type="radio" name="Third_Place" id="game_16_option_1" 
                            bind:group={thirdplace_1} value={thirdplace_2} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(thirdplace_2)).img}" alt="{allTeams.find(x => x.id === parseInt(thirdplace_2)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(thirdplace_2)).text}
                            </span>
                             
                        </label>
                        <label for="game_16_option_2">
                            <input type="radio" name="Third_Place" id="game_16_option_2" 
                            bind:group={thirdplace_1} value={thirdplace_1} required>
                            <span class="team">
                                <span>
                                    <img src="{allTeams.find(x => x.id === parseInt(thirdplace_1)).img}" alt="{allTeams.find(x => x.id === parseInt(thirdplace_1)).text}">
                                </span> 
                                {allTeams.find(x => x.id === parseInt(thirdplace_1)).text}
                            </span>
                             
                        </label>
                    </div>
                </div>
            </div>

        </div>

        {#if editing}
        <button id="submit-btn" type="submit">Save</button>
        {/if}

        {/if}

        
    </form>

{:else}
    <p>You are not logged in</p>
{/if}

<style>
    h1 {
        text-align: center;
        margin: 0 0 30px 0;
    }
    #edit {
        display: block;
        margin: 0rem auto 2rem;
        padding: 10px 20px;
        font-size: 18px;
        font-weight: bold;
        background-color: #8A1538;
        color: white;
        border: none;
        border-radius: 0;
        cursor: pointer;
    }
    .description {
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        margin: 10px 0 40px 0;
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
        flex-basis: 31.9%;
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
        display: none;
        border: 1px solid #ccc;
        padding: 10px;
        font-size: 16px;
    }
    .group .select.show select {
        display: block;
    }
    .bracket {
        display: flex;
        gap: 20px;
        margin-top: 3rem;
    }
    .bracket .match {
        border: 1px solid #ccc;
        padding: 5px 10px;
        pointer-events: none;
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
        /* pointer-events: none; */
    }
    .match input {
        position: absolute;
        opacity: 0;
        z-index: -1;
        /* pointer-events: none; */
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
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-around;
        height: 100%;
        margin: 0 1vw;
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