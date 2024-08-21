<script>
	import { page } from '$app/stores';
	let loggedIn = $page.data.loggedIn;
</script>

<header>
	<div class="logo">
		<a href="/">FIFA World Cup 22 Pool</a>
		<a href="/" class="mobile">FIFA WC 22 Pool</a>
	</div>

	<nav>
		{#if loggedIn}
			<a href="/brackets/all" class="{page === '/brackets/all' ? 'active' : ''}">Leaderboard</a>
			<a href="/brackets" class="{page === '/brackets' ? 'active' : ''}">My Brackets</a>
			<a href="/logout">Logout</a>
		{:else}
			<a href="/login" class="{page === '/login' ? 'active' : ''}">Login</a>
			<a href="/signup" class="{page === '/signup' ? 'active' : ''}">Sign Up</a>
		{/if}
		
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		background-color: #8A1538;
	}
	.logo a {
		color: #fff;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	nav a {
		color: #fff;
		text-align: center;
	}
	.mobile {
		display: none;
	}
	@media(max-width: 600px) {
		.logo a {
			display: none;
		}
		.logo .mobile {
			display: block;
		}
	}
</style>
