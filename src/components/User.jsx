import PropTypes from "prop-types";
import "./User.css";

const User = ({ user }) => {
  return (
    <li className="user-card">
      <h2>{user.name}</h2>
      <p>
        <span className="email">Email:</span> {user.email}
      </p>
      <p>
        <span className="city">City:</span> {user.address.city}
      </p>
      <p>
        <span className="phone">Phone:</span> {user.phone}
      </p>
      <p>
        <span className="website">Website:</span> {user.website}
      </p>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }),
};

export default User;
