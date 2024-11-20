<script>
	import { ToastStore } from '../../store/toast.store';

	let visible = false;
	let message = '';

	ToastStore.subscribe((msg) => {
		if (msg) {
			message = msg;
			visible = true;
			debugger;

			setTimeout(() => {
				visible = false;
			}, 3000);
		}
	});
</script>

<div class="toast" class:hidden={!visible}>
	{message}
</div>

<style>
	.toast {
		position: fixed;
		bottom: 20px;
		right: 20px;
		background-color: #333;
		color: white;
		padding: 1rem;
		border-radius: 4px;
		opacity: 0.9;
		transition: opacity 0.3s ease;
	}
	.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
