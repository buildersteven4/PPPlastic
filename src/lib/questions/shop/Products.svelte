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

    let searchBar;
</script>

<div class="shop paper">
    <header>
        <div class="logo" on:click={() => search = ""}>
            <img src="/img/logo.svg" alt="SUPERmarkt logo"/>
            <span>UPERmarkt</span>
        </div>
        <div class="fill"></div>
        <div>
            {#if search == ""}
                <img class="search-button" src="/img/search.svg" alt="zoeken" on:click={() => searchBar.focus()}/>
            {:else}
                <img class="search-button" src="/img/back.svg" alt="terug" on:click={() => search = ""}/>
            {/if}
            <input class="search" bind:value={search} placeholder="Zoeken" bind:this={searchBar}/>
        </div>
    </header>
    <main class="products">
        {#each items as item}
            <div class="shop-item" class:bought={bought.includes(item.id)} on:click={() => dispatch('toggleItem', item)}>
                <div class="image">
                    <img class="product-image" src={`/products/${item.id}.jpg`} alt={`plaatje van ${item.name}`}/>
                    {#if item.nutri != ""}
                        <img class="nutri" src={`/img/nutri-score-${item.nutri.toUpperCase()}.svg`} alt="">
                    {/if}
                    <div class="labels">
                        {#if item.houseBrand}
                            <img src="/img/logo.svg" alt="">
                        {/if}
                        {#if item.priceFavorite}
                            <img src="/img/thumb-up.png" alt="">
                        {/if}
                        {#if item.bio}
                            <img src="/img/bio.png" alt="">
                        {/if}
                        {#if item.compost}
                            <img src="/img/compost.png" alt="">
                        {/if}
                        {#if item.vega}
                            <img src="/img/vega.png" alt="">
                        {/if}
                        {#if item.vegan}
                            <img src="/img/vegan.png" alt="">
                        {/if}
                        {#if item.local}
                            <img src="/img/nl.png" alt="">
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
        flex-wrap: wrap;
        background-color:#ed1c24;
        color: #fff200;
    }

    header>* {
        display: flex;
        height: 24px;
        margin: 3px;
    }

    header img {
        height: 100%;
    }

    .logo {
        cursor: pointer;
    }

    .logo>img {
        margin-right: -2px;
    }

    .logo>span {
        font-weight: bold;
        position: relative;
        top: 2px;
    }

    .fill {
        flex-grow: 1;
    }

    .search-button {
        cursor: pointer;
    }

    .search {
        padding: 0px 5px;
        border: none;
        vertical-align: middle;
        min-width: 60ch;
        margin-left: 3px;
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
        padding: 0px 0px 40px 0px;
    }

    .product-image {
        scale: 0.96;
        width: 100%;
    }

    .bought .product-image {
        opacity: .5;
    }

    .shop-item:hover .product-image {
        scale: 1;
    }

    .nutri {
        position: absolute;
        left: 0;
        bottom: 40px;
        height: 40px;
    }

    .labels {
        position: absolute;
        left: 0;
        bottom: 0;
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