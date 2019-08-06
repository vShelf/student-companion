<template>
  <div class="bg has-background-link has-text-grey">
		<div class="item">
			<div class="title has-text-white">Student Companion</div>
			
			<div class="field">
  			<p class="control has-icons-left has-icons-right">
    		<input class="input" type="email" placeholder="Email or Phone">
    		<span class="icon is-small is-left">
      		<i class="fas fa-envelope"></i>
    		</span>
    		<span class="icon is-small is-right">
      		<i class="fas fa-check"></i>
    		</span>
  			</p>
			</div>

			<div class="field">
  			<p class="control has-icons-left has-icons-right">
    		<input class="input" type="email" placeholder="Password">
    		<span class="icon is-small is-left">
      		<i class="fas fa-star-of-life"></i>
    		</span>
    		<span class="icon is-small is-right">
      		<i class="fas fa-check"></i>
    		</span>
  			</p>
			</div>

			<div class="field is-grouped">
  <p class="control">
    <router-link to="/all/programs" class="button is-info">
      Login
    </router-link>
  </p>
  <p @click="showModal()" class="control">
    <a class="button is-light">
      Create an account
    </a>
  </p>
</div>

	<modal title="Create an account" body="Do you really wanna create an account" ok="Yep" no="Nope" :action="modalAction" />
	<loader :show="showLoader" />

		</div>
	</div>
</template>

<script>
import modal from '@/components/modal'
import loader from '@/components/loader'

export default {
  name: 'sign-up',
  components: {
    modal,
    loader
  },
  data () {
    return {
      modalAction: false,
      showLoader: false
    }
  },
  methods: {
    showModal () {
      this.modalAction = !this.modalAction
    }
  },
  beforeMount () {
    this.showLoader = true
  },
  mounted () {
    this.showLoader = false
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  .bg {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
	}
	.bg .item {
		align-self: center;
		width: 500px;
		/* border: 1px solid #333; */
	}
</style>
