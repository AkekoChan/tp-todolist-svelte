<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function addTask() {
    dispatch("add"), {};
  }
</script>

<form>
  <div>
    <label for="newTask" class="form-label fw-bold fs-3">Nouvelle tâche</label>
    <input type="text" name="newTask" class="form-control mb-3 w-50" />
  </div>
  <button type="submit" class="btn btn-primary mb-3">Ajouter</button>
</form>
