                // ** Tests Exercises **


// Test 1: Simple Addition Test
    // Write a test to check if adding two numbers together correctly returns the sum.

    
function sum (a, b)  {
    return a + b;
}

describe('sum function test', () => {
    it('should return the sum of the two numbers', () => {
        expect(sum(2, 3)).toEqual(5);
    });
});


// --- 


// Test 2: String Concatenation Test
    // Write a test that checks if two strings are concatenated correctly.

const a = "Hello";
const b = "World";

function concatenate (a, b) {
    return a + ' ' + b;
}

describe('concatenation', () => {
    it('should concatenate the two strings', () => {
        expect(concatenate(a, b)).toEqual('Hello World');
    });
});


// --- 


// Test 3: Array Length Test
    // Write a test to check the length of an array.

const array = [1, 2, 3, 4]

describe('array length', () => {
    it('should return the array length', () => {
        expect(array.length).toEqual(4);
    });
});


// --- 


// Test 4: Button Click Test
    // Write a test to simulate a button click and check if a counter increments.

    // function clickHandler() {
    //     let buttonClick = 0;
    //      const btn = document.querySelector('.button')
    //      btn.addEventListener("click", () => {
    //         buttonClick++
    //      })
    //      btn.click()
    //     return buttonClick
    //     }
        
    //     describe("button +1 upon clicking", ()=> {
    //         it("should +1 when clicked", () => {
    //             expect(clickHandler()).toBe(1)
    //         })
    //     })


// --- 


// Test 5: Even / Odd Number Text
    // Write a test to check if a number is even or odd.

function isEven(number) {
    if(number % 2 === 0) {
        return true
    } else return false;
}
    
describe("even number", () => {
     it("should divide by 2", () => {
        expect(isEven(4)).toBe(true);
        });
    });
describe("odd number", () => {
     it("should not divide by 2", () => {
        expect(isEven(3)).toBe(false);
        });
    });
    
   