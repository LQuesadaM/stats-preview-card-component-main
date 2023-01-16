import legacy from '@vitejs/plugin-legacy'
import viteImagemin from 'vite-plugin-imagemin'

export default {
    root: 'src',
    build: {
        outDir: '../dist',
    },
    plugins: [
        legacy({
          targets: ['defaults'],
        }),
        viteImagemin({
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
          mozjpeg: {
            quality: 20,
          },
          pngquant: {
            quality: [0.8, 0.9],
            speed: 4,
          },
          svgo: {
            plugins: [
              {
                name: 'removeViewBox',
              },
              {
                name: 'removeEmptyAttrs',
                active: false,
              },
            ],
          },
        }),
      ]
}