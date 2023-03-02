<script lang="ts">
  import NewTask from "./NewTask.svelte";
  import { tasks, tasksLeftCount } from "./stores.js";

  // export interface Task {
  //   id: number;
  //   name: string;
  //   status: boolean;
  // }

  function doSomething() {
    tasks.set($tasks.map((task) => ({ ...task, status: true })));
  }
</script>

<NewTask />

<ul class="list-group">
  {#each $tasks as task}
    <li class="list-group-item w-50">
      <input
        bind:checked={task.status}
        class="form-check-input me-1"
        type="checkbox"
        id="checkbox"
      />
      <label class="form-check-label" for="checkbox">{task.name}</label>
    </li>
  {/each}
</ul>
<button
  disabled={$tasksLeftCount === 0}
  on:click={doSomething}
  class="btn btn-primary mt-3">Cocher toutes les tâches</button
>
<p class="mt-3">
  {#if $tasksLeftCount == 0}
    Félicitation, c'est terminé !
  {:else}
    <span class="badge bg-secondary">{$tasksLeftCount}</span> tâche(s) restante(s)
  {/if}
</p>

<style>
  input:checked ~ label {
    text-decoration: line-through;
  }
</style>
