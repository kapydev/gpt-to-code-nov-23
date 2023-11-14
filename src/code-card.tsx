import React from 'react';

const userCardStyles = {
  base: 'shadow-lg rounded-2xl p-4 bg-white',
  avatar: 'rounded-full h-12 w-12',
  userDetails: 'flex flex-col justify-start ml-4',
  userName: 'text-xl font-semibold',
  userJob: 'text-gray-500 text-sm',
  userQuote: 'italic text-gray-600 text-sm'
};

export default function UserCard() {
  return (
    <div className={userCardStyles.base}>
      <div className="flex">
        <img
          src="placeholder-avatar.png" // Replace with actual image path
          alt="user avatar"
          className={userCardStyles.avatar}
        />
        <div className={userCardStyles.userDetails}>
          <span className={userCardStyles.userName}>Philip Wee</span>
          <span className={userCardStyles.userJob}>Co-Founder, FireJet</span>
        </div>
      </div>
      <p className={userCardStyles.userQuote}>
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
      </p>
    </div>
  );
}
