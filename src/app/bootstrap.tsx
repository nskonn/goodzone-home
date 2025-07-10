import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

let root: ReturnType<typeof createRoot> | null = null;

export function mount(container: Element) {
    root = createRoot(container);
    root.render(<App />);
}

export function unmount() {
    if (root) {
        root.unmount();
        root = null;
    }
}
