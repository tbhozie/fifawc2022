<script>
    // refresh the page when the user logs out
    import { onMount } from 'svelte';

    onMount(() => {
        // refresh the page
        window.location = '/';
    });
</script>