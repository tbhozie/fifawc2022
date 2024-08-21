<script>
    /** @type {import('./$types').PageData} */
    export let data;

    export let form;
</script>

<svelte:head>
    <title>Sign Up</title>
</svelte:head>

<h1>Sign Up</h1>

<p class="description">Venmo @Peter-Smith-30 for each of your brackets you enter.</p>

{#if form?.success}
  <p>You have been registered, click <a href="/login">here</a> to login</p>
{/if}

{#if form?.missing}<p class="error">All fields are required</p>{/if}
{#if form?.error}<p class="error">There was an error, please try again</p>{/if}
{#if form?.exists}<p class="error">That email address is already registered</p>{/if}
{#if form?.passinvalid}<p class="error">Password invalid, please use a different password</p>{/if}

<form method="POST">
    <div class="form-field">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
    </div>
    <div class="form-field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
    </div>
    <div class="form-field">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
    </div>
    <div class="form-field">
        <label for="venmo_username">Venmo Username</label>
        <input type="text" name="venmo_username" id="venmo_username" placeholder="@My-Username" />
    </div>
    <button type="submit">Sign Up</button>
</form>

<style>
    h1 {
        margin: 1rem 0 0 0;
    }
    .description {
        text-align: center;
        font-size: 16px;
    }
    form {
        margin: 0 auto;
    }
    .form-field {
        margin-bottom: 1rem;
    }
    label {
        display: block;
        margin: 0.5rem 0;
        font-weight: bold;
    }
    input {
        display: block;
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    button {
        display: block;
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #ccc;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }
    .error {
        text-align: center;
        color: red;
    }
</style>