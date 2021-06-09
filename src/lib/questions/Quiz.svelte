<script lang="ts">
    import type { QuizInfo } from "../questions";
    import Question from "./Question.svelte";

    export let answer: string = "";
    export let info: QuizInfo;
</script>

<Question title={info.text}>
    {#if info.image}
        <img src={`/img/${info.image}.png`} alt={info.image}/>
    {/if}

    <div class="options" class:haschosen={answer != ""}>
        {#each info.options as option, i}
                <label 
                    class:correct={answer != "" && i == info.correct}
                    class:chosen={answer == option}>

                    <input type=radio bind:group={answer} value={option} 
                        disabled={answer != ""}>
                    {option}
                </label>
        {/each}
    </div>
</Question>

<style>
    .options {
        display: grid;
    }

    label {
        margin-top: 1rem;
    }

    img {
        margin-top: 1rem;
        max-width: 100%;
        max-height: 150px;
    }

    .haschosen input {
        display: none;
    }

    .haschosen label::before {
        content: "";
        display: inline-block;
        width: 2ch;
    }

    .haschosen .correct {
        color: green;
    }

    .haschosen .correct::before {
        content: "✔";
    }

    .haschosen .chosen:not(.correct):not(:last-child) {
        color: red;
    }

    .haschosen .chosen:not(.correct):not(:last-child)::before {
        content: "✘";
    }

    .haschosen .chosen:not(.correct):last-child {
        color: orange;
    }

    .haschosen .chosen:not(.correct):last-child::before {
        content: "~";
        font-weight: bold;
    }

    input {
        margin: 0;
    }
</style>