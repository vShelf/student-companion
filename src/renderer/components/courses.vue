<template>
	<div class="column">
			<div style="padding:10px;position:relative">

				<loader :show="showLoader" />
				<!-- <div class="title is-6" style="font-family">
					Computer Science > Math 101
				</div> -->

				<div class="subtitle is-3">
					Computer Science
				</div>

				<div class="line subtitle is-5">Year 1</div>
				<div class="courses_container">
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/contribute" class="course add">
						+
					</router-link>
				</div>

				<div class="line subtitle is-5">Year 2</div>
				<div class="courses_container">
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/contribute" class="course add">
						+
					</router-link>
				</div>

				<div class="line subtitle is-5">Year 3</div>
				<div class="courses_container">
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/files" class="course">
						CSM 166
					</router-link>
					<router-link to="/all/contribute" class="course add">
						+
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
    }, 1000)
  }
}
</script>

<style scoped>
.courses_container {
	display: flex;
	flex-flow: row wrap;
}
.course {
	border: 1px solid #ddd;
	padding: 10px;
	margin-bottom: 15px;
	margin-right: 10px;
	cursor: pointer;
}
.course:hover {
	border: 1px solid #209cee;
}
.course.add {
	border-radius: 40px;
	font-weight: bolder;
	border-color: #209cee;
}
.line {
	border-bottom: 1px solid #ddd;
	margin-top: 30px;
}
</style>


