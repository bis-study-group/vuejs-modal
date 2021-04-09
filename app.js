Vue.component('modal', {
  template: `
    <div class="modal" :class="cssClass">
      <div class="modal-overlay" @click="close">
        <div class="modal-container">
          <header class="modal-header">
            <h2 class="modal-title">
              {{ title }}
            </h2>
            <button class="modal-close" @click="close">&times;</button>
          </header>
          <main class="modal-content">
            <slot></slot>
          </main>
        </div>
      </div>
    </div>
  `,
  props: [
    'title'
  ],
  computed: {
    cssClass() {
      if (this.$root.modalOpen) {
        return 'is-open'
      }
    },
  },
  methods: {
    close() {
      this.$root.modalOpen = false
    },
  },
});

new Vue({
  el: '#app',
  data: {
    modalOpen: false,
  },
  methods: {
    open() {
      this.modalOpen = true
    },
  },
});
