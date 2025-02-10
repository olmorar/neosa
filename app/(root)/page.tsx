import React from 'react';
import { SearchForm } from '@/components/SearchForm/search-form';
import { StartupCard } from '@/components/startup-card';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 44,
    author: { _id: 1, name: 'Andrian' },
    _id: 1,
    description: 'Description',
    imageSrc: 'https://www.freeimages.com/photo/peacock-1169961',
    category: 'Robots',
    title: 'We Robots',
  }];

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
            posts.map(post => (
              <StartupCard key={post._id} post={post} />
            ))
          }
        </ul>
      </section>
    </>
  );
}
