import { Star } from "../components/star";
import { ShareIcon } from "./article";

export const Review = (review) => (
  <div className="italic text-xl mb-3">
    <div className="text-2xl">
      {review.text}
      <span className="text-xs -mb-2">{review.i}</span>
    </div>
    <div className="flex items-center gap-2">
      {review.rating ? (
        <div className="flex text-yellow-500 my-2">
          {new Array(review.rating).fill(0).map((_, i) => (
            <Star className="w-8 h-8 p-1 fill-current" key={i} />
          ))}
        </div>
      ) : null}
      <div>{review.name}</div>
      {review.source == 0 ? (
        <div>
          —{" "}
          <a
            href="https://www.fiverr.com/nmaksymchuk"
            target="_blank"
            className="inline-flex gap-2 hover:bg-yellow-200 dark:hover:text-black"
            rel="ugc nofollow noreferrer noopener"
          >
            Fiverr{" "}
            <ShareIcon
              className="w-4 h-4"
              style={{ marginTop: "5.7px" }}
              strokeWidth="1.5"
              stroke="currentcolor"
            />
          </a>
        </div>
      ) : null}
    </div>
    {review.time.length >= 0 ? (
      <div>
        {review.time[0]} {review.time[1]} ago
      </div>
    ) : null}
  </div>
);
