/** Add Transpiler for Typescript */
System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    packages: {
        'App': {
            defaultExtension: 'ts'
        },
        'rxjs': {
            defaultExtension: 'ts'
        },
        'vendor': {
            defaultExtension: 'js'
        }
    }
});

System.config({
    map: {
        'main': 'App/main.js',

        // Angular specific mappings.
        '@angular/core': 'core.umd.js',
        '@angular/animations': 'animations.umd.js',
        '@angular/common': 'common.umd.js',
        '@angular/compiler': 'compiler.umd.js',
        '@angular/http': 'http.umd.js',
        '@angular/forms': 'forms.umd.js',
        '@angular/router': 'router.umd.js',
        '@angular/platform-browser': 'platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'platform-browser-dynamic.umd.js',
        '@angular/animations/browser': 'animations-browser.umd.js',
        '@angular/platform-browser/animations': 'platform-browser-animations.umd.js',
        '@angular/material': 'material.umd.js',
        '@angular/cdk': 'cdk.umd.js',
        '@angular/cdk/a11y': 'cdk-a11y.umd.js',
        '@angular/cdk/bidi': 'cdk-bidi.umd.js',
        '@angular/cdk/coercion': 'cdk-coercion.umd.js',
        '@angular/cdk/collections': 'cdk-collections.umd.js',
        '@angular/cdk/keycodes': 'cdk-keycodes.umd.js',
        '@angular/cdk/observers': 'cdk-observers.umd.js',
        '@angular/cdk/overlay': 'cdk-overlay.umd.js',
        '@angular/cdk/platform': 'cdk-platform.umd.js',
        '@angular/cdk/portal': 'cdk-portal.umd.js',
        '@angular/cdk/rxjs': 'cdk-rxjs.umd.js',
        '@angular/cdk/scrolling': 'cdk-scrolling.umd.js',
        '@angular/cdk/table': 'cdk-table.umd.js',
        '@angular/cdk/stepper': 'cdk-stepper.umd.js',

        // Rxjs mapping
        'rxjs': 'rxjs',
    },
    packages: {
        // Thirdparty barrels.
        'rxjs': { main: 'index' },
    }
});
