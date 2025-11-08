-- Create waitlist table for storing email signups
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now()
);

-- No RLS needed since this is a public waitlist signup
-- Anyone can sign up, and we'll handle access control in the app
