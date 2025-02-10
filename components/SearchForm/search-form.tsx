import React from 'react';
import Form from 'next/form';
import { Search } from 'lucide-react';
import { SearchFormReset } from './search-form-reset';

export const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form className="search-form" action="/" scroll={false}>
      <input className="search-input"
             name="query"
             placeholder="Search Startups"
             defaultValue={query}
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};
