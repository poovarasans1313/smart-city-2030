export const CITY_STATS = [
  { label: "CONNECTED DEVICES", value: 12840, suffix: "+", change: "+14% this month", icon: "Cpu" },
  { label: "DAILY DATA POINTS", value: 4.8, suffix: "M", change: "Real-time streaming", icon: "Activity" },
  { label: "SYSTEM HEALTH", value: 98.7, suffix: "%", change: "Optimal operations", icon: "ShieldCheck" },
  { label: "CLEAN ENERGY", value: 2.8, suffix: " GW", change: "70% Renewable ratio", icon: "Zap" },
  { label: "CITY SAFETY", value: 96, suffix: "%", change: "Zero major breaches", icon: "Lock" },
  { label: "WATER EFFICIENCY", value: 91, suffix: "%", change: "Smart grid active", icon: "Droplets" }
];

export const COMMAND_METRICS = [
  { id: "traffic", title: "TRAFFIC FLOW", score: 92, unit: "EFFICIENCY", status: "OPTIMAL", color: "#00f3ff", desc: "Autonomous light optimization active across 450 intersections." },
  { id: "energy", title: "ENERGY GRID", score: 87, unit: "GRID HEALTH", status: "STABLE", color: "#00ff9d", desc: "Solar storage peaking at 1.4 GW reserve capacity." },
  { id: "environment", title: "ENVIRONMENT", score: 94, unit: "AIR QUALITY", status: "GOOD", color: "#bf00ff", desc: "Average AQI 42 across all 12 urban sectors." },
  { id: "water", title: "WATER NETWORK", score: 91, unit: "SYSTEM HEALTH", status: "HEALTHY", color: "#00f3ff", desc: "AI leak detection active. 3 micro-flushes scheduled." },
  { id: "safety", title: "PUBLIC SAFETY", score: 96, unit: "CITY SECURITY", status: "SECURE", color: "#00ff9d", desc: "Response units standby time: 4.2 minutes." },
  { id: "waste", title: "WASTE MGMT", score: 88, unit: "COLLECTION EFF.", status: "ACTIVE", color: "#ffaa00", desc: "Dynamic route calculation updated for Zone 3." }
];

export const AI_PREDICTIONS = [
  { id: 1, text: "Traffic congestion predicted to increase by 18% around Sector 04 at 17:30.", severity: "warning", action: "Rerouting autonomous transit shuttles" },
  { id: 2, text: "Energy demand expected to peak at 7:30 PM due to residential cooling.", severity: "info", action: "Releasing battery reserves from Solar Bank Alpha" },
  { id: 3, text: "Air quality improving across Zone 04 following green corridor deployment.", severity: "success", action: "Optimal bio-filtration active" },
  { id: 4, text: "3 smart maintenance recommendations generated for District Water Pump #12.", severity: "warning", action: "Automated dispatch assigned" }
];

export const DIGITAL_TWIN_LAYERS = [
  { id: "live", name: "LIVE OVERVIEW", color: "#00f3ff", desc: "Complete real-time digital twin synchronization with 12,840 IoT sensors." },
  { id: "traffic", name: "TRAFFIC FLOW", color: "#00ff9d", desc: "Real-time vehicular light trails, drone corridors, and autonomous shuttle routes." },
  { id: "energy", name: "ENERGY GRID", color: "#ffaa00", desc: "Micro-grid solar/wind transmission conduits and battery storage nodes." },
  { id: "air", name: "AIR QUALITY", color: "#bf00ff", desc: "Hyper-local AQI heatmaps, atmospheric sensors, and green filtration zones." },
  { id: "water", name: "WATER PIPELINES", color: "#00f3ff", desc: "Sub-surface hydrostatic pressure mapping and smart reservoir telemetry." },
  { id: "emergency", name: "EMERGENCY UNITS", color: "#ff3366", desc: "Autonomous emergency response drones, fire nodes, and rapid medical units." }
];

export const MAP_MARKERS = [
  { id: "hosp-1", type: "Hospital", title: "SMART HOSPITAL ALPHA", lat: 35, lng: 45, status: "ACTIVE", metrics: { capacity: "82%", beds: 24, aiStatus: "ACTIVE", response: "3.8 min" } },
  { id: "traff-1", type: "Traffic", title: "CENTRAL TRANSPORT NODE", lat: 50, lng: 30, status: "OPTIMAL", metrics: { flow: "94%", avBuses: 48, aiSignal: "DYNAMIC", congestion: "LOW" } },
  { id: "nrg-1", type: "Energy", title: "SOLAR MATRIX HUB 01", lat: 25, lng: 65, status: "GENERATING", metrics: { output: "1.4 GW", battery: "92%", efficiency: "98.4%", activePanels: "14,200" } },
  { id: "wtr-1", type: "Water", title: "CENTRAL RESERVOIR DELTA", lat: 70, lng: 55, status: "HEALTHY", metrics: { reservoir: "82%", purity: "98%", flowRate: "1.8M L/d", alerts: "0 Active" } },
  { id: "prk-1", type: "Park", title: "ECO-BIOME CORRIDOR", lat: 60, lng: 75, status: "GOOD", metrics: { aqi: 38, greenCover: "42%", co2Absorption: "120 Tons/mo", treeSensors: "850" } },
  { id: "ev-1", type: "EV Charging", title: "HYPER-CHARGE PLAZA", lat: 40, lng: 20, status: "ACTIVE", metrics: { chargersFree: 18, totalPorts: 24, powerKw: 350, gridSync: "100%" } },
  { id: "bldg-1", type: "Smart Building", title: "NEO TOWER 2030", lat: 45, lng: 60, status: "ZERO-CARBON", metrics: { occupancy: "84%", solarPower: "35%", hvacEff: "96%", energyRating: "A++" } },
  { id: "emg-1", type: "Emergency", title: "FIRE & DISASTER STATION 07", lat: 30, lng: 80, status: "STANDBY", metrics: { responseDrones: 12, fireRobots: 6, activeIncidents: 0, status: "READY" } }
];

