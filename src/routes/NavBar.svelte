<script lang="ts">
	import { page } from '$app/state';
	import { mode, setMode } from 'mode-watcher';
	import { m } from '#lib/paraglide/messages.js';
	import { setLocale } from '#lib/paraglide/runtime.js';
	import { getLocale } from '#lib/paraglide/runtime.js';

	let { children } = $props();

	function setLight() {
		setMode('light');
	}

	function setDark() {
		setMode('dark');
	}

	function english() {
		setLocale('en');
	}

	function french() {
		setLocale('fr');
	}
</script>

<div class="fixed top-0 flex h-20 w-screen border-b border-(--o) bg-(--bg) px-7 py-5">
	<div class="flex w-full items-center gap-4">
		{@render children()}
	</div>
	<h1 class="flex items-center px-5 text-4xl font-bold whitespace-nowrap">
		{page.data.title ?? m.home()}
	</h1>
	<div class="flex w-full items-center justify-end gap-4">
		<p class="flex text-lg">
			{#if mode.current === 'dark'}
				<button class="under cursor-pointer" onclick={setLight}>{m.light()}</button>
				/
				<span class="cursor-default font-bold">{m.dark()}</span>
			{:else}
				<span class="cursor-default font-bold">{m.light()}</span>
				/
				<button class="under cursor-pointer" onclick={setDark}>{m.dark()}</button>
			{/if}
		</p>
		<p class="flex text-lg">
			{#if getLocale() === 'fr'}
				<button class="under cursor-pointer" onclick={english}>En</button>
				/
				<span class="cursor-default font-bold">Fr</span>
			{:else}
				<span class="cursor-default font-bold">En</span>
				/
				<button class="under cursor-pointer" onclick={french}>Fr</button>
			{/if}
		</p>
	</div>
</div>
<div class="h-20"></div>

<style>
	.under:hover {
		text-decoration: underline 1.5px;
	}
</style>
