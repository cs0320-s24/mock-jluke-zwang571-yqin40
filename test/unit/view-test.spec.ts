
import { describe, expect, test } from 'vitest';

// MY TESTS
import { SharedState } from '../../src/components/SharedState';


describe('ViewCommand Tests', () => {

test('ViewCommand no loaded file', () => {
    var sharedState = new SharedState();

    var output = sharedState.ViewCommand([])
    expect(output).toEqual("Error: No data loaded")

})

test('ViewCommand with loaded file', () => {
    var sharedState = new SharedState();

    const goodFilepath = 'stars.csv'
    sharedState.LoadFileCommand([goodFilepath])
    var output = sharedState.ViewCommand([])

    const tenStarMockData = [
        ["0", "Sol", "0", "0", "0"],
        ["1", "Mars", "282.43485", "0.00449", "5.36884"],
        ["2", "Earth", "43.04329", "0.00285", "-15.24144"],
        ["87666", "Barnard's Star", "-0.01729", "-1.81533", "0.14824"]
    
    ]

    expect(output).toEqual(tenStarMockData)

 })


});

