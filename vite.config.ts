import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import uno from 'unocss/vite'
import vmark from '@vmark/vite-plugin'

export default {
  plugins: [vue(), ssr(), uno(), vmark()]
}
