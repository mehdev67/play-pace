import { NextResponse } from 'next/server';
import { supabase, isConfigured } from '@/lib/supabase';

export async function GET() {
    if (!supabase) return NextResponse.json({ error: 'Not configured' }, { status: 503 });

    const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ data });
}

export async function POST(req: Request) {
    if (!supabase) return NextResponse.json({ error: 'Not configured' }, { status: 503 });

    const { name, email, phone, company, projectType, budget, timeline, description } = await req.json();

    if (!name || !email) return NextResponse.json({ error: 'Name and email required' }, { status: 400 });

    const { data, error } = await supabase.from('contacts').insert({
        name, email, phone, company, project_type: projectType, budget, timeline, description, status: 'new'
    }).select().single();

    return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ data }, { status: 201 });
}
