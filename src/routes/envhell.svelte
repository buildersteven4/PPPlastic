<script>
    let env = []
    for (const key in process.env) {
        if (Object.hasOwnProperty.call(process.env, key)) {
            const element = process.env[key];
            env.push([key, element])
        }
    }
</script>

{#each env as [k, v]}
    {k}: {v}
{/each}