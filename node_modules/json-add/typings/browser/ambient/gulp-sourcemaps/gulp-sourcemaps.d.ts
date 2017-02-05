// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/1da639a106527e0c4010b354a1efe52a3059a291/gulp-sourcemaps/gulp-sourcemaps.d.ts
// Type definitions for gulp-sourcemaps
// Project: https://github.com/floridoo/gulp-sourcemaps
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "gulp-sourcemaps" {
    interface InitOptions {
        loadMaps?: boolean;
        debug?: boolean;
    }

    interface WriteMapper {
        (file: string): string;
    }

    interface WriteOptions {
        addComment?: boolean;
        includeContent?: boolean;
        sourceRoot?: string | WriteMapper;
        sourceMappingURLPrefix?: string | WriteMapper;
    }

    export function init(opts?: InitOptions): NodeJS.ReadWriteStream;
    export function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
    export function write(opts?: WriteOptions): NodeJS.ReadWriteStream;
}