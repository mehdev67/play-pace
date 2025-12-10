'use client';
import { useState } from 'react';

export function useApi<T>(endpoint: string) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const post = async (data: T) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error);
            return json;
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Error');
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { post, loading, error };
}

// Usage examples:
// const { post, loading, error } = useApi('/api/contacts');
// await post({ name: 'John', email: 'john@example.com' });

// const { post: subscribe } = useApi('/api/subscribe');
// await subscribe({ email: 'user@example.com' });
