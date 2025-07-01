import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for TypeScript
export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          company?: string;
          message: string;
          created_at: string;
          status: 'new' | 'processing' | 'resolved';
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string;
          message: string;
          created_at?: string;
          status?: 'new' | 'processing' | 'resolved';
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string;
          message?: string;
          created_at?: string;
          status?: 'new' | 'processing' | 'resolved';
        };
      };
      team_members: {
        Row: {
          id: string;
          name: string;
          role: string;
          bio: string;
          image_url?: string;
          linkedin_url?: string;
          github_url?: string;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          role: string;
          bio: string;
          image_url?: string;
          linkedin_url?: string;
          github_url?: string;
          order_index: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          role?: string;
          bio?: string;
          image_url?: string;
          linkedin_url?: string;
          github_url?: string;
          order_index?: number;
          created_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          title: string;
          description: string;
          features: string[];
          icon: string;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          features: string[];
          icon: string;
          order_index: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          features?: string[];
          icon?: string;
          order_index?: number;
          created_at?: string;
        };
      };
    };
  };
};

export type Contact = Database['public']['Tables']['contacts']['Row'];
export type TeamMember = Database['public']['Tables']['team_members']['Row'];
export type Service = Database['public']['Tables']['services']['Row'];
