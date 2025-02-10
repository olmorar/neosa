import React from 'react';

import { formatDate } from '@/lib/utils';

export const StartupCard = () => {
  return (
    <li className="startup_card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate('Today')}
        </p>
      </div>
    </li>
  );
};
