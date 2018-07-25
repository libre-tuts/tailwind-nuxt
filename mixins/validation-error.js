export default {
  inject: ['$validator'],
  /* this mixins is responsible for concatinating error messages from vform and vee-validate  */
  methods: {
    /* errorBag is relataed to veeValidate config name*/
    /* form is related to vform */
    errorMessages(field) {
      return this.errors.collect(field).concat(this.form.errors.only(field))
    },
    hasError(field) {
      let errors = this.errors.collect(field).concat(this.form.errors.only(field))
      if (errors.length > 0) {
        return true
      }
      return false
    },
    hasErrors() {
      if (this.errors.items.length || this.form.errors.all().length) return true
    },
    clear(field) {
      this.errors.remove(field)
      this.form.clear(field)
    },
    clearErrors() {
      this.form.clear()
      this.errors.clear()
    }
  }
}
