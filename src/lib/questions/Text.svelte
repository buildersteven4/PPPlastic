<script lang="ts">
    import type { TextInfo } from "../questions";
    import Question from "./Question.svelte";

    export let info: TextInfo;

    let lines : string[];
    $: lines = info.text.split("\n");
</script>

<Question>
    {#each lines as line}
        <p>{@html line}</p>
    {/each}
</Question>

<style>
    p {
        max-width: 80ch;
    }
</style>