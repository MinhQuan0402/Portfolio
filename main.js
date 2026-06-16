/* ── DATA ──────────────────────────────────────────────────── */

const EDUCATION_DATA = [
    {
        commit: 'a1b2c3d',
        period: '2017 — 2021',
        institution: 'Boon Lay Garden Primary School',
        degree: 'Primary Education',
        desc: 'First exposure to computers and logical thinking through Scratch programming.',
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
        desc: 'Discovered passion for game development. Built first real game project and began learning structured programming.',
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
        desc: 'Enrolled in a rigorous game development programme covering engine programming, gameplay systems, XR design, console development, and interactive media.',
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
        creator: 5,
        title: 'Every Second Count',
        category: 'game',
        reason: 'This project represents my first collaborative group experience at Nanyang Polytechnic, which provided invaluable lessons in teamwork, effective communication, and project coordination. ' + 
                'Working alongside my peers allowed me to navigate the complexities of shared development, align different technical perspectives, and collectively problem-solve to bring our vision to life.',
        desc:   'This is a C++ 2D text-based and home/living space exploration game. ' +
                'The game centers around a home environment with interactive furniture, items, and a "Robber" antagonist, ' +
                'suggesting a home defense or detective-style gameplay mechanic.',
        tech: ['C++', 'Text-based', 'Command Prompt', 'System Management'],
        status: 'completed',
        video: 'EverySecondCounts_Trailer.mp4',
        images: ['interactive_story_project.png', 'interactive_story_project_2.png', 'interactive_story_project_3.png', 'interactive_story_project_4.png'],
        year: '2024'
    },
    {
        file: 'computer-graphic-modeling.cpp',
        creator: 1,
        title: 'Computer Graphic Modeling and Animation',
        category: 'engine',
        reason: 'This was my first hands-on OpenGL project.  Unlike Unity or Unreal, OpenGL provides no built-in components, ' + 
                'so I learned to work directly with a low-level graphics API, adapt to a new framework, and implement all animation in code using manual interpolation.',
        desc:   'It is a OpenGL application that renders a stylized character scene using custom procedural meshes. ' +
                'Input-driven state machine (idle, flying, summon, attack) animates parts via transform matrices and time-based updates.',
        tech: ['C++', 'OpenGL', 'Graphics'],
        status: 'completed',
        images: ['cgm_a1.png'],
        year: '2024'
    },
    {
        file: 'computer-graphic-modeling.cpp',
        creator: 1,
        title: 'Ever-first OpenGL Game',
        category: 'game',
        reason: "This project marks my first milestone in building a custom 2D game engine from scratch using OpenGL. " +
                "The development process challenged me to architect core engine components for game objects, " +
                "implement advanced procedural shapes, and engineer state machines and complex animations. " +
                "Successfully managing these deep technical requirements under a tight timeline greatly enhanced " +
                "my low-level programming skills and rapid problem-solving abilities.",
        desc:   "A custom 2D game engine and game built from the ground up using C++ and OpenGL. " +
                "Key gameplay systems include state-driven player and enemy AI (featuring Spider, Zombie, Dragon, and Bird behaviors), " +
                "dynamic projectile mechanics (Magic and Bird bullets), item pickups, and interactive environment elements. " +
                "Engine architecture supports robust underlying modules for keyboard/mouse input handling, " +
                "accurate 2D collision detection, and matrix-based coordinate transformations.",
        tech: ['C++', 'Simple AI', 'FSM', 'Modeling', 'Coded Animation'],
        status: 'completed',
        images: ['cgm_a2.png'],
        year: '2024'
    },
    {
        file: 'computer-graphic-programming.cpp',
        creator: 1,
        title: 'Robot Animation Engine',
        category: 'engine',
        reason: 'An advanced progression from 2D OpenGL to full 3D graphics, requiring precise control over camera perspectives and 3D projection matrices. ' +
                'This project deepened my understanding of core computer graphics concepts, ' +
                'teaching me to utilize matrix stack data structures for complex transformations and render 3D procedural geometries like trapeziums and cylinders. ' +
                'Additionally, I implemented hierarchical modeling to seamlessly animate complex parent-child object relationships.',
        desc:   'A comprehensive 3D computer graphics application built in C++ that renders and animates interactive robotic characters in a real-time environment. ' +
                'The engine architecture strictly adheres to a component-based design pattern, integrating robust scene management and state machines. ' +
                'Core architectural features include a high-performance graphics rendering pipeline and a modular character system for complex animations.',
        tech: ['C++', 'Coded Animation', 'Coded Meshes', 'Hierarchical Modelling', 'Matrix Stack', 'Data Structure'],
        status: 'completed',
        images: ['cgp_a1.png'],
        year: '2024'
    },
    {
        file: 'forces-and-motion-programming.cpp',
        creator: 1,
        title: 'Orbit Escape',
        category: 'game',
        reason: 'Developed as a practical exploration of computational physics, focusing on implementing real-time forces and orbital motion mechanics. ' +
                'This project challenged me to translate theoretical physics concepts into functional code, ' +
                'specifically engineering simulated gravitational pull, momentum preservation, and inertia within a custom 2D environment. ' +
                'It significantly strengthened my mathematical foundations in game development and low-level system design.',
        desc:   'A space-themed, physics-based platformer built from scratch in C++ using OpenGL. ' +
                'Inspired by "Gravity Ghost," the game features an astronaut navigating non-linear gravity fields through smooth orbital traversal and momentum-based gliding. ' +
                'Core technical features include dynamic star-collection progression mechanics, an interactive escape vehicle state, ' +
                'and a real-time obstacle avoidance system driven by randomized, continuous asteroid hazards.',
        tech: ['OpenGL', 'C++', 'Physics', 'Collision Detection'],
        status: 'completed',
        images: ['formo_a1.png'],
        year: '2024'
    },
    {
        file: 'database.sql',
        creator: 1,
        title: 'Interactive Quiz Platform with Cloud/Local MySQL Database',
        category: 'database',
        reason: 'Developed to master data persistence and relational database integration using a low-level programming language. ' +
                'This solo project challenged me to establish secure network connections between C++ and a remote MySQL server, ' +
                'design optimized relational schemas, and manage transactional queries. It allowed me to bridge the gap between ' +
                'core systems programming and full-stack data management.',
        desc:   'A robust Quiz Management and Leaderboard System engineered in C++ featuring a multi-tiered database interface supporting both local and cloud MySQL deployments. ' +
                'The application features administrative systems for dynamic question bank management alongside an interactive user quiz ecosystem. ' +
                'Under the hood, the modular database architecture executes secure CRUD operations, tracks user metrics for real-time analytics and performance reporting, ' +
                'and maintains synchronized cross-platform data integrity.',
        tech: ['MySQL', 'C++', 'Networking'],
        status: 'completed',
        images: ['database_a2.png'],
        year: '2025'
    },
    {
        file: 'computer-graphic-programming.cpp',
        creator: 1,
        title: '3D Interactive Horror Environment',
        category: 'game',
        reason: 'Developed as a deep dive into custom pipeline programming and atmospheric 3D scene rendering using OpenGL. ' +
                'This solo project challenged me to write and compile custom GLSL shaders from scratch, managing advanced vertex and fragment logic. ' +
                'The primary goal was to master the core mathematical principles behind real-time lighting models, custom texture mapping, and direct text rendering, ' +
                'bridging the gap between pure mathematics and visual atmosphere.',
        desc:   'An immersive 3D interactive horror experience built from the ground up in C++ using a custom OpenGL rendering engine. ' +
                'Players navigate a detailed, atmospheric environment, interacting with dynamic puzzles and event-triggered phenomena to advance through the level. ' +
                'The engine leverages a custom shader pipeline featuring realistic point/spotlight lighting models, coordinate-mapped texture rendering, ' +
                'and a modular entity management system that coordinates real-time 3D collision detection and player progression.',
        tech: ['OpenGL', 'C++', 'Custom Shader', 'Collision Detection', 'Entity Management'],
        status: 'completed',
        images: ['cgp_a2.png'],
        year: '2025'
    },
    {
        file: 'forces-and-motion-programming.cpp',
        creator: 1,
        title: 'Angry Block',
        category: 'engine',
        reason: 'Built to master the engineering behind rigid-body physics simulations and component-based software architecture. ' +
                'This solo project allowed me to dive deep into custom physics programming, specifically focusing on the mathematical calculations ' +
                'required for high-accuracy collision resolution. The objective was to create a modular, scalable engine framework ' +
                'that seamlessly balances real-time graphics rendering with deterministic physics systems.',
        desc:   'A robust 2D Game Engine Framework architected in C++ and powered by OpenGL that integrates high-performance graphics rendering with custom physics simulations. ' +
                'The framework implements a strict Entity-Component System (ECS), decoupling game logic via reusable modules such as Transforms and geometric colliders (Box, Circle, and Polygon). ' +
                'It features a deterministic 2D physics pipeline supporting continuous collision detection and precise manifold impulse resolution, ' +
                'all cleanly orchestrated through dedicated singleton manager subsystems for scenes, entity lifecycles, asset loading, and spatial partitioning.',
        tech: ['OpenGL', 'C++', 'Physics', 'Complex Collision Detection + Resolve', 'Rigidbody 2D'],
        status: 'completed',
        images: ['formo_a2.png'],
        year: '2025'
    },
    {
        file: 'computer-graphics-simulation-project.cpp',
        creator: 4,
        title: 'Horror Carnival',
        category: 'game',
        reason: 'A collaborative group project designed to simulate a professional game development workflow within a multi-member team. ' +
                'The project challenged me to design and integrate a shared physics framework that could be seamlessly utilized ' +
                'by other developers. This experience greatly enhanced my skills in cross-module system integration, ' +
                'Git version control workflows, and collaborative software architecture.',
        desc:   'A collaborative 2D/3D horror-themed game project developed by a team of four in C++ using OpenGL, blending custom graphics rendering with interactive physics. ' +
                'Players navigate an atmospheric carnival hub world to unlock specific circus arenas by completing distinct, modular mini-games. ' +
                'My individual contributions focused on engineering the core physics subsystem into the engine framework—specifically handling ' +
                'complex collision detection and impulse response matrices—alongside developing an isolated mini-game stage and scripting ' +
                'event-triggered horror cinematic sequences.',
        tech: ['OpenGL', 'C++', 'Physics Engine', 'Complex Collision Detection + Resolve'],
        status: 'completed',
        images: ['cgsp.png'],
        year: '2025'
    },
    {
        file: 'web-dev.html',
        creator: 1,
        title: 'Ever First Portfolio',
        category: 'web',
        reason: 'Developed as a foundational milestone to master core semantic web technologies and modern layouts. ' +
                'This solo project allowed me to transition from theoretical programming concepts into practical interface engineering, ' +
                'focusing on establishing clean document structures, robust style cascades, and responsive elements. ' +
                'It served as the launching pad for my journey into full-stack and interactive application development.',
        desc:   'A responsive digital portfolio website designed and developed from scratch utilizing semantic HTML5 and custom CSS3 stylesheets. ' +
                'The application features dedicated UI layouts showcasing professional background info, academic milestones, and an organized project index gallery. ' +
                'The layout architecture emphasizes component modularity, fluid media integration, and accessible grid/flexbox structuring to ensure clean cross-device display.',
        tech: ['HTML', 'CSS'],
        status: 'completed',
        images: ['webdev_a1.png'],
        year: '2025'
    },
    {
        file: 'web-dev.html',
        creator: 1,
        title: 'GASI Website',
        category: 'web',
        reason: 'Developed to bridge the gap between static web design and dynamic client-side interactivity using JavaScript. ' +
                'This solo project allowed me to explore interactive state management, programmatic user tracking, ' +
                'and the integration of multi-media elements like custom audio controllers. The core objective was to ' +
                'design an immersive web platform that effectively combines educational content with engaging user actions.',
        desc:   'An interactive, educational web application dedicated to space exploration, astronomy, and planetary technologies. ' +
                'Built using vanilla JavaScript, standard semantic markup, and custom style rules, the platform provides an engaging UX ' +
                'featuring modular client-side mini-games, dynamic knowledge quizzes, and embedded audio features. ' +
                'The architecture focuses on responsive UI flows, asynchronous element tracking, and clean browser performance.',
        tech: ['HTML', 'CSS', 'JS', 'Audio'],
        status: 'completed',
        images: ['webdev_a2.png'],
        year: '2025'
    },
    {
        file: '2d-game-engine-application.unity',
        creator: 1,
        title: 'Race Up',
        category: 'game',
        reason: 'Developed as an initial milestone to master the Unity game engine and object-oriented C# scripting. ' +
                'This project challenged me to understand Unity\'s component-based architecture, game object lifecycles, ' +
                'and the foundational real-time game loop. The objective was to implement seamless user input handling ' +
                'and automated obstacle spawning, establishing a reliable baseline for rapid game prototyping.',
        desc:   'A top-down, 2D infinite driving game engineered in Unity and scripted entirely in C#. ' +
                'Players navigate a vehicle through a vertically scrolling, endless environment, requiring rapid reflexes to evade ' +
                'randomly generated maps and maximize survival scores. The application integrates responsive kinematic ' +
                'movement logic, robust 2D box-collision handling, and a structured UI state manager for smooth menu transitions.',
        tech: ['Unity', 'C#'],
        status: 'completed',
        images: ['2dgea_a1.png'],
        year: '2025'
    },
    {
        file: '2d-game-engine-application.unity',
        creator: 1,
        title: '2D Action Platformer',
        category: 'game',
        reason: 'Developed to master advanced game state management and non-linear system architecture in Unity. ' +
                'This solo project allowed me to transition beyond basic game loops into implementing scalable ' +
                'Finite State Machines (FSM) for both player controllers and enemy behaviors. The goal was to engineer ' +
                'a cohesive gameplay framework that reliably bridges complex input handling with responsive AI feedback.',
        desc:   'A dynamic 2D side-scrolling action platformer engineered in Unity and C# utilizing an architecture driven by Finite State Machines. ' +
                'Players navigate intricate, vertically structured levels using precise physics-based movement and platforming mechanics. ' +
                'The engine features state-driven enemy AI profiles designed to challenge tactical traversal, supported by modular systems ' +
                'for handling interactive weapon components, combat hitboxes, inventory item pickups, and real-time player health state tracking.',
        tech: ['Unity', 'C#', 'AI', 'State Machine'],
        status: 'completed',
        images: ['2dgea_a2.png'],
        year: '2025'
    },
    {
        file: 'gameplay-programming.cpp',
        creator: 1,
        title: '2D Action Game',
        category: 'game',
        reason: 'Developed as an advanced exploration of architectural design patterns and unified systems integration in modern C++. ' +
                'This solo project challenged me to manage the complex data ownership and execution scheduling required for a real-time engine loop. ' +
                'The primary goal was to master the application of Singleton patterns and centralized scene orchestration, ' +
                'ensuring that independent components like AI state machines, graphics pipelines, and physics updates interact seamlessly without tightly coupling code.',
        desc:   'A robust 2D action game engine architected in C++14 and powered by OpenGL, featuring custom graphics rendering and decoupled gameplay subsystems. ' +
                'The framework integrates a Finite State Machine (FSM) driving enemy AI profiles (Idle, Chase, Attack, and Stun states), alongside modular logic for player-controlled combat, ' +
                'projectile mechanics, inventory tracking, and custom physics simulation. Under the hood, the engine orchestrates a 2D tilemap rendering pipeline, ' +
                'centralized entity lifecycles, and a custom UI/HUD layout layer—all managed via memory-efficient Singleton patterns and a master Scene Controller ' +
                'that decouples user input handling, layout drawing, and step-based game loop execution.',
        tech: ['OpenGL', 'C++', 'AI', 'State Machine'],
        status: 'completed',
        images: ['gplp.png'],
        year: '2025'
    },
    {
        file: 'mobile-programming.andriod',
        creator: 2,
        title: 'Megero',
        category: 'game',
        reason: 'Developed to gain hands-on expertise in native mobile app engineering and collaborative software workflows. ' +
                'This two-member team project challenged me to design scalable, performance-driven mobile architectures ' +
                'within Android Studio. The primary goal was to bridge high-performance frontend visual assets ' +
                'with fluid runtime application states while maintaining an efficient thread execution profile.',
        desc:   'A collaborative mobile game engineered natively within Android Studio by a two-member team. ' +
                'My individual technical contributions focused on programming the core gameplay mechanics, ' +
                'managing application state lifecycles, and tracking real-time user session logic utilizing Java. ' +
                'Additionally, I designed and structured the scalable front-facing interface and navigation components ' +
                'using declarative XML layouts to ensure complete responsive consistency across varying mobile screen viewports.',
        tech: ['Andriod Studio', 'Java', 'XML'],
        status: 'completed',
        images: ['mobile_programming.jpg'],
        year: '2025'
    },
    {
        file: 'shader-optimisation.unity',
        creator: 1,
        title: '3D Custom Shader Scene',
        category: 'engine',
        reason: 'Developed as an intensive exploration of low-level graphics programming, technical artistry, and custom rendering pipelines within Unity. ' +
                'The primary motivation was to step beyond default material abstractions and gain direct control over GPU graphics pipelines. ' +
                'This solo project challenged me to write optimization-focused shader code from scratch, mastering vector mathematics, ' +
                'vertex manipulations, and pixel/fragment math to craft an atmospheric, real-time simulated environment.',
        desc:   'An advanced technical graphics showcase built in Unity featuring custom programmable rendering pipelines authored in HLSL and ShaderLab. ' +
                'The engine environment leverages a custom material suite supporting multi-light source interactions, realistic spotlight/point shadow casting matrices, ' +
                'and scripted reflection probes for accurate real-time mirror surfaces. Advanced vertex and fragment shaders drive fluid vertex displacement mechanics, ' +
                'depth-based water refraction systems, and dynamic RGBA channel-mapped splatting texturing for high-fidelity terrain blends.',
        tech: ['Unity', 'Shaderlab', 'C#', 'HLSL'],
        status: 'completed',
        images: ['shader_a1.png'],
        year: '2025'
    },
    {
        file: 'shader-optimisation.unity',
        creator: 1,
        title: 'Post Processing 3D Action Game',
        category: 'engine',
        reason: 'Developed to deepen my expertise in screen-space rendering pipelines, technical artistry, and non-photorealistic rendering (NPR). ' +
                'The primary motivation was to step beyond default photorealistic aesthetics and engineer a distinct, highly stylized visual identity ' +
                'for 3D action games. This solo project challenged me to manipulate screen-space color and depth buffers, combine ' +
                'node-based workflows with written HLSL code, and handle complex real-time fragment math without degrading core execution performance.',
        desc:   'A feature-rich 3D action game environment built in Unity that showcases a custom stylized rendering pipeline developed using Shader Graph and native HLSL. ' +
                'The engine architecture leverages advanced post-processing stacks to implement a highly expressive, non-photorealistic aesthetic. ' +
                'Core rendering features include real-time cel-shading mechanics, an edge-detection screen outline effect, a custom sketch shadow buffer, and continuous action lines. ' +
                'Furthermore, the game utilizes dynamic runtime combat visual effects, integrating precise slash FX geometry tracking, synchronized screen-impact frames, ' +
                'and speed-dependent radial blur rendering to maximize player feedback during high-velocity action states.',
        tech: ['Unity', 'Shaderlab', 'C#', 'HLSL', 'Post-processing', 'Shader Graph'],
        status: 'completed',
        images: ['shader_a2.png'],
        year: '2025'
    },
    {
        file: 'multiplayer-game-programming.unity',
        creator: 1,
        title: 'Around Us',
        category: 'game',
        reason: 'Developed as a foundational milestone to master multiplayer systems engineering and client-server networking models. ' +
                'This solo project challenged me to transition from single-player game loops into managing asynchronous network environments. ' +
                'The primary objective was to understand netcode architectures, implement secure authority models, ' +
                'and optimize data serialization routines to achieve a synchronized runtime experience across independent game clients.',
        desc:   'A 3D multiplayer social deduction game engineered in Unity using C# and powered by the Unity Netcode for GameObjects framework. ' +
                'Inspired by the core mechanics of "Among Us," the application translates traditional 2D gameplay loops into an immersive 3D environment. ' +
                'The underlying network architecture features authoritative client-server structures, real-time player transform and animation state replication, ' +
                'and a modular RPC (Remote Procedure Call) event pipeline handling interactive task synchronization, player voting phases, and match-state transitions.',
        tech: ['Unity', 'Netcode', 'C#', 'Multiplayer', 'Networking'],
        status: 'completed',
        images: ['mgp.png'],
        year: '2025'
    },
    {
        file: 'ar-xr-development.unity',
        creator: 1,
        title: 'AR Science Explorer',
        category: 'xr',
        reason: 'Developed to explore the intersections of spatial computing, computer vision, and immersive educational technology. ' +
                'This solo project challenged me to integrate advanced AR SDKs within a mobile framework, mastering key spatial concepts ' +
                'such as surface plane detection, stable target tracking, and real-time physical-to-digital spatial mapping. ' +
                'The goal was to engineer a high-performance interactive pipeline that successfully bridges abstract academic data with real-world environments.',
        desc:   'A feature-rich, native Android Augmented Reality (AR) application built in Unity using C# and powered by ARCore and Vuforia engine integrations. ' +
                'Engineered as an immersive educational tool, the software leverages advanced marker-based image target tracking and markerless surface detection ' +
                'to overlay high-fidelity, interactive 3D scientific models directly onto physical environments. The architecture incorporates ' +
                'responsive touchscreen gesture manipulation matrices, dynamic real-time asset rendering, and a modular client-side state machine ' +
                'that orchestrates interactive quiz evaluation nodes and local student metrics tracking.',
        tech: ['Unity', 'ARCore', 'Vuforia', 'C#', 'Android'],
        status: 'completed',
        images: ['ar.jpg'],
        year: '2026'
    },
    {
        file: 'roguevania.unity',
        creator: 1,
        title: 'Dark Forest Roguevania',
        category: 'game',
        reason: 'Developed as a deep dive into combining progression-driven exploration with randomized roguelike replayability loops. ' +
                'The main technical challenge was designing an architecture capable of dynamically handling diverse weapon profiles ' +
                'and scaling difficulty curves. This project allowed me to strengthen my skills in state tracking, custom combat math, ' +
                'and optimizing 2D rendering pipelines to deliver highly responsive, physics-based character controls.',
        desc:   'A polished 2D action platformer engineered in Unity using C# that blends classic Metroidvania exploration with dynamic roguelike mechanics. ' +
                'Set against an atmospheric, hand-crafted pixel art environment, the application features a modular inventory and combat subsystem ' +
                'supporting five distinct weapon archetypes with unique hitboxes and recovery data. The engine incorporates a multi-layered parallax scrolling pipeline ' +
                'for visual depth, efficient grid-based tilemap performance optimizations, and a robust, state-driven boss encounter system featuring complex attack phases.',
        tech: ['Unity', 'C#', 'Pixel Art', 'Tilemaps'],
        status: 'in-progress',
        images: ['iwp.png'],
        year: '2026'
    },
    {
        file: 'portfolio.html',
        creator: 1,
        title: 'Developer Portfolio',
        category: 'web',
        reason: 'Engineered as a lightweight, highly optimized digital hub designed to showcase my technical capabilities framework-free. ' +
                'This project served as an intensive exploration of core browser mechanics, advanced DOM manipulation, ' +
                'and event-driven programming using vanilla JavaScript. The core goal was to eliminate third-party package overhead, ' +
                'achieve near-instantaneous load times, and maintain absolute control over the execution layout cascade.',
        desc:   'A responsive, high-performance web portfolio platform engineered from the ground up utilizing semantic HTML5, custom CSS3, and vanilla JavaScript. ' +
                'The application features a unique retro-futuristic terminal-themed user interface, an interactive client-side education timeline module, ' +
                'and a modular project index gallery that handles dynamic asynchronous media popups via native web elements. ' +
                'The underlying architecture leverages optimized programmatic event delegation, fluid flexbox/grid viewports, ' +
                'and minified structural design to guarantee a flawless, high-speed UX across all desktop and mobile devices.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        status: 'in-progress',
        images: ['portfolio.png'],
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
const messageArea    = document.getElementById('f-message');
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
                <p  class="edu-desc">${entry.desc}</p>
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
    }, { threshold: 0.1 });

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
                <span class="achiev-num" data-target="${ACHIEVEMENTS_DATA.certificates.length}">0</span>
                <span class="achiev-label">Certificates</span>
            </div>
            <div class="achiev-stat">
                <span class="achiev-num" data-target="3">0</span>
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
                    <img src=${cert.src} alt=${cert.title} onClick="openImgModal('${cert.src}', '${cert.title}')">
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

