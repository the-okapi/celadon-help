<script lang="ts">
	import { setLocale } from '#lib/paraglide/runtime.js';
	import { onMount } from 'svelte';

	onMount(() => {
		setLocale('en');
		window.location.href = '/';
	});
</script>

<p>Please Wait...</p>
