<script lang="ts">
	import type { Path } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '#lib/paraglide/runtime.js';
	import './layout.css';
	import favicon from '#lib/assets/favicon.png';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from './NavBar.svelte';
	import { m } from '#lib/paraglide/messages.js';

	let { children } = $props();
</script>

<ModeWatcher darkClassNames={['dark']} lightClassNames={['light']} defaultMode="system" />

<svelte:head>
	<title>{page.data.title ?? m.home()} | {m.celadon_help()}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar>
	<a href={resolve('/')} class="under">{m.home()}</a>
</NavBar>

<div class="p-4">
	{@render children()}
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Path)}>{locale}</a>
	{/each}
</div>
