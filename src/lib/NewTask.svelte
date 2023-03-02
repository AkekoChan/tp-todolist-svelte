<script lang="ts">
  import { tasks } from "./stores.js";

  let newTask = "";

  function addNewTask() {
    let task = {
      id: Date.now(),
      name: newTask,
      status: false,
    };
    tasks.set([...$tasks, task]);
    newTask = "";
  }

  $: console.table($tasks);
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
