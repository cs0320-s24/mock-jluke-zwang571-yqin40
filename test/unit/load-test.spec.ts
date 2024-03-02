
import { describe, expect, test } from 'vitest';

// MY TESTS
import { SharedState } from '../../src/components/SharedState';

describe('LoadCommand Tests', () => {


test('LoadCommand valid filepath', () => {
    
    var sharedState = new SharedState();
    const goodFilepath = 'stars.csv'
    var output = sharedState.LoadFileCommand([goodFilepath])
    expect(output).toEqual(`File <${goodFilepath}> loaded Successfully`)

    const badFilepath = 'bad.csv'
    var output = sharedState.LoadFileCommand([badFilepath])
    expect(output).toEqual(`Error: No data found for ${badFilepath}`)  

    var output = sharedState.LoadFileCommand([])
    expect(output).toEqual(`Error: No data found for undefined`)  
 })

 test('LoadCommand changes shared state', () => {
    
    var sharedState = new SharedState();
    const goodFilepath = 'stars.csv'
    var output = sharedState.LoadFileCommand([goodFilepath])
    expect(output).toEqual(`File <${goodFilepath}> loaded Successfully`)

    var sharedState = new SharedState();
    const goodFilepath2 = 'census.csv'
    var output = sharedState.LoadFileCommand([goodFilepath2])
    expect(output).toEqual(`File <${goodFilepath2}> loaded Successfully`)

})


});

function LoadFileCommand(arg0: string[]) {
    throw new Error('Function not implemented.');
}

