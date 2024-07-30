import {greet} from './greet.js';
import {yo} from './yo.js';
import chalk from 'chalk';
import cowsay from "cowsay";
import figlet from "figlet";

figlet('Hello, Kat!', function(err, data){
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

console.log(chalk.bgBlue.whiteBright(""));
console.log(chalk.bgRed.whiteBright(cowsay.say({
    text: greet('Kat')
})));

let name = "Kat";
name = "CK";
const styledMessage = chalk.bgBlack.black(greet('Xola'));

console.log(chalk.bgBlackBright.blackBright(greet('Xola')));
console.log(greet("kat"));
console.log(yo("kat"));