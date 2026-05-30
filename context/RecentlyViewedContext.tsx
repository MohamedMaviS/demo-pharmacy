'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type RecentlyViewedContextValue = {
  handles: string[];
  track: (handle: string) => void;
};

const RecentlyViewedContext = createContext<RecentlyViewedContextValue | null>(null);

const MAX = 8;

export function RecentlyViewedProvider({ children }: { children: React.ReactNode }) {
  const [handles, setHandles] = useState<string[]>([]);

  const track = useCallback((handle: string) => {
    setHandles((prev) => {
      const next = [handle, ...prev.filter((h) => h !== handle)];
      return next.slice(0, MAX);
    });
  }, []);

  const value = useMemo(() => ({ handles, track }), [handles, track]);

  return (
    <RecentlyViewedContext.Provider value={value}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx) throw new Error('useRecentlyViewed must be used inside RecentlyViewedProvider');
  return ctx;
}
