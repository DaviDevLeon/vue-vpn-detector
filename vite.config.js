import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
 
    lib: {

      entry: resolve(__dirname, 'src/index.js'), 

      name: 'VueVpnDetector', 
      
      fileName: (format) => `vue-vpn-detector.${format}.js` 
    },
    
    rollupOptions: {

      external: ['vue'],
      
      output: {

        globals: {
          vue: 'Vue' 
        }
      }
    }
  }
});