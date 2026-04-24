
//#region Modulings Images
import modulingsImage from "./../assets/Modulings/Modulings.png";
import modulingsImage1 from "./../assets/Modulings/ModulingsIntro.gif";
import modulingsImage2 from "./../assets/Modulings/Modulings2.jpg";
import modulingsImage3 from "./../assets/Modulings/ModulingsShoot.gif";
import modulingsImage4 from "./../assets/Modulings/ModulingsAdd.gif";
import modulingsImage5 from "./../assets/Modulings/ModulingsDie.gif";
//#endregion

//#region Dwarven Fortune Images
import dwarvenFortuneThumbnail from "./../assets/DwarvenFortune/DwarvenFortune.png";
import dwarvenFortuneImage1 from "./../assets/DwarvenFortune/Dwarven2.gif";
import dwarvenFortuneImage2 from "./../assets/DwarvenFortune/Dwarven3.gif";
import dwarvenFortuneImage3 from "./../assets/DwarvenFortune/Dwarven4.gif";
import dwarvenFortuneImage4 from "./../assets/DwarvenFortune/Dwarven5.gif";
//#endregion

//#region Below Deck Images
import belowDeckImage from "./../assets/BelowDeck/BelowDeck.png";
import belowDeckImage1 from "./../assets/BelowDeck/BelowDeckIdle.gif";
import belowDeckImage2 from "./../assets/BelowDeck/BelowDeckLight.gif";
import belowDeckImage3 from "./../assets/BelowDeck/BelowDeckDie.gif";
//#endregion

//#region Deathscalator Images
import deathscalatorImage from "./../assets/Deathscalator/DeathscalatorThumbnail.png";
import deathscalatorImage1 from "./../assets/Deathscalator/Deathscalator1.png";
import deathscalatorImage2 from "./../assets/Deathscalator/Deathscalator2.png";
//#endregion

//#region Loopify Images
import loopifyImage from "./../assets/Loopify/Loopify.png";
import loopifyImage2 from "./../assets/Loopify/Loopify2.png";
import loopifyImage3 from "./../assets/Loopify/Loopify3.png";
import loopifyImage4 from "./../assets/Loopify/Loopify4.png";
//#endregion

//#region Final Catch Images
import finalCatchThumbnail from "./../assets/FinalCatch/FinalCatchThumbnail.png";
import finalCatchGif from "./../assets/FinalCatch/FinalCatchIntro.gif";
import finalCatchGif2 from "./../assets/FinalCatch/FinalCatch3.gif";
import finalCatchGif3 from "./../assets/FinalCatch/FinalCatch4.gif";
import finalCatchGif4 from "./../assets/FinalCatch/FinalCatch5.gif";
import finalCatchGif5 from "./../assets/FinalCatch/FinalCatch6.gif";
//#endregion

//#region Endure Images
import endureThumbnail from "./../assets/Endure/EndureThumbnail.png";
import endureImage1 from "./../assets/Endure/EndureLifeboat.png";
import endureImage2 from "./../assets/Endure/EndureDen.png";
import endureImage3 from "./../assets/Endure/EndureMoon.png";
import endureImage4 from "./../assets/Endure/EndureDaisy.png";
import endureGif1 from "./../assets/Endure/DaisyRoar.gif";
//#endregion

import bananaGitImage from "./../assets/BananaGit/BananaGitThumbnail.png";
import bananaGitGif from "./../assets/BananaGit/BananaGitGif.gif";

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
  thumbnail: string,
  images: string[];
  shortDescription: string;
  description: string;
  role: string;
  tags: string[];
  links: ProjectLink[];
}

