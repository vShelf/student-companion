<template>
	<div class="column">
			<div style="padding:10px;position:relative">

				<loader :show="showLoader" />
				<!-- <div class="title is-6" style="font-family">
					Computer Science > Math 101
				</div> -->

				<div class="subtitle is-3">
					Programs
				</div>

				<div class="courses_container">

					<router-link to="/all/courses" class="course">
						Computer Science
					</router-link>
					<router-link to="/all/courses" class="course">
						Computer Science
					</router-link>
					<router-link to="/all/courses" class="course">
						Computer Science
					</router-link>
					<router-link to="/all/courses" class="course">
						Computer Science
					</router-link>

				</div>

			</div>
	</div>
</template>

<script>
import loader from '@/components/loader'

export default {
  components: {
    loader
  },
  data () {
    return {
      showLoader: false
    }
  },
  beforeMount () {
    this.showLoader = true
  },
  mounted () {
    setTimeout(() => {
      this.showLoader = false
    }, 3000)
  }
}
</script>

<style scoped>
.courses_container {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
}
.course {
	border: 1px solid #ddd;
	flex-basis: 49%;
	padding: 20px 10px;
	margin-bottom: 15px;
	cursor: pointer;
}
.course:hover {
	border: 1px solid #209cee;
}
</style>


