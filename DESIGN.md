<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Striker FC - Home</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Playfair+Display:wght@500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary-fixed": "#5bffa1",
                        "surface-container-lowest": "#040e1f",
                        "error": "#ffb4ab",
                        "outline-variant": "#45474a",
                        "error-container": "#93000a",
                        "on-surface-variant": "#c6c6ca",
                        "surface-container": "#152031",
                        "surface-container-highest": "#2a3548",
                        "surface": "#081425",
                        "tertiary-container": "#000903",
                        "on-background": "#d8e3fb",
                        "on-tertiary-fixed": "#00210e",
                        "surface-bright": "#2f3a4c",
                        "secondary-fixed-dim": "#b9c8de",
                        "on-secondary": "#233143",
                        "surface-container-high": "#1f2a3c",
                        "on-error-container": "#ffdad6",
                        "on-primary-container": "#76787d",
                        "tertiary-fixed-dim": "#00e383",
                        "on-secondary-fixed-variant": "#39485a",
                        "secondary-fixed": "#d4e4fa",
                        "tertiary": "#00e383",
                        "inverse-on-surface": "#263143",
                        "primary": "#c5c6cb",
                        "on-secondary-container": "#a7b6cc",
                        "surface-tint": "#c5c6cb",
                        "on-primary-fixed": "#191c1f",
                        "on-primary-fixed-variant": "#44474b",
                        "on-error": "#690005",
                        "inverse-primary": "#5c5e63",
                        "primary-container": "#05070a",
                        "on-tertiary-fixed-variant": "#00522c",
                        "on-secondary-fixed": "#0d1c2d",
                        "surface-dim": "#081425",
                        "on-primary": "#2e3134",
                        "primary-fixed": "#e1e2e7",
                        "primary-fixed-dim": "#c5c6cb",
                        "inverse-surface": "#d8e3fb",
                        "on-tertiary": "#00391d",
                        "background": "#081425",
                        "secondary": "#b9c8de",
                        "surface-variant": "#2a3548",
                        "on-surface": "#d8e3fb",
                        "outline": "#8f9195",
                        "surface-container-low": "#111c2d",
                        "on-tertiary-container": "#008a4e",
                        "secondary-container": "#39485a"
                    },
                    "borderRadius": {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-desktop": "64px",
                        "container-max": "1440px",
                        "unit": "8px",
                        "margin-mobile": "20px",
                        "section-gap": "120px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "body-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "headline-lg": ["Playfair Display"],
                        "label-sm": ["Inter"],
                        "headline-lg-mobile": ["Playfair Display"],
                        "headline-md": ["Playfair Display"],
                        "display-lg-mobile": ["Playfair Display"],
                        "label-lg": ["Inter"],
                        "display-lg": ["Playfair Display"]
                    },
                    "fontSize": {
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-lg": ["40px", { "lineHeight": "48px", "fontWeight": "600" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                        "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "500" }],
                        "display-lg-mobile": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "display-lg": ["72px", { "lineHeight": "80px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
<style>
        .glass-panel {
            background: rgba(42, 53, 72, 0.4);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .text-glow {
            text-shadow: 0 0 20px rgba(0, 227, 131, 0.5);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-tertiary selection:text-on-tertiary">
<!-- TopNavBar -->
<nav class="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-white/10 shadow-md">
<div class="flex justify-between items-center px-margin-desktop w-full h-20 max-w-container-max mx-auto hidden md:flex">
<div class="font-display-lg text-display-lg tracking-tighter text-on-surface dark:text-on-surface" style="font-size: 32px; line-height: 40px;">STRIKER FC</div>
<div class="flex space-x-8">
<a class="text-tertiary border-b-2 border-tertiary pb-1 font-bold font-label-lg text-label-lg" href="#">Home</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:text-tertiary transition-all duration-300 font-label-lg text-label-lg" href="#">Matches</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:text-tertiary transition-all duration-300 font-label-lg text-label-lg" href="#">News</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:text-tertiary transition-all duration-300 font-label-lg text-label-lg" href="#">Squad</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:text-tertiary transition-all duration-300 font-label-lg text-label-lg" href="#">Membership</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:text-tertiary transition-all duration-300 font-label-lg text-label-lg" href="#">Shop</a>
</div>
<div class="flex space-x-4">
<button class="text-tertiary dark:text-tertiary scale-95 active:opacity-80 transition-transform">
<span class="material-symbols-outlined" data-icon="search">search</span>
</button>
</div>
</div>
<!-- Mobile Nav Header -->
<div class="flex justify-between items-center px-margin-mobile w-full h-16 md:hidden">
<div class="font-display-lg-mobile text-display-lg-mobile tracking-tighter text-on-surface dark:text-on-surface" style="font-size: 24px; line-height: 32px;">STRIKER FC</div>
<button class="text-tertiary scale-95 active:opacity-80 transition-transform">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</nav>
<!-- Hero Section -->
<header class="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 w-full h-full">
<img alt="Cinematic wide shot of a modern football stadium at night" class="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
</div>
<div class="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col items-center">
<h1 class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6 text-glow">THE SPIRIT OF STRIKER FC</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">Experience the pinnacle of modern football. Join the legacy, feel the passion.</p>
<button class="bg-tertiary text-on-tertiary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-tertiary-fixed transition-colors shadow-[0px_12px_40px_rgba(0,0,0,0.6)]">
                Discover More
            </button>
</div>
</header>
<main>
<!-- Match Center -->
<section class="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-20 -mt-32">
<div class="glass-panel rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-[0px_12px_40px_rgba(0,0,0,0.6)]">
<div class="flex-1">
<h2 class="font-label-lg text-label-lg text-tertiary mb-2 uppercase tracking-widest flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span> Next Match
                    </h2>
<div class="font-headline-md text-headline-md text-on-surface">Striker FC vs. City Rivals</div>
<div class="font-body-md text-body-md text-on-surface-variant mt-1">Saturday, 20:00 GMT • Grand Arena</div>
</div>
<div class="font-display-lg text-display-lg text-on-surface-variant opacity-50 px-8 border-l border-white/10 hidden lg:block">
                    VS
                </div>
<div class="flex-1 flex justify-end">
<button class="border border-white/20 bg-white/5 text-on-surface font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md">
                        Buy Tickets
                    </button>
</div>
</div>
</section>
<!-- Experience Section (Join the Roar) -->
<section class="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div class="relative rounded-xl overflow-hidden aspect-[21/9] md:aspect-[3/1] flex items-center">
<img alt="Panoramic view of cheering fans in a vibrant, neon-lit stadium" class="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI"/>
<div class="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
<div class="relative z-10 p-8 md:p-16 max-w-xl">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-4">Join the Roar</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8">Feel the unmatched energy of the Grand Arena. Be part of history.</p>
<button class="bg-tertiary text-on-tertiary font-label-lg text-label-lg px-6 py-3 rounded-full hover:bg-tertiary-fixed transition-colors">
                        Explore Experiences
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest full-width border-t border-white/10 mt-section-gap">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-1 md:col-span-1">
<div class="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-6">STRIKER FC</div>
<p class="font-label-sm text-label-sm text-on-surface-variant">© 2024 STRIKER FOOTBALL CLUB. ALL RIGHTS RESERVED.</p>
</div>
<div class="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
<div class="flex flex-col space-y-4">
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-surface transition-colors hover:text-tertiary underline-offset-4 hover:underline opacity-100 hover:opacity-80" href="#">Privacy Policy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-surface transition-colors hover:text-tertiary underline-offset-4 hover:underline opacity-100 hover:opacity-80" href="#">Terms of Service</a>
</div>
<div class="flex flex-col space-y-4">
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-surface transition-colors hover:text-tertiary underline-offset-4 hover:underline opacity-100 hover:opacity-80" href="#">Contact Us</a>
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-surface transition-colors hover:text-tertiary underline-offset-4 hover:underline opacity-100 hover:opacity-80" href="#">Careers</a>
</div>
<div class="flex flex-col space-y-4">
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-surface transition-colors hover:text-tertiary underline-offset-4 hover:underline opacity-100 hover:opacity-80" href="#">Official Partners</a>
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-surface transition-colors hover:text-tertiary underline-offset-4 hover:underline opacity-100 hover:opacity-80" href="#">Global Newsletter</a>
</div>
</div>
</div>
</footer>
</body></html>