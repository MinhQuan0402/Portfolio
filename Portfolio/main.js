/* ── DATA ──────────────────────────────────────────────────── */

const EDUCATION_DATA = [
    {
        commit: 'a1b2c3d',
        period: '2017 — 2021',
        institution: 'Boon Lay Garden Primary School',
        degree: 'Primary Education',
        description: 'First exposure to computers and logical thinking through Scratch programming.',
        achievements: [
            'Learned basic computational thinking and logic',
            'Built interactive games and animations with Scratch',
            'Developed a structured, problem-solving mindset'
        ],
        tags: ['Scratch', 'Fundamentals', 'Logic']
    },
    {
        commit: 'e4f5g6h',
        period: '2021 — 2024',
        institution: 'Yuan Ching Secondary School',
        degree: 'Secondary Education (O-Levels)',
        description: 'Discovered passion for game development. Built first real game project and began learning structured programming.',
        achievements: [
            'Learned core programming concepts and OOP',
            'Built a 2D educational accounting game in Scratch',
            'Developed deep passion for interactive design and game systems',
            'Started exploring Unity Engine and C# scripting independently',
            'Trying out Blender for environment design and animations'
        ],
        tags: ['Scratch', 'Game Design', 'Programming', 'OOP', 'Unity', 'C#', 'Blender', 'Self-Learning', 'Passion', 'Initiative']
    },
    {
        commit: 'a7d8e9f',
        period: '2024 — Present',
        institution: 'Nanyang Polytechnic',
        degree: 'Diploma in Game Development & Technology',
        description: 'Enrolled in a rigorous game development programme covering engine programming, gameplay systems, XR design, console development, and interactive media.',
        achievements: [
            'Mastered Unity Engine and C# scripting',
            'Introduced to graphics programming and OpenGL fundamentals',
            'Gained experience with Unreal Engine and C++',
            'Gained creative and technical skills through level design, shader programming, and AR/XR projects',
            'Built gameplay systems and enemy AI behaviours',
            'Developed a PS5 game with full DualSense integration',
            'Created an AR app using ARCore/Vuforia on Unity',
            'Built 2D and 3D action games on Unity',
            'Worked on team-based 2D and 3D game projects'
        ],
        tags: ['Unity', 'C++', 'C#', 'PS5 SDK', 'ARCore', 'OpenGL', 'Unreal', 'Graphics Programming', 'Self-Learning', 'Passion', 'Initiative'  ]
    }
];

