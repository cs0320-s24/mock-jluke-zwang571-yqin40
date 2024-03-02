
import { describe, expect, test } from 'vitest';

// MY TESTS
// import {LoadCommand} from '../../src/components/LoadFileCommand';
// import {SearchCommand} from '../../src/components/SearchCommand';

// import {LoadFileCommand} from '../../src/components/SharedState';
// import {SearchCommand} from '../../src/components/SharedState';

import {SharedState} from '../../src/components/SharedState';

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
    var sharedState = new SharedState();
    var output = sharedState.SearchCommand([])
    const goodFilepath = 'stars.csv'
    sharedState.LoadFileCommand([goodFilepath])
    var output = sharedState.SearchCommand([])
    expect(output).toEqual('Error: no search value specified')
})

test('SearchCommand no file loaded', () => {
    var sharedState = new SharedState();


    var output = sharedState.SearchCommand(['hello'])
    expect(output).toEqual('Error: No data loaded')
    const goodFilepath = 'stars.csv'
    sharedState.LoadFileCommand([goodFilepath])
    const args = ['hello']
    var output = sharedState.SearchCommand(args)
    expect(output).toEqual('Search value {'+args+'} not found.')
})

test('SearchCommand too many args', () => {
    var sharedState = new SharedState();

    const goodFilepath = 'star.csv'
    sharedState.LoadFileCommand(['goodFilepath'])
    const args = ['1', '2', '3']
    var output = sharedState.SearchCommand(args)
})


test('SearchCommand simple search', () => {
    var sharedState = new SharedState();

    const goodFilepath = 'stars.csv'
    var output = sharedState.LoadFileCommand([goodFilepath])
    expect(output).toEqual(`File <${goodFilepath}> loaded Successfully`)

    //single row output
    const args = ['Sol']
    var output = sharedState.SearchCommand(args)
    expect(output).toEqual([["0","Sol","0","0","0"]])


 })

 test('SearchCommand query search', () => {
    var sharedState = new SharedState();

    const goodFilepath = 'stars.csv'
    sharedState.LoadFileCommand([goodFilepath])

    //plain query 
    var args = ['-q', "(Sol)"]
    var output = sharedState.SearchCommand(args)
    expect(output).toEqual([stars[0]])

    //single query 
     args = ['-q', "or(Sol,Mars)"]
    var output = sharedState.SearchCommand(args)
    expect(output).toEqual([stars[0],stars[1]])
    
    //nested query
     args = ['-q', "or(Sol,and(Mars,3))"]
    var output = sharedState.SearchCommand(args)
    expect(output).toEqual([["0","Sol","0","0","0"] ])

})

const stars = [
    ["0", "Sol", "0", "0", "0"],
    ["1", "Mars", "282.43485", "0.00449", "5.36884"],
    ["2", "Earth", "43.04329", "0.00285", "-15.24144"],
    ["87666", "Barnard's Star", "-0.01729", "-1.81533", "0.14824"]
  ] 

test('SearchCommand bad query', () => {
    var sharedState = new SharedState();

    const goodFilepath = 'stars.csv'
    sharedState.LoadFileCommand([goodFilepath])
    //single row output
    const args = ['-q', 'nor(Sol,3']
    var output = sharedState.SearchCommand(args)
    expect(output).toEqual('Error: bad query')

})




});

