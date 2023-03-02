<script lang="ts">
  interface Task {
    id: number;
    name: string;
    status: boolean;
  }
  let tasks: Task[] = [
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

  let newTask = "";

  function addNewTask() {
    let task = {
      id: Date.now(),
      name: newTask,
      status: false,
    };
    tasks = [...tasks, task];
    newTask = "";
  }

  $: console.table(tasks);

  function doSomething() {
    tasks = tasks.map((task) => ({ ...task, status: true }));
  }

  $: tasksLeftCount = tasks.filter((task) => task.status == false).length;
</script>

<form on:submit|preventDefault={addNewTask}>
  <div>
    <label for="newTask" class="form-label fw-bold fs-3">Nouvelle tâche</label>
    <input
      type="text"
      name="newTask"
      bind:value={newTask}
      class="form-control mb-3 w-50"
      required
    />
  </div>
  <button type="submit" disabled={!newTask} class="btn btn-primary mb-3"
    >Ajouter</button
  >
</form>

<ul class="list-group">
  {#each tasks as task}
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
  disabled={tasksLeftCount === 0}
  on:click={doSomething}
  class="btn btn-primary mt-3">Cocher toutes les tâches</button
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
