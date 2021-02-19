module.exports = {
    collectCoverageFrom: [
        '**/components/**/*.{ts, tsx, js, jsx}',
        '**/pages/**/*.{ts, tsx, js, jsx}',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,

        },
    },
    setupFiles: ['./config/setupTests.ts'],
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            diagnostics: true,
        },
    },
    roots: ['<rootDir>/client/components'],
    testPathIgnorePatterns: [
        '/.next/',
        '/next_modules/',
        '/lib/',
        '/utils/',
        '/coverage/',
        '/.storybook/',

    ],
    
}