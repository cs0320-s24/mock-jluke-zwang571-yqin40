
import { describe, expect, test } from 'vitest';

// MY TESTS
import {LoadCommand} from '../../src/components/LoadFileCommand';
import {SearchCommand} from '../../src/components/SearchCommand';

const tenStarMockData = [
    ["StarID","ProperName","X","Y","Z"],
    ["0","Sol","0","0","0"],
    ["1","","282.43485","0.00449","5.36884"],
    ["2","","43.04329","0.00285","-15.24144"],
    ["3","","277.11358","0.02422","223.27753"],
    ["3759","96 G. Psc","7.26388","1.55643","0.68697"],
    ["70667","Proxima Centauri","-0.47175","-0.36132","-1.15037"],
    ["71454","Rigel Kentaurus B","-0.50359","-0.42128","-1.1767"],
    ["71457","Rigel Kentaurus A","-0.50362","-0.42139","-1.17665"],
    ["87666","Barnard's Star","-0.01729","-1.81533","0.14824"],
    ["118721","","-2.28262","0.64697","0.29354"]

]

describe('SearchCommand Tests', () => {

test('SearchCommand no arg', () => {
    var output = SearchCommand([])
    // expect(output).toEqual('ERROR: no CSV file loaded.')
    const goodFilepath = 'data/ten-star.csv'
    LoadCommand(['goodFilepath'])
    var output = SearchCommand([])
    // expect(output).toEqual('ERROR: no search value specified.')
})

test('SearchCommand no file loaded', () => {
    var output = SearchCommand(['hello'])
    // expect(output).toEqual('ERROR: no CSV file loaded.')
    const goodFilepath = 'data/ten-star.csv'
    LoadCommand(['goodFilepath'])
    const args = ['hello']
    var output = SearchCommand(args)
    // expect(output).toEqual('Search value {'+args+'} not found.')
})

test('SearchCommand simple search', () => {
    const goodFilepath = 'data/ten-star.csv'
    LoadCommand(['goodFilepath'])
    const args = ['Sol']
    var output = SearchCommand(args)
    // expect(output).toEqual(["0","Sol","0","0","0"])
})

test('SearchCommand simple search', () => {
    const goodFilepath = 'data/ten-star.csv'
    LoadCommand(['goodFilepath'])
    //single row output
    const args = ['Sol']
    var output = SearchCommand(args)
    // expect(output).toEqual([["0","Sol","0","0","0"]])

    // multiple row output
    var output = SearchCommand([""])
    // expect(output).toEqual([
    //     ["1","","282.43485","0.00449","5.36884"],
    //     ["2","","43.04329","0.00285","-15.24144"],
    //     ["3","","277.11358","0.02422","223.27753"],
    //     ["118721","","-2.28262","0.64697","0.29354"]
    // ])
 })

 test('SearchCommand query search', () => {
    const goodFilepath = 'data/ten-star.csv'
    LoadCommand(['goodFilepath'])
    //single query 
    const args = ['-q', 'or(Sol,3']
    var output = SearchCommand(args)
    // expect(output).toEqual([["0","Sol","0","0","0"], ["3","","277.11358","0.02422","223.27753"]])
    
    //nested query
    const args2 = ['-q', 'or(Sol,and(, 3))']
    var output = SearchCommand(args2)
    // expect(output).toEqual([["0","Sol","0","0","0"], ["3","","277.11358","0.02422","223.27753"]])

})

test('SearchCommand bad query', () => {
    const goodFilepath = 'data/ten-star.csv'
    LoadCommand(['goodFilepath'])
    //single row output
    const args = ['-q', 'nor(Sol,3']
    var output = SearchCommand(args)
    // expect(output).toEqual('ERROR: bad query')

})




});

