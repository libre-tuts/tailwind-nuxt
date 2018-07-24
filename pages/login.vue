<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-1/3">
      <h1 class="font-hairline mb-6 text-center text-white">Login to our Website</h1>
      <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <form @submit.prevent="login()">
          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">Username or Email</label>
            <input
              v-validate="'required|min:6'"
              v-model="form.username"
              type="text"
              class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Username"
              data-vv-name="username"
            >
            <span
              v-for="error in errorMessages('username')"
              :key="error"
              class="font-hairline text-xs"
              :class="{ 'text-red': hasErrors('username') }"
            >
              {{ error }}
            </span>
          </div>

          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">Password</label>
            <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password">
          </div>
        </form>
        <div class="flex items-center justify-between">
          <button
            :disabled="form.busy"
            @click="login()"
            class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-4 rounded"
          >
            Login
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
export default {
  mixins: [validationError],
  data: () => ({
    form: new Form({})
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
