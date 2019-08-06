<template>
	<div class="column">

			<div style="padding:10px;position:relative">


				<loader :show="showLoader" />
				<!-- <div class="title is-6" style="font-family">
					Computer Science > Math 101
				</div> -->

				<div class="subtitle is-3">
					Submit course material
				</div>

				<div class="columns">
					<div class="column is-half">
						<div>
							Thank you for considering to contribute to this platform. Just click the box on the right
							or drag and drop file into the box.
						</div>
						<div class="field">
							<div class="label">Course code</div>
							<select class="input" name="" id="" disabled>
								<option>Select one</option>
								<option selected>CSM 154</option>
								<option>Computer Engineering</option>
							</select>
						</div>
						<div class="field">
							<div class="label">Rename material</div>
							<input class="input" type="text" placeholder="" />
						</div>
					</div>
					
					<div class="column is-half">
						<div @click="filer" class="file-upload">
							Click or Drop file here
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
  methods: {
    filer () {
      // nothing to do here
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
.file-upload {
	width:300px;
	height:300px;
	background: #f3f3f3;
	border: 2px dashed #9c9c9c;
	color: #9c9c9c;
	text-align:center;
	margin:auto;
	line-height:300px;
	transition: .4s;
}
.file-upload:hover {
	font-weight: bolder;
	color: #209cee;
	cursor: pointer;
	border-color: #209cee;
}
</style>


