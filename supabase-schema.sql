CREATE TABLE consulting_leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT, email TEXT, company TEXT, budget TEXT, message TEXT,
  status TEXT DEFAULT 'new', created_at TIMESTAMPTZ DEFAULT NOW()
);