const PROJECTS_DATA = [
    {
        file: 'interactive_storytelling_project.cpp',
        title: 'Home Invasion Adventure',
        category: 'game',
        description: 'This is a C++ 2D game framework for a home/living space exploration game. This project is done by 4 people.<br>' +
                     'The game centers around a home environment with interactive furniture, items, and a "Robber" antagonist, ' +
                     'suggesting a home defense or detective-style gameplay mechanic.',
        tech: ['C++', 'Text-based', 'Command Prompt', 'System Management'],
        status: 'completed',
        image: './images/projects/interactive_story_project.png',
        year: '2024'
    },
    {
        file: 'computer-graphic-modeling.cpp',
        title: 'Computer Graphic Modeling and Animation',
        category: 'engine',
        description: 'It is a OpenGL application that renders a stylized character scene using custom procedural meshes from MeshBuilder (core logic in Scene1.cpp). ' +
                     'Input-driven state machine (idle, flying, summon, attack) animates parts via transform matrices and time-based updates.',
        tech: ['C++', 'OpenGL', 'Graphics'],
        status: 'completed',
        image: './images/projects/cgm_a1.png',
        year: '2024'
    },
    {
        file: 'computer-graphic-modeling.cpp',
        title: 'Mini OpenGL Game',
        category: 'game',
        description: 'This project using C++ and OpenGL. It contains gameplay and objects like player (Player, PlayerMesh), ' +
                     'enemies and AI (Enemy, Spider, Zombie, Dragon, Bird, FOV_Vision, Eye), projectiles (Magic_Bullet, BirdBullet), ' +
                     'pickups/UI (HealingPotion, BarUI, Stuff), environment objects (Tree, Rock, Wall). ' + 
                     'It supported systems: input (Input), collision (Collider), transforms (Transform).',
        tech: ['C++', 'Simple AI', 'FSM', 'Modeling', 'Coded Animation'],
        status: 'completed',
        image: './images/projects/cgm_a2.png',
        year: '2024'
    },
    {
        file: 'computer-graphic-programming.cpp',
        title: 'Project Name: Robot Animation Engine',
        category: 'engine',
        description: 'This is a C++14-based 3D graphics application that creates and animates robotic ' +
                     'characters in an interactive environment. The architecture follows a component-' +
                     'based design pattern with scene management and state machines. ' + 
                     'Core Features:<br>' + 
                     '1. Graphics & Rendering<br>' +
                     '2. Character System<br>',
        tech: ['C++', 'Coded Animation', 'Coded Meshes', 'Hierarchical Modelling', 'Stack Matrix'],
        status: 'completed',
        image: './images/projects/cgp_a1.png',
        year: '2024'
    },
    {
        file: 'forces-and-motion-programming.cpp',
        title: 'Orbit Escape',
        category: 'game',
        description: 'This is a space-themed platformer/physics-based game built in C++ using OpenGL. ' +
                     'This game is inspired by gravity ghost, which you are played as astronaut. ' +
                     'You need to glide around the space and collect star then you able to ride your space ship. ' +
                     'Your space ship will fly forward, so you have dodge the asteroid.',
        tech: ['OpenGL', 'C++', 'Physics', 'Collision Detection'],
        status: 'completed',
        image: './images/projects/formo_a1.png',
        year: '2024'
    },
    {
        file: 'database.sql',
        title: 'Interactive Quiz Platform with Cloud/Local MySQL Database',
        category: 'database',
        description: 'This is a Quiz Management & Leaderboard System built in C++ that interfaces with a MySQL database.' +
                     'The application provides two main functional areas:<br>' +
                     '1. Question Bank Management (Admin Features)<br>' +
                     '2. Quiz Features (User Features)<br>' +
                     '3. Analytics & Reporting<br>' +
                     '4. Database Architecture<br>' +
                     '5. Technical Details',
        tech: ['MySQL', 'C++', 'Networking'],
        status: 'completed',
        image: './images/projects/database_a2.png',
        year: '2025'
    },
    {
        file: 'computer-graphic-programming.cpp',
        title: '3D Interactive Horror Environment',
        category: 'game',
        description: 'This is a C++ 3D graphics game built on OpenGL (based on the shader and graphics-related components). ' +
                     'Players play as an explorer to investigate a house that recently have a murder case. ' +
                     'They will encounter unusual phenomenon and complete puzzles to complete the level. ' +
                     'This project created to demonstrate OpenGL custom shader such as texture, lighting and text rendering. ',
        tech: ['OpenGL', 'C++', 'Shader', 'Collision Detection', 'Entity Management'],
        status: 'completed',
        image: './images/projects/cgp_a2.png',
        year: '2025'
    },
    {
        file: 'forces-and-motion-programming.cpp',
        title: 'Angry Block',
        category: 'engine',
        description: 'This is a 2D Game Engine Framework built in C++ that combines graphics rendering with physics ' +
                     'simulation. The engine implements an entity-component architecture where game objects are ' +
                     'composed of reusable components like Transform and various colliders (Box, Circle, Polygon). ' +
                     'It features a complete 2D physics system with collision detection and manifold resolution, ' +
                     'managed through specialized manager classes for scenes, game objects, textures, and colliders.',
        tech: ['OpenGL', 'C++', 'Physics', 'Complex Collision Detection + Resolve', 'Rigidbody 2D'],
        status: 'completed',
        image: './images/projects/formo_a2.png',
        year: '2025'
    },
    {
        file: 'computer-graphics-simulation-project.cpp',
        title: 'Horror Carnival',
        category: 'game',
        description: 'This is a 2D Game Project with a team of 4 people built in C++ that combines graphics rendering with physics engine.' +
                     'Players are exploring the carnival area to get the ticket to watch the circus show by playing the mini game ' +
                     'Four mini games, four different unique scene that built by four talented students. ' +
                     'I was in charge of implementing physics engine into framework, one of the mini game and horror cutscene in the circus.',
        tech: ['OpenGL', 'C++', 'Physics Engine', 'Complex Collision Detection + Resolve'],
        status: 'completed',
        image: './images/projects/cgsp.png',
        year: '2025'
    },
    {
        file: 'web-dev.html',
        title: 'Ever First Portfolio',
        category: 'web',
        description: 'Learning in HTML and CSS in my Nanyang Poly, I have built my ever-first portfolio. ' +
                     'This project able to feature myself, education journey and showcase all my past project.',
        tech: ['HTML', 'CSS'],
        status: 'completed',
        image: './images/projects/webdev_a1.png',
        year: '2025'
    },
    {
        file: 'web-dev.html',
        title: 'GASI Website',
        category: 'web',
        description: 'I created my first educational website. ' +
                     'This wbesite is about space, galaxy and technology. Users also can play some mini games or quiz on the website.',
        tech: ['HTML', 'CSS', 'JS', 'Audio'],
        status: 'completed',
        image: './images/projects/webdev_a2.png',
        year: '2025'
    },
    {
        file: '2d-game-engine-application.unity',
        title: 'Race Up',
        category: 'game',
        description: 'This is my ever first Top-Down 2D Hyper-Casual Driving Game that using Unity in Nanyang Poly. ' +
                     'This game is about driving car only upwards infinitely. Players have to avoid obstable so that they can survive as long as they could.',
        tech: ['Unity', 'C#'],
        status: 'completed',
        image: './images/projects/2dgea_a1.png',
        year: '2025'
    },
    {
        file: '2d-game-engine-application.unity',
        title: '2D Action Platformer',
        category: 'game',
        description: 'This is a 2D Action Platformer Game that built in Unity ' +
                     'Players need to explore the map by using movement mechanics to reach different platform. In the exploration journey, ' +
                     'players will encounter enemies to stop them. Players can pickup sword and other consumables to help them achieve their goals. ',
        tech: ['Unity', 'C#', 'AI', 'State Machine'],
        status: 'completed',
        image: './images/projects/2dgea_a2.png',
        year: '2025'
    },
    {
        file: 'gameplay-programming.cpp',
        title: '2D Action Game',
        category: 'game',
        description: 'This is a 2D action game engine written in C++14 using OpenGL, featuring player-controlled combat, ' +
                     'enemy AI utilizing finite state machines (idle, chase, attack, stun states), ' + 
                     'projectile-based combat mechanics, an inventory system, physics simulation, ' +
                     'and game state management (intro, menu, play, pause). The project implements core game systems including a 2D tilemap, ' +
                     'entity managers for enemies and projectiles, GUI/HUD rendering, and a scoreboard system, all organized through singleton ' +
                     'patterns and coordinated by a central scene manager that handles rendering, input processing, and game logic updates.',
        tech: ['OpenGL', 'C++', 'AI', 'State Machine'],
        status: 'completed',
        image: './images/projects/gplp.png',
        year: '2025'
    },
    {
        file: 'mobile-programming.andriod',
        title: 'Megero',
        category: 'game',
        description: 'This project is buit by two people in Andriod Studio. ' +
                     'I responsible for core gameplay mechanics. ' + 
                     'Beside using java for gameplay programming, I also XML to build layout and relavent UI. ',
        tech: ['Andriod Studio', 'Java', 'XML'],
        status: 'completed',
        image: './images/projects/mobile_programming.jpg',
        year: '2025'
    },
    {
        file: 'shader-optimisation.unity',
        title: '3D Custom Shader Scene',
        category: 'engine',
        description: 'This project is buit in Unity by using a custom material. ' +
                     'It uses HLSL to create materials that produces textures, shadows, lighting, normal. ' + 
                     'Here are the features in this project: <br>' +
                     '1. Mirror reflection (Using scripted reflection probe). <br>' +
                     '2. Vertex displacement. <br>' +
                     '3. Multiple lights with different types of light.  <br>' +
                     '4. Multiple shadow for all types of light.  <br>' +
                     '5. Multiple texture by using RGBA channels (for terrain material).  <br>' +
                     '6. Water with refraction (depth based) and reflection.  <br>',
        tech: ['Unity', 'Shaderlab', 'C#', 'HLSL'],
        status: 'completed',
        image: './images/projects/shader_a1.png',
        year: '2025'
    },
    {
        file: 'shader-optimisation.unity',
        title: 'Post Processing 3D Action Game',
        category: 'engine',
        description: 'This project is buit in Unity with custom post processing and using shader graph. ' +
                     'It uses built in Unity Shader Graph to create unique materials and post processing. ' + 
                     'The project also uses HLSL to create different post processing to enhance the experience of the gameplay' + 
                     'Here are the features in this project: <br>' +
                     '1. Cel Shader <br>' +
                     '2. Slash Effect <br>' +
                     '3. Sketch Shadow Effect.  <br>' +
                     '4. Outline Effect.  <br>' +
                     '5. Action Line Effect.  <br>' +
                     '6. Impact Frame Effect.  <br>' +
                     '7. Radial Blur Effect.  <br>',
        tech: ['Unity', 'Shaderlab', 'C#', 'HLSL', 'Post-processing', 'Shader Graph'],
        status: 'completed',
        image: './images/projects/shader_a2.png',
        year: '2025'
    },
    {
        file: 'multiplayer-game-programming.unity',
        title: 'Around Us',
        category: 'game',
        description: 'Around Us is the my first multiplayer game built in Unity using Netcode. ' +
                     'This game is inspired by Among Us. It is unique that players are playing in 3D environments with unique gameplay.',
        tech: ['Unity', 'Netcode', 'C#', 'Multiplayer', 'Networking'],
        status: 'completed',
        image: './images/projects/mgp.png',
        year: '2025'
    },
    {
        file: 'ar-xr-development.unity',
        title: 'AR Science Explorer',
        category: 'xr',
        description: 'Free Android AR app using ARCore/Vuforia for students to visualise abstract science concepts in 3D with interactive elements and quizzes.',
        tech: ['Unity', 'ARCore', 'Vuforia', 'C#', 'Android'],
        status: 'completed',
        image: './images/projects/ar.jpg',
        year: '2026'
    },
    {
        file: 'roguevania.unity',
        title: 'Dark Forest Roguevania',
        category: 'game',
        description: '2D action platformer with roguelike mechanics, pixel art aesthetic, five weapon types, parallax scrolling backgrounds, and a boss fight system.',
        tech: ['Unity', 'C#', 'Pixel Art', 'Tilemaps'],
        status: 'in-progress',
        image: './images/projects/iwp.png',
        year: '2026'
    },
    {
        file: 'portfolio.html',
        title: 'Developer Portfolio',
        category: 'web',
        description: 'Personal portfolio with terminal-themed UI, interactive education timeline, and project showcase. Built with vanilla JS.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        status: 'in-progress',
        image: './images/projects/portfolio.png',
        year: '2026'
    }
];

