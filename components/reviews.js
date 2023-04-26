import { Star } from "../components/star";

export const Review = ({ i, ...review }) => (
  <div key={i} className="italic text-xl mb-3">
    <div className="text-2xl">
      {review.text}
      <span className="text-xs -mb-2">{i}</span>
    </div>
    <div className="flex items-center gap-2">
      {review.rating ? (
        <div className="flex text-yellow-500 my-2">
          {new Array(review.rating).fill(0).map((_) => (
            <Star className="w-8 h-8 p-1 fill-current" />
          ))}
        </div>
      ) : null}
      <div>{review.name}</div>
      {review.source == 0 ? <div>— Fiverr</div> : null}
    </div>
    {review.time.length >= 0 ? (
      <div>
        {review.time[0]} {review.time[1]} ago
      </div>
    ) : null}
  </div>
);