function buildProjectCard(proj, index) {
    const card = document.createElement('div');
    card.className   = 'proj-card';
    card.dataset.category = proj.category;
    card.dataset.id       = `${index}`;

    const thumb = proj.images[0]
        ?  `<div class="proj-thumb">
                <img src="./images/projects/${proj.images[0]}" alt="${proj.images[0]}" loading="lazy">
                <div class="proj-thum-overlay">
                    <button onClick="openModal(${index})" >View Project</button>
                </div>
            </div>`
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
    PROJECTS_DATA.forEach((p, index) => projectGrid.appendChild(buildProjectCard(p, index)));
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

/* ── FEATURED PROJECTS CAROUSEL ─────────────────────────────── */
 
const CAROUSEL_INTERVAL = 5000; // ms between auto-advance
let carouselIndex = 0;
let carouselTimer = null;
 
/** Builds one carousel slide: image (or code placeholder), title, tags only */
function buildCarouselSlide(proj, index) {
    const slide = document.createElement('div');
    slide.className   = 'carousel-slide';
    slide.dataset.id  = index;
 
    const img = proj.images[0]
        ? `<img src="./images/projects/${proj.images[0]}" alt="${proj.images[0]}" loading="lazy">`
        : `<div class="proj-thumb-code">
               // ${proj.file}<br>
               #include &lt;gameplay.h&gt;<br>
               int main() {<br>
               &nbsp;&nbsp;build(); launch();<br>
               }
           </div>`;
 
    slide.innerHTML = `
        <div class="carousel-slide-img">${img}</div>
        <div class="carousel-slide-info">
            <h3 class="carousel-slide-title">${proj.title}</h3>
            <div class="carousel-slide-tags">
                ${proj.tech.map(t => `<span class="proj-tag">${t}</span>`).join('')}
            </div>
        </div>
    `;
 
    slide.addEventListener('click', () => goToProject(index));
    return slide;
}
 
/** Builds slides + dots, then starts autoplay */
function renderFeaturedCarousel() {
    if (!carouselTrack) return;
 
    PROJECTS_DATA.forEach((proj, index) => {
        carouselTrack.appendChild(buildCarouselSlide(proj, index));
 
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Go to ${proj.title}`);
        dot.addEventListener('click', () => { goToSlide(carouselDots.children.length
            ? [...carouselDots.children].indexOf(dot) : 0); restartAutoplay(); });
        carouselDots.appendChild(dot);
    });
 
    updateCarousel();
    startAutoplay();
 
    // Pause on hover/focus, resume on leave
    featuredCarousel?.addEventListener('mouseenter', stopAutoplay);
    featuredCarousel?.addEventListener('mouseleave', startAutoplay);
}
 
/** Moves the track + updates active dot to match carouselIndex */
function updateCarousel() {
    if (!carouselTrack) return;
    carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
    [...carouselDots.children].forEach((dot, i) => {
        dot.classList.toggle('active', i === carouselIndex);
    });
}
 
/** Jumps to a slide index, wrapping around at both ends */
function goToSlide(index) {
    const total = PROJECTS_DATA.length;
    carouselIndex = (index + total) % total;
    updateCarousel();
}
 
function startAutoplay() {
    stopAutoplay();
    carouselTimer = setInterval(() => goToSlide(carouselIndex + 1), CAROUSEL_INTERVAL);
}
 
function stopAutoplay() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = null;
}
 
function restartAutoplay() { startAutoplay(); }
 
carouselNext?.addEventListener('click', () => { goToSlide(carouselIndex + 1); restartAutoplay(); });
carouselPrev?.addEventListener('click', () => { goToSlide(carouselIndex - 1); restartAutoplay(); });
 
/**
 * Navigates to the Projects section, clears any active filter so the
 * target card is visible, then scrolls to and pulses that project card.
 */
function goToProject(id) {
    showSection('projects');
    updateActiveNav('projects');
 
    // Reset filter to "all" so the target card can't be hidden
    projectFilters?.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === 'all');
    });
    projectGrid?.querySelectorAll('.proj-card').forEach(card => {
        card.dataset.hidden = 'false';
    });
 
    // Wait a frame so layout is ready after the section becomes visible
    requestAnimationFrame(() => {
        const target = projectGrid?.querySelector(`[data-id="${id}"]`);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('highlight');
        setTimeout(() => target.classList.remove('highlight'), 1500);
    });
}

const projModalOverlay = document.getElementById('proj-modal-overlay');
function openModal(projIndex) {
    projModalOverlay.style.zIndex = 2000;
    const proj = PROJECTS_DATA[projIndex];
    if (!proj) return;

    trailerHtml = '';
    if (proj.video)
    {
        trailerHtml = `
            <figure>
                <h3 style="margin-bottom: 10px;">Trailer:</h3>
                <video 
                controls
                preload="metadata"
                poster="./images/projects/${proj.images[0]}">
                    <source src="./videos/projects/${proj.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </figure>
        `;
    }

    mediaHtml = '';
    proj.images.forEach((image, i) => {
        mediaHtml +=    `<div class="proj-modal-img">
                            <img src="./images/projects/${image}" alt="${image}" onClick="openImgModal('./images/projects/${image}', '${image}')">
                        </div> `;
    });
    const creator = proj.creator > 1 ? `Group Project (${proj.creator} members)` : 'Solo Project';

    document.getElementById('proj-modal-content').innerHTML = `
        <div class="tc-badge ${proj.category === 'game' ? '' : proj.category === 'web' ? 'web-badge' : 'tool-badge'}" style="display:inline-block;margin-bottom:1rem">${proj.category.toUpperCase()}</div>
            <h2 class="modal-proj-title">${proj.title}</h2>
            <div class="modal-meta">
            <div class="modal-meta-item"><span style="font-family: var(--font-display); color: var(--text);" >YEAR:</span> <span>${proj.year}</span></div>
            <div class="modal-meta-item"><span style="font-family: var(--font-display); color: var(--text);" >CREATOR:</span> <span>${creator}</span></div>
        </div>
        ${trailerHtml}
        <div style="background:rgba(0,0,0,.3);border:1px solid var(--border);padding:.75rem 1rem;margin-bottom:1rem;">
            <span class="fira cyan" style="font-size:.6rem">WHY THIS PROJECT:</span>
            <p style="margin-top:.3rem; color: var(--muted);">${proj.reason}</p>
        </div>
        <p class="modal-desc">${proj.desc}</p>
        <h3 style="margin-bottom: 10px;">Galery:</h3>
        <div class="modal-media-row">${mediaHtml}</div>
        <div class="modal-tags">${proj.tech.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
    `;

    projModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjModal() {
    setTimeout(() => {document.getElementById('proj-modal-content').innerHTML = '';}, 500);
    projModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjModal();
});

/* ── CONTACT FORM ───────────────────────────────────────────── */

if (messageArea) {
    messageArea.addEventListener('input', () => {
        const chars = messageArea.value.length;
        const words = messageArea.value.trim()
        ? messageArea.value.trim().split(/\s+/).length : 0;
        
        charCountEl.textContent = chars;
        wordCountEl.textContent = words;
        
        changeStatus('normal-msg');
        statusMsg.textContent = chars > 0 ? 'STATUS: Typing...' : 'STATUS: Awaiting input...';
    });
}

function changeStatus(status)
{
    statusMsg.className = `terminal-status ${status}`;
}

var recaptcha_response = '';
if (contactForm) {
    contactForm.addEventListener('submit', async e => {
        e.preventDefault();

        if(recaptcha_response.length == 0) {
            changeStatus('error-msg');
            statusMsg.textContent = 'STATUS: reCAPTCHA is required.';
            return;
        }

        try {
            const res = await fetch(contactForm.action, {
                method: contactForm.method,
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' }
            });

            if (res.ok) {
                
                const userNameInput = document.getElementById('f-userName');
                const emailInput    = document.getElementById('f-userEmail');
                const subjectInput  = document.getElementById('f-subject');
                const messageInput  = document.getElementById('f-message');
                const submitButton  = document.getElementById('f-submit');

                userNameInput.readOnly = true;
                emailInput.readOnly    = true;
                subjectInput.readOnly  = true;
                messageInput.readOnly  = true;
                submitButton.disable   = true;

                changeStatus('normal-msg');
                statusMsg.textContent = 'STATUS: Sending transmission...';
                setTimeout(() => {
                    changeStatus('success-msg'); 
                    statusMsg.innerHTML = 'STATUS: Transmission sent &#10003;';
                    contactForm.reset();
                    wordCountEl.textContent = '0';
                    charCountEl.textContent = '0';
                    setTimeout(() => {

                        userNameInput.readOnly = false;
                        emailInput.readOnly    = false;
                        subjectInput.readOnly  = false;
                        messageInput.readOnly  = false;
                        submitButton.disable   = false;

                        changeStatus('normal-msg'); 
                        statusMsg.textContent = 'STATUS: Awaiting input...'; 
                    }, randon_range(2000, 2500));
                }, randon_range(1000, 1500));
            } else {
                changeStatus('error-msg');
                statusMsg.textContent = 'STATUS: Transmission failed — try again.';
            }
        } catch {
            changeStatus('error-msg');
            statusMsg.textContent = 'STATUS: Network error.';
        }
    });
}

function verifyCaptcha(token) {
    recaptcha_response = token;
    
    if(recaptcha_response.length != 0) {
        changeStatus('success-msg');
        statusMsg.textContent = 'STATUS: Verified Done!';
        return;
    }
}

function randon_range(min, max) {
    return Math.floor(Math.random() * max) + min;
}


/*  ── Image modal ────────────────────────────────── */
let currentScale = 1;
let isZoom = false;
let isDragging = false; let isMouseDown = false;
const maxScale = 3; // Your zoom multiplier
let startX, startY; // Stores initial mouse position when clicking
let posX = 0, posY = 0; // Stores current cumulative position of the image
const imgModalContent = document.getElementById('img-modal-content');
const imgModalOverlay = document.getElementById('img-modal-overlay');

imgModalContent.addEventListener('click', e => {
    const imgModal = document.getElementById('model-img');
    if(isDragging) return;
    imgModalContent.classList.toggle('max-zoomed');
    isZoom = !isZoom;
    if (!isZoom) {
        // Reset everything back to normal center position
        isDragging = false;
        posX = 0;
        posY = 0;
        imgModalContent.style.transform = `scale(1)`;
        imgModal.style.transform = `translate(0px, 0px)`

        console.log('reset');
    }
    else
    {
        imgModalContent.style.transform = `scale(${maxScale})`;
        imgModal.style.transform = `translate(0px, 0px)`;
    }
});

imgModalOverlay.addEventListener('mousedown', (e) => {
    if (!isZoom) return; // Only allow dragging if image is magnified
    e.preventDefault(); // Prevents browser default image dragging behavior
    imgModalOverlay.style.cursor = 'grabbing';
    // Track where the mouse cursor is at the split second click starts
    startX = e.clientX - (posX * maxScale);
    startY = e.clientY - (posY * maxScale);
    isMouseDown = true;
});

imgModalOverlay.addEventListener('mousemove', (e) => {
    if (!isZoom)
    {
        imgModalOverlay.style.cursor = 'default';
        return;
    }

    if(!isMouseDown) return;

    imgModalOverlay.style.cursor = 'grabbing';

    isDragging = true;
    let targetX = (e.clientX - startX) / maxScale;
    let targetY = (e.clientY - startY) / maxScale;

    const frameWidth    = imgModalContent.clientWidth;
    const frameHeight   = imgModalContent.clientHeight;

    const maxTranslateX = ((frameWidth * maxScale) - frameWidth) / 2 / maxScale;
    const maxTranslateY = ((frameHeight * maxScale) - frameHeight) / 2 / maxScale;

    posX = Math.max(-maxTranslateX, Math.min(maxTranslateX, targetX));
    posY = Math.max(-maxTranslateY, Math.min(maxTranslateY, targetY));

    const imgModal = document.getElementById('model-img');
    // Apply the movement instantly via style coordinates
    imgModal.style.transform = `translate(${posX}px, ${posY}px)`;
});

const stopDragging = () => {
    isMouseDown = false;
    if (isZoom) imgModalOverlay.style.cursor = 'grab';
    if (!isDragging) return;
    setTimeout(()=>{isDragging = false;}, 100);
};

function openImgModal(src, alt) {
    imgModalOverlay.style.zIndex = 3000;
    imgModalContent.innerHTML = `
        <img id="model-img" src="${src}" alt="${alt}">
    `;

    imgModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImgModal() {
    document.getElementById('img-modal-content').innerHTML = '';
    document.getElementById('img-modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

imgModalOverlay.addEventListener('mouseup', stopDragging);
imgModalOverlay.addEventListener('mouseleave', stopDragging);


/* ── CURSOR TRAIL (subtle) ───────────────────────────────────── */
(function initCursorTrail() {
  const dots = [];
  const N = 8;
  let mx = 0, my = 0;

  for (let i = 0; i < N; i++) {
    const d = document.createElement('div');
    d.style.cssText = `
      position:fixed;pointer-events:none;z-index:9998;border-radius:50%;
      width:${4 + i * 1}px;height:${4 + i * 1}px;
      background:rgba(74,222,128,${0.4 - i * 0.05});
      transition:transform 0.${i + 1}s ease;
      transform:translate(-50%,-50%);
    `;
    document.body.appendChild(d);
    dots.push(d);
  }

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dots.forEach((d, i) => {
      setTimeout(() => {
        d.style.left = mx + 'px';
        d.style.top  = my + 'px';
      }, i * 20);
    });
  });
})();

/* ── KEYBOARD SHORTCUTS ─────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const keyMap = { '1': 'home', '2': 'about', '3': 'education', '4': 'projects', '5': 'contact' };
  if (keyMap[e.key] && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    showSection(keyMap[e.key]);
    updateActiveNav(keyMap[e.key]);
  }
});

/* ── INIT ───────────────────────────────────────────────────── */

// Render featured cards immediately (home section is active on load)
renderFeaturedCarousel();

// Set home class for rollers
document.body.classList.add('is-home');