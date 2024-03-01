
import { describe, expect, test } from 'vitest';

// MY TESTS
import {LoadCommand} from '../../src/components/LoadFileCommand';

describe('LoadCommand Tests', () => {


test('LoadCommand valid filepath', () => {
    const goodFilepath = 'data/stars.csv'
    var output = LoadCommand(['goodFilepath'])
    // expect(output).toEqual('CSV file loaded successfully.')

    const badFilepath = 'stars.csv'
    var output = LoadCommand([badFilepath])
    // expect(output).toEqual('ERROR: invalid filepath')  

    var output = LoadCommand([])
    // expect(output).toEqual('ERROR: no filepath specified')  
 })

 test('LoadCommand changes shared state', () => {
    const goodFilepath = 'data/stars.csv'
    var output = LoadCommand(['goodFilepath'])
    // expect(output).toEqual('CSV file loaded successfully.')

})


});

