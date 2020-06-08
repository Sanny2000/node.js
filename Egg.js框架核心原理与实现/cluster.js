const cfork = require("cfork");
var chonkidar = require("chokidar");
const { resolve } = require("path");
const reload = require("cluster-reload");

const master = cfork({
    exec: resolve(_dirname, "index.js"),
    count: 2
});
chonkidar.watch("./app").on("change", (event, path) => {
    Console.log(event, path);
    reload(2);
});