import dts from 'rollup-plugin-dts';

export default [
    config('./build/client.d.ts', './dist/client.d.ts'),
    config('./dist/types/main.d.ts', './dist/main.d.ts'),
];

function config(input, output) {
    return {
        input,
        output: [
            {
                file: output,
                format: 'es',
            },
        ],
        plugins: [
            dts(),
        ],
    };
}
