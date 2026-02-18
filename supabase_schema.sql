-- Create the table for Water Test Requests
CREATE TABLE IF NOT EXISTS water_test_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  prenom TEXT NOT NULL,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  ville TEXT NOT NULL,
  province TEXT NOT NULL,
  code_postal TEXT NOT NULL,
  water_test_kits TEXT[] NOT NULL,
  appointment_time TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'new'
);

-- Enable Row Level Security (RLS)
ALTER TABLE water_test_requests ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (since the form is public)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE tablename = 'water_test_requests'
        AND policyname = 'Enable insert for anon'
    ) THEN
        CREATE POLICY "Enable insert for anon" ON water_test_requests FOR INSERT WITH CHECK (true);
    END IF;
END
$$;

-- Allow public read (optional, depending on if you want users to see their requests)
-- CREATE POLICY "Enable read for anon" ON water_test_requests FOR SELECT USING (true);
