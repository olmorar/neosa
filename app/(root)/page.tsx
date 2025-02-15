import { SearchForm } from '@/components/SearchForm/search-form';
import { StartupCard } from '@/components/startup-card';
import { sanityFetch } from '@/sanity/lib/live';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { Author, Startup } from '@/sanity/types';
import React from 'react';

export type StartupCardType = Omit<Startup, 'author'> & { author?: Author; };

export default async function Home({ searchParams }: Readonly<{
  searchParams: Promise<{ query?: string; }>;
}>) {
  const query = (await searchParams).query;
  const params = { search: query ?? null };
  const { data: posts }: { data: StartupCardType[]; } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {Boolean(posts.length) &&
            posts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))
          }
        </ul>
      </section>
    </>
  );
}
