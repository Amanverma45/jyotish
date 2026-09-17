import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

let supabaseClient;
try {
  supabaseClient = createClient(
    supabaseUrl.startsWith('http') ? supabaseUrl : 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-anon-key'
  );
} catch (err) {
  console.warn('Supabase initialization warning:', err);
  supabaseClient = {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: async () => ({ error: { message: 'Supabase setup required' } }),
      signOut: async () => ({ error: null }),
      resetPasswordForEmail: async () => ({ error: { message: 'Supabase setup required' } }),
      updateUser: async () => ({ error: { message: 'Supabase setup required' } }),
    },
    from: () => ({
      select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
      insert: () => Promise.resolve({ error: { message: 'Supabase setup required' } }),
      update: () => ({ eq: () => Promise.resolve({ error: { message: 'Supabase setup required' } }) }),
      delete: () => ({ eq: () => Promise.resolve({ error: { message: 'Supabase setup required' } }) }),
    }),
  };
}

export const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && 
  import.meta.env.VITE_SUPABASE_ANON_KEY && 
  !import.meta.env.VITE_SUPABASE_URL.includes('placeholder')
);

export const supabase = supabaseClient;

