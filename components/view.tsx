import React from 'react';

export function View({ id }: { id: string }) {
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">100 views</span>
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
        bg-primary opacity-75"></span>
        </span>
      </div>
    </div>);
}