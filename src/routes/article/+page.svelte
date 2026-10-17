<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { articles, type Article } from '#lib/articles/index.ts';
	import { onMount } from 'svelte';

	let article: Article | undefined = $state();

	onMount(() => {
		const id = page.url.searchParams.get('id');

		if (id === null) {
			goto(resolve('/'));
			return;
		}
		const a = articles.find((a) => a.id === id);

		if (a === undefined) {
			goto(resolve('/'));
			return;
		}

		article = a;
	});
</script>

{#if article}
	<p>{article.name}</p>
{/if}
