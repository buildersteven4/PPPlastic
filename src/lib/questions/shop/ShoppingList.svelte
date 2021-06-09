<script lang="ts">
    import { shoppingList } from "./toBuyList";
    import type { ShoppingListItem } from "./toBuyList";
    import Scratch from "./Scratch.svelte";
    
    export let items : string[];

    function isItemCheck(item : ShoppingListItem, items: string[]) {
        for (const id of item.ids) {
            if (items.includes(id)) {
                return true
            }
        }
        return false
    }
</script>

<div class="shopping-list paper">
    <div>nog te kopen:</div>
    {#each shoppingList as item}
        <div class="shopping-list-item">
            - {item.name}
            <Scratch on={isItemCheck(item, items)}/>
        </div>
    {/each}
</div>

<style>
    .shopping-list-item {
        position: relative;
    }

    .shopping-list {
        grid-area: list;
        justify-items: start;
        align-content: start;
        display: grid;
        row-gap: 6px;
        font-family: 'Architects Daughter', cursive;
        padding: 10px;
    }
</style>