import DefaultTheme from 'vitepress/theme'
import Xi from '../../Xi.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Xi', Xi)
  }
}