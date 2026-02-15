import { Shield, Lock, Eye, Users, FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Shield className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Privacy Policy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl mb-4">
            Privacy{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-lg text-muted-foreground">
            Last updated: March 15, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information that you provide directly to us, including:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">1.1. Information You Provide:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Account information (name, email, phone number)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Payment information (processed through secure payment gateways)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Content you upload or send through the service</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">1.2. Information We Collect Automatically:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Service usage and interaction data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Device and browser information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Cookies and similar tracking technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Location data (if you grant permission)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">2. Use of Information</h2>
                <p className="text-muted-foreground mb-4">
                  The information we collect is used to:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">2.1. Primary Purposes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Provide and improve our services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Personalize user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Send important information about the service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Respond to your inquiries and requests</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">2.2. Secondary Purposes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Product analysis and development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Security and fraud prevention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Compliance with legal obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Sending marketing communications (with consent)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">3. Data Protection</h2>
                <p className="text-muted-foreground mb-4">
                  We implement strict security measures in accordance with industry standards to protect your data:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">3.1. Technical Security:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>End-to-end encryption for all sensitive data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Firewall and intrusion detection systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>24/7 security monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Regular encrypted data backups</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">3.2. Organizational Security:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Restricted access based on need-to-know principle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Regular security training for employees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Periodic security audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Security incident response procedures</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">4. Data Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We are committed to never selling or renting your personal data. Data is only shared in the following situations:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">4.1. Permitted Data Sharing:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>To comply with legal obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>With service providers who assist operations (under confidentiality agreements)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>In the event of mergers, acquisitions, or asset sales (with notice)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">4.2. Protections in Data Sharing:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Data processing agreements with third parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Security evaluation of business partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Restrictions on data usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to stop data sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">5. User Rights</h2>
                <p className="text-muted-foreground mb-4">
                  In accordance with applicable data protection regulations, you have the following rights:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">5.1. Fundamental Rights:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to access your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to request data deletion ("right to be forgotten")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to restrict data processing</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">5.2. Additional Rights:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to object to data processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to data portability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to withdraw consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Right to file a complaint with a supervisory authority</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">6. Policy Changes</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal obligations. We will notify you of material changes through:
                </p>
              </div>
            </div>

            <div className="ml-14">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Email to your registered address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Notification on our platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Update of the policy effective date</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Continued use of our services after such changes constitutes your acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8">
            <h2 className="text-2xl mb-6 text-center">Contact Us</h2>
            <p className="text-muted-foreground text-center mb-6">
              If you have questions about this privacy policy, please contact us:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border">
                <Mail className="w-5 h-5 text-[var(--brand-primary)]" />
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-center">support@responpintar.com</p>
              </div>

              <div className="flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border">
                <Phone className="w-5 h-5 text-[var(--brand-primary)]" />
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm">+62 821-8988-5080</p>
              </div>

              <div className="flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)]" />
                <p className="text-xs text-muted-foreground">Address</p>
                <p className="text-sm text-center">Plaza Aminta Jl. TB Simatupang Jakarta Selatan, 12160</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
