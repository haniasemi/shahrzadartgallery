'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function SearchBar({ onSearch, placeholder = 'جستجو...' }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 pr-10 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <span className="text-muted-foreground">🔍</span>
        </div>
      </div>
      <Button type="submit" className="btn-golden">
        جستجو
      </Button>
    </form>
  );
}
