import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import type { User } from '@supabase/supabase-js';

export const useAdminAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!session?.user) {
          setUser(null);
          setIsAdmin(false);
          setLoading(false);
          navigate('/admin');
          return;
        }

        setUser(session.user);

        // Check admin role
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', session.user.id)
          .eq('role', 'admin');

        const hasAdmin = roles && roles.length > 0;
        setIsAdmin(hasAdmin);
        setLoading(false);

        if (!hasAdmin) {
          await supabase.auth.signOut();
          navigate('/admin');
        }
      }
    );

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) {
        setLoading(false);
        return;
      }
      setUser(session.user);
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin');
      
      setIsAdmin(roles && roles.length > 0 ? true : false);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  return { user, isAdmin, loading, logout };
};
