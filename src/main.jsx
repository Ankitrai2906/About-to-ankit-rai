import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
    ArrowDown,
    ArrowUp,
    ArrowUpRight,
    Code2,
    Mail,
    MapPin,
    Menu,
    X,
    Sparkles,
    BrainCircuit,
    Layers,
    Terminal
} from 'lucide-react';
import './styles.css';

const skills = [
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'REST APIs',
    'MySQL',
    'Generative AI',
    'LLM Fundamentals',
    'Prompt Engineering',
    'Git & GitHub'
];

const projects = [
    {
        title: 'Smart Placement',
        tag: 'AI + Web App',
        desc: 'A placement-focused application concept combining a modern React interface with backend services and an analyzer workflow.',
        stack: ['React', 'Python/Flask', 'Node.js', 'MongoDB'],
        link: 'https://github.com/Ankitrai2906'
    },
    {
        title: 'Full Stack Web App',
        tag: 'Full Stack',
        desc: 'Responsive web application built around a React frontend, REST APIs and database-backed services.',
        stack: ['React', 'Spring Boot', 'MySQL', 'REST API'],
        link: 'https://github.com/Ankitrai2906'
    },
    {
        title: 'AI / LLM Experiments',
        tag: 'Generative AI',
        desc: 'Hands-on exploration of prompt engineering, LLM fundamentals and AI-enabled application ideas.',
        stack: ['LLM', 'Prompt Engineering', 'Generative AI'],
        link: 'https://github.com/Ankitrai2906'
    }
];

const nav = [
    ['About', 'about'],
    ['Journey', 'journey'],
    ['Projects', 'projects'],
    ['Skills', 'skills'],
    ['Contact', 'contact']
];

