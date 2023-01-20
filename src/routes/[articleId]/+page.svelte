<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ article } = data)
</script>

<form action="?/updateArticle" method="POST">
	<h3>Editing: {article.title}</h3>

    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Task Name</span>
        <input type="text" id="title"  value={article.title} name="title" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>

    <div class="input-group">
        <span class="input-group-text">Description</span>
        <textarea class="form-control" name="content" value={article.content} rows={5} aria-label="With textarea"></textarea>
          </div>
	<button type="submit" class="btn btn-outline-success">Update Article</button>
</form>