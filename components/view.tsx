import React from 'react';
import { client } from '@/sanity/lib/client';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { pluralize } from '@/lib/utils';

export async function View({ id }: { id: string }) {
  const { views } = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">{pluralize(views, 'view')}</span>
      </p>
    </div>
  );
}

function Ping() {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full
                            bg-primary opacity-75"
          >
          </span>
        </span>
      </div>
    </div>
  );
}