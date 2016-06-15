'use strict'

import Vue from 'vue'

const Velocity = require('velocity-animate')

// http://vuejs.org/guide/transitions.html#JavaScript-Transitions

Vue.transition('fade', {
  css: false,
  enter: function (el, done) {
    // https://github.com/oneuijs/You-Dont-Need-jQuery#css--style
    el.style.opacity = 0
    Velocity(el, { opacity: 1 }, 1000, done)
  },
  enterCancelled: function (el) {
    Velocity(el, 'stop')
  },
  leave: function (el, done) {
    // same as enter
    Velocity(el, { opacity: 0 }, 1000, done)
  },
  leaveCancelled: function (el) {
    Velocity(el, 'stop')
  }
})