const ITERM_COMMANDS = {
    help: [
        { t: 'dim', v: '' },
        { t: 'out', v: '  Available commands:' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  whoami              — identity & current role' },
        { t: 'out', v: '  cat background.txt  — my story so far' },
        { t: 'out', v: '  cat passion.txt     — what drives me' },
        { t: 'out', v: '  cat dream.txt       — where I want to go' },
        { t: 'out', v: '  ls                  — list all readable files' },
        { t: 'out', v: '  clear               — clear the terminal' },
        { t: 'out', v: '  exit                — return to main menu' },
        { t: 'dim', v: '' },
    ],
    whoami: [
        { t: 'dim', v: '' },
        { t: 'out', v: '  Nguyen Minh Quan' },
        { t: 'out', v: '  Game Developer  |  Year 3 @ Nanyang Polytechnic' },
        { t: 'out', v: '  Singapore, SG' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  Specialisation:  Gameplay & Engine Programming' },
        { t: 'out', v: '  Languages:       C++, C#, GLSL, JavaScript' },
        { t: 'out', v: '  Engines:         Unity, OpenGL, Unreal Engine' },
        { t: 'dim', v: '' },
    ],
    ls: [
        { t: 'dim', v: '' },
        { t: 'out', v: '  background.txt    passion.txt    dream.txt' },
        { t: 'dim', v: '  skills.config     projects.json  contact.sh' },
        { t: 'dim', v: '' },
    ],
};
 
const ITERM_FILES = {
    'background.txt': [
        { t: 'dim', v: '' },
        { t: 'out', v: '  I was born in Vietnam and raised in Singapore.' },
        { t: 'out', v: '  I have been living and studying in Singapore for most of my life.' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  On 27 Apr 2021, I started my journey in game development,' },
        { t: 'out', v: '  I build a simple 2D action game using Scratch.' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  In 2024 I enrolled in Nanyang Polytechnic\'s' },
        { t: 'out', v: '  Game Development and Technology course. Since I started' },
        { t: 'out', v: '  my journey, I have worked on various projects,' },
        { t: 'out', v: '  including Unity, Unreal Engine, and custom OpenGL renderers.' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  Every project has taught me one thing:' },
        { t: 'out', v: '  the best code is the code the player never notices.' },
        { t: 'dim', v: '' },
    ],
    'passion.txt': [
        { t: 'dim', v: '' },
        { t: 'out', v: '  I believe games are the most powerful' },
        { t: 'out', v: '  interactive medium we have.' },
        { t: 'out', v: '  Not just for entertainment. It provides virtual worlds where players can' },
        { t: 'out', v: '  feel, decide, and grow.' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  I love making things come alive.' },
        { t: 'out', v: '  Because that\'s what makes me feel that I am a god.' },
        { t: 'out', v: '  I am able to create a world where nobody can imagine.' },
        { t: 'out', v: '  Setting a place where imagination meets reality,' },
        { t: 'out', v: '  a story that captivates and inspires.' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  If a player feels engaged and immersed, I have succeeded.' },
        { t: 'dim', v: '' },
    ],
    'dream.txt': [
        { t: 'dim', v: '' },
        { t: 'out', v: '  **Short term:**' },
        { t: 'out', v: '    Find a decent job in the game industry.' },
        { t: 'out', v: '    Makes a positive impact on players\' experiences.' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  **Long term:**' },
        { t: 'out', v: '    Build a small studio. Strong values. Big ideas.' },
        { t: 'out', v: '    Make a difference in the lives of players.' },
        { t: 'out', v: '    Receive Game of The Year award for my game.' },
        { t: 'dim', v: '' },
        { t: 'out', v: '  The dream is not a title, it is a process and a future path' },
        { t: 'out', v: '  that I choose to walk on.' },
        { t: 'dim', v: '' },
    ],
};

const ITERM_CANDIDATES = [
    'help',
    'whoami',
    'ls',
    'clear',
    'exit',
    'cat background.txt',
    'cat passion.txt',
    'cat dream.txt',
];

const ACHIEVEMENTS_DATA = {
    certificates: [
        {
            title: 'Student Councilor',
            issuer: 'Yuan Ching Secondary School',
            year: '2020',
            tags: ['Leadership', 'Discipline'],
            desc: 'My leadership was recognised by my teachers and friends. They norminated me as student leader. This is where my leadership journey begun',
            src : './images/cert/sec2_cou.jpg'
        },
        {
            title: 'Best in Geography',
            issuer: 'Yuan Ching Secondary School',
            year: '2020',
            tags: ['Geography', 'Hard-working', 'Focus'],
            desc: 'I put my hard-work, dedication and perseverance to pursue in my study. It finally paid off when I tried my very best in my beloved subject.',
            src : './images/cert/geo_cert.jpg'
        },
        {
            title: 'Cyber Security Completion',
            issuer: 'Yuan Ching Secondary School',
            year: '2021',
            tags: ['Cyber Security', 'Participant', 'Outside Classroom'],
            desc: 'Every since I love exploring computer science, I always seek for opportunities to explore. ' +
                  'My school offered this chance for me to learn cyber security. It was a memorable experience.',
            src : './images/cert/cyber_cert.jpg'
        },
        {
            title: 'Student Senior Councilor',
            issuer: 'Yuan Ching Secondary School',
            year: '2021',
            tags: ['Leadership', 'Discripline', 'Senior', 'Promotion'],
            desc: 'Leadership does not stop at Secondary 2, my efforts got recognised by my teachers. They promoted me as senior councilor. This showed that my leadersip had improved over the year. ' +
                  'Hence, the responsibility was even more demanding.',
            src : './images/cert/sec3_cou.jpg'
        },
        {
            title: 'Student Senior Councilor ',
            issuer: 'Yuan Ching Secondary School',
            year: '2022',
            tags: ['Leadership', 'Discipline', 'Contribution', 'Consistence'],
            desc: 'Even though the weight of Senior Councillor title is heavy, nothing can stop me from striking perfection. I did show to my teachers and friends the consistency of my leadersip.',
            src : './images/cert/sec4_cou.jpg'
        },
        {
            title: 'Chief Librarian in Concert Band',
            issuer: 'Yuan Ching Secondary School',
            year: '2022',
            tags: ['Leadership', 'Contribution', 'Responsibility', 'CCA'],
            desc: 'I did show my leadership in my CCA too. I was appointed as Chief Librarian, taking care of distributing score to members and keep of the music score.',
            src : './images/cert/cca_lib_cert.jpg'
        },
        {
            title: 'CCA Contributor',
            issuer: 'Yuan Ching Secondary School',
            year: '2023',
            tags: ['Contribution', 'Participant'],
            desc: 'My efforts was recognised after 5 years of service in CCA as a member. I\'m so gladful that I was a member of Concert Band because it gave me as so much fun and lesson learn.',
            src : './images/cert/cca_mem_cert.jpg'
        },
        {
            title: 'Maths Challenge',
            issuer: 'Yuan Ching Secondary School',
            year: '2023',
            tags: ['Mathematic', 'Participant', 'Representative'],
            desc: 'Math is one of my strongest subjects. My teachers saw my potential and they recommended me to participate in Maths Challenge. Even though it was difficult, I did not give up and try my best to complete the challenge',
            src : './images/cert/math_challenge.jpg'
        },
        {
            title: 'Director List Year 1 Sem 1',
            issuer: 'Nanyang Polytechnic',
            year: '2024',
            tags: ['Strike For Perfection', 'Focus', 'Study Hard'],
            desc: 'Game development is my dream course. I will take any opportunity to enhance my skills and knowledge. I put so much efforts to learn how to code. It was not easy because it was my ever first full time coding.',
            src : './images/cert/dl_y1_sem1.jpg'
        },
        {
            title: 'Director List Year 1 Sem 2',
            issuer: 'Nanyang Polytechnic',
            year: '2024',
            tags: ['Strike For Perfection', 'Focus', 'Consistence'],
            desc: 'There were so many modules that I did not interested much. However, I did not give up completely because I belive that my GPA will be affected greatly. Therefore, I spent most of my time to catch up the concepts.',
            src : './images/cert/dl_y1_sem2_cert.jpg'
        },
        {
            title: 'Director List Year 2 Sem 1',
            issuer: 'Nanyang Polytechnic',
            year: '2025',
            tags: ['Strike For Perfection', 'Focus', 'Perseverance'],
            desc: 'When came to year 2. This was when heavy modules like AI Programming, Audio Programming. I was struggle to learn as it was very confusing. ' +
                  'Hence, I made my efforts to actively ask questions in lectures so that I can clarify all my confusion.',
            src : './images/cert/dl_y2_sem1_cert.jpg'
        },
        {
            title: 'GGJ26 Participation',
            issuer: 'Singapore GGJ',
            year: '2026',
            tags: ['Game Jam', 'Unity', 'Teamwork'],
            desc: 'Working in a team of three to deliver a game it was not easy. There were requried a lot of conversations, efforts and time. ' +
                  'I was one of the programmers to code the gameplay. The process was short but it gave me so much experience as I needed to balance between school assignment and this external project.' +
                  'Therefore, it required time management and teamwork to deliver the game before deadline',
            src : './images/cert/game_jam.jpg'
        }
    ]
};

/* ── DOM REFS ───────────────────────────────────────────────── */

const allSections    = document.querySelectorAll('.section');
const navItems       = document.querySelectorAll('.nav-item');
const footerNavItems = document.querySelectorAll('.footer-nav-item');
const backToTopBtn   = document.getElementById('backToTop');

// About
const aboutMenu      = document.getElementById('aboutMenu');
const profileUI      = document.getElementById('profileUI');
const interactiveTerminal = document.getElementById('interactiveTerminal');
const viewProfileBtn = document.getElementById('viewProfileBtn');
const viewInfoBGBtn  = document.getElementById('viewInfoBGBtn');
const backBtns       = document.querySelectorAll('.back-btn');
const achievSection  = document.getElementById('achievSection');

// Home
const typewriterEl   = document.getElementById('typewriter');
const featuredGrid   = document.getElementById('featuredGrid');

// Education, Projects
const eduTimeline    = document.getElementById('eduTimeline');
const projectFilters = document.getElementById('projectFilters');
const projectGrid    = document.getElementById('projectGrid');

// Contact
const contactForm    = document.querySelector('.terminal form');
const statusMsg      = document.getElementById('status');
const messageArea    = document.getElementById('message');
const wordCountEl    = document.getElementById('wordCount');
const charCountEl    = document.getElementById('charCount');

/* ── NAVIGATION ─────────────────────────────────────────────── */

function showSection(id) {
    allSections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.classList.toggle('is-home', id === 'home');

    // Reset About when leaving it
    if (id !== 'about') resetAboutUI();

    // Lazy render on first visit
    if (id === 'education' && !eduTimeline.dataset.rendered)    renderEducation();
    if (id === 'education')                                     initAchievements();
    if (id === 'projects'  && !projectGrid.dataset.rendered)    renderProjects();
}

function updateActiveNav(id) {
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === id);
    });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        showSection(item.dataset.section);
        updateActiveNav(item.dataset.section);
    });
});

footerNavItems.forEach(item => {
    item.addEventListener('click', () => {
        showSection(item.dataset.section);
        updateActiveNav(item.dataset.section);
    });
});

// Expose for inline onclick attributes
window.showSection   = showSection;
window.updateActiveNav = updateActiveNav;

/* ── TYPEWRITER ─────────────────────────────────────────────── */

(function initTypewriter() {
    const text = "Hello,\nI'm Minh Quan!";
    let idx = 1;

    function type() {
        typewriterEl.textContent = text.slice(0, idx) + '|';
        idx = idx >= text.length ? 1 : idx + 1;
        setTimeout(type, Math.random() * 160 + 80);
    }

    type();
})();

/* ── SIDE ROLLERS ───────────────────────────────────────────── */

function fillRollers() {
    document.querySelectorAll('.roller-text').forEach(container => {
        container.innerHTML = '';

        // Measure word height
        const probe = document.createElement('span');
        probe.textContent = 'HOME';
        container.appendChild(probe);
        const wordH   = probe.offsetHeight || 48;
        const stripH  = container.closest('.roller')?.offsetHeight;
        container.innerHTML = '';

        const count = Math.ceil(stripH / wordH) + 4;
        for (let i = 0; i < count; i++) {
            const span = document.createElement('span');
            span.textContent = 'HOME';
            container.appendChild(span);
        }
    });
}

fillRollers();
window.addEventListener('resize', fillRollers);

/* ── SCROLL REVEAL ──────────────────────────────────────────── */

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
        else                       entry.target.classList.remove('active');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── BACK TO TOP ────────────────────────────────────────────── */

window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 200);
});

backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── ABOUT ──────────────────────────────────────────────────── */

function resetAboutUI() {
    aboutMenu.classList.remove('hidden');
    profileUI.classList.add('hidden');
    interactiveTerminal.classList.add('hidden');
    viewProfileBtn.classList.remove('loading', 'hidden');
    viewInfoBGBtn.classList.remove('hidden');
    resetStatBars();
}

function resetStatBars() {
    document.querySelectorAll('.progress-fill').forEach(bar => { bar.style.width = '0'; });
}

function animateStatBars() {
    document.querySelectorAll('.progress-fill').forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.dataset.width; }, 500 + 350 * i);
    });
}

function toggleFullscreen() {
    const aboutSection = document.getElementById('about');
    const btn          = document.getElementById('fsBtn');
 
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        // Enter fullscreen
        const request = aboutSection.requestFullscreen?.()
            ?? aboutSection.webkitRequestFullscreen?.();
 
        Promise.resolve(request).catch(() => {
            // Fallback: browser blocked — silently ignore
        });
    } else {
        // Exit fullscreen
        (document.exitFullscreen?.() ?? document.webkitExitFullscreen?.());
    }
}

// == Interactive Terminal Logic ==
 
// Which suggestion index is keyboard-highlighted (-1 = none)
let acFocusIdx = -1;
 
