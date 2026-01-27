import { Link, useSearchParams } from 'react-router-dom';
import { Check, ArrowRight, Mail, Clock, Podcast } from 'lucide-react';
import { Button } from '@/components/ui/button';

const successMessages: Record<string, { title: string; message: string; nextSteps: string[] }> = {
  guest: {
    title: 'Guest Suggestion Received',
    message: "Thanks for suggesting a guest! We've received your suggestion and will review it.",
    nextSteps: [
      "We'll review your suggestion within a week",
      "If it's a fit, we'll reach out to the guest",
      "You'll be cc'd on the intro email",
    ],
  },
  partner: {
    title: 'Partnership Inquiry Received',
    message: "Thanks for reaching out! We've received your partnership inquiry.",
    nextSteps: [
      "We'll review your inquiry within 48 hours",
      "Our team will reach out to schedule a call",
      "We'll send a partnership deck if relevant",
    ],
  },
  demo: {
    title: 'Demo Request Received',
    message: "Thanks for your interest in MARIA! We've received your demo request.",
    nextSteps: [
      "We'll review your request within 48 hours",
      "Our team will reach out to schedule a demo",
      "We'll send a brief pre-demo questionnaire",
    ],
  },
};

export function InquiriesSuccess() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'guest';
  const content = successMessages[type] || successMessages.guest;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-green-500" />
          </div>

          {/* Title */}
          <h1 className="text-h1 mb-4">{content.title}</h1>
          <p className="text-body text-muted-foreground mb-10">
            {content.message}
          </p>

          {/* Next Steps */}
          <div className="p-6 rounded-xl bg-card border border-border text-left mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">What happens next?</h2>
            </div>
            <ul className="space-y-3">
              {content.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-body-small text-muted-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
            <Mail className="w-4 h-4" />
            <span>
              Check your inbox for a confirmation email. Add{' '}
              <span className="text-foreground">hello@themovingtarget.com</span>{' '}
              to your contacts.
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
            >
              <Link to="/episodes">
                <Podcast className="w-4 h-4 mr-2" />
                Browse Episodes
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border"
            >
              <Link to="/">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
