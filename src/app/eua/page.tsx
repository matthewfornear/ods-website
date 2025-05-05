import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EUA() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />
      <main className="main-container relative z-10 flex-grow pt-20 px-4 max-w-2xl mx-auto w-full fade-up">
        <h1 className="text-4xl font-bold mb-8 text-center">End User Agreement (EUA)</h1>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p>This End User Agreement (EUA) is a legally binding contract between Omnidata Solutions LLC and any individual or business entity ("User") accessing or using its services. Omnidata Solutions LLC, incorporated in Pennsylvania, collects and aggregates publicly available data and optionally integrates user-provided private data (via OAuth or API access) to generate actionable business insights. This EUA establishes User rights and responsibilities, defines Omnidata Solutions LLC's legal limitations, and secures user consent for data use.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Applicability</h2>
          <p>This EUA applies to all Users, whether individuals (B2C) or businesses (B2B). It governs access to Omnidata Solutions LLC's website, services, APIs, and platforms. By accessing or using the service, the User agrees to the terms of this EUA. Clickwrap consent (an explicit "I agree" button) is required to enforce this agreement.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Consent to Data Use</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">Public Data</h3>
          <p>By using the services of Omnidata Solutions LLC, the User consents to the collection, processing, and aggregation of publicly available data for business intelligence and analytical purposes. This may include information from websites, directories, business listings, social media, or any other data publicly accessible online.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Private Data via Opt-in</h3>
          <p>If the User connects third-party accounts or provides login credentials through OAuth or other login methods, the User expressly authorizes Omnidata Solutions LLC to access, store, and use all authorized data provided by such accounts. This includes, but is not limited to, name, email, contacts, calendars, uploaded content, usage statistics, and any metadata permitted by the third-party provider.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention and Deletion</h2>
          <p>Omnidata Solutions LLC retains user data indefinitely unless the User submits a verifiable request for deletion. Upon receiving such a request, Omnidata Solutions LLC will delete the data within a reasonable timeframe as required by applicable law.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer of Warranties</h2>
          <p>The service is provided "AS IS" and "AS AVAILABLE," without warranties of any kind. Omnidata Solutions LLC disclaims all implied and statutory warranties, including but not limited to merchantability, fitness for a particular purpose, accuracy of data, non-infringement, and uninterrupted availability.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Omnidata Solutions LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, service interruptions, or business damages, even if advised of the possibility of such damages. Exceptions to this clause include liability for gross negligence, willful misconduct, or other liabilities that cannot be excluded under applicable law.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Indemnification</h2>
          <p>The User agrees to indemnify, defend, and hold harmless Omnidata Solutions LLC, its directors, officers, employees, and agents from any claims, damages, liabilities, costs, or expenses (including attorneys' fees) arising from: (a) User's breach of this EUA, (b) User's violation of applicable laws, or (c) misuse of the services.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Account Suspension and Termination</h2>
          <p>Omnidata Solutions LLC reserves the right to suspend or terminate any User account for violations of this EUA, applicable law, or misuse of the services. Upon termination, all rights to use the service are revoked immediately. Omnidata Solutions LLC assumes no liability for any resulting loss.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law and Jurisdiction</h2>
          <p>This EUA is governed by the laws of the Commonwealth of Pennsylvania. Any disputes will be resolved in the state or federal courts located in Pennsylvania.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Dispute Resolution and Arbitration</h2>
          <p>All disputes arising under this EUA shall be resolved through binding arbitration in Philadelphia, Pennsylvania, under the rules of the American Arbitration Association. The User waives the right to a jury trial and any class-action claims. This clause must be accepted through a clear and distinct clickwrap mechanism.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Additional Provisions</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li><b>Third-Party Disclaimers:</b> Omnidata Solutions LLC disclaims responsibility for third-party content accessed through its services.</li>
            <li><b>Privacy Policy:</b> Use of the service is also governed by the Omnidata Solutions LLC Privacy Policy.</li>
            <li><b>Modifications:</b> Omnidata Solutions LLC reserves the right to modify this EUA at any time. Continued use after notification constitutes acceptance.</li>
            <li><b>Entire Agreement:</b> This EUA, together with any linked policies, represents the entire agreement between the parties.</li>
            <li><b>Severability:</b> If any provision is found invalid, the remaining terms will continue in effect.</li>
            <li><b>Force Majeure:</b> Omnidata Solutions LLC is not liable for service failures due to causes beyond its control.</li>
            <li><b>Assignability:</b> Omnidata Solutions LLC may assign its rights under this EUA. The User may not assign without prior written consent.</li>
          </ul>

          <p className="mt-8">By using the services of Omnidata Solutions LLC, you acknowledge that you have read, understood, and agreed to all terms of this End User Agreement.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 