//#region Project Entries

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
        "https://picsum.photos/800/500?random=1",
        "https://picsum.photos/800/500?random=1.1",
        "https://picsum.photos/800/500?random=1.2"
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
        "https://picsum.photos/800/500?random=2",
        "https://picsum.photos/800/500?random=2.1",
        "https://picsum.photos/800/500?random=2.2"
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
        "https://picsum.photos/800/500?random=3",
        "https://picsum.photos/800/500?random=3.1"
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
        "https://picsum.photos/800/500?random=4",
        "https://picsum.photos/800/500?random=4.1"
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
        "https://picsum.photos/800/500?random=5",
        "https://picsum.photos/800/500?random=5.1"
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
        "https://picsum.photos/800/500?random=6",
        "https://picsum.photos/800/500?random=6.1"
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
      title: "Roachelles Motel",
      images: [
        "https://picsum.photos/800/500?random=7",
        "https://picsum.photos/800/500?random=7.1"
      ],
      shortDescription: "A motel management game",
      description: "Manage a quirky motel filled with unusual guests in this humorous simulation game. Keep your guests happy, manage resources, and deal with the unexpected.",
      tags: ["Simulation", "Management", "Unity"],
      links: [
        { label: "Play on itch.io", url: "https://canik.itch.io/roachelles-motel" }
      ]
    },
    {
      id: 8,
      title: "Loopify",
      images: [
        "https://picsum.photos/800/500?random=8",
        "https://picsum.photos/800/500?random=8.1"
      ],
      shortDescription: "A time-loop puzzle game",
      description: "Master time loops to solve intricate puzzles in this mind-bending game. Learn from each iteration and use knowledge from previous loops to progress.",
      tags: ["Puzzle", "Time Loop", "Game Jam"],
      links: [
        { label: "Play on itch.io", url: "https://hoxfire.itch.io/loopify" }
      ]
    },
    {
      id: 9,
      title: "Dungeon Dater",
      images: [
        "https://picsum.photos/800/500?random=9",
        "https://picsum.photos/800/500?random=9.1"
      ],
      shortDescription: "A dating sim meets dungeon crawler",
      description: "Romance and adventure collide in this unique blend of dating sim and dungeon exploration. Build relationships while battling monsters and collecting loot.",
      tags: ["Dating Sim", "RPG", "Unity"],
      links: [
        { label: "Play on itch.io", url: "https://snerds.itch.io/dungeongardengame" }
      ]
    },
    {
      id: 10,
      title: "Final Light",
      images: [
        "https://picsum.photos/800/500?random=10",
        "https://picsum.photos/800/500?random=10.1"
      ],
      shortDescription: "An atmospheric adventure",
      description: "Journey through a world of darkness seeking the final light in this atmospheric adventure game. Explore hauntingly beautiful environments and uncover the story of a dying world.",
      tags: ["Adventure", "Atmospheric", "Unity"],
      links: [
        { label: "Play on itch.io", url: "https://normalcreator5452.itch.io/final-light" }
      ]
    },
    {
      id: 11,
      title: "Deathscalator",
      images: [
        "https://picsum.photos/800/500?random=11",
        "https://picsum.photos/800/500?random=11.1"
      ],
      shortDescription: "An escalating challenge game",
      description: "Face increasingly difficult challenges in this fast-paced action game. Master the mechanics as difficulty ramps up exponentially in this score-chasing experience.",
      tags: ["Action", "Arcade", "Game Jam"],
      links: [
        { label: "Play on itch.io", url: "https://pineapple3114.itch.io/deathscalator" }
      ]
    }
  ];

  export const allItems: Project[] = [...projects, ...games];

//#endregion
