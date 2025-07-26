import "./Card.css";
import React, { Suspense } from "react";
import man1 from "../../../assets/man1.webp";
import { Instagram, Linkedin } from "lucide-react";
const ProfileCard = React.lazy(() => import("./ProfileCard"));

export interface CardProps {
  avatarUrl?: string;
  showBehindGradient?: boolean;
  className?: string;
  enableTilt?: boolean;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  about?: string;
  instagramLink?: string;
  linkedinLink?: string;
  category?: string;
}

const Card = ({
  avatarUrl = man1,
  showBehindGradient = false,
  className = "profile-card",
  enableTilt = false,
  name = "",
  title,
  handle,
  status = "Online",
  contactText = "Contact me",
  showUserInfo = false,
  about = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenitilaudantium unde sunt necessitatibus excepturi accusantium fugitmaiores ipsam similique cum. Aspernatur, alias delenitiarchitecto, ipsum magnam vitae, magni quidem quia voluptatibussint eum omnis voluptatem tempore quasi temporibus maiores modifacere recusandae? Natus culpa minus molestias dicta liberovoluptatem repudiandae?",
  instagramLink = "#",
  linkedinLink = "#",
}: CardProps) => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <div className="card-face front">
            <Suspense
              fallback={
                <div className="w-full h-60 bg-gray-800 animate-pulse rounded-lg" />
              }
            >
              <ProfileCard
                avatarUrl={avatarUrl}
                showBehindGradient={showBehindGradient}
                className={className}
                name={name}
                enableTilt={enableTilt}
                title={title?.toUpperCase()}
                handle={handle}
                status={status}
                contactText={contactText}
                showUserInfo={showUserInfo}
              />
            </Suspense>
          </div>

          <div className="card-face back">
            <h3>About {name.split(" ")[0]}:</h3>
            <p>{about}</p>

            <div className="socials">
              <p>Socials: </p>
              <ul>
                <li>
                  <a href={linkedinLink} target="_blank">
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href={instagramLink} target="_blank">
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;