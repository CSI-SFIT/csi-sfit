import { EventItem } from "./events2025";
import nextjsWorkshop from "/assets/events/nextjs-workshop.jpg";
import hackx from "/assets/events/hackx.jpg";

const events2026: EventItem[] = [
  {
    id: "1",
    title: "Next.Js Workshop",
    description: "Learn all about Next.Js in this hands-on session.",
    image: nextjsWorkshop,
    dateISO: "2026-01-21",
    displayDate: "21st Jan 2026",
    time: "03:00 PM",
    location: "SFIT, AutoCAD Lab",
    locationLink: "https://www.google.com/maps/search/?api=1&query=SFIT",
    category: "workshop",
    status: "completed",
    tags: ["Next.Js", "React", "Workshop"],
    registrationState: "Event Completed",
    formLink: null,
    entry: "Free",
    speakers: ["Arshvir Singh Kalsi"],
    speakerLinks: {
      "Arshvir Singh Kalsi": {
        github: "https://github.com/ArshvirSk",
      },
    },
  },
  {
    id: "2",
    title: "Hackx2.0",
    description: "The ultimate hackathon experience. Build, innovate, and win exciting prizes!",
    image: hackx,
    dateISO: "2026-04-18",
    displayDate: "18th April 2026",
    time: "08:00 AM",
    location: "Auditorium, SFIT",
    locationLink: "https://www.google.com/maps/search/?api=1&query=SFIT",
    category: "event",
    status: "ongoing",
    tags: ["Hackathon", "Prizes"],
    registrationState: "Registrations Over",
    formLink: "https://hackx2-0.vercel.app",
    entry: "₹250",
    speakers: [],
  },
];

export default events2026;