export const professional: Project[] = [
   {
    id: 9,
    slug: "endure",
    title: "Endure",
    status: 'IN_DEVELOPMENT',
    thumbnail: endureThumbnail,
    images: [
      endureImage1,
      endureImage2,
      endureImage3,
      endureImage4,
      endureGif1,
    ],
    shortDescription: "Based on the true story of the Endurance expedition",
    description:
      "Endure is a survival horror game based on the Endurance expedition. You play as someone stranded after a crash, and you must repair a lifeboat to escape an icesheet. However, you are not alone.",
    role: "I am working on endure as a Lead Graphics and Gameplay programmer. This is my first project working in Unity HDRP, and I've hit many roadblocks with performance. Some optimizations I've made include disabling certain render features like Global Screen Space Illumination and utilizing Unity's Screen API to pixelate the screen. Additionally, I've gotten to work more with Unity's rig builder system, and have made some cool procedural animations.",
    tags: ["Horror", "Survival", "PSX", "Arctic"],
    links: [],
  },
  {
    id: 1,
    slug: "modulings",
    title: "Modulings",
    status: 'COMPLETE',
    thumbnail: modulingsImage,
    images: [
      modulingsImage1,
      modulingsImage2,
      modulingsImage3,
      modulingsImage4,
      modulingsImage5,
    ],
    shortDescription: "1st Place winner of Wolfjam 2024",
    description:
      "Modulings was made for Wolfjam 2024 with the theme Connections. We made the game as a team of 7 in 26 hours. Modulings took first place out of 63 games, being noted as being: 'ready for a steam release'",
    role: "I worked as a gameplay and systems programmer. I worked on a tutorial and projectile system, as well as many small gameplay elements. One of the big challenges we faced during this game jam was a size contraint. The game had to be under 35 megabytes in size, which required us to optimize many of our sound and art assets.  ",
    tags: ["Action", "Arcade", "2D", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://ceichert31.itch.io/modulings" }, {label: "Article", url: "https://www.champlain.edu/blog/stories/guide-to-building-a-winning-game/"}],
  },
  {
    id: 2,
    slug: "below-deck",
    title: "Below Deck",
    status: 'COMPLETE',
     thumbnail: belowDeckImage,
    images: [
      belowDeckImage1,
      belowDeckImage2,
      belowDeckImage3,
    ],
    shortDescription: "Sneak around a hijacked cargo ship!",
    description:
      "Below Deck was made for a 10-day game jam with the theme cult. The game focuses around a player who must sneak past cultists that overtook the cargo ship they work on.",
    role: "I focused on implementing post processing effects like dithering as well as creating systems for the monster to detect the player by sound. A big challenge we ran into was lighting. We had so many lights we were hitting the max of what our shadow atlas could hold! I ended up fixing this by using Unity's Level of detail component, that disabled lights that were far away from the player. ",
      tags: ["Horror", "Stealth", "PSX", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://pineapple3114.itch.io/below-deck" }],
  },
  {
    id: 3,
    slug: "dwarven-fortune",
    title: "Dwarven Fortune",
    status: 'COMPLETE',
     thumbnail: dwarvenFortuneThumbnail,
    images: [
      dwarvenFortuneImage1,
      dwarvenFortuneImage2,
      dwarvenFortuneImage3,
      dwarvenFortuneImage4,
    ],
    shortDescription: "Collect ores to repair your dwarven drill!",
    description:
      "Dwarven Fortune takes you into the depths of the caves drilling towards the rumored golden city. Fight cave wildlife and collect ores to repair your drill to make it to the rumored city.",
    role: "I worked as a systems programmer and gameplay programmer, mainly creating a saving system, a stats system, and player interactions with the world. I also created the dynamic biome-shifting system with each biome having its own post processing effects and music.",
    tags: ["Action", "2D", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://canik.itch.io/dwarvenfortune" }],
  },
  {
    id: 4,
    slug: "loopify",
    title: "Loopify",
    status: 'COMPLETE',
    thumbnail: loopifyImage,
    images: [
      loopifyImage2,
      loopifyImage3,
      loopifyImage4,
    ],
    shortDescription: "Explore a magical MP3 player",
    description:
      "Loop through songs to find albumn covers to escape this magical MP3 player.",
    role: "I worked as a Gameplay programmer, implementing all the functionallity for the MP3 player and the song swapping mechanic. I had a lot of fun making the MP3 player interactable and adding gamefeel with packages like DOTween and Easy Text Effects.",
    tags: ["Platforming", "Time Loop", "Game Jam"],
    links: [{ label: "Play on itch.io", url: "https://hoxfire.itch.io/loopify" }],
  },
    {
    id: 5,
    slug: "deathscalator",
    title: "Deathscalator",
    status: 'COMPLETE',
    thumbnail: deathscalatorImage,
    images: [
      deathscalatorImage1,
      deathscalatorImage2,
    ],
    shortDescription: "Clear out a contagous outbreak on an escalator",
    description:
      "Deathscalator was a 4-week student project where I worked in a team of 6. The game is an arcade-style game where you fight off enemies while descending down an escalator.",
    role: "I worked as the sole programmer on this team, and my main focuses were on implement gameplay and systems, like the ability system and enemy spawning systems. One of my proudest accomplishments on this project was a blood splatter system that utilized object-pooling to spawn blood decals and fade them out.",
    tags: ["Action", "Arcade"],
    links: [{ label: "Play on itch.io", url: "https://pineapple3114.itch.io/deathscalator" }],
  },
];

export const personal: Project[] = [
  {
    id: 8,
    slug: "final-catch",
    title: "Final Catch",
    status: 'ON_HIATUS',
    thumbnail: finalCatchThumbnail,
    images: [
      finalCatchGif,
      finalCatchGif2,
      finalCatchGif3,
      finalCatchGif4,
      finalCatchGif5,
    ],
    shortDescription: "A game about fighting big fish",
    description:
      "Final catch started with a premise, what if fishing minigames were more intense. ",
    role: "I've done a little bit of everything working on Final Catch. I've done a lot of Graphics programming, making multiple shaders.",
      tags: ["Action", "Fishing", "Unity"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Ceichert31/Final-Catch" },
    ],
  },
  {
    id: 6,
    slug: "banana-git",
    title: "Banana Git",
    status: 'IN_DEVELOPMENT',
    thumbnail: bananaGitImage,
    images: [
      bananaGitGif,
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
    thumbnail: vulkanImage,
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