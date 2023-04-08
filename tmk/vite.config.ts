import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
type ViteConfigInput = {
  mode: string
  command: string
}

export default (args: ViteConfigInput) => {
  return defineConfig({
    build: {
      lib: {
        entry: './src/index.ts',
        name: 'Tmk',
        formats: ['es', 'umd'],
        fileName: format => `tmk-react.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        include: ['./src'],
        outputDir: './dist/',
      }),
    ],
  })
}
