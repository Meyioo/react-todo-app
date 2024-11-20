<script lang="ts">
	import type { IButtonProps } from '../../model';

	const { type, onclick, label, disabled }: IButtonProps = $props();
</script>

<button
	class="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white disabled:bg-blue-500"
	{type}
	{disabled}
	{onclick}
	>{label}
</button>
