import React, { Suspense } from 'react';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { StartupCardType } from '@/app/(root)/page';
import markdownIt from 'markdown-it';
import { Skeleton } from '@/components/ui/skeleton';
import { View } from '@/components/view';

const md = markdownIt();

export const experimental_ppr = true;

export default async function page({ params }: { params: Promise<{ id: string; }>; }) {
  const id = (await params).id;
  const post: StartupCardType = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const { _createdAt, title, description, author, image, category, pitch } = post;
  const parsedContent = md.render(pitch ?? '');

  return (
    <>
      <section className="pink_container !min-h-[230px] ">
        <p className="tag">{formatDate(_createdAt)}</p>
        <h1 className="heading">{title}</h1>
        <p className="sub-heading !max-w-5xl">{description}</p>
      </section>

      <section className="section_container">
        <img className="w-full h-auto rounded-xl" src={image} alt="thumbnail" />
        <div className="space-y-5 mt-10 max-w-4xl mx-auth">
          <div className="flex-between gap-5">
            <Link className="flex gap-2 items-center mb-3" href={`/startup/${author?._id}`}>
              <Image className="rounded-full drop-shadow-lg" src={author?.image ?? ''} alt="avatar"
                     width="64" height="64" />
              <div>
                <p className="text-20-medium">{author?.name}</p>
                <p className="text-16-medium !text-black-300">{author?.username}</p>
              </div>
            </Link>
            <p className="category-tag">{category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent
            ? (<article className="prose max-w-4xl font-work-sans break-all"
                        dangerouslySetInnerHTML={{ __html: parsedContent }} />)
            : (<p className="no-results">No details provided</p>)
          }
        </div>

        <hr className="divider" />
        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
}
