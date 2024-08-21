<script>
    /** @type {import('./$types').PageData} */
    export let form;
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<h1>Login</h1>

{#if form?.success}<p>Logged In</p>{/if}

{#if form?.missing}<p class="error">Username and password is required</p>{/if}
{#if form?.error}<p class="error">Invalid login credentials</p>{/if}

<form method="POST">
    <div class="form-field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
    </div>
    <div class="form-field">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
    </div>
    <button type="submit">Log In</button>
</form>

<style>
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
    }
    .error {
        text-align: center;
        color: red;
    }
</style>