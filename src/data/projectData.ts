import graveDiggerImage from "./../assets/GraveDigger.png";
import modulingsImage from "./../assets/Modulings.png";
import dwarvenFortuneImage from "./../assets/DwarvenFortune.png";
import loopifyImage from "./../assets/Loopify.png";
import belowDeckImage from "./../assets/BelowDeck.png";
import bananaGitImage from "./../assets/BananaGitThumbnail.png";
import vulkanImage from "./../assets/VulkanThumbnail.png";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  images: string[];
  shortDescription: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
    {
      id: 1,
      title: "Banana Git",
      images: [
        bananaGitImage
      ],
      shortDescription: "A Git client application",
      description: "Banana Git is a user-friendly Git client that simplifies version control workflows. Built with modern desktop technologies, it provides an intuitive interface for managing repositories, viewing diffs, and handling complex merge operations.",
      tags: ["Desktop", ".NET", "Git"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/Ceichert31/BananaGit" }
      ]
    },
    {
      id: 2,
      title: "Vulkan Graphics Engine",
      images: [
        vulkanImage
      ],
      shortDescription: "A graphics rendering engine using Vulkan API",
      description: "A high-performance graphics engine built with Vulkan, featuring advanced rendering techniques and optimizations. Demonstrates low-level graphics programming, shader development, and performance optimization techniques.",
      tags: ["Graphics", "Vulkan", "C++"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/Ceichert31/VulkanRenderer" }
      ]
    }
  ];

  export const games: Project[] = [
    {
      id: 3,
      title: "Modulings",
      images: [
        modulingsImage
      ],
      shortDescription: "A modular puzzle game",
      description: "Modulings is an innovative puzzle game where players manipulate modular pieces to solve challenges. Features unique mechanics and engaging level design that progressively introduces new concepts.",
      tags: ["Puzzle", "Unity", "Game Dev"],
      links: [
        { label: "Play on itch.io", url: "https://ceichert31.itch.io/modulings" }
      ]
    },
    {
      id: 4,
      title: "Dwarven Fortune",
      images: [
        dwarvenFortuneImage
      ],
      shortDescription: "A dwarven adventure game",
      description: "Embark on a dwarven quest for fortune in this exciting adventure game. Mine resources, battle enemies, and uncover treasures in procedurally generated dungeons.",
      tags: ["Adventure", "Unity", "Game Jam"],
      links: [
        { label: "Play on itch.io", url: "https://canik.itch.io/dwarvenfortune" }
      ]
    },
    {
      id: 5,
      title: "Below Deck",
      images: [
        belowDeckImage
      ],
      shortDescription: "A nautical mystery game",
      description: "Navigate the mysteries below deck in this atmospheric puzzle adventure. Uncover secrets and solve challenging puzzles in a beautifully crafted maritime setting.",
      tags: ["Mystery", "Puzzle", "Unity"],
      links: [
        { label: "Play on itch.io", url: "https://pineapple3114.itch.io/below-deck" }
      ]
    },
    {
      id: 6,
      title: "Grave Digger",
      images: [
        graveDiggerImage
      ],
      shortDescription: "A spooky digging game",
      description: "Dig through graveyards and uncover mysteries in this darkly humorous game. Balance risk and reward as you excavate treasures while avoiding supernatural encounters.",
      tags: ["Horror", "Arcade", "Game Jam"],
      links: [
        { label: "Play on itch.io", url: "https://pineapple3114.itch.io/grave-digger" }
      ]
    },
    {
      id: 7,
      title: "Loopify",
      images: [
        loopifyImage
      ],
      shortDescription: "A time-loop puzzle game",
      description: "Master time loops to solve intricate puzzles in this mind-bending game. Learn from each iteration and use knowledge from previous loops to progress.",
      tags: ["Puzzle", "Time Loop", "Game Jam"],
      links: [
        { label: "Play on itch.io", url: "https://hoxfire.itch.io/loopify" }
      ]
    },
  ];

  export const allItems: Project[] = [...projects, ...games];
