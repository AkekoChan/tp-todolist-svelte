import { writable, derived } from "svelte/store";

export const tasks = writable([
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
]);

export let tasksLeftCount = derived(
  tasks,
  ($tasks) => $tasks.filter((task) => task.status == false).length
);
