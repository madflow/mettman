#!/usr/bin/env node

const calc = require('../src/mettman').calc;
const chalk = require('chalk');
const log = console.log;

const args = require('yargs')
    .option('lads', {
        alias: 'l',
        describe: 'Number of lads'
    })
    .option('gals', {
        alias: 'g',
        describe: 'Number of gals'
    })
    .help().argv;

const mettwoch = calc(args.lads, args.gals);

log(chalk.blue.bgRed.bold(`Brötchen: ${mettwoch.b} ST`));
log(chalk.yellow.bgGreen.bold.italic(`Mett: ${mettwoch.m} G`));
log(chalk.black.bgWhite.bold.underline(`Oellig: ${mettwoch.o} ST`));
log(chalk.white.bgYellow.bold.bold(`Bautz'ner: ${mettwoch.s} ST`));
log(chalk.white.bgBlack.bold(`SalzPfeffer: ${mettwoch.sp} ST`));
log(chalk.white.bgMagenta.bold(`Butter: ${mettwoch.bu} ST`));