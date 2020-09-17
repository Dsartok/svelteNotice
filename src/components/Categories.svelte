<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const categories = [];

  let newCategorieName = "";

  const addNewCategorie = () => {
    categories.push({ id: categories.length, name: newCategorieName });
    newCategorieName = "";
  };

  const selectCategorie = (categorie) => dispatch("selected", categorie);
</script>

<style>
  .categorie {
    padding: 20px 40px;
    border: 1px solid black;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    display: inline-block;
    cursor: pointer;
  }
</style>

<div class="categories">
  <div class="categories__new">
    <input bind:value={newCategorieName} />
    <button on:click={addNewCategorie}>Add</button>
  </div>

  {#if !categories.length}
    <div class="categories__no">There are no categories yet...</div>
  {/if}

  {#each categories as categorie (categorie.id)}
    <div on:click={() => selectCategorie(categorie)} class="categorie">
      {categorie.name}
    </div>
  {/each}
</div>
