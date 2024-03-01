/*
  Demo: test ordinary Java/TypeScript
*/

import { describe, expect, test } from 'vitest';

// all exports from main will now be available as main.X
// import * as main from '../mock/src/main';
import * as main from '../../src/main';

test('is 1 + 1 = 2?', () => {
  expect(1 + 1).toBe(2)
})

// Notice how you can test vanilla TS functions using Playwright as well!
test('main.zero() should return 0', () => {
  expect(main.zero()).toBe(0)
})

// For more information on how to make unit tests, visit:
// https://jestjs.io/docs/using-matchers


// MY TESTS

import {ModeCommand} from '../../src/components/ModeCommand';

describe('ModeCommand Tests', () => {


test('ModeCommand switches to verbose/brief/verbose', () => {

    var output = ModeCommand(['verbose'])
    expect(output).toEqual('Switched to verbose mode')
    var output = ModeCommand(['brief'])
    expect(output).toEqual('Switched to brief mode')  
    var output = ModeCommand(['verbose'])
    expect(output).toEqual('Switched to verbose mode')  
 })

 test('ModeCommand no arg', () => {

  var output = ModeCommand([])
  expect(output).toEqual('Error: No mode specified')

})
test('ModeCommand bad arg', () => {

  var output = ModeCommand(['badArg'])
  expect(output).toEqual('Error: Invalid mode')

})

});

