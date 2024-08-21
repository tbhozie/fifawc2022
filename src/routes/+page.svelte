<script>
	import { page } from '$app/stores';
	let loggedIn = $page.data.loggedIn;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Point System</h1>

<table>
	<thead>
		<tr>
			<th>Challenge Round</th>
			<th>Points</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1 (Group Stage)</td>
			<td>1 point for each correct Group winner selection (8 total points possible) <br /><br />
				1 point for each correct Group runner-up selection (8 total points possible)
			</td>
		</tr>
		<tr>
			<td>
				2 (Round of 16)
			</td>
			<td>2 points for each correct Round of 16 match-up winner selection (16 total points possible)</td>
		</tr>
		<tr>
			<td>3 (Quarter Final)</td>
			<td>4 points for each correct Quarter Finals match-up winner selection (16 total points possible)</td>
		</tr>
		<tr>
			<td>4 (Semifinal)</td>
			<td>4 points for each correct team to advance to the third place game (8 total points possible) <br /><br />
				8 points for correct team to advance to the finals (16 total points possible)
			</td>
		</tr>
		<tr>
			<td>5 (Third Place Game)</td>
			<td>8 points for correct third place finisher (8 total points possible)</td>
		</tr>
		<tr>
			<td>6 (Final)</td>
			<td>16 points for correct World Cup Champion (16 total points possible)</td>
		</tr>
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
</style>


