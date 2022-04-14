import {resolve} from 'path'

function getDirs() {
    const pathname = resolve(__dirname,"../src");
    console.log("pathname",pathname);
};

(function() {
    getDirs()
})()