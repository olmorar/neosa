'use client';

import React from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link className="search-btn text-white" href="/">
        <X className="size-5" />
      </Link>
    </button>
  );
};
