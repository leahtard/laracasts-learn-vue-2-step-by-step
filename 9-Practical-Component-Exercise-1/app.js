Vue.component('message', {

  props: ['title', 'body', 'theme'],

  data () {
    return {
      isVisible: true
    };
  },

  template: `
    <article :class="theme" v-show="isVisible">
      <div class="message-header">
        <p>{{ title }}</p>
        <button class="delete" aria-label="delete" @click="isVisible = false"></button>
      </div>
      <div class="message-body">
        {{ body }}
      </div>
    </article>
  `

});

new Vue ({
  el: '#app'
});