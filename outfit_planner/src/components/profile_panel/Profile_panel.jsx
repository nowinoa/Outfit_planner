import React, { useState } from 'react';
import './Profile_panel.css';

const ProfilePanel = () => {
  const [profileImage, setProfileImage] = useState(null);
  const username = 'Ainhoa Prada'; 

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  return (
    <div className="profile-panel">
      <div className="profile-row">
        <div className="profile-picture-wrapper">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-picture" />
          ) : (
            <div className="placeholder">+</div>
          )}
          <input
            type="file"
            accept="image/*"
            id="profile-upload"
            onChange={handleImageUpload}
            hidden
          />
          {!profileImage && (
            <label htmlFor="profile-upload" className="upload-btn">
              Upload Image
            </label>
          )}
          {profileImage && (
            <button className="remove-btn" onClick={handleRemoveImage}>
              Remove Image
            </button>
          )}
        </div>

        <div className="username-display">
          <h2>{username}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
