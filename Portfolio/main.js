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
        file: 'ironbound.cpp',
        title: 'IRONBOUND: The Last Warden',
        category: 'game',
        description: 'Third-person Soulslike action-adventure for PS5 with full DualSense integration — adaptive triggers, haptic feedback, and gyroscope-based mount mechanics.',
        tech: ['C++', 'PS5 SDK', 'DualSense', 'HLSL'],
        status: 'completed',
        image: null,
        year: '2025'
    },
    {
        file: 'ar-science-explorer.unity',
        title: 'AR Science Explorer',
        category: 'xr',
        description: 'Free Android AR app using ARCore/Vuforia for students to visualise abstract science concepts in 3D with interactive elements and quizzes.',
        tech: ['Unity', 'ARCore', 'Vuforia', 'C#', 'Android'],
        status: 'completed',
        image: null,
        year: '2025'
    },
    {
        file: 'roguevania.unity',
        title: 'Dark Forest Roguevania',
        category: 'game',
        description: '2D action platformer with roguelike mechanics, pixel art aesthetic, five weapon types, parallax scrolling backgrounds, and a boss fight system.',
        tech: ['Unity', 'C#', 'Pixel Art', 'Tilemaps'],
        status: 'in-progress',
        image: null,
        year: '2025'
    },
    {
        file: 'physics-sandbox.cpp',
        title: 'Physics Sandbox',
        category: 'engine',
        description: 'Interactive particle simulation exploring OOP principles through forces, collisions, and physics systems built from the ground up.',
        tech: ['C++', 'OpenGL', 'Physics'],
        status: 'completed',
        image: './images/simworld-2026-logo-on-bg.jpg',
        year: '2024'
    },
    {
        file: 'enemy-ai.cpp',
        title: 'Enemy AI FSM System',
        category: 'engine',
        description: 'Stack-based finite state machine for enemy behaviour with dynamic combat patterns, line-of-sight detection, and pathfinding algorithms.',
        tech: ['C++', 'AI', 'FSM', 'Pathfinding'],
        status: 'completed',
        image: './images/88cd60e7b12bb8f958b0758cfdcae65751392c1e.jpeg',
        year: '2024'
    },
    {
        file: 'renderer.cpp',
        title: 'OpenGL Custom Renderer',
        category: 'engine',
        description: 'Custom real-time rendering pipeline with Phong lighting, normal mapping, shadow mapping, and post-processing shader effects.',
        tech: ['C++', 'OpenGL', 'GLSL', 'GLFW'],
        status: 'completed',
        image: './images/hq720.jpg',
        year: '2024'
    },
    {
        file: 'portfolio.html',
        title: 'Developer Portfolio',
        category: 'web',
        description: 'Personal portfolio with terminal-themed UI, RPG profile card, interactive education timeline, and project showcase. Built with vanilla JS.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        status: 'in-progress',
        image: null,
        year: '2026'
    }
];

const SKILLS_DATA = [
    {
        label: '// Languages',
        items: [
            { name: 'C++',        level: 90 },
            { name: 'C#',         level: 85 },
            { name: 'GLSL',       level: 70 },
            { name: 'JavaScript', level: 68 },
            { name: 'HTML / CSS', level: 75 }
        ]
    },
    {
        label: '// Engines & Frameworks',
        items: [
            { name: 'Unity',          level: 88 },
            { name: 'OpenGL',         level: 80 },
            { name: 'ARCore/Vuforia', level: 70 },
            { name: 'Unreal Engine',  level: 55 },
            { name: 'PS5 SDK',        level: 65 }
        ]
    },
    {
        label: '// Tools & Software',
        items: [
            { name: 'Git / GitHub',   level: 75 },
            { name: 'Blender',        level: 60 },
            { name: 'Android Studio', level: 65 },
            { name: 'Visual Studio',  level: 85 }
        ]
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

// Home
const typewriterEl   = document.getElementById('typewriter');
const featuredGrid   = document.getElementById('featuredGrid');

// Education, Skills, Projects
const eduTimeline    = document.getElementById('eduTimeline');
const skillsContainer= document.getElementById('skillsContainer');
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
    if (id === 'skills'    && !skillsContainer.dataset.rendered) renderSkills();
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

/* ── SKILLS ─────────────────────────────────────────────────── */

function renderSkills() {
    if (!skillsContainer) return;
    skillsContainer.dataset.rendered = 'true';
    skillsContainer.innerHTML = '';

    SKILLS_DATA.forEach(category => {
        const col = document.createElement('div');
        col.className = 'skill-category';
        col.innerHTML = `
            <div class="skill-cat-label">${category.label}</div>
            ${category.items.map(s => `
                <div class="skill-bar-row">
                    <span>${s.name}</span>
                    <div class="skill-bar">
                        <div class="skill-bar-fill" data-width="${s.level}%"></div>
                    </div>
                    <span class="skill-pct">${s.level}</span>
                </div>
            `).join('')}
        `;
        skillsContainer.appendChild(col);
    });

    // Animate bars when each category scrolls into view
    const skillObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('.skill-bar-fill').forEach((fill, i) => {
                    setTimeout(() => { fill.style.width = fill.dataset.width; }, 150 * i);
                });
                skillObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.2 });

    skillsContainer.querySelectorAll('.skill-category').forEach(el => skillObs.observe(el));
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
