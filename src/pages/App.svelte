<script>
  import Categories from "~/components/Categories";

  let selectedCategorie = null;

  const select = (event) => (selectedCategorie = event.detail);
</script>

<div>
  <Categories on:selected={select} />

  {#if selectedCategorie}
    <h1>Categorie selected {selectedCategorie.name}</h1>
  {/if}
</div>
