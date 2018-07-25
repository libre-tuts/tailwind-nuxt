<template>
  <div class="mb-4">
    <label class="flex ml-12 w-full font-bold text-grey-darker block mb-2">{{ name }}</label>
    <!-- prefixIcon -->
    <div class="flex w-full">
      <span
        v-visible="prefixIcon != null"
        class="inline-flex fill-current inline-block"
        :class="{'m-4': prefixIcon === null, 'h-6': !prefixIcon === null,'w-6': prefixIcon === null}"
      >
        <fa
          v-if="prefixIcon"
          class="inline-flex fill-current inline-block"
          :class="[{'m-4': prefixIcon != null, 'h-6': prefixIcon != null,'w-6': prefixIcon != null},prefixIconColor]"
          :icon="prefixIcon"
        />
      </span>
      <input
        v-validate="validation"
        v-model="form[field]"
        type="text"
        class="inline-flex inline-block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
        :placeholder="placeHolder"
        :data-vv-name="field"
      >
      <!-- suffixIcon -->
      <span
        v-visible="suffixIcon != null"
        class="inline-flex inline-block"
        :class="{'m-4': !hasError(field), 'h-6': !hasError(field),'w-6': !hasError(field)}"
      >
        <fa
          v-if="hasError(field)"
          @click="clear(field)"
          class="fill-current text-red-dark cursor-pointer"
          :class="[{'m-4': hasError(field), 'h-6': hasError(field),'w-6': hasError(field)},suffixIconColor]"
          size="lg"
          :icon="suffixIcon"
        />
      </span>
    </div>
    <span
      class="text-xs w-full flex pt-2 ml-12"
      v-for="error in errorMessages(field)"
      :key="error"
      :class="errorMessageColor"
    >
      {{ error }}
    </span>
  </div>
</template>

<script>
import validationError from '../../mixins/validation-error.js'
export default {
  mixins: [validationError],
  props: {
    name: {
      type: String,
      required: true
    },
    prefixIcon: {
      type: String,
      default: function() {
        return null
      }
    },
    prefixIconColor: {
      type: [Object, String, Array],
      default: function() {
        return { 'text-teal': true }
      }
    },
    suffixIcon: {
      type: String,
      default: function() {
        return null
      }
    },
    suffixIconColor: {
      type: [Object, String, Array],
      default: function() {
        return { 'text-teal': true }
      }
    },
    errorMessageColor: {
      type: [Object, String, Array],
      default: function() {
        return { 'text-red': true }
      }
    },
    placeHolder: {
      type: String,
      default: function() {
        return this.name
      }
    },
    field: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    validation: {
      type: [String, Array, Object],
      default: function() {
        return null
      }
    }
    // suffixCb: {
    //   type: Function,
    //   default: function() {
    //     return this.name
    //   }
    // },
  }
}
</script>

<style>
</style>
