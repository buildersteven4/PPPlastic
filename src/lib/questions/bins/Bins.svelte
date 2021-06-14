<script lang="ts">
    import type { BinsInfo } from "$lib/questions";
    import Question from "../Question.svelte";
    import { shopItems } from "../shop/shopItems";
    import type { ShopItem } from "../shop/shopItems";
    import { fly } from 'svelte/transition';
    
    const binIndicies = [0,1,2,3,4];
    const binNames = ["Rest", "Papier", "Plastic", "GFT", "Glass"];
    const binColors = ["grey", "blue", "yellow", "green", "red"];

    export let answer: string[][] = [[],[],[],[],[]];
    export let info: BinsInfo;

    let items = [
        "pesto_1", "diepvries_aardbeien_1", "chips_1", "pasta_penne_1", "mozzarella_1", 
        "cherry_tomaatjes_2", "rode_paprika_2", "strooikaas_2", "rucola_2"
    ].map(id => {
        for (const item of shopItems) {
            if (id == item.id) {
                return item
            }
        }
    });

    let itemNumber = 0;
    let item : ShopItem;
    $: itemNumber = answer.reduce((count, bin) => count + bin.length, 0);
    $: item = items[itemNumber];

    function onBinClick(bin: number) {
        answer[bin].push(item.id);
        answer = answer;
    }
</script>

<Question>
    <div class="container">
        <div class="trash">
            {#each items as item, i}
                {#if i == itemNumber}
                    <div class="trash-item" in:fly|local={{x:-300}} out:fly|local={{x:300}}>
                        <img src={`/products/${item.id}.jpg`} alt={`plaatje van ${item.name}`}/>
                        <div class="label">
                            De verpakking van:<br/>
                            {item.name}
                        </div>
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
                    </div>
                {/if}
            {/each}
        </div>

        <div class="bins">
        {#each binIndicies as i}
            <div class="bin" on:click={() => onBinClick(i)}>
                <img class="open" src={`/img/${binColors[i]}-bin-open.png`} alt={`Een open ${binNames[i]} prullenbak`}/>
                <img class="closed" src={`/img/${binColors[i]}-bin-closed.png`} alt={`Een gesloten ${binNames[i]} prullenbak`}/>
                <div>{binNames[i]}</div>
            </div>
        {/each}
        </div>
    </div>
</Question>

<style>
    .container {
        display: grid;
        max-height: 100vh;
        grid-template-rows: auto auto;
    }

    .trash {
        position: relative;
        height: min(200px, 30vw);
        width: min(100%,500px);
        justify-self: center;
    }

    .trash-item {
        position: absolute;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: min(200px, 30vw) 1fr;
        grid-template-rows: 1fr auto;
        background: white;
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.15);
    }

    .trash-item>img {
        width: 100%;
        grid-row-end: span 2;
    }

    .trash-item>.label {
        font-size: min(4vw, 1.5rem);
        font-weight: bold;
        overflow-wrap: anywhere;
    }

    .trash-item>.labels>img {
        width: min(60px, 10vw);
        height: min(60px, 10vw);
        margin: 2px
    }

    .bins {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: flex-start;
        place-items: center;
        column-gap: 10px;
        margin-top: 1rem;
    }

    .bin {
        display: grid;
    }

    .bin>img {
        width: 100%;
        max-width: max-content;
    }

    .bin>div {
        text-align: center;
        font-weight: bold;
    }

    .bin:hover .closed {
        display: none;
    }

    .bin:not(:hover) .open {
        display: none;
    }
</style>