let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Public Assets...
mix.js('resources/assets/public/js/public.js', 'public/js')
    .sass('resources/assets/public/sass/public.scss', 'public/css')
    .copy('resources/assets/public/img', 'public/img');

// Admin Assets...
mix.js('resources/assets/admin/js/admin.js', 'public/js')
    .sass('resources/assets/admin/sass/admin.scss', 'public/css')
    .copy('resources/assets/admin/img', 'public/img');