export const TRAFFIC_HOURLY = [
  { time: "08:00", congestion: 42, speed: 65 },
  { time: "08:30", congestion: 51, speed: 58 },
  { time: "09:00", congestion: 68, speed: 45 },
  { time: "09:30", congestion: 74, speed: 40 },
  { time: "10:00", congestion: 58, speed: 52 },
  { time: "10:30", congestion: 44, speed: 62 }
];

export const ENERGY_FLOW = {
  solar: 48,
  wind: 22,
  grid: 30,
  totalGw: 2.8,
  batteryReserve: "0.6 GW",
  evConsumption: "0.4 GW"
};

export const WASTE_BINS = [
  { id: "BIN #204", location: "District 2 - High St", fillLevel: 82, status: "COLLECTION PENDING", temp: "22°C" },
  { id: "BIN #205", location: "District 2 - Plaza Ave", fillLevel: 41, status: "NORMAL", temp: "21°C" },
  { id: "BIN #206", location: "District 3 - Metro Hub", fillLevel: 96, status: "CRITICAL FILL", temp: "24°C" }
];

export const SMART_BUILDINGS = [
  { name: "SKYLINE CITADEL", energy: 78, water: 62, occupancy: 84, co2: -18, systems: ["AI HVAC", "SMART LIGHTING", "SOLAR ROOF", "BIOMETRIC SEC"] },
  { name: "QUANTUM COMPLEX", energy: 92, water: 80, occupancy: 91, co2: -25, systems: ["RAIN HARVESTING", "SMART GLASS", "ROBOTIC MAINT", "WIND TURBINE"] },
  { name: "APEX HUB", energy: 85, water: 74, occupancy: 78, co2: -21, systems: ["AI HVAC", "SMART LIGHTING", "BEMS SYSTEM", "EV FLEET DOCK"] }
];

export const AUTONOMOUS_STATS = {
  dronesOnline: 42,
  autonomousVehicles: 128,
  robotSystems: 36
};

export const CYBERSECURITY_LOGS = [
  { time: "10:54:12", event: "AI Threat Shield blocked DDOS ping on Energy Grid Node #04", severity: "NORMAL", status: "MITIGATED" },
  { time: "10:52:05", event: "Zero-Trust Encryption handshake updated for 12,840 IoT sensors", severity: "INFO", status: "SUCCESS" },
  { time: "10:48:30", event: "Anomalous network telemetry flagged in Transit Sector 2 - Cleaned", severity: "WARNING", status: "RESOLVED" }
];

export const CITIZEN_SERVICES = [
  { id: "report", title: "Report an Issue", icon: "AlertTriangle", desc: "Instantly flag potholes, broken street lights, or water leaks via AI locator.", actionText: "FILE REPORT →" },
  { id: "bills", title: "Pay Utility Bills", icon: "CreditCard", desc: "Automated micro-payments for renewable solar power & water usage.", actionText: "VIEW BILLS →" },
  { id: "emg", title: "Emergency Services", icon: "Siren", desc: "One-touch SOS link directly to AI dispatch and medical response drones.", actionText: "SOS LINK →" },
  { id: "transit", title: "Public Transit Pass", icon: "Bus", desc: "Real-time hyperloop & autonomous shuttle schedules with mobile NFC pass.", actionText: "OPEN PASS →" },
  { id: "parking", title: "Smart Parking", icon: "Car", desc: "Locate & reserve EV inductive charging spots anywhere in the city.", actionText: "FIND SPOT →" },
  { id: "health", title: "Digital Health Records", icon: "Activity", desc: "Secure encrypted citizen bio-vitals telemetry & virtual doctor checkups.", actionText: "HEALTH PORTAL →" }
];

