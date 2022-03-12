import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	plugins: [
		vue({
			script: {
				reactivityTransform: true
			}
		})
	],
	base: './',
	server: {
		open: true,
		host: 'localhost',
		port: 80,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	define: { 'process.env': {} },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
})
