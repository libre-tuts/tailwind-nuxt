export default {
  data: () => ({
    nuxtlinks: [
      /* ie. { name: 'home' } */
    ]
  }),
  methods: {
    inActiveLink(link) {
      return this.$route.name != link.name
    },
    activeLink(link) {
      return this.$route.name === link.name
    },
    goTo(link) {
      if (this.inActiveLink(link)) {
        let route = this.$router.options.routes.find(route => {
          return route.name === link.name
        })
        if (route != undefined) {
          this.$router.push(link)
        }
      }
    }
  }
}
