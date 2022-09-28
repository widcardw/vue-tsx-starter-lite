/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'

import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    Pages({
      extensions: ['ts', 'js', 'tsx', 'jsx'],
    }),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
