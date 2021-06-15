<script>
    let env = []
    for (const key in process.env) {
        if (Object.hasOwnProperty.call(process.env, key)) {
            const element = process.env[key];
            env.push([key, element])
        }
    }
    const pass = process.env.DB_PASSWORD;
    const uri = `mongodb+srv://ppplastic_app:${pass}@cluster0.4yp1e.mongodb.net/?retryWrites=true&w=majority`
</script>

<p>{uri}</p>
{#each env as [k, v]}
    <p>{k}: {v}</p>
{/each}
