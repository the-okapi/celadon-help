<script lang="ts">
	import { page } from '$app/state';
</script>

<p class="mt-10 text-center text-2xl">{page.error?.status}: {page.error?.message}</p>
