import { Link } from 'react-router-dom';
import { Headphones, Youtube, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  main: [
    { label: 'Episodes', href: '/episodes' },
    { label: 'Agents', href: '/agents' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Inquiries', href: '/inquiries' },
  ],
  secondary: [
    { label: 'Press Kit', href: '/press' },
  ],
};

const socialLinks = [
  { label: 'Spotify', href: 'https://open.spotify.com/show/2CM9ppsHkP6pzU2FII66HA', icon: Headphones },
  { label: 'YouTube', href: 'https://www.youtube.com/@TheMovingTarget', icon: Youtube },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/themovingtarget', icon: Linkedin },
  { label: 'X', href: 'https://x.com/themovingtarget', icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-lg font-bold tracking-tight text-foreground">
                The Moving Target
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-sm leading-relaxed">
              A monthly podcast about AI, agents, and the reality of building 
              useful automation. Hosted by Sidd Gupta and Avyay Misra.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.secondary.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Moving Target. Built with intention.
          </p>
          <p className="text-sm text-muted-foreground">
            Hosted by{' '}
            <span className="text-foreground">Sidd Gupta</span>
            {' & '}
            <span className="text-foreground">Avyay Misra</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
