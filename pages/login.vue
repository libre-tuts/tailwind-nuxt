<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-1/2">
      <h1 class="font-hairline mb-6 text-center text-white pt-24">Login Page</h1>
      <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <form @submit.prevent="login()">
          <v-input
            name="Username or Email"
            place-holder="Type Username"
            field="username"
            prefix-icon="envelope"
            prefix-icon-color="text-yellow-dark"
            :form="form"
            suffix-icon="undo"
            suffix-icon-color="text-green"
            :validation="'required|min:6|email'"
          />
          <v-input
            name="Password"
            place-holder="Type Password"
            field="password"
            prefix-icon="lock"
            :prefix-icon-color="{'text-grey-darker': true}"
            :form="form"
            suffix-icon="undo"
            suffix-icon-color="text-green"
            :validation="'required|min:6'"
          />
        </form>
        <div class="flex items-center justify-between">
          <button
            @click="login()"
            class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            v-if="hasErrors()"
            @click="clearErrors()"
            class="bg-blue-light hover:bg-blue text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Clear Errors
            <fa
              class="w-4 h-4 fill-current -mt-1 pt-1 inline-flex"
              icon="recycle"
            />
          </button>

          <a class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right" href="#">
            Forgot Password?
          </a>
        </div>

      </div>
      <div class="text-center">
        <p class="text-grey-dark text-sm">Don't have an account? <a href="#" class="no-underline text-blue font-bold">Create an Account</a>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import validationError from '../mixins/validation-error.js'
import vInput from '../components/form/v-input'
export default {
  components: {
    vInput
  },
  mixins: [validationError],
  data: () => ({
    form: new Form({
      username: '',
      password: ''
    })
  }),
  head: {
    title: 'Login - Page',
    meta: [{ hid: 'description', name: 'description', content: 'Login - Page' }]
  },
  methods: {
    login() {
      let self = this
      self.$validator.validateAll()
      if (!self.errors.any()) {
        this.form.busy = true
        this.form.get('/api/login')
      }
    }
  }
}
</script>

<style>
</style>
