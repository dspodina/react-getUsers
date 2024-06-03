import PropTypes from "prop-types";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import "./User.css";

const User = ({ user }) => {
  return (
    <li className="user-card">
      <h2>{user.name}</h2>
      <div className="line"></div>
      <p className="contact-item email">
        <MdOutlineMail className="icon" /> {user.email}
      </p>
      <p className="contact-item phone">
        <FaPhoneVolume className="icon" /> {user.phone}
      </p>
      <p className="contact-item website">
        <CgWebsite className="icon" /> {user.website}
      </p>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
