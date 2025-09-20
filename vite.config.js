import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Optimize dev server
    hmr: {
      overlay: false // Disable the HMR overlay to reduce overhead
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@supabase/supabase-js',
      'framer-motion',
      'aos',
      '@lottiefiles/dotlottie-react'
    ]
  },
  build: {
    // Optimize build
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'aos', '@lottiefiles/dotlottie-react']
        }
      }
    }
  }
})
