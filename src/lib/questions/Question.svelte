<script lang="ts">
    export let title: string = null;
</script>

<div class="paper">
    {#if title}
        <h2>{title}</h2>
    {/if}
    <slot></slot>
</div>

<style>
    div {
        padding: 1rem;
        background-color: white;
    }
    h2 {
        margin-top: 0px;
    }
</style>