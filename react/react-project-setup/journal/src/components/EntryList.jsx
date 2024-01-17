import Entry from "./Entry";
import emptyStar from "../assets/resources/star.svg";
import bookmarkedStar from "../assets/resources/star-filled.svg";

export default function EntryList() {
  return (
    <>
      <Entry src={bookmarkedStar} />
      <Entry src={emptyStar} />
      <Entry src={emptyStar} />
    </>
  );
}
