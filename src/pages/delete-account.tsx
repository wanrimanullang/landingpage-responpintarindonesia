import { useEffect } from 'react';
import {
  DeleteAccountHeader,
  DeleteAccountWarning,
  DeleteAccountSteps,
  DeleteAccountDataList,
  DeleteAccountTimeline,
  DeleteAccountForm,
  DeleteAccountFaq,
  DeleteAccountSupport,
} from '../components/delete-account';
import BackgroundScene from '../components/showcase/BackgroundScene';

export default function DeleteAccountPage() {
  // Set page title for SEO and user clarity
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Hapus Akun & Data Pribadi | Respon Pintar (Omnichannel Platform)';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <main className="jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative overflow-hidden font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0] pt-36 sm:pt-44 pb-28 sm:pb-36 px-6 lg:px-16">
      {/* Background Interactive Particle Field & Mesh */}
      <BackgroundScene />

      <div className="relative z-10 max-w-4xl mx-auto delete-account-container space-y-12 sm:space-y-16">
        {/* Header Section */}
        <DeleteAccountHeader />

        {/* Warning Alert Banner */}
        <DeleteAccountWarning />

        {/* Step-by-Step Instructions (Dashboard vs Web) */}
        <DeleteAccountSteps />

        {/* Deleted Data Categories & Retained Data Table */}
        <DeleteAccountDataList />

        {/* Timeline / Process Schedule */}
        <DeleteAccountTimeline />

        {/* Web Request Form */}
        <DeleteAccountForm />

        {/* Frequently Asked Questions */}
        <DeleteAccountFaq />

        {/* Contact Support Section */}
        <DeleteAccountSupport />
      </div>
    </main>
  );
}
