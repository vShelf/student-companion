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

				<div class="line subtitle is-5">CSM 166 - Structural analysis</div>
				<div class="courses_container">

					<div class="course">
						CSM 166
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>
					<div class="course">
						CSM 166
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>
					<div class="course">
						Introduction to Structural Programming with C++
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>
					<div class="course">
						CSM 166
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>
					<div class="course">
						CSM 166
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>
					<div class="course">
						Introduction to Structural Programming with C++
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>
					<div class="course">
						CSM 166
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>
					<div class="course">
						CSM 166
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>
					<div class="course">
						Introduction to Structural Programming with C++
						<div class="info">
							<div class="item">1.33MB</div>
							<div class="item">pdf</div>
						</div>
					</div>

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
.line {
	border-bottom: 1px solid #ddd;
	margin-top: 30px;
}
.courses_container {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
}
.course {
	border: 1px solid #ddd;
	flex-basis: 100%;
	padding: 20px 10px;
	margin-bottom: 15px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
}
.course:hover {
	border: 1px solid #209cee;
}
.info {
	display: flex;
}
.info .item {
	margin-right: 10px;
	padding: 1px 3px;
	border: 1px solid #209cee;
	color: #209cee;
}
</style>


