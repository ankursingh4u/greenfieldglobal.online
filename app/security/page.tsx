export default function SecurityPage() {
    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            <div className="max-w-3xl mx-auto prose prose-gray">
                <h1 className="text-3xl font-bold mb-2">Security Policy – Greenfield Global</h1>
                <p className="text-sm text-muted-foreground mb-8">Last Updated: January 16, 2026</p>

                <p className="mb-4">
                    At Greenfield Global, we take security seriously. This page outlines our commitment to protecting your data and ensuring a safe browsing experience.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data Protection</h2>
                <p className="mb-2">We implement industry-standard security measures including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>HTTPS encryption for all data transmission</li>
                    <li>Secure hosting infrastructure</li>
                    <li>Regular security updates and patches</li>
                    <li>Limited data collection practices</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. No Account System</h2>
                <p className="mb-4">
                    Greenfield Global does not require user accounts or store sensitive personal information such as passwords, payment details, or identity documents. This significantly reduces security risks for our visitors.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Links</h2>
                <p className="mb-2">Our website contains links to external websites and affiliate partners. Please note:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>We are not responsible for the security practices of third-party sites</li>
                    <li>We recommend reviewing privacy and security policies before providing personal information to any external site</li>
                    <li>All affiliate links are clearly disclosed</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookie Security</h2>
                <p className="mb-4">
                    We use cookies only for essential functionality and analytics. No sensitive data is stored in cookies. You can manage cookie preferences through your browser settings or our cookie consent banner.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Safe Browsing</h2>
                <p className="mb-2">To protect yourself while browsing:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Verify you are on greenfieldglobal.online (check the URL)</li>
                    <li>Look for the padlock icon indicating HTTPS connection</li>
                    <li>Be cautious of phishing attempts impersonating our website</li>
                    <li>Keep your browser and devices updated</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Reporting Security Issues</h2>
                <p className="mb-4">
                    If you discover a security vulnerability or suspicious activity related to our website, please contact us immediately through our contact page. We take all security reports seriously and will investigate promptly.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. No Malicious Practices</h2>
                <p className="mb-2">Greenfield Global does not engage in:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Pop-ups, pop-unders, or exit-intent traps</li>
                    <li>Hidden redirects or deceptive navigation</li>
                    <li>Cookie stuffing or fraudulent tracking</li>
                    <li>Malware distribution or phishing</li>
                    <li>Spam or unsolicited communications</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Updates to This Policy</h2>
                <p className="mb-4">
                    This Security Policy may be updated periodically to reflect changes in our practices or legal requirements. Changes will be posted on this page with an updated revision date.
                </p>
            </div>
        </div>
    );
}
