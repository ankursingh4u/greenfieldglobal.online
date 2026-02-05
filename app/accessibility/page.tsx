export default function AccessibilityPage() {
    return (
        <div className="container py-20 px-4 md:px-8 mx-auto">
            <div className="max-w-3xl mx-auto prose prose-gray">
                <h1 className="text-3xl font-bold mb-2">Accessibility Statement – Greenfield Global</h1>
                <p className="text-sm text-muted-foreground mb-8">Last Updated: January 16, 2026</p>

                <p className="mb-4">
                    Greenfield Global is committed to ensuring digital accessibility for people with disabilities. We continually work to improve the user experience for everyone and apply relevant accessibility standards.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Our Commitment</h2>
                <p className="mb-2">We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our efforts include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Providing text alternatives for non-text content</li>
                    <li>Ensuring content is navigable via keyboard</li>
                    <li>Using sufficient color contrast ratios</li>
                    <li>Making content readable and understandable</li>
                    <li>Ensuring compatibility with assistive technologies</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Accessibility Features</h2>
                <p className="mb-2">Greenfield Global includes the following accessibility features:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Semantic HTML structure for screen reader compatibility</li>
                    <li>Descriptive link text and headings</li>
                    <li>Responsive design that works on various devices</li>
                    <li>Focus indicators for keyboard navigation</li>
                    <li>Alt text for images where applicable</li>
                    <li>Consistent and predictable navigation</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Assistive Technology Compatibility</h2>
                <p className="mb-2">Our website is designed to be compatible with:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                    <li>Screen magnification software</li>
                    <li>Speech recognition software</li>
                    <li>Keyboard-only navigation</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Known Limitations</h2>
                <p className="mb-4">
                    While we strive for full accessibility, some third-party content or older pages may not meet all accessibility standards. We are actively working to address these issues.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Browser Compatibility</h2>
                <p className="mb-2">For the best accessible experience, we recommend using:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Google Chrome (latest version)</li>
                    <li>Mozilla Firefox (latest version)</li>
                    <li>Microsoft Edge (latest version)</li>
                    <li>Apple Safari (latest version)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Feedback and Contact</h2>
                <p className="mb-4">
                    We welcome your feedback on the accessibility of Greenfield Global. If you encounter accessibility barriers or have suggestions for improvement, please contact us through our contact page.
                </p>
                <p className="mb-2">When contacting us, please include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>The web address (URL) of the content</li>
                    <li>A description of the issue encountered</li>
                    <li>The assistive technology used (if applicable)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Continuous Improvement</h2>
                <p className="mb-4">
                    We regularly review our website for accessibility and make improvements as needed. This statement will be updated to reflect our ongoing efforts.
                </p>
            </div>
        </div>
    );
}
