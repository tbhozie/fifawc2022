<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let entries = data.data.data;

    // sort entries by points
    entries.sort((a, b) => b.Points - a.Points);

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
</script>

<h1>Leaderboard</h1>

<table>
    <thead>
        <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Champion</td>
            <td>Points</td>
        </tr>
    </thead>
    <tbody>
        {#each entries as entry, i}
            <tr>
                <td>{i + 1}</td>
                <td>
                    <a href="/brackets/{entry.id}">{entry.user_created.first_name}</a>
                </td>
                <td class="champion">
                    <span>
                        <img src="{allTeams.find(x => x.id === parseInt(entry.Final)).img}" alt="{allTeams.find(x => x.id === parseInt(entry.Final)).text}">
                    </span> 
                    {allTeams.find(x => x.id === parseInt(entry.Final)).text}
                </td>
                {#if entry.Points}
                    <td>{entry.Points}</td>
                {:else}
                    <td>0</td>
                {/if}
            </tr>
        {/each}
    </tbody>
</table>

<style>
	table {
	border-collapse: collapse;
    font-family: Tahoma, Geneva, sans-serif;
}
table td {
	padding: 15px;
}
table thead td {
	background-color: #54585d;
	color: #ffffff;
	font-weight: bold;
	font-size: 13px;
	border: 1px solid #54585d;
}
table tbody td {
	color: #636363;
	border: 1px solid #dddfe1;
}
table tbody tr {
	background-color: #f9fafb;
}
table tbody tr:nth-child(odd) {
	background-color: #ffffff;
}
.champion {
    display: flex;
    align-items: center;
}
.champion img {
    height: 20px;
    margin-right: 5px;
    display: block;
}
</style>