import EntryTitle from "./EntryTitle";
import EntryDate from "./EntryDate";
import EntryText from "./EntryText";
import FavouriteIconButton from "./FavoriteIconButton";

export default function Entry() {
  return (
    <div className="entry">
      <EntryDate month="Jan" day={20} year={2024} />
      <EntryTitle title="This is an entry title" />
      <FavouriteIconButton />
      <EntryText />
    </div>
  );
}

// import:
// title
// date
// text
// favorite button
