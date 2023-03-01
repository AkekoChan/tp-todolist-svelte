<script lang="ts">
  interface Task {
    id: number;
    name: string;
    status: boolean;
  }

  const tasks: Task[] = [
    {
      id: 1,
      name: "Manger",
      status: false,
    },
    {
      id: 2,
      name: "Boire",
      status: false,
    },
    {
      id: 2,
      name: "Dormir",
      status: false,
    },
  ];

  function doSomething() {
    tasks.map((task) => ({ ...task, status: true }));
  }

  $: tasksLeftCount = tasks.filter((task) => task.status == false).length;
</script>

<ul class="list-group">
  {#each tasks as task}
    <li class="list-group-item">
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
  disabled={tasksLeftCount === 0}
  on:click={doSomething}
  class="btn btn-primary mt-3">Cocher toutes les cases</button
>
<p class="mt-3">
  {#if tasksLeftCount == 0}
    Félicitation, c'est terminé !
  {:else}
    <span class="badge bg-secondary">{tasksLeftCount}</span> tâche(s) restante(s)
  {/if}
</p>

<style>
  input:checked ~ label {
    text-decoration: line-through;
  }
</style>