/** Rebuild and show the suggestions list based on current input value */
function acUpdate(value) {
    const list    = document.getElementById('itermSuggestions');
    const trimmed = value.trim().toLowerCase();
 
    if (!trimmed) { acHide(); return; }
 
    const matches = ITERM_CANDIDATES.filter(
        c => c.startsWith(trimmed) && c !== trimmed
    );
 
    if (!matches.length) { acHide(); return; }
 
    acFocusIdx   = -1;
    list.innerHTML = matches
        .map(m =>
            `<li class="iterm-suggestion" data-value="${m}">` +
            // Bold the part the user already typed
            `<span class="typed">${m.slice(0, trimmed.length)}</span>` +
            `${m.slice(trimmed.length)}` +
            `</li>`
        )
        .join('');
 
    // mousedown (not click) so the input doesn't blur before we fill it
    list.querySelectorAll('.iterm-suggestion').forEach(item => {
        item.addEventListener('mousedown', e => {
            e.preventDefault();
            acFill(item.dataset.value);
        });
    });
 
    list.classList.add('open');
}
 
/** Fill the input with the chosen value and close the list */
function acFill(value) {
    const input = document.getElementById('itermInput');
    if (input) input.value = value;
    acHide();
    input?.focus();
}
 
/** Close and clear the suggestions list */
function acHide() {
    const list = document.getElementById('itermSuggestions');
    list.classList.remove('open');
    list.innerHTML = '';
    acFocusIdx = -1;
}
 
