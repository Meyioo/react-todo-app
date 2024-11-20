<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import { derived } from 'svelte/store';
	import type { Todo } from '../../model';
	import type { ITodoListProps } from '../../model/props.model';
	import { SearchStore, TodosStore } from '../../store/+todo.store';

	const { completed = false }: ITodoListProps = $props();

	// abgeleiteter Store zur Filterung der Todos basierend auf dem Suchtext und dem `completed`-Status
	const todos = derived([TodosStore, SearchStore], ([$TodosStore, $SearchStore]) => {
		const todos = completed ? $TodosStore.completed : $TodosStore.open;
		return $SearchStore.length > 0
			? todos.filter(
					(todo: Todo) =>
						todo.title.toLowerCase().includes($SearchStore.toLowerCase()) ||
						todo.description.toLowerCase().includes($SearchStore.toLowerCase())
				)
			: todos;
	});
</script>

<main>
	{#each $todos as todo}
		<TodoItem {todo}></TodoItem>
	{/each}

	{#if $todos.length === 0}
		<p class="mt-3 text-center text-gray-500">Keine Aufgaben gefunden</p>
	{/if}
</main>

<style>
</style>
