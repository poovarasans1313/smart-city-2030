import React, { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommandDashboard from './components/CommandDashboard';
import CityBrain from './components/CityBrain';
import DigitalTwin from './components/DigitalTwin';
import InteractiveMap from './components/InteractiveMap';
import SolutionsSection from './components/SolutionsSection';
import HowItWorksSection from './components/HowItWorksSection';
import VisionImpactSection from './components/VisionImpactSection';
import BuildingsAutonomousSection from './components/BuildingsAutonomousSection';
import PublicSafetyHealthcareSection from './components/PublicSafetyHealthcareSection';
import AgricultureCybersecuritySection from './components/AgricultureCybersecuritySection';
import TechShowcase from './components/TechShowcase';
import Roadmap2030 from './components/Roadmap2030';
import AriaAssistant from './components/AriaAssistant';
import ModalsAndToasts from './components/ModalsAndToasts';
import Footer from './components/Footer';

export default function App() {
  // Theme State (Dark / Light Theme)
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Modal States
  const [activeMarker, setActiveMarker] = useState(null);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const [ariaOpen, setAriaOpen] = useState(false);

  // Toast Notification State
  const [toasts, setToasts] = useState([
    { id: 1, message: "Smart City 2030 Competition Platform initialized online." }
  ]);

  const triggerToast = (message) => {
    const newId = Date.now();
    setToasts((prev) => [...prev, { id: newId, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newId));
    }, 4500);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="smart-city-app" data-theme={theme} style={{ minHeight: '100vh', position: 'relative' }}>
      
      {/* Background Video & Cinematic Shader Overlay */}
      <BackgroundVideo />

      {/* Top Navbar */}
      <Navbar
        onOpenEmergency={() => setEmergencyOpen(true)}
        onOpenAria={() => setAriaOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections (Judge Presentation Order) */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        
        {/* 1. Hero Section & Live City Status */}
        <Hero
          onExplore={() => triggerToast("Navigated to Smart City Solutions...")}
          onOpenDashboard={() => triggerToast("Navigated to City Command Center Dashboard...")}
        />

        {/* 2. City Command Center (Main Centerpiece Dashboard) */}
        <CommandDashboard onTriggerToast={triggerToast} />

        {/* 3. Interactive City Map & Digital Twin Mirror */}
        <DigitalTwin onTriggerToast={triggerToast} />

        <InteractiveMap onSelectMarker={(marker) => setActiveMarker(marker)} />

        {/* 4. AI City Intelligence Engine */}
        <CityBrain onTriggerToast={triggerToast} />

        {/* 5. Smart City Solutions (6 Modular Cards) */}
        <SolutionsSection onTriggerToast={triggerToast} />

        {/* 6. How It Works (Technical Architecture Flow) */}
        <HowItWorksSection />

        {/* 7. Vision 2030 Impact Targets */}
        <VisionImpactSection />

        {/* 8. Infrastructure, Public Safety & Security Subsystems */}
        <BuildingsAutonomousSection />

        <PublicSafetyHealthcareSection
          onOpenEmergencyModal={() => setEmergencyOpen(true)}
        />

        <AgricultureCybersecuritySection />

        <TechShowcase onSelectTech={(tech) => setSelectedTech(tech)} />

        {/* 9. 2030 Strategic Roadmap */}
        <Roadmap2030 />
      </main>

      {/* ARIA AI Floating Assistant Drawer */}
      <AriaAssistant
        isOpen={ariaOpen}
        onClose={() => setAriaOpen(!ariaOpen)}
        onOpenReportModal={() => setReportModalOpen(true)}
        onTriggerToast={triggerToast}
      />

      {/* Global Modals & Toast Manager */}
      <ModalsAndToasts
        activeMarker={activeMarker}
        onCloseMarker={() => setActiveMarker(null)}
        emergencyOpen={emergencyOpen}
        onCloseEmergency={() => setEmergencyOpen(false)}
        reportModalOpen={reportModalOpen}
        onCloseReportModal={() => setReportModalOpen(false)}
        selectedTech={selectedTech}
        onCloseTech={() => setSelectedTech(null)}
        toasts={toasts}
        onDismissToast={dismissToast}
        onTriggerToast={triggerToast}
      />

      {/* Footer */}
      <Footer onExplore={() => triggerToast("Welcome to Smart City 2030 Competition Platform!")} />

    </div>
  );
}
