import { FileText, Scale, DollarSign, Award, AlertCircle, XCircle, RefreshCw, Gavel, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Scale className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Terms and Conditions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl mb-4">
            Terms and{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Conditions
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
                <h2 className="text-2xl mb-2">1. General Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using the ResponPintar service ("Service"), you agree to be bound by these terms and conditions ("Terms"). These Terms constitute a legally binding agreement between you and PT ResponPintar Indonesia ("We"). If you do not agree with these Terms, please do not use our Service.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">2. Definitions</h2>
                <p className="text-muted-foreground mb-4">
                  In these Terms, the following terms have the meanings as defined:
                </p>
              </div>
            </div>

            <div className="ml-14 space-y-3">
              <div className="text-muted-foreground">
                <span className="text-foreground">"Service"</span> refers to the ResponPintar platform, including all features, functionality, and user interfaces
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground">"User"</span> is an individual or entity that has registered for and uses the Service
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground">"Content"</span> includes all materials, data, text, images, video, audio, or other content created, uploaded, or transmitted through the Service
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground">"Customer Data"</span> is information processed or stored by the User through the Service
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground">"Intellectual Property Rights"</span> includes copyrights, patents, trademarks, trade secrets, and other proprietary rights
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">3. Use of Service</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">3.1. Usage Requirements:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>You must be at least 18 years old or the legal age in your jurisdiction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Provide accurate and complete information during registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Be responsible for all activities under your account</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">3.2. Prohibited Activities:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Using the Service for illegal or unauthorized purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Infringing on the intellectual property rights of others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Uploading harmful or unlawful content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Attempting to gain unauthorized access to the Service</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">4. Subscription and Payment</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">4.1. Fees and Payment:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Payment is made in advance for the subscription period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>All fees are in Rupiah and exclude taxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Payments are processed through official payment gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>You are responsible for all applicable fees and taxes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">4.2. Changes and Cancellation:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>We may change prices with 30 days' notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Cancellation can be done before the next billing period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Refunds are subject to the applicable refund policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>No refunds for the current active period</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">5. Intellectual Property Rights</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">5.1. Ownership:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>All Intellectual Property Rights in the Service belong to ResponPintar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Users retain rights to their Customer Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Uploaded content remains the property of the uploader</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">5.2. License:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>We grant a limited, non-exclusive license to use the Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>You grant us a license to process Customer Data as required by the Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>The license terminates when use of the Service is discontinued</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">6. Limitation of Liability</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">6.1. General Limitations:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>The Service is provided "as is" without any warranties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>We are not liable for indirect damages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Our total liability is limited to the amount you have paid</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">6.2. Exclusions:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Data loss due to User negligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Service disruptions beyond our control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Damage caused by User devices or connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Losses resulting from violation of these Terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">7. Termination of Service</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">7.1. Termination by Us:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Violation of terms of use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Failure to pay service fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Engaging in suspicious or harmful activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Upon request from competent authorities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">7.2. Termination by User:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>May terminate the service at any time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Must provide written notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Responsible for backing up Customer Data</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">8. Changes to Terms</h2>
              </div>
            </div>

            <div className="ml-14">
              <h3 className="text-lg mb-2">8.1. Change Process:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>We reserve the right to modify these Terms at any time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Material changes will be notified 30 days in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Notification via email or platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Continued use constitutes acceptance of the changes</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Gavel className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">9. Governing Law</h2>
              </div>
            </div>

            <div className="ml-14">
              <h3 className="text-lg mb-2">9.1. Jurisdiction:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>These Terms are governed by the laws of the Republic of Indonesia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Any dispute shall first be resolved through mediation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>If mediation fails, disputes shall be resolved at the South Jakarta District Court</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>You agree to submit to the exclusive jurisdiction of said court</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8">
            <h2 className="text-2xl mb-6 text-center">10. Contact</h2>
            <p className="text-muted-foreground text-center mb-6">
              For questions or clarification about these Terms, please contact us at:
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
                <p className="text-sm">+62811-552-477</p>
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