export const TECH_CARDS = [
  { name: "AI / ML", category: "Core Intelligence", desc: "Deep neural networks processing city sensor feeds for predictive operations.", details: "Runs custom real-time neural models on edge compute clusters across all 12 urban zones, predicting traffic surges, grid overloads, and water leaks before they happen." },
  { name: "Internet of Things", category: "Hardware Matrix", desc: "12,840+ low-latency IoT sensors monitoring pressure, air quality, and movement.", details: "Utilizes ultra-low-power NB-IoT and 6G sensors transmitting atmospheric, hydrostatic, and structural integrity data continuously." },
  { name: "Digital Twins", category: "Spatial Simulation", desc: "Real-time 3D mirror of urban infrastructure powered by spatial telemetry.", details: "Renders millimeter-accurate spatial simulations allowing city planners to model disaster responses, solar angles, and wind dynamics." },
  { name: "Edge Computing", category: "Distributed Processing", desc: "Sub-millisecond decisions executed locally on urban infrastructure nodes.", details: "Edge micro-servers mounted directly on smart street poles process high-definition computer vision streams without central bandwidth strain." },
  { name: "5G / 6G Network", category: "Connectivity Mesh", desc: "Ultra-wideband low-latency communication mesh connecting every autonomous unit.", details: "Enables vehicle-to-everything (V2X) communication, drone telemetry, and real-time remote robotic surgeries." },
  { name: "Cloud Computing", category: "Central Vault", desc: "Elastic hybrid cloud infrastructure storing petabytes of city telemetry.", details: "Secure distributed cloud architecture with automated load balancing and instant multi-region disaster failover." },
  { name: "Computer Vision", category: "Visual Perception", desc: "AI video stream analytics monitoring traffic density and public safety.", details: "Processes 4,500 optical and thermal video streams to detect incidents, traffic violations, and structural cracks." },
  { name: "Robotics", category: "Automated Maintenance", desc: "Autonomous cleaning, pipe inspection, and structural repair robots.", details: "Deploys crawler robots inside water pipelines and autonomous drone swarms to inspect high-rise glass facades." },
  { name: "Autonomous Systems", category: "Smart Mobility", desc: "Self-driving electric shuttle fleets and drone logistics delivery.", details: "Level 5 autonomous navigation across dedicated underground utility conduits and elevated aerial lanes." },
  { name: "Big Data Analytics", category: "Pattern Extraction", desc: "Synthesizing 4.8M daily data points into actionable municipal policy.", details: "Processes massive time-series data streams using vector databases to optimize long-term carbon footprint goals." },
  { name: "Renewable Energy", category: "Clean Power", desc: "Solar glass facades, wind micro-turbines, and green hydrogen storage.", details: "Integrated solar architecture built into skyscraper windows, harvesting clean energy during peak daylight." },
  { name: "Cybersecurity", category: "Zero-Trust Defense", desc: "Quantum-resistant encryption safeguarding municipal infrastructure.", details: "Automated AI threat hunting engine inspecting every packet across municipal utility channels 24/7." },
  { name: "AR / VR Infrastructure", category: "Urban Visualization", desc: "Augmented reality overlay for utility workers and city planners.", details: "Empowers field workers to see sub-surface pipes and electrical lines directly through AR spatial headsets." }
];

export const ROADMAP_ITEMS = [
  { year: "2026", title: "AI + IoT Foundation", desc: "Deploy 10,000+ environmental & structural sensors. Implement primary AI Command Engine." },
  { year: "2027", title: "Smart Mobility Expansion", desc: "Transition 60% of public buses to autonomous electric shuttles. Open hyper-charging grid." },
  { year: "2028", title: "Digital Twin Synchronization", desc: "Launch full spatial 3D city replica with sub-second sensor synchronization and predictive weather modeling." },
  { year: "2029", title: "Autonomous Infrastructure", desc: "Automated drone delivery corridors, underground waste vacuum tubes, and robotic pipe repair." },
  { year: "2030", title: "Fully Connected Smart City", desc: "Achieve 100% net-zero carbon operations, 99.9% system uptime, and AI-driven municipal governance." }
];

export const ARIA_RESPONSES = {
  "What is the traffic situation?": "Currently, city-wide traffic flow efficiency is at 92%. Congestion is low across Sector 01-03, with minor slowdowns on Central Ave (Zone 04) expected to clear in 12 minutes thanks to dynamic traffic signal adjustments.",
  "How is air quality?": "Air quality is currently GOOD with an average AQI of 42. Oxygen corridors in Zone 04 are operating at peak efficiency, and carbon capture units are active.",
  "Where are EV chargers?": "There are 18 available hyper-chargers at Hyper-Charge Plaza (Zone 02), with 24 additional wireless inductive charging lanes active along Main Highway Corridor.",
  "Show today's energy usage.": "Total clean energy generation today is 2.8 GW. Solar matrix contributes 48%, Wind micro-turbines 22%, and grid battery storage holds 0.6 GW reserve.",
  "Is there any emergency?": "No major city emergencies active. Response teams are on 100% readiness with an average dispatch time of 4.2 minutes across all sectors.",
  "How can I report an issue?": "You can use the 'Report an Issue' card in the Citizen Digital Services section or simply type your report details right here, and I will dispatch a smart maintenance unit!"
};
