<template>
	<div :class="{modal:true,'is-active':action}">
  	<div class="modal-background"></div>
  	<div class="modal-card">
    	<header class="modal-card-head is-small">
      	<p class="modal-card-title">title</p>
      	<button class="delete" aria-label="close"></button>
    	</header>
    	<section class="modal-card-body">
      	body
    	</section>
    	<footer class="modal-card-foot">
      	<button class="button is-success">ok</button>
      	<button class="button">no</button>
    	</footer>
  	</div>
	</div>
</template>

<script>
export default {
  props: ['title', 'body', 'ok', 'no', 'action']
}
</script>