/** Move keyboard focus up/down through the visible suggestions */
function acMove(dir) {
    const items = document.querySelectorAll('.iterm-suggestion');
    if (!items.length) return;
    items[acFocusIdx]?.classList.remove('active');
    acFocusIdx = Math.max(0, Math.min(items.length - 1, acFocusIdx + dir));
    items[acFocusIdx]?.classList.add('active');
 
    // Mirror the focused suggestion in the input (preview)
    const input = document.getElementById('itermInput');
    if (input && acFocusIdx >= 0) input.value = items[acFocusIdx].dataset.value;
}

let itermHistory = [];  // command history for ↑ / ↓ navigation
let itermHistIdx = -1;
 
/**
 * Print an array of { t, v } line objects into #itermOutput.
 * Each line streams in with a small stagger for a typewriter feel.
 * t: 'out' | 'dim' | 'error' | 'blank'
 * v: string content
 */
function itermPrint(lines, onDone) {
    const out = document.getElementById('itermOutput');
    const returnMsgGrp = document.createElement('div');
    returnMsgGrp.className = 'iterm-output-grp';
    out.appendChild(returnMsgGrp);
    let i = 0;
    (function next() {
        if (i >= lines.length) { if (onDone) onDone(); return; }
        const { t, v } = lines[i];
        const row = document.createElement('div');
        row.className = `iterm-row ${t === 'blank' || v === '' ? 'blank' : t}`;
        row.textContent = v;
        returnMsgGrp.appendChild(row);
        out.scrollTop = out.scrollHeight;
        i++;
        setTimeout(next, 22);
    })();
}
 
/** Echo the typed command back to the output area */
function itermEcho(cmd) {
    const out  = document.getElementById('itermOutput');
    const row  = document.createElement('div');
    row.className = 'iterm-row echo';
    const prompt = document.createElement('span');
    prompt.className = 'term-prompt';
    prompt.textContent = '$';
    row.appendChild(document.createTextNode(' ' + cmd));
    row.appendChild(prompt);
    out.appendChild(row);
    out.scrollTop = out.scrollHeight;
}
 
/** Parse and execute one command string */
function itermRun(raw) {
    const input = document.getElementById('itermInput');
    const out   = document.getElementById('itermOutput');
    const cmd   = raw.trim();
 
    if (!cmd) return;
 
    // Save to history (newest first)
    itermHistory.unshift(cmd);
    itermHistIdx = -1;
    input.value  = '';
 
    itermEcho(cmd);
 
    const lower = cmd.toLowerCase();
 
    if (lower === 'clear') {
        out.innerHTML = '';
        return;
    }
 
    if (lower === 'exit') {
        resetAboutUI();
        return;
    }
 
    if (ITERM_COMMANDS[lower]) {
        itermPrint(ITERM_COMMANDS[lower]);
        return;
    }
 
    // cat <filename>
    const catMatch = lower.match(/^cat\s+(.+)$/);
    if (catMatch) {
        const file = catMatch[1].trim();
        if (ITERM_FILES[file]) {
            itermPrint(ITERM_FILES[file]);
        } else {
            itermPrint([{ t: 'error', v: `  cat: ${file}: No such file or directory` }]);
        }
        return;
    }
 
    // Unknown command
    itermPrint([
        { t: 'error', v: `  command not found: ${cmd}` },
        { t: 'dim',   v: '  type "help" to see available commands.' },
    ]);
}
 
/** Called once the first time the terminal screen is shown */
function itermInit() {
    const out = document.getElementById('itermOutput');
    if (out.dataset.init) return;
    out.dataset.init = 'true';
    itermPrint([
        { t: 'dim', v: '  SYSTEM TERMINAL  v1.0.0' },
        { t: 'dim', v: '  ──────────────────────────────────────' },
        { t: 'out', v: '  Welcome. This terminal is about me.' },
        { t: 'dim', v: '  type "help" for a list of commands.' },
        { t: 'dim', v: '' },
    ]);
}

itermInit();
 
// Keyboard handler — Enter to run, ↑ / ↓ for history
document.getElementById('itermInput')?.addEventListener('keydown', e => {
    const input = e.target;
    
    // Tab  — fill the first / currently focused suggestion
    if (e.key === 'Tab') {
        e.preventDefault();
        const focused = document.querySelector('.iterm-suggestion.active')
                     ?? document.querySelector('.iterm-suggestion');
        if (focused) acFill(focused.dataset.value);
        return;
    }
 
    // Escape — dismiss suggestions
    if (e.key === 'Escape') {
        acHide();
        return;
    }
 
    // ArrowDown / ArrowUp — navigate suggestions if list is open,
    // otherwise walk command history
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (document.getElementById('itermSuggestions').classList.contains('open')) {
            acMove(+1);
        } else {
            if (itermHistIdx > 0) { itermHistIdx--; input.value = itermHistory[itermHistIdx]; }
            else { itermHistIdx = -1; input.value = ''; }
        }
        return;
    }
 
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (document.getElementById('itermSuggestions').classList.contains('open')) {
            acMove(-1);
        } else {
            if (itermHistIdx < itermHistory.length - 1) itermHistIdx++;
            input.value = itermHistory[itermHistIdx] ?? '';
        }
        return;
    }
 
    // Enter — run command
    if (e.key === 'Enter') {
        itermRun(input.value);
    }
});
 
// Rebuild suggestions on every keystroke
document.getElementById('itermInput')?.addEventListener('input', e => {
    acUpdate(e.target.value);
});
 
// Hide on blur (small delay so mousedown on a suggestion fires first)
document.getElementById('itermInput')?.addEventListener('blur', () => {
    setTimeout(acHide, 160);
});
 
// Click anywhere in the output area to re-focus the input
document.getElementById('itermOutput')?.addEventListener('click', () => {
    document.getElementById('itermInput')?.focus();
});

/**
 * Runs a smooth randomised loading bar on a .menu-btn element.
 * Stores progress on the element itself — no shared global state.
 * @param {HTMLElement} btn      — the button to animate
 * @param {Function}    onComplete — called when bar reaches 100%
 */