function App() {
    const [open, setOpen] = useState(false);
    const [showTop, setShowTop] = useState(false);

    React.useEffect(() => {
        const f = () => setShowTop(scrollY > 500);
        addEventListener('scroll', f);

        return () => removeEventListener('scroll', f);
    }, []);

    const go = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
        setOpen(false);
    };

    return (
        <div className="site">
            <div className="noise" />

            <header className="nav">
                <div className="navin">
                    <button className="brand" onClick={() => go('home')}>
                        AR<span>.</span>
                    </button>

                    <nav className={open ? 'navlinks show' : 'navlinks'}>
                        {nav.map(([t, id]) => (
                            <button key={id} onClick={() => go(id)}>
                                {t}
                            </button>
                        ))}

                        <a
                            href="https://github.com/Ankitrai2906"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </nav>

                    <button
                        className="menubtn"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            <main id="home">

                <section className="hero wrap">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="heroText"
                    >
                        <div className="eyebrow">
                            <span className="dot" />
                            Available for opportunities
                        </div>

                        <h1>
                            Hi, I'm <span>Ankit Rai.</span>
                            <br />
                            <em>I build digital experiences.</em>
                        </h1>

                        <p className="lead">
                            Frontend Developer focused on{' '}
                            <b>React.js, JavaScript</b> and modern UI — with growing
                            expertise in <b>Generative AI & LLMs.</b>
                        </p>

                        <div className="actions">
                            <button
                                className="primary"
                                onClick={() => go('projects')}
                            >
                                Explore my work <ArrowDown size={17} />
                            </button>

                            <a
                                className="secondary"
                                href="mailto:your-arai44905@gmail.com"
                            >
                                Let's connect <ArrowUpRight size={17} />
                            </a>
                        </div>

                        <div className="social">
                            <a
                                href="https://github.com/Ankitrai2906"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ankit-rai-b6673027a/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>

                            <span>
                                <MapPin size={17} /> Noida, India
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="heroCard"
                    >
                        <div className="orb">
                            <div className="avatar">AR</div>
                        </div>

                        <div className="cardlabel">
                            PERSONAL DIGITAL IDENTITY
                        </div>

                        <div className="cardtitle">
                            Frontend × AI
                        </div>

                        <div className="cardline" />

                        <div className="mini">
                            <span>React</span>
                            <span>LLM</span>
                            <span>UI/UX</span>
                        </div>
                    </motion.div>
                </section>

                <div className="marquee">
                    <div>
                        REACT.JS <i>✦</i> JAVASCRIPT <i>✦</i> GENERATIVE AI <i>✦</i> LLM <i>✦</i> MODERN UI <i>✦</i> REACT.JS <i>✦</i> JAVASCRIPT <i>✦</i>
                    </div>
                </div>

                <section id="about" className="section wrap">
                    <div className="sectionhead">
                        <span>01 / ABOUT</span>
                        <h2>
                            A developer with a <strong>curious mind.</strong>
                        </h2>
                    </div>

                    <div className="aboutgrid">
                        <div className="bigquote">
                            “I don't just want to write code.
                            <br />
                            <span>I want to build things people remember.</span>”
                        </div>

                        <div className="copy">
                            <p>
                                I'm an MCA graduate and entry-level developer who enjoys
                                turning ideas into clean, responsive web experiences.
                            </p>

                            <p>
                                My current focus sits at the intersection of{' '}
                                <b>frontend development and AI-enabled applications</b> —
                                learning how LLMs and good product thinking can make
                                everyday software smarter.
                            </p>

                            <p>
                                I’m continuously learning, building projects and looking
                                for opportunities where I can contribute, grow and solve
                                real problems.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="journey" className="section dark">
                    <div className="wrap">
                        <div className="sectionhead">
                            <span>02 / JOURNEY</span>
                            <h2>
                                From learning to <strong>building.</strong>
                            </h2>
                        </div>

                        <div className="timeline">
                            <div className="timeitem">
                                <b>2026</b>
                                <div>
                                    <h3>MCA — Postgraduate</h3>
                                    <p>
                                        Completed MCA and focused on practical development,
                                        projects and AI/LLM fundamentals.
                                    </p>
                                </div>
                            </div>

                            <div className="timeitem">
                                <b>2025–26</b>
                                <div>
                                    <h3>Projects & Skill Building</h3>
                                    <p>
                                        Worked with React, JavaScript, APIs, databases and
                                        full-stack project workflows.
                                    </p>
                                </div>
                            </div>

                            <div className="timeitem">
                                <b>Next</b>
                                <div>
                                    <h3>Build. Learn. Contribute.</h3>
                                    <p>
                                        Looking for an entry-level opportunity in frontend
                                        development or AI/LLM-enabled applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="section wrap">
                    <div className="sectionhead">
                        <span>03 / PROJECTS</span>
                        <h2>
                            Things I've <strong>built.</strong>
                        </h2>
                    </div>

                    <div className="projectgrid">
                        {projects.map((p, i) => (
                            <motion.article
                                whileHover={{ y: -8 }}
                                className="project"
                                key={p.title}
                            >
                                <div className="picon">
                                    {i === 0 ? (
                                        <BrainCircuit />
                                    ) : i === 1 ? (
                                        <Layers />
                                    ) : (
                                        <Sparkles />
                                    )}
                                </div>

                                <div className="ptag">{p.tag}</div>

                                <h3>{p.title}</h3>

                                <p>{p.desc}</p>

                                <div className="stack">
                                    {p.stack.map((s) => (
                                        <span key={s}>{s}</span>
                                    ))}
                                </div>

                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View on GitHub <ArrowUpRight size={16} />
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </section>

                <section id="skills" className="section skillssec">
                    <div className="wrap">
                        <div className="sectionhead">
                            <span>04 / SKILLS</span>
                            <h2>
                                My <strong>toolbox.</strong>
                            </h2>
                        </div>

                        <div className="skillwrap">
                            {skills.map((s, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className="skill"
                                    key={s}
                                >
                                    <Code2 size={16} />
                                    {s}
                                </motion.div>
                            ))}
                        </div>

                        <div className="skillnote">
                            <Terminal />

                            <div>
                                <b>Currently exploring</b>

                                <p>
                                    LLM application patterns · AI-assisted UX · prompt
                                    engineering · API integration
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section contact wrap">
                    <div className="contactbox">
                        <div>
                            <span className="eyebrow">
                                05 / CONTACT
                            </span>

                            <h2>
                                Have an idea?
                                <br />
                                <em>Let's build it.</em>
                            </h2>

                            <p>
                                I'm open to entry-level opportunities,
                                collaborations and interesting projects.
                            </p>
                        </div>

                        <div className="contactlinks">
                            <a href="mailto:arai44905@gmail.com">
                                <Mail />
                                arai44905@gmail.com <ArrowUpRight />
                            </a>

                            <a href="tel:+918081561512">
                                📞 8081561512 <ArrowUpRight />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ankit-rai-b6673027a/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn <ArrowUpRight />
                            </a>

                            <a
                                href="https://github.com/Ankitrai2906"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub <ArrowUpRight />
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <footer>
                <div className="wrap foot">
                    <span>© 2026 Ankit Rai</span>
                    <span>Built with React + curiosity ✦</span>
                </div>
            </footer>

            {showTop && (
                <button
                    className="top"
                    onClick={() => go('home')}
                >
                    <ArrowUp />
                </button>
            )}
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);