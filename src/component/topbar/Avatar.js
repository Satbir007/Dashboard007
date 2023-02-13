import React from "react";

const Avatar = () => {
  return (
    <div className="dropdown text-end mx-3 py-2">
      <a
        href="#"
        className="d-block link-light text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </a>
      <ul
        className="dropdown-menu text-small text-white bg-dark"
        aria-labelledby="dropdownUser1"
      >
        <li>
          <a className="dropdown-item text-white" href="#">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider bg-light" />
        </li>
        <li>
          <a className="dropdown-item text-white" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