function runLoadingBar(btn, onComplete) {
    const fill = btn.querySelector('.btn-progress');
    btn.dataset.pct = '0';
    btn.classList.add('loading');

    (function step() {
        let pct = parseInt(btn.dataset.pct, 10);
        if (pct < 100) {
            pct++;
            btn.dataset.pct = pct;
            fill.style.width = pct + '%';
            setTimeout(step, Math.random() * 55 + 12);
        } else {
            fill.style.width = '0%';
            btn.dataset.pct  = '0';
            btn.classList.remove('loading');
            onComplete();
        }
    })();
}

viewProfileBtn.addEventListener('click', () => {
    viewInfoBGBtn.classList.add('hidden');
    runLoadingBar(viewProfileBtn, () => {
        aboutMenu.classList.add('hidden');
        profileUI.classList.remove('hidden');
        animateStatBars();
    });
});

viewInfoBGBtn.addEventListener('click', () => {
    viewProfileBtn.classList.add('hidden');
    runLoadingBar(viewInfoBGBtn, () => {
        aboutMenu.classList.add('hidden');
        interactiveTerminal.classList.remove('hidden');
    });
});

backBtns.forEach(btn => btn.addEventListener('click', resetAboutUI));



/* ── EDUCATION TIMELINE ─────────────────────────────────────── */

function renderEducation() {
    if (!eduTimeline) return;
    eduTimeline.dataset.rendered = 'true';
    eduTimeline.innerHTML = '';

    EDUCATION_DATA.forEach((entry, i) => {
        const isRight = i % 2 !== 0;

        const item = document.createElement('div');
        item.className = `edu-item${isRight ? ' edu-right' : ''}`;

        item.innerHTML = `
            <div class="edu-card">
                <div class="edu-card-meta">
                    <span class="edu-commit">commit&nbsp;${entry.commit}</span>
                    <span class="edu-period">${entry.period}</span>
                </div>
                <h3 class="edu-institution">${entry.institution}</h3>
                <p  class="edu-degree">${entry.degree}</p>
                <p  class="edu-desc">${entry.description}</p>
                <div class="edu-achievements">
                    ${entry.achievements.map(a => `<div class="edu-achievement">${a}</div>`).join('')}
                </div>
                <div class="edu-tags">
                    ${entry.tags.map(t => `<span class="edu-tag">${t}</span>`).join('')}
                </div>
                <span class="edu-hint">&rsaquo; click to expand</span>
            </div>
        `;

        // Toggle expansion
        item.querySelector('.edu-card').addEventListener('click', function () {
            const expanded = this.classList.toggle('expanded');
            this.querySelector('.edu-hint').textContent = expanded
                ? '‹ click to collapse'
                : '› click to expand';
        });

        eduTimeline.appendChild(item);
    });

    // Animate items in as they scroll into view
    const timelineObs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });

    eduTimeline.querySelectorAll('.edu-item').forEach(el => timelineObs.observe(el));
}

