import { useState, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser((session && session?.user) ?? user);
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser((session && session?.user) ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener.unsubscribe();
    };
  }, []);

  const value = {
    signUp: async (data) => {
      try {
        await supabase.auth
          .signUp(data)
          .then((result) => setError(result.error))
          .catch((error) => {
            throw new Error("Eroor" + error);
          });
      } catch (err) {
        throw new Error("Error" + error);
      }
    },
    signIn: async (data) => {
      try {
        await supabase.auth
          .signIn(data)
          .then((result) => setError(result.error))
          .catch((error) => {
            throw new Error("Error" + error);
          });
      } catch (err) {
        throw new Error("Error" + error);
      }
    },
    signOut: async () => {
      await supabase.auth.signOut();
    },
    user,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
