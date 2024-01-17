import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
import { USERS } from "../db";

// create a Tag for each role in the roles array of a user, adding a unique key to each tag - in this instance, using the role itself as a key.
function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((role) => (
          <Tag tag={role} key={role} />
        ))}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;

// <div className="app__card-grid">
//         {USERS.map((user) => (
//           <Card user={USERS[`${user.id}`]} key={user.id} />
//         ))}
//       </div>
