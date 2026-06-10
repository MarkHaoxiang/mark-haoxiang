import { Fragment } from "react";

const SELF = "Hao Xiang Li";

export default function Authors({ authors }: { authors: string }) {
  const parts = authors.split(SELF);
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {index > 0 && <span className="author-self">{SELF}</span>}
          {part}
        </Fragment>
      ))}
    </>
  );
}
