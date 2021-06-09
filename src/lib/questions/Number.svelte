<script lang="ts">
    import type { NumberInfo } from "../questions";
    import Question from "./Question.svelte";

    export let info: NumberInfo;
    export let answer: number = info.min || 0;
</script>

<Question title={info.text}>
    <label>
        <input type=number bind:value={answer} min={info.min} max={info.max}>
        {#if (info.min != null && answer < info.min) || (info.max != null && answer > info.max)}
            <span>{"⚠ " + (typeof info.outOfRangeText == "function" ? info.outOfRangeText(answer) : info.outOfRangeText) }</span>
        {/if}
    </label>
</Question>

<style>
    span  {
        color: red;
    }

    input:focus+span {
        display: none;
    }
</style>
