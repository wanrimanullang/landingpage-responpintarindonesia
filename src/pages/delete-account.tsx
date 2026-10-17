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

export default function DeleteAccountPage() {
  // Set page title for SEO and user clarity
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Hapus Akun & Data Pribadi | Respon Pintar';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto delete-account-container space-y-12" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
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
