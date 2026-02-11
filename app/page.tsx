"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Instagram, Github, Mail, Rocket, Layout, 
  Code, ExternalLink, ArrowRight, Cpu, Globe, Terminal, Layers, 
  Database, Zap, X, Activity, Calendar, FolderGit2, GitBranch
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Efek Loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Logic Hover Tilt & Particle Glow
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);

  function handleMouseMove(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // --- Narasi Proyek ---
  const projects = [
    { 
      title: "Digital Transformation UMKM", 
      desc: "Optimalisasi ekosistem pemasaran digital melalui integrasi platform berbasis data untuk pemberdayaan sektor UMKM Desa Rejosari.",
      longDesc: "Proyek strategis yang bertujuan memodernisasi operasional UMKM di Desa Rejosari. Melalui integrasi Next.js dan sistem manajemen data, proyek ini berhasil memperluas jangkauan pasar lokal ke ranah digital nasional dengan efisiensi tinggi.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      icon: <Rocket className="w-6 h-6" />,
      features: ["Sistem Katalog Digital", "Analisis Trafik Data", "Antarmuka Responsif", "Optimasi SEO Lokal"]
    },
    { 
      title: "Visual Intelligence Workshop", 
      desc: "Inisiatif edukasi literasi digital dan fundamental desain kreatif untuk membangun kompetensi teknologi siswa sekolah dasar.",
      longDesc: "Program pelatihan komprehensif bagi generasi muda di wilayah Semin. Fokus pada pengembangan kreativitas visual menggunakan tools modern, membantu siswa memahami bahasa desain sebagai media komunikasi efektif di era digital.",
      tech: ["Creative Tech", "Canva", "Public Speaking"],
      icon: <Layout className="w-6 h-6" />,
      features: ["Modul Kurikulum Kreatif", "Workshop Praktik Langsung", "Evaluasi Kompetensi Visual", "Sertifikasi Digital"]
    },
    { 
      title: "Digital Innovation Research", 
      desc: "Riset dan pengembangan solusi antarmuka cerdas (UI/UX) sebagai kontribusi akademik formal di Universitas Duta Bangsa.",
      longDesc: "Eksplorasi mendalam mengenai interaksi manusia dan komputer. Riset ini menghasilkan framework UI/UX yang memprioritaskan aksesibilitas dan kemudahan navigasi bagi pengguna sistem informasi kompleks.",
      tech: ["UI/UX Research", "React.js", "Figma"],
      icon: <Code className="w-6 h-6" />,
      features: ["User Journey Mapping", "Prototyping High-Fidelity", "Usability Testing", "System Design Framework"]
    },
  ];

  const techStack = [
    { name: "HTML5", level: "Structure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", level: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", level: "Logic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", level: "Type Safety", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React.js", level: "Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", level: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
    { name: "Tailwind CSS", level: "Utility", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Figma", level: "Design", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { name: "Git", level: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Canva", level: "Graphic", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
  ];

  return (
    <main className="bg-[#0b0221] text-white selection:bg-purple-500/30 scroll-smooth overflow-x-hidden font-sans">
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.section
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0221]"
          >
            <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[80px] md:blur-[120px] rounded-full"></div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center px-4">
              <div className="mb-4 text-purple-400 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">Ideate • Create • Elevate</div>
              <h1 className="text-3xl md:text-7xl font-black mb-4 tracking-tighter leading-none uppercase">Welcome <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">To My Portfolio</span></h1>
              <div className="w-24 md:w-32 h-[1px] bg-white/10 mx-auto overflow-hidden mt-8">
                <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-full h-full bg-purple-500" />
              </div>
            </motion.div>
          </motion.section>
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#0b0221]/50">
              <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center text-center">
                <div className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 uppercase tracking-tighter italic">REIHAN.</div>
                <div className="hidden md:flex gap-8 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
                  <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                  <a href="#projects" className="hover:text-purple-400 transition-colors">Portfolio</a>
                  <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                </div>
                <a href="/CV_Rizal_Diaz.pdf" target="_blank" className="px-4 py-2 md:px-5 md:py-2 bg-white/5 border border-white/10 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer">Resume</a>
              </div>
            </nav>

            <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-28 md:pt-20">
               <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/5 blur-[100px] md:blur-[120px] rounded-full"></div>
               
               <div className="z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto w-full">
                  <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-6"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                      </span>
                      Ready for Innovation
                    </motion.div>
                    <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.85] mb-6 uppercase italic">Digital <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Architect.</span></h1>
                    <p className="text-sm md:text-lg text-gray-400 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed italic">
                      Membangun pengalaman digital yang inovatif melalui integrasi desain antarmuka intuitif dan pengembangan teknologi Frontend mutakhir.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a href="#projects" className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg">View Portfolio <ExternalLink className="w-3 h-3"/></a>
                      <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">Contact <Mail className="w-3 h-3"/></a>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative flex items-center justify-center min-h-[300px] md:min-h-[500px] perspective-1000 order-1 lg:order-2 scale-75 sm:scale-90 md:scale-100">
                    <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                       className="relative w-[280px] md:w-[380px] h-[280px] md:h-[380px] bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-3xl flex items-center justify-center z-10 overflow-visible group"
                    >
                       <motion.div style={{ left: mouseX, top: mouseY }} className="absolute w-32 md:w-40 h-32 md:h-40 bg-purple-500/20 blur-[50px] md:blur-[60px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <Code className="w-20 md:w-32 h-20 md:h-32 text-white/[0.03] absolute" />
                       <motion.div animate={{ x: [40, 0, -40, 0, 40], y: [0, 20, 0, -20, 0], scale: [1, 0.8, 0.6, 0.8, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                         className="absolute p-2 md:p-3 bg-[#1a0b36]/90 border border-purple-500/30 rounded-lg md:rounded-xl shadow-lg z-20"><Cpu className="w-4 md:w-5 h-4 md:h-5 text-purple-400" /></motion.div>
                       <motion.div animate={{ x: [-80, 0, 80, 0, -80], y: [0, -40, 0, 40, 0], scale: [1, 0.7, 1, 0.7, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                         className="absolute p-2 md:p-3 bg-[#1a0b36]/90 border border-pink-500/30 rounded-lg md:rounded-xl shadow-lg z-20"><Globe className="w-4 md:w-5 h-4 md:h-5 text-pink-400" /></motion.div>
                       <motion.div animate={{ x: [150, 0, -150, 0, 150], y: [0, 60, 0, -60, 0], scale: [1.1, 0.8, 0.4, 0.8, 1.1], opacity: [1, 0.8, 0.2, 0.8, 1], rotate: [45, 0, -45, -90, -45] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                         className="absolute z-30 pointer-events-none"><div className="p-3 md:p-4 bg-gradient-to-tr from-purple-500/40 to-pink-500/40 rounded-full border border-white/30 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.4)]"><Rocket className="w-6 md:w-8 h-6 md:h-8 text-white" /></div></motion.div>
                       <div className="z-10 relative">
                          <div className="absolute -inset-10 md:-inset-12 bg-purple-600/20 blur-[50px] md:blur-[60px] animate-pulse"></div>
                          <div className="p-6 md:p-8 bg-white/5 rounded-full border border-white/10 backdrop-blur-md transition-transform group-hover:scale-110"><Zap className="w-10 md:w-12 h-10 md:h-12 text-yellow-400 animate-pulse" /></div>
                       </div>
                       <div className="absolute w-[240px] md:w-[360px] h-[80px] md:h-[130px] border border-white/5 rounded-[100%] rotate-[-8deg] opacity-20"></div>
                       <div className="absolute w-[180px] md:w-[260px] h-[50px] md:h-[80px] border border-white/5 rounded-[100%] rotate-[12deg] opacity-10"></div>
                    </motion.div>
                  </div>
               </div>
            </section>

            <section id="about" className="py-16 md:py-32 px-6 relative z-10">
              <div className="max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-20 items-center text-center lg:text-left">
                <div className="relative group mx-auto lg:mx-0">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square shadow-2xl max-w-[250px] md:max-w-sm">
                     <img src="/profile.jpg" alt="Rizal Diaz Reihan Saputra" className="w-full h-full object-cover transition duration-700" />
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8 px-0 md:px-4 text-center lg:text-left">
                  <div className="space-y-4">
                    <h2 className="text-purple-400 font-mono text-xs md:text-sm tracking-[0.4em] uppercase font-bold italic">About Me</h2>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-tight">Rizal Diaz <br/> Reihan Saputra</h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed italic">
                    Saya adalah seorang mahasiswa <span className="text-white font-semibold italic">Teknik Informatika</span> di Universitas Duta Bangsa Surakarta yang berfokus pada pengembangan teknologi web dan desain antarmuka. Berkomitmen untuk menciptakan solusi digital yang efisien, user-friendly, dan estetis melalui riset UI/UX serta implementasi teknologi Frontend modern.
                  </p>
                </div>
              </div>
            </section>

            <section id="projects" className="py-16 md:py-32 px-6 relative z-10 bg-[#0d0426]/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-20 space-y-4 px-4">
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic">Artifacts</h2>
                  <p className="text-gray-500 font-mono italic text-xs md:text-sm tracking-widest uppercase text-center">Project Milestone & Engineering Expertise</p>
                </div>
                <div className="flex justify-center mb-12 md:mb-16 px-4">
                  <div className="bg-white/5 p-1 rounded-2xl border border-white/10 flex scale-90 sm:scale-100 backdrop-blur-md w-full max-w-xs justify-center">
                    <button onClick={() => setActiveTab("projects")} className={`flex-1 px-4 md:px-10 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === "projects" ? "bg-purple-600 text-white shadow-lg" : "text-gray-500"}`}>Projects</button>
                    <button onClick={() => setActiveTab("stack")} className={`flex-1 px-4 md:px-10 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === "stack" ? "bg-purple-600 text-white shadow-lg" : "text-gray-500"}`}>Stack</button>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  {activeTab === "projects" ? (
                    <motion.div key="projects" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-0 md:px-4">
                      {projects.map((item, index) => (
                        <div key={index} className="group p-6 md:p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all backdrop-blur-sm text-left flex flex-col h-full">
                          <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-purple-600 transition-all duration-500">{item.icon}</div>
                          <h3 className="text-lg md:text-xl font-bold mb-4 uppercase italic">{item.title}</h3>
                          <p className="text-gray-400 text-sm mb-8 italic flex-grow leading-relaxed">{item.desc}</p>
                          <div className="flex justify-between items-center border-t border-white/5 pt-6 mt-auto italic">
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Demo <ExternalLink className="w-3 h-3" /></button>
                            <button onClick={() => setSelectedProject(item)} className="flex items-center gap-2 px-4 md:px-5 py-2.5 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Detail <ArrowRight className="w-3 h-3" /></button>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div key="stack" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-0 md:px-4">
                      {techStack.map((tech, index) => (
                        <motion.div key={index} whileHover={{ y: -5 }} className="p-4 md:p-8 rounded-[1.5rem] border border-white/5 bg-white/[0.02] flex flex-col items-center group transition-all">
                          <img src={tech.icon} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 mb-4 group-hover:scale-110 transition-transform" />
                          <h4 className="text-white text-[10px] md:text-sm font-bold mb-1 uppercase tracking-wider italic text-center">{tech.name}</h4>
                          <span className="text-[7px] md:text-[9px] text-gray-600 uppercase font-mono italic">{tech.level}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>

            <section className="py-16 md:py-24 px-6 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 gap-6 px-0 md:px-4 text-center md:text-left">
                  <div>
                    <h2 className="text-purple-400 font-mono text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-4 flex items-center justify-center md:justify-start gap-2 italic">
                      <FolderGit2 className="w-4 h-4" /> Code Architecture
                    </h2>
                    <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Popular <br/> Repositories.</h3>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm italic max-w-xs font-light">Daftar proyek publik utama dan visualisasi aktivitas pengembangan kode real-time.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-4 mb-12">
                  {[
                    { name: "web_tshirt", lang: "JavaScript", color: "bg-yellow-400" },
                    { name: "web_preweding", lang: "HTML/CSS", color: "bg-orange-400" },
                    { name: "studio-foto", lang: "PHP", color: "bg-blue-400" },
                    { name: "tugas_2", lang: "C++", color: "bg-pink-400" },
                    { name: "tugas_3", lang: "C++", color: "bg-pink-400" },
                    { name: "tugas_4", lang: "C++", color: "bg-pink-400" },
                  ].map((repo, idx) => (
                    <div key={idx} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-purple-500/40 transition-all text-left flex flex-col justify-between h-44 md:h-48 backdrop-blur-sm">
                      <div className="flex justify-between items-start">
                        <div className="p-3 bg-purple-600/10 rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                          <Database className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-500 italic">Public</span>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors uppercase italic truncate">rdrs08 / {repo.name}</h4>
                        <div className="flex items-center gap-4 text-gray-500 italic">
                          <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold tracking-widest uppercase italic">
                            <div className={`w-2 h-2 rounded-full ${repo.color}`}></div> {repo.lang}
                          </div>
                          <div className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold italic"><GitBranch className="w-3 h-3" /> main</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-0 md:px-4">
                  <div className="p-4 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-purple-500/40 transition-all overflow-x-auto flex flex-col items-center backdrop-blur-sm">
                    <img src="https://ghchart.rshah.org/a855f7/rdrs08" alt="GitHub Contribution Chart" className="min-w-[600px] md:min-w-0 w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="mt-8 flex gap-8">
                       <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] italic font-bold leading-none"><div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-purple-500/20 rounded-sm"></div> Less Code</div>
                       <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] italic font-bold leading-none"><div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-purple-500 rounded-sm"></div> More Code</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <footer id="contact" className="py-16 md:py-32 px-6 border-t border-white/5 relative z-10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
                <div className="space-y-10 text-center lg:text-left">
                  <div>
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter italic uppercase leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tighter italic">Let's Build <br /> The Future.</h2>
                    <p className="text-gray-400 text-sm md:text-lg italic leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left">Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi mengenai teknologi dan inovasi digital.</p>
                  </div>
                  <div className="flex justify-center lg:justify-start gap-8">
                    <a href="https://instagram.com/hanss._0" target="_blank" className="text-gray-600 hover:text-pink-500 transition-all hover:scale-110"><Instagram className="w-6 md:w-7 h-6 md:h-7" /></a>
                    <a href="https://github.com/rdrs08" target="_blank" className="text-gray-600 hover:text-white transition-all hover:scale-110"><Github className="w-6 md:w-8 h-6 md:h-8" /></a>
                    <a href="mailto:rizaldiazreihansaputra@email.com" className="text-gray-600 hover:text-purple-400 transition-all hover:scale-110"><Mail className="w-6 md:w-8 h-6 md:h-8" /></a>
                  </div>
                  <div className="pt-8 border-t border-white/5 text-[8px] md:text-[10px] text-gray-700 uppercase tracking-[0.3em] md:tracking-[0.5em] font-mono italic text-center lg:text-left">© 2026 Rizal Diaz Reihan Saputra • Universitas Duta Bangsa</div>
                </div>

                <div className="bg-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 md:space-y-6 relative z-10 italic">
                    <input type="hidden" name="access_key" value="f9298f22-6539-4630-bdd3-6925e5115129" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2 text-left">
                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 italic">Nama Lengkap</label>
                        <input type="text" name="name" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm focus:outline-none focus:border-purple-500 transition-all" />
                      </div>
                      <div className="space-y-2 text-left">
                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 italic">Alamat Email</label>
                        <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm focus:outline-none focus:border-purple-500 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 italic">Pesan Anda</label>
                      <textarea name="message" required rows={4} placeholder="Halo Rizal, saya ingin berdiskusi tentang..." className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-5 py-3 md:px-6 md:py-4 text-sm focus:outline-none focus:border-purple-500 transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 md:py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl md:rounded-2xl hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-3 group">
                      Kirim Pesan <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </footer>

            <AnimatePresence>
              {selectedProject && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0b0221]/95 backdrop-blur-2xl overflow-y-auto">
                  <motion.div initial={{ scale: 0.9, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 30, opacity: 0 }}
                    className="relative w-full max-w-5xl my-auto bg-[#110729] border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl custom-scrollbar overflow-hidden"
                  >
                    <div className="sticky top-0 z-10 flex justify-between items-center p-6 md:p-8 bg-[#110729]/80 backdrop-blur-md border-b border-white/5">
                      <button onClick={() => setSelectedProject(null)} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors italic"><ArrowRight className="w-4 h-4 rotate-180" /> Back</button>
                      <button onClick={() => setSelectedProject(null)} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all"><X className="w-5 h-5 text-gray-400 hover:text-white" /></button>
                    </div>
                    <div className="p-6 md:p-12 italic h-full overflow-y-auto max-h-[75vh]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                        <div className="space-y-6 md:space-y-8 text-left">
                          <div>
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20">{selectedProject.icon}</div>
                            <h2 className="text-2xl md:text-5xl font-black uppercase italic mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 leading-none">{selectedProject.title}</h2>
                            <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
                            <p className="text-gray-400 text-sm md:text-lg leading-relaxed italic text-left">"{selectedProject.longDesc}"</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl italic"><Code className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mb-2" /><div className="text-lg md:text-xl font-bold">{selectedProject.tech.length}</div><div className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1 text-left">Teknologi</div></div>
                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl italic"><Layers className="w-4 h-4 md:w-5 md:h-5 text-pink-400 mb-2" /><div className="text-lg md:text-xl font-bold">{selectedProject.features.length}</div><div className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1 text-left">Fitur Utama</div></div>
                          </div>
                        </div>
                        <div className="space-y-6 md:space-y-10 text-left">
                          <div className="aspect-video w-full bg-gradient-to-br from-purple-900/20 to-[#0b0221] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-purple-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Rocket className="w-12 h-12 md:w-20 md:h-20 text-white/10 group-hover:text-purple-500/20 transition-all scale-110" />
                          </div>
                          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden text-left backdrop-blur-sm italic">
                            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-4 md:mb-6 flex items-center gap-2 italic"><Zap className="w-3 h-3" /> Key Deliverables</h4>
                            <ul className="space-y-2 md:space-y-4 text-left">
                              {selectedProject.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 md:gap-4 group text-left"><div className="mt-1.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]" /><span className="text-gray-300 text-xs md:text-base leading-relaxed text-left">{feature}</span></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}