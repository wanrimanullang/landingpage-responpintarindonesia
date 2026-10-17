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
    <main className="landing-subpage bg-[#0B0C0E] text-[#E9EBEF] relative font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]">
      {/* Background Interactive Particle Field & Mesh */}
      <BackgroundScene />

      <div className="landing-container relative z-10">
        <div className="max-w-4xl mx-auto delete-account-container space-y-12 sm:space-y-16">
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
      </div>
    </main>
  );
}
