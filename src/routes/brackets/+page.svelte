<script>
    import { page } from '$app/stores';
    /** @type {import('./$types').PageData} */
    export let data;

    let entries = data.data.data;

    let loggedIn = $page.data.loggedIn;
</script>

<h1>My Brackets</h1>

{#if loggedIn}
    <h3>Your Bracket</h3>
    {#if entries.length < 1}
        <p>You have no brackets.</p>
    {:else}
        {#each entries as entry, i}
            <div class="pool">
                <a href="/brackets/{entry.id}">View Bracket {i+1}</a>
            </div>
        {/each}
    {/if}
    
{:else}
    <p>You are not logged in</p>
{/if}

<style>
    .new {
        display: block;
        margin: 0rem auto;
        padding: 10px 20px;
        font-size: 18px;
        font-weight: bold;
        background-color: #8A1538;
        color: white;
        border: none;
        border-radius: 0;
        cursor: pointer;
        text-decoration: none;
    }
    .pool {
        margin: 1rem 0;
    }
</style>