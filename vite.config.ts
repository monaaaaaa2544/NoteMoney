import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgSprites from 'rollup-plugin-svg-sprites'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgSprites({
      vueComponent:true,
      exclude:['node_modules/**']
    })
  ],
  resolve:{
    alias:[
      {
        find:'@',
        replacement:'/src'
      }
    ]
  },
  
})
