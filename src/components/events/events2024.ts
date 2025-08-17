import { EventItem } from "./events2025";
import cosmSho from "/assets/events/cosm-sho.png";
import figma101 from "/assets/events/figma-101.jpg";
import gitSmart from "/assets/events/git-smart.jpg";

const events2024: EventItem[] = [
  {
    id: "cs-2024-08-23",
    title: "Cosmic Showdown",
    description:
      "A fast-paced game-tech faceoff featuring mini-tournaments, live demos, and a showcase of student-built games.",
    image: cosmSho,
    dateISO: "2024-08-23",
    displayDate: "23rd August 2024",
    time: "03:00 PM - 05:00 PM",
    location: "SFIT",
    locationLink: "https://www.google.com/maps/search/?api=1&query=SFIT",
    category: "competition",
    status: "completed",
    tags: ["Game Tech", "Gaming", "Showcase", "Godot"],
    registrationState: "Event Completed",
    formLink: null,
    entry: "₹40",
    speakers: [],
  },
  {
    id: "fg-2024-09-21",
    title: "Figma 101",
    description:
      "Hands-on intro to UI/UX with Figma — frames, components, auto layout, prototyping, and team workflows.",
    image: figma101,
    dateISO: "2024-09-21",
    displayDate: "21st September 2024",
    time: "03:00 PM - 05:00 PM",
    location: "SFIT, Lab 128",
    locationLink:
      "https://www.google.com/maps/search/?api=1&query=SFIT%20Lab%20128",
    category: "workshop",
    status: "completed",
    tags: ["UI/UX", "Figma", "Prototyping", "Design"],
    registrationState: "Event Completed",
    formLink: null,
    entry: "Free",
    speakers: ["Ujwal Katariya"],
  },
  {
    id: "gs-2024-10-19",
    title: "Git Smart",
    description:
      "Hero to Zero: Learn the Basics of VCS, Git and Collaboration!",
    image: gitSmart,
    dateISO: "2024-10-19",
    displayDate: "19th October 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Online",
    category: "workshop",
    status: "completed",
    tags: ["Git", "GitHub", "Version Control", "CLI"],
    registrationState: "Event Completed",
    formLink: null,
    entry: "Free",
    speakers: ["Om Kate"],
    speakerLinks: {
      "Om Kate": {
        github: "https://github.com/skinatro",
        linkedin: "https://www.linkedin.com/in/skinatro",
      },
    },
  },
];

export default events2024;
