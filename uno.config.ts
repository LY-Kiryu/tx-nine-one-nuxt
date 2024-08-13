// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'


export default defineConfig({
    presets: [
        presetUno(), // 注意需要把此处加上，不然会导致样式丢失
        presetIcons({ /* options */ }),
    ],
    transformers: [
        transformerDirectives(),
    ],
})
