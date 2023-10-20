import { Star } from "../components/star";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


export const Review = (review) => (
  <div className="italic text-xl mb-3">
    <div className="text-xl">
      {review.text}
      <span className="text-xs -mb-2">{review.i}</span>
    </div>
    <div className="flex flex-col gap-2 mt-2">
      {review.rating && false && (
        <div className="flex text-yellow-500 my-2">
          {new Array(review.rating).fill(0).map((_, i) => (
            <Star className="w-7 h-7 p-1 fill-current" key={i} />
          ))}
        </div>
      )}
      <div>{review.name} {review.date && formatDistance(review.date, new Date(), { addSuffix: true })}         {review.source == 0 && (
        <> — Fiverr</>
      )}</div>

    </div>
  </div>
);
