# tailwindnuxt

> Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Configuration / Components /Mixins

### 1.) Nuxt Links for Navigation

- Define ActiveClass at [router.js](./router.js)

```js
return new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active-link-exact',
  linkActiveClass: 'is-active-link',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: Home },
    { path: '/support', name: 'support', component: Home }
  ]
})
```

- Use nuxtlinks Mixins in any component or page

```bash
# import mixins
import nuxtlinks from '../mixins/nuxtlinks'
# add mixins
mixins: [nuxtlinks],
...
# populate nuxtlinks data
mounted() {
    this.nuxtlinks = [{ name: 'home' }, { name: 'about' }, { name: 'support' }]
  },
# use nuxt link
```

- using on nuxt-link component

```html
<nuxt-link
  v-for="link in nuxtlinks"
  :key="link.name"
  :to="link"
  exact
  :class="{'inactive-link': inActiveLink(link) }"
>
{{ link.name }}
</nuxt-link>
```

- using on custom html element

```html
<p
  v-for="link in nuxtlinks"
  :key="link.name"
  :to="link"
  :class="{'inactive-link': inActiveLink(link), 'is-active-link': activeLink(link) }"
  @click="goTo(link)"
>
  {{ link.name }}
</p>
```

- Override Css of Active Class of nuxt-link at [\_nuxt-links.css](./assets/css/_nuxt-links.css)

```css
/* configure class for nuxt-link */
.is-active-link {
  @apply text-blue-darker;
}

.is-active-link:hover {
  @apply text-blue-lighter;
}

.is-active-link-exact {
  @apply text-blue-darker;
}

.is-active-link-exact:hover {
  @apply text-blue-lighter;
}
.inactive-link {
  @apply text-indigo;
}

.inactive-link:hover {
  @apply text-indigo-lighter;
}
```

### 2.) Form Validation for Front End and Back End (Laravel)

- add to modules array in nuxt.config.js

```js
modules: [
  // Use for Client-side Validation
    [
      'nuxt-validate',
      {
        lang: 'en'
      }
    ],
  ],
```

- Add Dependencies [vform](https://github.com/cretueusebiu/vform) ,[validation-error.js](./mixins/validation-error.js) To Your Component

```js
import Form from 'vform'
import validationError from '../mixins/validation-error.js'
```

- Use Mixins ,and Create form object in data

```js
export default {
  mixins: [validationError],
  data: () => ({
    form: new Form({
      username: '',
      password: '',
      remember: false
    })
  })
}
```

- Use in Your HTML Input

```html
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
```

- Set axios routing

```js
https://github.com/tightenco/ziggy
```
