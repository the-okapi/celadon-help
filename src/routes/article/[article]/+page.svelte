<script lang="ts">
	import { articles, type Article } from '#lib/articles/index.js';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { params } = $props();

	let article: Article | undefined = articles.find((a) => a.id === params.article);

	if (article === undefined) {
		goto(resolve('/'));
	}
</script>

<p>{article?.name}</p>
