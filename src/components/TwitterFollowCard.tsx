import React, { useState, ReactNode } from "react";
import "./styles/TwitterFollowCard.css";

interface Props {
  children: ReactNode;
  userName: string;
  initialIsFollowing: boolean;
}

const TwitterFollowCard: React.FC<Props> = ({
  children,
  userName,
  initialIsFollowing,
}): JSX.Element => {
  const [isFollowing, setIsFollowing] = useState<boolean>(initialIsFollowing);
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const classNameButton = `card-container__button ${
    isFollowing ? "card-container__button--active" : ""
  }`;

  const classNameTextButton = `${
    isFollowing
      ? "card-container__text-button--active"
      : "card-container__text-button"
  }`;

  return (
    <article className="card-container">
      <header className="card-container__header">
        <img
          className="card-container__image"
          src={`https://unavatar.io/${userName}`}
          alt={`Reference image of ${userName}`}
        />
        <div className="card-container__info">
          <h4 className="card-container__name">{children}</h4>
          <p className="card-container__user">@{userName}</p>
        </div>
      </header>
      <aside className="card-container__aside">
        <button className={classNameButton} onClick={handleFollow}>
          <span className="card-container__text-button">
            {isFollowing ? "Following" : "Follow"}
          </span>
          <span className={classNameTextButton}>
            {isFollowing ? "Unfollow" : ""}
          </span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
