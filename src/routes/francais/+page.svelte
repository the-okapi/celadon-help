<script lang="ts">
	import { setLocale } from '#lib/paraglide/runtime.js';
	import { onMount } from 'svelte';

	onMount(() => {
		setLocale('fr');
		window.location.href = '/';
	});
</script>

<p>Attendez s'il vous plaît...</p>
