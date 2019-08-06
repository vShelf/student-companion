<template>
	<div class="columns is-horizontal" style="height:100vh;display:flex">
	
	<leftnav />
	<div id="all">
		<!-- <files /> -->
		<router-view></router-view>
	</div>
		
	</div>
</template>

<script>
import leftnav from '../components/leftnav'
import courses from '../components/courses'
import programs from '@/components/programs'
import files from '@/components/files'

export default {
  components: {
    leftnav,
    courses,
    programs,
    files
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
#all {
	margin-left: 325px;
	width: 100%;
}
</style>


