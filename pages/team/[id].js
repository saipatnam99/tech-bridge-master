import { useRouter } from "next/router";
import { teamdata } from "@/assets/data/teamdata";
import React from "react";
import Head from "next/head";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const TeamMemberDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const member = teamdata.find((m) => m.id.toString() === id);

  if (!member) return <p>Team member not found</p>;

  return (
    <>
      <Head>
        <title>{member.title} - Team Member</title>
      </Head>
      <section className="team-member-container">
        <div className="profile-card">
          {/* Back Button - Positioned Above Image */}
          <button className="back-button" onClick={() => router.push("/team")}>
            ⬅ Back to Team
          </button>

          {/* Profile Picture */}
          <div className="avatar">
            <img src={member.cover} alt={member.title} />
          </div>

          {/* Name & Social Links */}
          <h1>{member.title}</h1>
          <div className="social-links">
            {member.socialLinks.twitter && (
              <a href={member.socialLinks.twitter} target="_blank">
                <FaTwitter />
              </a>
            )}
            {member.socialLinks.facebook && (
              <a href={member.socialLinks.facebook} target="_blank">
                <FaFacebook />
              </a>
            )}
            {member.socialLinks.linkedin && (
              <a href={member.socialLinks.linkedin} target="_blank">
                <FaLinkedin />
              </a>
            )}
            {member.socialLinks.instagram && (
              <a href={member.socialLinks.instagram} target="_blank">
                <FaInstagram />
              </a>
            )}
          </div>

          {/* Buttons */}
          <div className="actions">
            <button className="message-btn">Message</button>
            <button className="share-btn">Share</button>
          </div>

          {/* Role & Experience */}
          <div className="info">
            <p>
              <strong>Role:</strong> {member.post}
            </p>
            <p>
              <strong>Experience:</strong> {member.experience}
            </p>
            <p>
              <strong>Education:</strong> {member.education}
            </p>
          </div>

          {/* Location */}
          <div className="location">
            <FaMapMarkerAlt /> {member.location}
          </div>

          {/* Skills */}
          <div className="skills">
            <strong>Superpower Skills:</strong>
            <div className="skill-tags">
              {member.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="details-section">
          {/* About the Employee */}
          <div className="aboutSection">
            <h2>About {member.title}</h2>
            <p>{member.description}</p>
          </div>

          {/* Key Achievements */}
          {member.achievements && (
            <div className="achievements">
              <h3>Key Achievements</h3>
              <ul>
                {member.achievements.map((achievement, index) => (
                  <li key={index}>✅ {achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Technologies */}
          {member.tools && (
            <div className="toolsSection">
              <h3>Tools & Technologies</h3>
              <p>{member.tools.join(", ")}</p>
            </div>
          )}

          {/* Work Preferences & Availability */}
          {member.lookingForWork && (
            <div className="availability">
              <h3>Availability</h3>
              <p>
                🚀 Open to new opportunities, consulting, and freelance
                projects.
              </p>
            </div>
          )}

          {/* Contact Information */}
          <div className="contactSection">
            <h3>Contact</h3>
            {member.email && (
              <p>
                <FaEnvelope />{" "}
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </p>
            )}
            {member.website && (
              <p>
                <FaGlobe />{" "}
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.website}
                </a>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMemberDetail;
