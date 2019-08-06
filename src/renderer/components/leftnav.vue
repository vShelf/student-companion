<template>
	<div class="column is-narrow has-background-info sidenav-fix">
			<div style="width:300px;padding:10px;margin-top:50px">

				<div class="title is-5 has-text-white">Student Companion</div>

				<div class="field is-grouped">
  				<p class="control is-expanded">
    				<input class="input" type="text" placeholder="Find course material">
  				</p>
  				<p class="control">
    				<a class="button is-success">
      				Search
    				</a>
  				</p>
				</div>

				<div class="directions">
					<router-link to="/all/programs">
						All Programs
					</router-link>
					<router-link to="/all/contribute">
						Contribute
					</router-link>
					<router-link to="/all/programs">
						Settings
					</router-link>
				</div>

				
			</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidenav-fix {
	position: fixed;
	left: 0;
	bottom: 0;
	top: 0;
}
.directions {
	display: flex;
	flex-flow: column nowrap;
	margin-top: 30px;
}
.directions a {
	color: #fff;
}
</style>


