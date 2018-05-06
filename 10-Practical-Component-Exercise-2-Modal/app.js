Vue.component('modal', {

  props: ['title', 'body'],

  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <h4>{{ title }}</h4>
          <p><slot></slot></p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
  `

});

new Vue ({
  el: '#app',

  data () {
    return {
      'isVisible': false
    }
  }

});