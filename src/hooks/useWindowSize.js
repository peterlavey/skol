import { useState, useEffect } from 'react';

const useWindowSize = ()=> {
    const isClient = typeof window === 'object';

    function getType(width) {
        const xs = 576;
        const sm = 768;
        const md = 992;
        const lg = 1200;


        if(width < xs){
            return 'xs'
        } else if(width >= xs && width < sm){
            return 'sm'
        } else if(width >= sm && width < md){
            return 'md'
        } else if(width >= md && width < lg){
            return 'lg'
        } else if(width >= lg){
            return 'xl'
        }
    }

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
            type: getType(window.innerWidth)
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;