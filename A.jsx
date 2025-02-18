import React, { createContext } from 'react';
import B from './B';

const GreetContext = createContext();
const Greet2Context = createContext();

export const A = () => {
    const greet = "Hello";
    const greet2 = "Hiiii";
    return (
        <div>
            <GreetContext.Provider value={greet}>
            <Greet2Context.Provider value={greet2}>
                <B />
            </Greet2Context.Provider>
            </GreetContext.Provider>
        </div>
    );
}
export default A;
export {GreetContext,Greet2Context};