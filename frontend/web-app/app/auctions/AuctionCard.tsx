import React from 'react';
import CountdownTimer from './CountdownTimer';
import CarImage from './CarImage';
import { Auction } from '@/types';

type Props = {
  auction: Auction;
};

export default function AuctionCard({ auction }: Props) {
  return (
    <a href='#' className='group'>
      <div className='aspect-h-10 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-200'>
        <div>
          <CarImage imageUrl={auction.imageUrl} />
          <div className='absolute bottom-2 left-2'>
            <CountdownTimer auctionEnd={auction.auctionEnd} />
          </div>
        </div>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <h3 className='text-gray-700'>
          {auction.make} {auction.model}
        </h3>
        <p className='text-sm font-semibold'>{auction.year}</p>
      </div>
    </a>
  );
}
