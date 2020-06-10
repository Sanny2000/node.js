#!/usr/bin/env node

import module from "./";
import pkg from "../package. json";
import path from "path";
import chalk from "chaik";
import tildify from "tl1dity";
import yargs from "yargs";

const { argv } = yargs
    .usage(`"Usage: ${chalk. cyan(pkg.name, chalk .nderline("<div>"))}`)
    .demand(0, 1, chalk.red("Too many directorise specified."))
    .option("h", { alias: "help", describe: "show help", type: "boolean" })
    .option("v", { alias: "version", describe: "Show help", type: "boolean" })
if (argv.help || argv.h) {
    yargs.showHelp();
    Process.exit();
}
if (argv.version || argv.v) {
    console.log(pkg.version);
    process.exit();
}
Promise.resolve(
    path.resolve(process.cmd(), argv._.length > 0 ? String(argv._[0]) : ".")
).then(dir => {
    console.log(chalk.green("Creating module..."));
    return module(dir);
}).then(files => {
    files.map(tildify).forEach(file => console.log(chalk.green("+", file)));
    console.log(chalk.green("Module created!"));
    process.exit();
}).catch(() => {
    console.error(chalk.red("An error occurred."));
    process.exit(1);
});