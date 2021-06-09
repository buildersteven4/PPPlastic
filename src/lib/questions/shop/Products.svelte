<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ShopItem } from "./shopItems";
    import { shopItems } from "./shopItems";

    export let bought : string[];

    let search : string = "";

    const dispatch = createEventDispatcher();

    let searchTerms : string[];
    $: searchTerms = search.toLowerCase().split(" ").filter(term => term.length > 0);

    let items : ShopItem[];
    $: items = shopItems.filter(item => {
        for (const term of searchTerms) {
            if (!item.name.toLowerCase().includes(term) && 
                !item.tags.toLowerCase().includes(term)) {
                return false;
            }
        }
        return true;
    });
</script>

<div class="shop paper">
    <header>
        <div class="logo">
            <img src="/img/logo.svg" alt="SUPERmarkt logo"/>
            <span>UPERmarkt</span>
        </div>
        <input class="search" bind:value={search} placeholder="Zoeken"/>
    </header>
    <main class="products">
        {#each items as item}
            <div class="shop-item" class:bought={bought.includes(item.id)} on:click={() => dispatch('toggleItem', item)}>
                <div class="image">
                    <img src={`/products/${item.id}.jpg`} alt={`plaatje van ${item.name}`}/>
                    <div class="labels">
                        {#if item.okCompost}
                            <img src="/img/ok-compost.png" alt="">
                        {/if}
                        {#if item.priceFav}
                            <img src="/img/thumb-up.png" alt="">
                        {/if}
                        {#if item.vega}
                            <img src="/img/vega.png" alt="">
                        {/if}                        
                        {#if item.vegan}
                            <img src="/img/vegan.png" alt="">
                        {/if}
                    </div>
                    <div class="price">€{item.price.toFixed(2)}</div>
                </div>
                <div class="label">{item.name}</div>
                <svg class="add-button" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10"/>
                    <line x1="5" y1="10" x2="15" y2="10"/>
                    <line class="vertical" x1="10" y1="5" x2="10" y2="15"/>
                </svg>
            </div>
        {/each}
    </main>
</div>

<style>
    .shop {
        grid-area: shop;
    }

    header {
        display: flex;
        background-color:#ed1c24;
        color: #fff200;
    }

    .logo {
        display: flex;
        height: 24px;
        margin: 3px;
        flex-grow: 1;
    }

    .logo>img {
        height: 100%;
        margin-right: -2px;
    }

    .logo>span {
        font-weight: bold;
        position: relative;
        top: 2px;
    }

    .search {
        padding: 0px 5px;
        margin: 2px;
        border: none;
        vertical-align: middle;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        row-gap: 6px;
        column-gap: 6px;
        padding: 6px;
    }

    .shop-item {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto 1fr;
        background: white;
        cursor: pointer;
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.15);
    }

    .image {
        position: relative;
        grid-column-end: span 2;
    }

    .image>img {
        scale: 0.96;
    }

    .bought .image>img {
        opacity: .5;
    }

    .shop-item:hover>.image>img {
        scale: 1;
    }

    .labels {
        position: absolute;
        left: 0;
        top: 0;
    }

    .labels>img {
        width: 30px;
        height: 30px;
        margin: 2px
    }

    .price {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 5px;
        font-size: 25px;
        background-color: white;
    }

    .image>img {
        width: 100%;
    }

    .label {
        padding: 2px;
    }

    .add-button {
        height: 20px;
        margin: 5px;
        scale: 0.95;
    }

    .add-button circle {
        fill: #ed1c24;
    }

    .add-button line {
        stroke: white;
        stroke-width: 1.7px;
    }

    .bought .vertical {
        display: none;
    }

    .shop-item:hover .add-button {
        scale: 1.05;
    }
</style>