import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ command }) => {
    if (command === 'serve') {
        return {
            plugins: [react(), svgr()],
            server: {
                port: 8080
            },
            resolve: {
                alias: {
                    '@': resolve(__dirname, './src'),
                    '@components': resolve(__dirname, './src/components'),
                    '@pages': resolve(__dirname, './src/pages'),
                    '@assets': resolve(__dirname, './src/assets'),
                    '@hooks': resolve(__dirname, './src/hooks'),
                    '@utils': resolve(__dirname, './src/utils'),
                    '@types': resolve(__dirname, './src/types'),
                    '@constants': resolve(__dirname, './src/constants')
                }
            }
        }
    } else {
        return {
            plugins: [react()],
            base: '/pix/',
            resolve: {
                alias: {
                    '@': resolve(__dirname, './src'),
                    '@components': resolve(__dirname, './src/components'),
                    '@pages': resolve(__dirname, './src/pages'),
                    '@assets': resolve(__dirname, './src/assets'),
                    '@hooks': resolve(__dirname, './src/hooks'),
                    '@utils': resolve(__dirname, './src/utils'),
                    '@types': resolve(__dirname, './src/types'),
                    '@constants': resolve(__dirname, './src/constants')
                }
            }
        }
    }
})
