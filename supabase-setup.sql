-- Run in Supabase SQL Editor

-- Contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  project_type TEXT,
  budget TEXT,
  timeline TEXT,
  description TEXT,
  status TEXT DEFAULT 'new'
);

-- Subscribers table
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT true
);

-- Allow public access (for simple setup)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_all" ON contacts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "public_all" ON subscribers FOR ALL USING (true) WITH CHECK (true);
