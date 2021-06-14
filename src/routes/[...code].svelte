<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { getPagesInfo, pageCount, version } from "$lib/questions";
    import type { PageInfo } from "$lib/questions";
    import fetchRetry from "$lib/fetchRetry";
    import { page } from "$app/stores";
    import { generatePrices, prices, setPrices } from "$lib/questions/shop/shopItems";
    
    const storage = window.localStorage;

    if (storage.getItem("version") != version
        || Number(storage.getItem("page")) >= pageCount - 1) {
        clearStorage();
    }

    let alt = (storage.getItem("alt") || (Math.random() < 0.5 && 'true')) == 'true';
	let currentPage = Number(storage.getItem("page"));
	let answers = JSON.parse(storage.getItem("answers")) || [];
    let startTime = Number(storage.getItem("startTime") || new Date().getTime());
    if (storage.getItem("prices")) {
        setPrices(JSON.parse(storage.getItem("prices")));
    } else {
        generatePrices();
        storage.setItem("prices", JSON.stringify(prices));
    }

    $: storage.setItem("alt", String(alt))
    $: storage.setItem("page", String(currentPage));
    $: storage.setItem("answers", JSON.stringify(answers));
    $: storage.setItem("startTime", String(startTime));
    storage.setItem("version", version);

    let pagesInfo: PageInfo[];
    $: pagesInfo = getPagesInfo(alt);

    $: {currentPage; window.scrollTo(0,0);}

    $: console.log({
            version: version,
            alt: alt,
            code: $page.params["code"],
            startTime: startTime,
            endTime: new Date().getTime(),
            prices: prices,
        });
    $: console.log(answers);

	function submit() {
		currentPage += 1;

        const data = {
            version: version,
            alt: alt,
            answers: answers,
            code: $page.params["code"],
            startTime: startTime,
            endTime: new Date().getTime(),
            prices: prices,
        }
        
        fetchRetry('/submit', 1000, 5, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'} 
        });

        clearStorage();
	}

    function reset() {
        clearStorage();
        
        generatePrices();
        storage.setItem("prices", JSON.stringify(prices));
        
        answers = [];
        currentPage = 0;
        alt = Math.random() < 0.5;

        storage.setItem("version", version);
    }

    function clearStorage() {
        storage.removeItem("answers");
        storage.removeItem("page");
        storage.removeItem("alt");
        storage.removeItem("startTime");
        storage.removeItem("prices")
    }
</script>

<Page info={pagesInfo[currentPage]} bind:answers={answers}/>

{#if currentPage < pagesInfo.length - 2}
	<button on:click={() => currentPage += 1}>Volgende</button> 
{:else if currentPage == pagesInfo.length - 2}
	<button on:click={submit}>Verstuur</button> 
{:else}
    <button on:click={reset}>Opnieuw beantwoorden</button>
{/if}


<style>
    :global(html) {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: rgb(249, 248, 255);
        background: url("img/noise.jpg");
        background-repeat: repeat;
    }

    :global(.paper) {
        margin: 1rem;
        position: relative;
        background: rgb(255,255,255);
        background: radial-gradient(farthest-side at 100% 10%, rgba(255,255,255,1) 40%, rgb(250, 250, 250) 100%);
    }

    :global(.paper::before) {
        content: "";
        z-index: -1;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        position: absolute;
        width: 100%;
        height: calc(100% - 4px);
        top: 2px;
        left: 0%;
    }

    button {
        float: right;
        margin: 1rem;
        scroll-snap-align: end;
    }

    :global(p, h1, h2) {
        margin: 0;
    }

    :global(p:not(:first-child)) {
        margin-top: 1rem;
    }

    :global(h1:not(:first-child)) {
        margin-top: 3rem;
    }

    :global(h2:not(:first-child)) {
        margin-top: 3rem;
    }
</style>