function renderAchievements() {
    const track = document.getElementById('achievTrack');
    if (!track) return;
 
    // ── Panel 1: Intro ──────────────────────────────────────
    const intro = document.createElement('div');
    intro.className = 'achiev-panel achiev-panel-intro';
    intro.innerHTML = `
        <p class="achiev-intro-text">
            Qualifications and recognition earned along the journey.
        </p>
        <div class="achiev-stats" id="achievStats">
            <div class="achiev-stat">
                <span class="achiev-num" data-target="5">0</span>
                <span class="achiev-label">Certificates</span>
            </div>
            <div class="achiev-stat">
                <span class="achiev-num" data-target="3">0</span>
                <span class="achiev-label">Awards</span>
            </div>
            <div class="achiev-stat">
                <span class="achiev-num" data-target="2">0</span>
                <span class="achiev-label">Years Active</span>
            </div>
        </div>
        <span class="achiev-next-label">// certificates &rarr;</span>`;
    track.appendChild(intro);
 
    // ── Panels 2–N: Certificates ────────────────────────────
    ACHIEVEMENTS_DATA.certificates.forEach(cert => {
        const panel = document.createElement('div');
        panel.className = 'achiev-panel achiev-panel-cert';
        panel.innerHTML = `
            <div class="achive-card-container">
                <div class="achive-card">
                    <div class="achiev-card-top">
                        <span class="achiev-icon">&#9633;</span>
                        <span class="achiev-year">${cert.year}</span>
                    </div>
                    <h4 class="achiev-card-title">${cert.title}</h4>
                    <p  class="achiev-card-issuer">${cert.issuer}</p>
                    <div class="achiev-card-tags">
                        ${cert.tags.map(t => `<span class="achiev-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="achive-card-img">
                    <img src=${cert.src} alt=${cert.title}>
                </div>
                <p class="achiev-card-desc">${cert.desc}</p>
            </div>`;
        track.appendChild(panel);
    });
}
 
/* ── ACHIEVEMENTS COUNTER ───────────────────────────────────── */
 
/** Counts each .achiev-num from 0 up to its data-target value */
function animateCounters() {
    document.querySelectorAll('.achiev-num:not([data-done])').forEach(el => {
        el.dataset.done = 'true';
        const target = parseInt(el.dataset.target, 10);
        let current  = 0;
        const tick   = setInterval(() => {
            current = Math.min(current + 1, target);
            el.textContent = current;
            if (current >= target) clearInterval(tick);
        }, 55);
    });
}
 
/* ── ACHIEVEMENTS HORIZONTAL SCROLL ────────────────────────── */
 
let achievRaf      = null;   // rAF throttle handle
let statsAnimated  = false;  // fire counters only once
 
/**
 * As the user scrolls vertically through #achievWrapper,
 * we translate #achievTrack horizontally so panels slide left to right.
 *
 * Formula:
 *   progress  = (-wrapperRect.top) / (wrapper.height - vh)   [0 → 1]
 *   translateX = progress * (track.scrollWidth - vw)          [px]
 *
 * The wrapper height is set to:  vh + (track.scrollWidth - vw)
 * so progress reaches exactly 1 when the last panel is fully visible.
 */
function handleAchievScroll() {
    if (achievRaf) return;
    achievRaf = requestAnimationFrame(() => {
        achievRaf = null;
 
        const wrapper = document.getElementById('achievWrapper');
        const track   = document.getElementById('achievTrack');
        const fill    = document.getElementById('achievProgressFill');
        const hint    = document.getElementById('achievHint');
        if (!wrapper || !track) return;
 
        const rect     = wrapper.getBoundingClientRect();
        const total    = wrapper.offsetHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, -rect.top / total));
 
        // Translate the track
        const maxSlide = track.scrollWidth - window.innerWidth;
        const slideX   = progress * maxSlide;
        track.style.transform = `translateX(${-slideX}px)`;
 
        // Progress bar fill
        if (fill) fill.style.width = `${progress * 100}%`;
 
        // Hide "scroll →" hint once user starts moving
        if (hint && progress > 0.015) hint.style.opacity = '0';
 
        // Fire counters once when section first enters view
        if (!statsAnimated && progress > 0) {
            statsAnimated = true;
            animateCounters();
        }
 
        // Reveal panels as they slide into the visible viewport
        revealVisiblePanels(slideX);
    });
}
 
/**
 * Adds .visible to any panel whose left edge is within the viewport.
 * Uses data-visible guard so each panel only transitions once.
 */
function revealVisiblePanels(slideX) {
    const vw = window.innerWidth;
    document.querySelectorAll('#achievTrack .achiev-panel:not([data-visible])').forEach(panel => {
        // panel.offsetLeft is its position in the track; subtract current slide
        if (panel.offsetLeft - slideX < vw + 80) {
            panel.dataset.visible = 'true';
            panel.classList.add('visible');
        }
    });
}
 
/** Sets the wrapper height so vertical scroll fully traverses the track */
function setAchievWrapperHeight() {
    const wrapper = document.getElementById('achievWrapper');
    const track   = document.getElementById('achievTrack');
    if (!wrapper || !track) return;
    const scrollable = Math.max(0, track.scrollWidth - window.innerWidth);
    wrapper.style.height = `${window.innerHeight + scrollable}px`;
}
 
/* ── ACHIEVEMENTS INIT ──────────────────────────────────────── */
 
function initAchievements() {
    const wrapper = document.getElementById('achievWrapper');
    if (!wrapper || wrapper.dataset.rendered) return;
    wrapper.dataset.rendered = 'true';
    statsAnimated = false;
 
    renderAchievements();
 
    // Height must be set AFTER panels exist (they affect track.scrollWidth)
    setAchievWrapperHeight();
    window.addEventListener('resize', () => {
        setAchievWrapperHeight();
        handleAchievScroll();   // recalculate translate on resize
    }, { passive: true });
 
    window.addEventListener('scroll', handleAchievScroll, { passive: true });
 
    // Run once immediately in case section is already partially visible
    handleAchievScroll();
}

/* ── PROJECTS ───────────────────────────────────────────────── */

function buildProjectCard(proj) {
    const card = document.createElement('div');
    card.className   = 'proj-card';
    card.dataset.category = proj.category;

    const thumb = proj.image
        ? `<div class="proj-thumb"><img src="${proj.image}" alt="${proj.title}" loading="lazy"></div>`
        : `<div class="proj-thumb">
               <div class="proj-thumb-code">
                   // ${proj.file}<br>
                   #include &lt;gameplay.h&gt;<br>
                   int main() {<br>
                   &nbsp;&nbsp;build(); launch();<br>
                   }
               </div>
           </div>`;

    const statusClass = proj.status === 'completed' ? 'completed' : 'in-progress';
    const statusLabel = proj.status === 'completed' ? 'COMPLETED'  : 'IN PROGRESS';

    card.innerHTML = `
        <div class="proj-card-header">
            <span class="proj-filename">./${proj.file}</span>
            <span class="proj-status ${statusClass}">${statusLabel}</span>
        </div>
        ${thumb}
        <div class="proj-body">
            <h3 class="proj-title">${proj.title}</h3>
            <p  class="proj-desc">${proj.description}</p>
            <div class="proj-tags">
                ${proj.tech.map(t => `<span class="proj-tag">${t}</span>`).join('')}
            </div>
            <div class="proj-footer">
                <span>${proj.year}</span>
                <span>${proj.category.toUpperCase()}</span>
            </div>
        </div>
    `;

    return card;
}

function renderProjects() {
    if (!projectGrid) return;
    projectGrid.dataset.rendered = 'true';
    projectGrid.innerHTML = '';
    PROJECTS_DATA.forEach(p => projectGrid.appendChild(buildProjectCard(p)));
}

function renderFeatured() {
    if (!featuredGrid) return;
    PROJECTS_DATA.slice(0, 3).forEach(p => featuredGrid.appendChild(buildProjectCard(p)));
}

// Filter click handler (event delegation on the filter bar)
if (projectFilters) {
    projectFilters.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        projectFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        projectGrid.querySelectorAll('.proj-card').forEach(card => {
            card.dataset.hidden = (filter === 'all' || card.dataset.category === filter)
                ? 'false' : 'true';
        });
    });
}

/* ── CONTACT FORM ───────────────────────────────────────────── */

if (contactForm) {
    contactForm.addEventListener('submit', async e => {
        e.preventDefault();
        statusMsg.textContent = 'STATUS: Sending transmission...';

        try {
            const res = await fetch(contactForm.action, {
                method: contactForm.method,
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' }
            });

            if (res.ok) {
                statusMsg.innerHTML = 'STATUS: Transmission sent &#10003;';
                contactForm.reset();
                wordCountEl.textContent = '0';
                charCountEl.textContent = '0';
                setTimeout(() => { statusMsg.textContent = 'STATUS: Awaiting input...'; }, 3000);
            } else {
                statusMsg.textContent = 'STATUS: Transmission failed — try again.';
            }
        } catch {
            statusMsg.textContent = 'STATUS: Network error.';
        }
    });
}

if (messageArea) {
    messageArea.addEventListener('input', () => {
        const chars = messageArea.value.length;
        const words = messageArea.value.trim()
            ? messageArea.value.trim().split(/\s+/).length : 0;

        charCountEl.textContent = chars;
        wordCountEl.textContent = words;
        statusMsg.textContent = chars > 0 ? 'STATUS: Typing...' : 'STATUS: Awaiting input...';
    });
}

/* ── INIT ───────────────────────────────────────────────────── */

// Render featured cards immediately (home section is active on load)
renderFeatured();

// Set home class for rollers
document.body.classList.add('is-home');
