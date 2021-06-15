<script lang="ts">
    import type { PageInfo } from "./questions";
    import Text from "./questions/Text.svelte";
    import Number from "./questions/Number.svelte";
    import Options from "./questions/Options.svelte";
    import Quiz from "./questions/Quiz.svelte";
    import Shop from "./questions/shop/Shop.svelte";
    import Bins from "./questions/bins/Bins.svelte";

    export let info : PageInfo;
    export let answers : any[]; 

    $: {
        let scrollSnap = true
        for (const question of info.questions) {
            if (question.type == "shop" || question.type == "bins") {
                scrollSnap = false;
                break;
            }
        }
        document.documentElement.classList.toggle("scroll-snap", scrollSnap);
    }
</script>

<svelte:head>
    <title>{info.title}</title>
</svelte:head>

<main>
    {#if info.title != ""}
        <h1>{info.title}</h1>
    {/if}
    {#each info.questions as question}
        {#if question.type == "text"}
            <Text info={question}/>
        {:else if question.type == "number"}
            <Number info={question} bind:answer={answers[question.i]}/>
        {:else if question.type == "options"}
            <Options info={question} bind:answer={answers[question.i]}/>
        {:else if question.type == "shop"}
            <Shop info={question} bind:answer={answers[question.i]}/>
        {:else if question.type == "bins"}
            <Bins info={question} bind:answer={answers[question.i]}/>
        {:else if question.type == "quiz"}
            <Quiz info={question} bind:answer={answers[question.i]}/>
        {/if}
    {/each}
</main>

<style>
    :global(html.scroll-snap) {
        scroll-snap-type: y proximity;
        scroll-padding: 1rem;
    }

    main>:global(*) {
        scroll-snap-align: start;
    }
</style>
