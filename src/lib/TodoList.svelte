<script lang="ts">
  interface Task {
    id: number;
    name: string;
    status: string;
  }

  const tasks: Task[] = [
    {
      id: 1,
      name: "Manger",
      status: "pending",
    },
    {
      id: 2,
      name: "Boire",
      status: "pending",
    },
    {
      id: 2,
      name: "Dormir",
      status: "pending",
    },
  ];
</script>

<ul class="list-group">
  {#each tasks as task}
    <li class="list-group-item">
      <input
        class="form-check-input me-1"
        type="checkbox"
        value={task.status}
        id="firstCheckbox"
      />
      <label class="form-check-label" for={task.status}>{task.name}</label>
    </li>
  {/each}
</ul>

<style>
  input:checked ~ label {
    text-decoration: line-through;
  }
</style>
