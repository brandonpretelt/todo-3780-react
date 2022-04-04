import { useEffect } from 'react';

const useSetLS = (key, prop) => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(prop));
    }, [prop]);
};

export default useSetLS;
