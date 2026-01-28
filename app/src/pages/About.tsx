import { Link } from 'react-router-dom';
import { Linkedin, Twitter, ArrowRight, Target, Heart, Wrench, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const hosts = [
  {
    name: 'Sidd Gupta',
    role: 'Co-Host & Builder',
    bio: 'Sidd brings deep technical expertise in AI systems and agent architectures. With years of experience building production-grade automation, he focuses on the practical reality of deploying LLMs and agentic workflows. He leads the technical development of MARIA.',
    links: {
      linkedin: 'https://linkedin.com/in/siddgupta',
      twitter: 'https://x.com/siddgupta',
    },
  },
  {
    name: 'Avyay Misra',
    role: 'Co-Host & Operator',
    bio: 'Avyay brings operational expertise from the hospitality and service industries. He understands the challenges of running teams and coordinating complex operations. His focus is on building AI that actually helps people on the ground do their jobs better.',
    links: {
      linkedin: 'https://linkedin.com/in/avyaymisra',
      twitter: 'https://x.com/avyaymisra',
    },
  },
];

const values = [
  {
    icon: Wrench,
    title: 'Building useful, real-world AI',
    description: 'Not demos. Production systems that solve real problems.',
  },
  {
    icon: Heart,
    title: 'Honest conversations',
    description: "About what works, what doesn't, and why.",
  },
  {
    icon: Target,
    title: 'Practical outcomes',
    description: 'Time saved, friction reduced, teams supported.',
  },
  {
    icon: Users,
    title: 'Helping operators',
    description: 'The people on the ground making decisions every day.',
  },
];

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Story Section */}
        <div className="max-w-3xl mb-24">
          <p className="text-caption text-primary mb-4">THE STORY</p>
          <h1 className="text-h1 mb-8">Why We Started This</h1>
          <div className="space-y-6 text-body text-muted-foreground">
            <p>
              The Moving Target started with a simple observation: everyone talks 
              about AI, but few discuss what it's actually like to build and deploy.
            </p>
            <p>
              We wanted to change that.
            </p>
            <p>
              Sidd and Avyay started recording monthly conversations about what
              they're seeing in the field: what's working, what's overhyped, and
              what operators actually need to know. No script, no agenda, just
              two builders talking shop.
            </p>
            <p>
              The podcast grew. So did the work. Today, The Moving Target is both
              a show and a studio, where we record honest conversations and build
              practical tools like MARIA.
            </p>
            <p className="text-foreground font-medium">
              The target keeps moving. We're here to help you track it.
            </p>
          </div>
        </div>

        {/* Hosts Section */}
        <div className="mb-24">
          <h2 className="text-h2 mb-10">Your Hosts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hosts.map((host) => (
              <div
                key={host.name}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    {host.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-h3 mb-1">{host.name}</h3>
                <p className="text-sm text-primary mb-4">{host.role}</p>
                <p className="text-body-small text-muted-foreground mb-6">
                  {host.bio}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={host.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${host.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={host.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${host.name} X`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Care About */}
        <div className="mb-24">
          <h2 className="text-h2 mb-10">What We Care About</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-h4 mb-2">{value.title}</h3>
                <p className="text-body-small text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 md:p-12 rounded-2xl bg-card border border-border text-center">
          <h2 className="text-h3 mb-4">Want to connect?</h2>
          <p className="text-body text-muted-foreground mb-8 max-w-lg mx-auto">
            Whether you want to suggest a guest, explore a partnership, or just
            say hello, we'd love to hear from you.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
          >
            <Link to="/inquiries">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
