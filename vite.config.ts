import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      transformOn:true,
      mergeProps:true
    }),
    svgstore(),
  ],
  server:{
    port:3001,
    proxy: {
      '/api/v1': {
        target: 'http://8.134.142.108:3000/',
      }
    }
  }
})
