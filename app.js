Vue.component('modal', {
  template: `
    <div class="modal" :class="cssClass">
      <div class="modal-overlay" @click="close">
        <div class="modal-container">
          <header class="modal-header">
            <h2 class="modal-title">
              <!-- Insert code here... -->
            </h2>
            <button class="modal-close" @click="close">&times;</button>
          </header>
          <main class="modal-content">
            <!-- Insert code here... -->
          </main>
        </div>
      </div>
    </div>
  `,
  props: [
    /* Insert code here... */
  ],
  computed: {
    cssClass() {
      /* Insert code here... */
      if (this.$root.modalOpen) {
        return "is-open"
      }
    },
  },
  methods: {
    close() {
      /* Insert code here... */
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
      /* Insert code here... */
      this.modalOpen = true
    },
  },
});
