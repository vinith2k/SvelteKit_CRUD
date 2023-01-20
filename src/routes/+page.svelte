<script lang="ts">

import type { PageData } from "./$types";

export let data:PageData

$:({articles} = data)

</script>

<div class="container">
	<div class="row">
		
			<div class="col-md-6 my-4">
				<h2>Tasks:</h2>
				{#each articles as article}
					<article>
						<header style="font-size: 25px;">{article.title}</header>
						<p style="font-size: 20px;">
							{article.content}
						</p>
						    <form action="?/deleteArticle&id={article.id}" method="POST">
								<button  style="width: 50%;" type="submit" class="btn btn-sm btn-outline-danger mx-3">Delete Article</button>
							</form><br>
						<a href="/{article.id}" style="width: 50%;margin-left: 16px;"  role="button" class="btn btn-sm btn-outline-primary">Edit Article</a>
					</article>
					{/each}
			</div>
			<div class="col-md-6 my-4">
				<form action="?/createArticle" method="POST">
				<h3>New Tasks</h3>
			
				    <div class="input-group mb-3">
					<span class="input-group-text" id="inputGroup-sizing-default">Task Name</span>
					<input type="text" id="title" name="title" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				    </div>
			
					<div class="input-group">
					<span class="input-group-text">Description</span>
					<textarea class="form-control" name="content" rows={5} aria-label="With textarea"></textarea>
				  	</div><br>
		
					  <button type="submit" style="width: 100%;"  class="btn btn-outline-success">Success</button>
			</form>
			</div>
	
		
	</div>
</div>