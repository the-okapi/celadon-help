<script lang="ts">
	import 'nprogress/nprogress.css';
	import './layout.css';
	import type { Path } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '#lib/paraglide/runtime.js';
	import favicon from '#lib/assets/favicon.png';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from './NavBar.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import nprogress from 'nprogress';
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	onMount(() => {
		nprogress.configure({
			showSpinner: false,
			template: '<div class="bar" role="bar"></div>'
		});
	});

	beforeNavigate(() => {
		nprogress.start();
	});

	afterNavigate(() => {
		nprogress.done();
	});

	let { children } = $props();
</script>

<ModeWatcher darkClassNames={['dark']} lightClassNames={['light']} defaultMode="system" />

<svelte:head>
	<title>{page.data.title ? page.data.title + ' | ' : ''}{m.celadon_help()}</title>
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
