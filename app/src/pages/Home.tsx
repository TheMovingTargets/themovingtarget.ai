import { Link } from 'react-router-dom';
import { Headphones, Briefcase, ArrowRight, Bot, Workflow, BookOpen, Lightbulb, Hammer, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EpisodeCard } from '@/components/cards/EpisodeCard';
import { getAllEpisodes, getLatestEpisode } from '@/lib/data';

const pillars = [
  {
    icon: Bot,
    title: 'Agentic Systems',
    description: 'LLMs, RAG, context layers, and workflow automation. What\'s working, what\'s fragile, and what\'s next.',
  },
  {
    icon: Workflow,
    title: 'Operational AI',
    description: 'Real deployment stories. The failures, the wins, and the lessons learned building for production.',
  },
  {
    icon: Briefcase,
    title: 'Industry Deep Dives',
    description: 'Hospitality, services, and knowledge work. How AI is reshaping operations on the ground.',
  },
  {
    icon: Hammer,
    title: 'Tooling & Stack',
    description: 'What\'s in our toolkit, what we\'ve abandoned, and what we\'re watching.',
  },
  {
    icon: Radio,
    title: 'Future Signals',
    description: 'What\'s coming next, what to ignore, and how to stay oriented as the target moves.',
  },
  {
    icon: BookOpen,
    title: 'Building in Public',
    description: 'MARIA development, experiments, and honest updates from the build process.',
  },
];

const testimonials = [
  {
    quote: 'The only AI podcast where I feel like I\'m in the room with people actually building things.',
    author: 'Alex Rivera',
    role: 'Engineering Lead',
  },
  {
    quote: 'No fluff, no hype cycles. Just practical insights I can use in my own work.',
    author: 'Maya Patel',
    role: 'Product Manager',
  },
  {
    quote: 'Sidd and Avyay ask the questions I wish I could ask.',
    author: 'Jordan Chen',
    role: 'Startup Founder',
  },
];

export function Home() {
  const latestEpisode = getLatestEpisode();
  const recentEpisodes = getAllEpisodes().slice(1, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background streak effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px motion-streak" />
          <div className="absolute top-1/3 left-0 right-0 h-px motion-streak opacity-50" />
          <div className="absolute top-1/2 left-0 right-0 h-px motion-streak opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6 text-foreground">
              THE MOVING
              <br />
              <span className="gradient-text">TARGET</span>
            </h1>
            <p className="text-body-large text-muted-foreground mb-8 max-w-xl">
              A monthly podcast about AI, agents, and the reality of building 
              useful automation. Hosted by Sidd Gupta and Avyay Misra.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
              >
                <Link to="/episodes">
                  <Headphones className="w-5 h-5 mr-2" />
                  Listen to Latest Episode
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary"
              >
                <Link to="/inquiries">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Work With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode Section */}
      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <EpisodeCard episode={latestEpisode} variant="featured" />
        </div>
      </section>

      {/* Recent Episodes Section */}
      <section className="section-padding border-t border-border bg-card/30">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-h2">Recent Episodes</h2>
            <Link
              to="/episodes"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Talk About Section */}
      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <h2 className="text-h2 mb-4">What We Talk About</h2>
          <p className="text-body text-muted-foreground mb-12 max-w-2xl">
            Six pillars that guide our conversations and our work.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <pillar.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-h4 mb-2">{pillar.title}</h3>
                <p className="text-body-small text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARIA Feature Section */}
      <section className="section-padding border-t border-border bg-card/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square max-w-md mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <Bot className="w-24 h-24 text-primary mx-auto mb-6" />
                  <div className="text-6xl font-bold text-foreground">M</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-caption text-primary mb-3">WHAT WE BUILD</p>
              <h2 className="text-h2 mb-4">Meet MARIA</h2>
              <p className="text-body text-muted-foreground mb-6">
                An agent that coordinates teams, training, and operations. 
                MARIA handles the flow (onboarding, updates, handoffs) so
                nothing falls through the cracks.
              </p>
              <p className="text-body text-muted-foreground mb-8">
                Built for hospitality. Ready for more.
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
              >
                <Link to="/agents">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <h2 className="text-h2 mb-12">What Listeners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="space-y-4">
                <blockquote className="text-body text-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding border-t border-border bg-card/30">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <Lightbulb className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-h2 mb-4">Get Updates</h2>
            <p className="text-body text-muted-foreground mb-8">
              New episodes, project releases, and insights. 
              No spam. Unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your inbox. No sharing, no selling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
