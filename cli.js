#! /usr/bin/env node
import { program } from 'commander';
import gen from './commands/gen.js';
import whopBiz from './commands/whopBiz.js';
import whopMkt from './commands/whopMkt.js';

program.command('gen <name>').description('Generate a react component boiler').action(gen)

program.command('whop_biz').description('Start the whop biz app').action(whopBiz)

program.command('whop_mkt').description('Start the whop marketplace app').action(whopMkt)

program.parse()