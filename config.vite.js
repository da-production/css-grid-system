import {
    defineConfig
} from "vite";
import path from "path";

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/main.js"),
            name: "grid-system",
        },
    },
    output: {
        file: 'dist/style.css',
    },
});