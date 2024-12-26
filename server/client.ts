import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://akfatqluyfrtwvadnhms.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZmF0cWx1eWZydHd2YWRuaG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1OTU3NzEsImV4cCI6MjA1MDE3MTc3MX0.ruebtZEhSlcxGQlwU9ds3xLHHAK4eCkfsLiPIkj43Bc"
const client = createClient(supabaseUrl, supabaseKey)

export {client}