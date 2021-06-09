<script lang="ts">
    import type { OptionsInfo } from "../questions";
    import Question from "./Question.svelte";

    export let answer: string = "";
    export let info: OptionsInfo;

    let textField = "";
    if (answer[0] == "#") textField = answer.slice(1)
    $: if (answer == null) answer = "";
    $: if (answer[0] == "#") answer = '#' + textField;
</script>

<Question title={info.text}>
    <div class="options" class:long-options={info.options.length <= 1}>
        {#each info.options as option, i}
            {#if info.hasOthersOption && i == info.options.length - 1}
                <label class="other">
                    <input type=radio bind:group={answer} value={'#' + textField}>
                    {option}
                    <input bind:value={textField}>
                </label>
            {:else}
                <label>
                    <input type=radio bind:group={answer} value={option}>
                    {option}
                </label>
            {/if}
        {/each}
    </div>
</Question>

<style>
    .options {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18ch, 1fr)) [end];
        column-gap: 1rem;
    }

    .options.long-options {
        grid-template-columns: 1fr;
    }

    label:not(:first-child), :not(.long-options)>label {
        margin-top: 1rem;
    }

    .other {
        grid-column: 1 / end;
    }

    input {
        margin: 0;
    }
</style>