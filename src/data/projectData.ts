import modulingsImage from "./../assets/Modulings.png";
import dwarvenFortuneImage from "./../assets/DwarvenFortune.png";
import loopifyImage from "./../assets/Loopify.png";
import belowDeckImage from "./../assets/BelowDeck.png";
import bananaGitImage from "./../assets/BananaGitThumbnail.png";
import vulkanImage from "./../assets/VulkanThumbnail.png";

//Project status 'enum'
const ProjectStatus = {
  InDevelopment: 'IN_DEVELOPMENT',
  OnHiatus: 'ON_HIATUS',
  Completed: 'COMPLETE',
} as const;

type StatusConfig = {
  text: string;
  color: string;
}

type ProjectStatusValue = (typeof ProjectStatus)[keyof typeof ProjectStatus];

//Map from enum to text and color strings
const StatusMap: Record<ProjectStatusValue, StatusConfig> = {
  [ProjectStatus.InDevelopment]: {text: 'In Development', color: '#4c96e6'},
  [ProjectStatus.OnHiatus]: {text: 'On Hiatus', color: 'yellow'},
  [ProjectStatus.Completed]: {text: 'Complete', color: 'green'},
}

//Finds the correct text and text color based on project status
export function getStatusInfo(status: ProjectStatusValue) : StatusConfig{
  return StatusMap[status];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  status: ProjectStatusValue;
  images: string[];
  shortDescription: string;
  description: string;
  role: string;
  tags: string[];
  links: ProjectLink[];
}

export const professional: Project[] = [
   {
    id: 1,
    slug: "modulings",
    title: "Modulings",
    status: 'COMPLETE',
    images: [
      modulingsImage,
    ],
    shortDescription: "1st Place winner of Wolfjam 2024",
    description:
      "Modulings was made for Wolfjam 2024 with the theme Connections. We made the game as a team of 7 in 24 hours.",
    role: "I Worked as a gameplay and systems programmer. I created a tutorial and projectile system.",
    tags: ["Action", "Arcade", "2D", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://ceichert31.itch.io/modulings" }],
  },
  {
    id: 2,
    slug: "below-deck",
    title: "Below Deck",
    status: 'COMPLETE',
    images: [
      belowDeckImage,
    ],
    shortDescription: "A horror stealth game",
    description:
      "Below Deck was made for a 10-day game jam with the theme cult. The game focuses around a player who must sneak past cultists that overtook the cargo ship they work on.",
    role: "I focused on implementing post processing effects like dithering as well as creating systems for the monster to detect the player by sound. ",
      tags: ["Horror", "Stealth", "PSX", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://pineapple3114.itch.io/below-deck" }],
  },
  {
    id: 3,
    slug: "dwarven-fortune",
    title: "Dwarven Fortune",
    status: 'COMPLETE',
    images: [
      dwarvenFortuneImage
    ],
    shortDescription: "Collect ores to repair your dwarven drill!",
    description:
      "Dwarven Fortune takes you into the depths of the caves drilling towards the rumored golden city. Fight cave wildlife and collect ores to repair your drill to make it to the rumored city.",
    role: "I worked as a systems programmer and gameplay programmer, mainly creating a saving system, a stats system, and player interactions with the world",
    tags: ["Action", "2D", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://canik.itch.io/dwarvenfortune" }],
  },
  {
    id: 4,
    slug: "loopify",
    title: "Loopify",
    status: 'COMPLETE',
    images: [
      loopifyImage
    ],
    shortDescription: "Explore a magical MP3 player",
    description:
      "Loop through songs to find albumn covers to escape this magical MP3 player.",
    role: "I worked as a Gameplay programmer, implementing all the functionallity for the MP3 player and the song swapping mechanic",
    tags: ["Platforming", "Time Loop", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://hoxfire.itch.io/loopify" }],
  },
    {
    id: 5,
    slug: "deathscalator",
    title: "Deathscalator",
    status: 'COMPLETE',
    images: [
      
    ],
    shortDescription: "Clear out a contagous outbreak on an escalator",
    description:
      "Deathscalator was a 4-week student project where I worked in a team of 6. The game is an arcade-style game where you fight off enemies while descending down an escalator.",
    role: "I worked as the sole programmer on this team, and my main focuses were on implement gameplay and systems, like the ability system and enemy spawning systems.",
    tags: ["Action", "Arcade", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://pineapple3114.itch.io/deathscalator" }],
  },
];

export const personal: Project[] = [
{
    id: 6,
    slug: "banana-git",
    title: "Banana Git",
    status: 'IN_DEVELOPMENT',
    images: [
      bananaGitImage
    ],
    shortDescription: "A version control user interface",
    description:
      "Banana Git is a user-friendly Git client that simplifies version control workflows. It has built in Git tutorials friendly for interdisciplinary teams.",
    role: "I work on BananaGit as a solo-developer, taking on both Software-Engineering and Devops responsibilities.",
      tags: ["Software", ".NET", "Git"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Ceichert31/BananaGit" },
    ],
  },
  {
    id: 7,
    slug: "vulkan-graphics-engine",
    title: "Vulkan Graphics Engine",
    status: 'ON_HIATUS',
    images: [
      vulkanImage
    ],
    shortDescription: "A graphics rendering engine using Vulkan API",
    description:
      "A personal project focused on making a framework for implementing advanced rendering technics and making games.",
    tags: ["Vulkan", "Graphics", "C++"],
    role: "I work on my Vulkan Graphics engine as a solo-developer for fun.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Ceichert31/VulkanRenderer" },
    ],
  },
];

export const allItems: Project[] = [...professional, ...personal];