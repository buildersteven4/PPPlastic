<script lang="ts">
    import type { ShopInfo } from "$lib/questions";
    import type { ShopItem } from "./shopItems";
    import Products from "./Products.svelte";
    import ShoppingList from "./ShoppingList.svelte";
    import Receipt from "./Receipt.svelte";

    export let answer: string[] = [];
    export let info: ShopInfo;

    let search: string = "";
    function toggleItem(item: ShopItem) {
        if (!answer.includes(item.id)) {
            answer.push(item.id);
            answer = answer;
        } else {
            answer = answer.filter(el => el != item.id);    
        }
    }

    function removeItem(item: ShopItem) {
        answer = answer.filter(el => el != item.id);
    }
</script>

<p>{@html info.text}</p>
<div>
    <Products bought={answer} on:toggleItem={e => toggleItem(e.detail)}/>
    <Receipt items={answer} on:removeItem={e => removeItem(e.detail)}/>
    <ShoppingList items={answer}/>
</div>

<style>
    div {
        display: grid;
        grid-template-areas: 
            "list"
            "receipt"
            "shop";
        width: 100%;
    }

    @media (min-width: 600px) {
        div {
            grid-template-columns: 3fr minmax(240px, 1fr);
            grid-template-rows: auto 1fr;
            grid-template-areas: 
                "shop receipt"
                "shop list";
        }
    }
</style>
