// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/1da639a106527e0c4010b354a1efe52a3059a291/gulp-mocha/gulp-mocha.d.ts
// Type definitions for gulp-mocha
// Project: https://github.com/sindresorhus/gulp-mocha
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "gulp-mocha" {
    function mocha(setupOptions?: MochaSetupOptions): NodeJS.ReadWriteStream;
    export = mocha;
}