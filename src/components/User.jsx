import PropTypes from "prop-types";
import "./User.css";

const User = ({ user }) => {
  return (
    <li className="user-card">
      <h2>{user.name}</h2>
      <p className="email">{user.email}</p>
      <p className="phone">{user.phone}</p>
      <p className="website">{user.website}</p>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }),
};

export default User;
