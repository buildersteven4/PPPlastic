<script lang="ts">
    import { draw } from 'svelte/transition';

    export let on : boolean;

    let w : number;
    let h : number;

    function getPoints(w : number, h : number) {
        const count = Math.round(w/3);
        const slant = 8
        let points = [];
        for (let i = 0; i <= count; i++) {
            const a = i/count;
            const x = a*(w-slant) + slant - (i%2)*slant;
            const y = (i%2)*(h-11)+6 + (Math.random()-.5)*2;

            points.push(`${x},${y}`);
        }

        return points.join(" ");
    }
</script>

<div class="scratch">
    <div bind:clientWidth={w} bind:clientHeight={h}>
        <svg>
            {#if on}
            <polyline points={getPoints(w, h)} transition:draw|local
                fill="none" stroke="black" stroke-width="1px"/>
            {/if}
        </svg>
    </div>
</div>

<style>   
    .scratch {
        position: absolute;
        left: 0;
        top: 0;
    }

    * {
        width: 100%;
        height: 100%;
    }
</style>