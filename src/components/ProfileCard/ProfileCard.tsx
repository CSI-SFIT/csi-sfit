import React, { useMemo } from "react";
import "./ProfileCard.css";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  innerGradient?: string;
  linkedinLink?: string;
  instagramLink?: string;
  githubLink?: string;
  email?: string;
  className?: string;
  name?: string;
  title?: string;
  handle?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  innerGradient,
  linkedinLink,
  instagramLink,
  githubLink,
  email,
  className = "",
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  showUserInfo = true,
}) => {
  const cardStyle = useMemo(
    () =>
      ({
        "--icon": iconUrl ? `url(${iconUrl})` : "none",
        "--grain": grainUrl ? `url(${grainUrl})` : "none",
        "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
      } as React.CSSProperties),
    [iconUrl, grainUrl, innerGradient]
  );

  return (
    <div
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle}
    >
      <section className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-user-text">
                    <div className="pc-handle text-sm sm:text-base md:text-lg">
                      @{handle.toLowerCase()}
                    </div>
                  </div>
                </div>

                <ul className="pc-social-icons flex justify-center">
                  {linkedinLink && (
                    <li>
                      <a
                        href={linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin />
                      </a>
                    </li>
                  )}
                  {instagramLink && (
                    <li>
                      <a
                        href={instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram />
                      </a>
                    </li>
                  )}
                  {githubLink && (
                    <li>
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github />
                      </a>
                    </li>
                  )}
                  {email && (
                    <li>
                      <a
                        href={`mailto:${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Mail />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;