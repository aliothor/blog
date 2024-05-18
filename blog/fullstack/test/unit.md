# 单元测试

- [vitest](https://vitest.dev/)
- [mocha](https://mochajs.org/)
- [sinon](https://sinonjs.org/)
- [ava](https://github.com/avajs/ava)


## vitest

### vitest测试typeorm

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import { swc } from 'rollup-plugin-swc3';

export default defineConfig({
    esbuild: false,
    plugins: [
        swc({
            jsc: {
                target: 'esnext',
                parser: {
                    syntax: 'typescript',
                    dynamicImport: true,
                    decorators: true,
                },
                transform: {
                    legacyDecorator: true,
                    decoratorMetadata: true,
                },
            },
        }),
    ],
    test: {
        testTimeout: 10 * 60 * 1000,
    },
})
```