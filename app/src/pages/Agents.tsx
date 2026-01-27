import { Link } from 'react-router-dom';
import { Bot, ArrowRight, Check, Users, BookOpen, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const howItWorks = [
  {
    step: '1',
    title: 'Connect',
    description: 'Integrate with your existing tools and data sources. No rip-and-replace.',
  },
  {
    step: '2',
    title: 'Configure',
    description: 'Set up your workflows, preferences, and team structure.',
  },
  {
    step: '3',
    title: 'Coordinate',
    description: 'MARIA manages the flow—training, updates, handoffs, and follow-ups.',
  },
];

const useCases = [
  {
    icon: Users,
    title: 'Hospitality Operations',
    description: 'Staff scheduling, shift handoffs, guest communications, and task coordination.',
  },
  {
    icon: BookOpen,
    title: 'Onboarding & Training',
    description: 'New hire checklists, role-based training paths, and progress tracking.',
  },
  {
    icon: MessageSquare,
    title: 'Internal Communications',
    description: 'Team updates, shift changes, alerts, and knowledge sharing.',
  },
];

const outcomes = [
  'Time saved on coordination and follow-ups',
  'Fewer missed handoffs and dropped tasks',
  'Better training completion and retention',
  'Clearer accountability across teams',
];

export function Agents() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <p className="text-caption text-primary mb-4">WHAT WE BUILD</p>
          <h1 className="text-h1 mb-6">Agents that actually work.</h1>
          <p className="text-body-large text-muted-foreground">
            No demos that break in production. No vaporware. Just practical 
            automation that saves time and reduces friction.
          </p>
        </div>

        {/* MARIA Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="aspect-square max-w-lg rounded-2xl bg-gradient-to-br from-secondary via-muted to-background border border-border flex items-center justify-center">
              <div className="text-center p-12">
                <Bot className="w-32 h-32 text-primary mx-auto mb-8" />
                <div className="text-8xl font-bold text-foreground tracking-tighter">
                  M
                </div>
                <p className="text-caption text-muted-foreground mt-6">
                  MULTI-ROLE INTELLIGENT ASSISTANT
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-h2 mb-4">Meet MARIA</h2>
            <p className="text-body text-muted-foreground mb-6">
              Your team's coordination layer.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              MARIA handles training, communications, and operational handoffs 
              so nothing falls through the cracks. She knows who's doing what, 
              who's new, who needs support, and what needs follow-up.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              Built for hospitality. Ready for more.
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
            >
              <Link to="/inquiries?tab=demo">
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-h2 mb-10 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-h4 mb-3">{item.title}</h3>
                <p className="text-body-small text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-24">
          <h2 className="text-h2 mb-10">Example Workflows</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <useCase.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-h4 mb-3">{useCase.title}</h3>
                <p className="text-body-small text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-h2 mb-6">Real Outcomes</h2>
            <ul className="space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body text-muted-foreground">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border">
            <Calendar className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-h4 mb-3">Ready to see MARIA in action?</h3>
            <p className="text-body-small text-muted-foreground mb-6">
              Schedule a demo and we'll show you how MARIA can help your team 
              coordinate more effectively.
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
            >
              <Link to="/inquiries?tab=demo">
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Credible Note */}
        <div className="p-6 rounded-xl bg-secondary/50 border border-border">
          <p className="text-body-small text-muted-foreground">
            <strong className="text-foreground">Note:</strong> We're builders, 
            not salespeople. MARIA is a real system we use ourselves. We'll be 
            honest about what it can and can't do, and whether it's a fit for 
            your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
