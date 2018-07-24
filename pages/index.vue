<template>
  <div>
    <div class="bg-indigo-darkest text-center py-4 lg:px-4">
      <div class="p-2 bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span class="flex rounded-full bg-indigo uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
        <span class="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          <p
            v-for="link in nuxtlinks"
            :key="link.name"
            :to="link"
            :class="{'inactive-link': inActiveLink(link), 'is-active-link': activeLink(link) }"
            @click="goTo(link)"
          >
            {{ link.name }}
          </p>
        </div>
        <p class="text-grey-darker text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
      </div>
    </div>
  </div>
</template>

<script>
import nuxtlinks from '../mixins/nuxtlinks'
export default {
  mixins: [nuxtlinks],
  head: {
    title: 'Welcome',
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  },
  mounted() {
    this.nuxtlinks = [{ name: 'home' }, { name: 'about' }, { name: 'support' }, { name: 'login' }]
  }
}
</script>
