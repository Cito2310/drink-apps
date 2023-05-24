import { useState, useEffect } from 'react';

export const useCountdown = ( milliseconds: number, callback: () =>  void ) => {
    const [counter, setCounter] = useState( milliseconds );
    const [running, setRunning] = useState( false );
    const [ timer, setTimer ] = useState<null | number>( null );
  
    const startCountdown = () => {
        clearTimeout( timer! );
        setRunning( true );
        setCounter( milliseconds );
    };
  
    useEffect(() => {
        if ( running && counter > 0 ) {
            const timer = setTimeout(() => setCounter( state => state - 100), 100);
            setTimer( timer );
        };

        if ( counter === 0 ) {
            callback(); 
            setRunning(false); 
            setCounter( milliseconds );
        };

        return () => { clearTimeout( timer! ) };
    }, [counter, running]);


    return startCountdown;
};