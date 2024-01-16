import bookmarkedStar from "../assets/resources/star-filled.svg";

export default function FavouriteIconButton() {
  // return <img src={star} alt="Favorite" />;
  return (
    <button>
      <img src={bookmarkedStar} />
    </button>
  );
}
