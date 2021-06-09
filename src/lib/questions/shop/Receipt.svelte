<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { slide } from "svelte/transition";
    import type { ShopItem } from "./shopItems";
    import { shopItems } from "./shopItems";

    export let items : string[];

    let itemList : ShopItem[];
    $: itemList = items.map(itemId => {
        for (const item of shopItems) {
            if (itemId == item.id) {
                return item;
            }
        }
        return null;
    });

    $: total = itemList.reduce((sum : number, item) => sum + item.price, 0);

    const dispatch = createEventDispatcher();
</script>

<div class="receipt paper">
    <div class="title">bonnetje</div>
    <div class="seperator"></div>
    {#each itemList as item (item.id)}
        <div class="item" on:click={() => dispatch('removeItem', item)} transition:slide|local>
            <div>{item.name}</div>
            <div>€{item.price.toFixed(2)}</div>
        </div>
    {/each}
    <div class="seperator"></div>
    <div class="total">
        <div>totaal</div>
        <div>€{total.toFixed(2)}</div>
    </div>
</div>

<style>
    .receipt {
        grid-area: receipt;
        align-content: start;
        display: grid;
        row-gap: 6px;
        font-family: 'Courier New', Courier, monospace;
        padding: 10px;
    }

    .receipt>div:not(.title) {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 5em;
    }

    .title {
        text-align: center;
    }

    .seperator {
        border-bottom: black dashed 1px;
        text-align: center;
    }

    .item {
        cursor: pointer;
    }

    .item:hover {
        text-decoration: line-through;
    }

    .total {
        font-weight: bold;
    }
</style>