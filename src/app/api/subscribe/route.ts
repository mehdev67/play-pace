import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
    if (!supabase) return NextResponse.json({ error: 'Not configured' }, { status: 503 });

    const { email } = await req.json();
    if (!email?.includes('@')) return NextResponse.json({ error: 'Valid email required' }, { status: 400 });

    const { data, error } = await supabase.from('subscribers').upsert({
        email: email.toLowerCase(), subscribed: true
    }, { onConflict: 'email' }).select().single();

    return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ message: 'Subscribed!', data });
}

export async function DELETE(req: Request) {
    if (!supabase) return NextResponse.json({ error: 'Not configured' }, { status: 503 });

    const email = new URL(req.url).searchParams.get('email');
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

    const { error } = await supabase.from('subscribers').update({ subscribed: false }).eq('email', email.toLowerCase());
    return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ message: 'Unsubscribed' });
}
