import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This file just tells Vite "this is a React project"
export default defineConfig({
  plugins: [react()],
})
