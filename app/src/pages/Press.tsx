import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ExternalLink, Download, Headphones, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const shortBlurb = `The Moving Target is a monthly podcast where hosts Sidd Gupta and Avyay Misra explore the practical reality of AI, automation, and agentic systems.`;

const longBlurb = `The Moving Target is a monthly podcast where hosts Sidd Gupta and Avyay Misra explore the practical reality of AI, automation, and agentic systems. No hype, just honest conversations about what's working and what isn't. Beyond the podcast, they build MARIA—an agent that coordinates teams, training, and operations for hospitality and service-heavy businesses.`;

const quickFacts = [
  'Monthly podcast on AI, agents, and automation',
  'Hosted by Sidd Gupta and Avyay Misra',
  'Available on Spotify and YouTube',
  'Building MARIA: an operational agent for teams',
  'Focus: hospitality and service-heavy businesses',
];

const hostBios = [
  {
    name: 'Sidd Gupta',
    bio: 'Sidd brings deep technical expertise in AI systems and agent architectures. With years of experience building production-grade automation, he focuses on the practical reality of deploying LLMs and agentic workflows. He leads the technical development of MARIA.',
  },
  {
    name: 'Avyay Misra',
    bio: 'Avyay brings operational expertise from the hospitality and service industries. He understands the challenges of running teams and coordinating complex operations. His focus is on building AI that actually helps people on the ground do their jobs better.',
  },
];

export function Press() {
  const [copiedShort, setCopiedShort] = useState(false);
  const [copiedLong, setCopiedLong] = useState(false);

  const copyToClipboard = (text: string, type: 'short' | 'long') => {
    navigator.clipboard.writeText(text);
    if (type === 'short') {
      setCopiedShort(true);
      setTimeout(() => setCopiedShort(false), 2000);
    } else {
      setCopiedLong(true);
      setTimeout(() => setCopiedLong(false), 2000);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-h1 mb-4">Press Kit</h1>
          <p className="text-body text-muted-foreground">
            Everything you need to feature or partner with us.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="mb-16">
          <h2 className="text-h3 mb-6">At a Glance</h2>
          <div className="p-6 rounded-xl bg-card border border-border">
            <ul className="space-y-3">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-body text-muted-foreground">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copy-Paste Blurbs */}
        <div className="mb-16">
          <h2 className="text-h3 mb-6">Copy-Paste Blurbs</h2>
          <div className="space-y-6">
            {/* Short Version */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Short Version
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(shortBlurb, 'short')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {copiedShort ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <p className="text-body-small text-muted-foreground">
                {shortBlurb}
              </p>
            </div>

            {/* Long Version */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Long Version
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(longBlurb, 'long')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {copiedLong ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <p className="text-body-small text-muted-foreground">
                {longBlurb}
              </p>
            </div>
          </div>
        </div>

        {/* Host Bios */}
        <div className="mb-16">
          <h2 className="text-h3 mb-6">Host Bios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hostBios.map((host) => (
              <div
                key={host.name}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-h4 mb-3">{host.name}</h3>
                <p className="text-body-small text-muted-foreground">
                  {host.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Assets */}
        <div className="mb-16">
          <h2 className="text-h3 mb-6">Brand Assets</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Logo Pack', format: 'PNG, SVG' },
              { label: 'Host Headshots', format: 'PNG' },
              { label: 'Show Artwork', format: 'PNG' },
              { label: 'Brand Guidelines', format: 'PDF' },
            ].map((asset) => (
              <div
                key={asset.label}
                className="p-4 rounded-xl bg-card border border-border flex flex-col"
              >
                <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  {asset.label}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {asset.format}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto border-border"
                  disabled
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Assets are placeholders. Contact us for high-resolution files.
          </p>
        </div>

        {/* Links */}
        <div className="mb-16">
          <h2 className="text-h3 mb-6">Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://open.spotify.com/show/2CM9ppsHkP6pzU2FII66HA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Headphones className="w-4 h-4" />
              Spotify
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.youtube.com/@TheMovingTarget"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF0000] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Youtube className="w-4 h-4" />
              YouTube
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h2 className="text-h4 mb-4">Contact</h2>
          <p className="text-body-small text-muted-foreground mb-4">
            For press inquiries, partnership discussions, or asset requests:
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:themovingtargetpodcast@gmail.com"
              className="text-primary hover:underline"
            >
              themovingtargetpodcast@gmail.com
            </a>
            <span className="text-muted-foreground">|</span>
            <Link
              to="/inquiries"
              className="text-primary hover:underline"
            >
              Inquiries Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
