'use client';
import { useEffect, useState } from 'react';

let searchInProgress = false;
let listeners: Array<(value: boolean) => void> = [];


export function useSearchState() {
    const [_, setState] = useState(searchInProgress);

    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners = listeners.filter(listener => listener !== setState);
        };
    }, [setState]);

    return searchInProgress;
}

export function setSearchState(newState: boolean) {
    if (searchInProgress !== newState) {
        searchInProgress = newState;
        listeners.forEach(listener => listener(searchInProgress));
    }
}
