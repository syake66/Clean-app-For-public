-- Supabase Database Schema (Public Portfolio)

-- 1. profiles Table
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  role text check (role in ('admin', 'staff')) not null default 'staff',
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table profiles enable row level security;
create policy "Public profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);

-- 2. tasks Table
create table tasks (
  id uuid default uuid_generate_v4() primary key,
  date date not null,
  staff_ids uuid[] default '{}',
  title text not null,
  location text not null,
  scheduled_start time not null,
  scheduled_end time not null,
  actual_start timestamp with time zone,
  actual_end timestamp with time zone,
  status text check (status in ('pending', 'in_progress', 'completed')) not null default 'pending',
  next_person_count text,
  gcal_event_id text,
  is_manually_modified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table tasks enable row level security;
create policy "Tasks are viewable by authenticated users" on tasks for select using (true);
create policy "Admins can manage tasks" on tasks for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- 3. task_memos Table
create table task_memos (
  id uuid default uuid_generate_v4() primary key,
  task_id uuid references tasks(id) on delete cascade not null,
  author_id uuid references profiles(id) on delete set null,
  content text not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table task_memos enable row level security;
-- Security policies for memos...
