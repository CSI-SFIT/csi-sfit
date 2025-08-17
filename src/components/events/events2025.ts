import llm25 from "/assets/events/llm-2025.jpg";
import GhoPro from "/assets/events/gho-pro.png";
import CSILogo from "/assets/csi_logo.jpg";

export type EventCategory =
  | "workshop"
  | "seminar"
  | "competition"
  | "event"
  | "networking";
export type EventStatus = "upcoming" | "ongoing" | "completed";

export type SpeakerLinks = Record<
  string,
  { instagram?: string; github?: string; linkedin?: string }
>;

export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  dateISO: string;
  displayDate?: string;
  time?: string;
  location: string;
  locationLink?: string;
  category: EventCategory;
  status: EventStatus;
  tags: string[];
  registrationState:
    | "Event Completed"
    | "Registrations Over"
    | "Not Taking Registrations Yet"
    | "Register Now";
  formLink: string | null;
  entry?: string | null;
  speakers: string[];
  speakerLinks?: SpeakerLinks;
}

const events2025: EventItem[] = [
  {
    id: "1",
    title: "Let's Talk Code: LLM Workshop",
    description: `Learn practical prompting, RAG basics, and build a simple app integrating an LLM API`,
    image: llm25,
    dateISO: "2025-02-06",
    displayDate: "6th Feb 2025",
    time: "03:00 PM",
    location: "SFIT, Room 128",
    locationLink: "https://www.google.com/maps/search/?api=1&query=SFIT",
    category: "workshop",
    status: "completed",
    tags: ["AI", "LLM", "RAG", "Workshop"],
    registrationState: "Event Completed",
    formLink: null,
    entry: "Free",
    speakers: ["Craig D'Souza", "Elvis D'Souza"],
  },
  {
    id: "2",
    title: "Mosaic: Ghost Protocol",
    description: `Team up (2–4 members) and build the secrets to the ancient code`,
    image: GhoPro,
    dateISO: "2025-03-25",
    displayDate: "25th-26th Mar 2025",
    time: "09:00 AM",
    location: "SFIT",
    locationLink: "https://www.google.com/maps/search/?api=1&query=SFIT",
    category: "competition",
    status: "completed",
    tags: ["Game", "Team", "Prizes"],
    registrationState: "Event Completed",
    formLink: null,
    entry: "₹70",
    speakers: [],
  },
  {
    id: "3",
    title:
      "CSI x AECC — CYBERSECURITY WORKSHOP + FREE INTERNSHIP & AUSTRALIA EDUCATION FAIR",
    description: `🎓 What’s in store?
🚀 Face-to-face with Top Australian Universities
🔍 On-the-Spot Profile Reviews
💸 Scholarship Insights & Application Tips
🤝 1:1 Expert Counselling Sessions
GET FREE INTERNSHIP BY ATTENDING THIS EVENT!`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAQe1MTRHj9x0yZ9P3sGBXqW-yLfMWU8v2Q&s",
    dateISO: "2025-07-26",
    displayDate: "26th July 2025",
    time: "10:00 AM",
    location: "AECC, Andheri East, Mumbai – 400069",
    locationLink:
      "https://www.google.com/maps/search/?api=1&query=AECC%2C%20Andheri%20East%2C%20Mumbai%20%E2%80%93%20400069",
    category: "seminar",
    status: "completed",
    tags: ["Cyber Security", "Further Studies", "Internship"],
    registrationState: "Event Completed",
    formLink: null,
    entry: "Free",
    speakers: [],
  },
  {
    id: "4",
    title: "CSI Day",
    description: "Welcoming of old members and farewell of old members",
    image: CSILogo,
    dateISO: "2025-08-13",
    displayDate: "19th Aug 2025",
    time: "03:00 PM",
    location: "SFIT, Room 105",
    locationLink:
      "https://www.google.com/maps/search/?api=1&query=SFIT%2C%20Room%20105",
    category: "networking",
    status: "upcoming",
    tags: ["Networking", "CSI Day", "Alumni"],
    registrationState: "Registrations Over",
    formLink: null,
    entry: null,
    speakers: [],
  },
  {
    id: "5",
    title: "Frame The Moment",
    description: `Agenda of the workshop - 
1. To give inspiration for film making 
2. Teach basics of photography and videography 
3. Give knowledge such as video composition, script planning, etc 
4. Teach basics of DaVinci Resolve (management of data, cutting and trimming, effects and sound, fusion and colour correction) `,
    image: CSILogo,
    dateISO: "2025-08-20",
    displayDate: "20th Aug 2025",
    location: "SFIT, Room 114",
    locationLink:
      "https://www.google.com/maps/search/?api=1&query=SFIT%2C%20Room%20114",
    category: "workshop",
    status: "upcoming",
    tags: [
      "Workshop",
      "Videography",
      "Film Making",
      "Photography",
      "Video Editing",
      "Da Vinci Resolve",
    ],
    registrationState: "Register Now",
    formLink: `https://forms.gle/oSrdYjTjkQV4Tbwa7`,
    entry: "Free",
    speakers: [
      "Bhautik Nandha (Video Editor, Film Maker, Director)",
      "Eden Fernandes (Photographer, Faculty)",
      "Shaun Mathew (Multimedia Head)",
      "Smith Lopes (Multimedia Joint Head)",
      "Deepak Gehlot (Editor, Multimedia Executive)",
    ],
    speakerLinks: {
      "Bhautik Nandha (Video Editor, Film Maker, Director)": {
        instagram: "https://instagram.com/",
      },
      "Eden Fernandes (Photographer, Faculty)": {
        instagram: "https://instagram.com/",
      },
    },
  },
];

export default events2025;
