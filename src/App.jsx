import React, { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommandDashboard from './components/CommandDashboard';
import CityBrain from './components/CityBrain';
import DigitalTwin from './components/DigitalTwin';
import InteractiveMap from './components/InteractiveMap';
import TransportationSection from './components/TransportationSection';
import EnergyGridSection from './components/EnergyGridSection';
import EnvironmentSection from './components/EnvironmentSection';
import WaterWasteSection from './components/WaterWasteSection';
import BuildingsAutonomousSection from './components/BuildingsAutonomousSection';
import PublicSafetyHealthcareSection from './components/PublicSafetyHealthcareSection';
import AgricultureCybersecuritySection from './components/AgricultureCybersecuritySection';
import CitizenServices from './components/CitizenServices';
import TechShowcase from './components/TechShowcase';
import Roadmap2030 from './components/Roadmap2030';
import AriaAssistant from './components/AriaAssistant';
import ModalsAndToasts from './components/ModalsAndToasts';
import Footer from './components/Footer';

export default function App() {
  // Modal States
  const [activeMarker, setActiveMarker] = useState(null);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const [ariaOpen, setAriaOpen] = useState(false);

  // Toast Notification State
  const [toasts, setToasts] = useState([
    { id: 1, message: "Smart City 2030 Command Operating System initialized online." }
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
    <div className="smart-city-app" style={{ minHeight: '100vh', position: 'relative' }}>
      
      {/* Background Video & Cinematic Shader Overlay */}
      <BackgroundVideo />

      {/* Top Navbar */}
      <Navbar
        onOpenEmergency={() => setEmergencyOpen(true)}
        onOpenAria={() => setAriaOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero
          onExplore={() => triggerToast("Exploring Digital Twin spatial simulation...")}
          onOpenDashboard={() => triggerToast("Navigated to Real-Time Command Dashboard.")}
        />

        <CommandDashboard onTriggerToast={triggerToast} />

        <CityBrain onTriggerToast={triggerToast} />

        <DigitalTwin onTriggerToast={triggerToast} />

        <InteractiveMap onSelectMarker={(marker) => setActiveMarker(marker)} />

        <TransportationSection onTriggerToast={triggerToast} />

        <EnergyGridSection />

        <EnvironmentSection />

        <WaterWasteSection onTriggerToast={triggerToast} />

        <BuildingsAutonomousSection />

        <PublicSafetyHealthcareSection
          onOpenEmergencyModal={() => setEmergencyOpen(true)}
        />

        <AgricultureCybersecuritySection />

        <CitizenServices
          onOpenReportModal={() => setReportModalOpen(true)}
          onTriggerToast={triggerToast}
        />

        <TechShowcase onSelectTech={(tech) => setSelectedTech(tech)} />

        <Roadmap2030 />
      </main>

      {/* ARIA AI Floating Assistant Drawer */}
      <AriaAssistant
        isOpen={ariaOpen}
        onClose={() => setAriaOpen(!ariaOpen)}
        onOpenReportModal={() => setReportModalOpen(true)}
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
      <Footer onExplore={() => triggerToast("Welcome to Smart City 2030!")} />

    </div>
  );
}
