import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function GuestForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guestName: '',
    guestRole: '',
    reason: '',
    links: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual Formspree integration)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    navigate('/inquiries/success?type=guest');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-secondary border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Your Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="bg-secondary border-border"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="guestName">Guest Name *</Label>
          <Input
            id="guestName"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            placeholder="Who should we have on?"
            required
            className="bg-secondary border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guestRole">Guest Role/Title *</Label>
          <Input
            id="guestRole"
            name="guestRole"
            value={formData.guestRole}
            onChange={handleChange}
            placeholder="e.g., CTO at Company"
            required
            className="bg-secondary border-border"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason">Why they'd be great *</Label>
        <Textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Tell us what makes them a great fit for the show..."
          required
          rows={4}
          className="bg-secondary border-border resize-none"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="links">Links (LinkedIn, website, etc.)</Label>
        <Input
          id="links"
          name="links"
          value={formData.links}
          onChange={handleChange}
          placeholder="https://..."
          className="bg-secondary border-border"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
      >
        {isSubmitting ? (
          'Submitting...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Submit Suggestion
          </>
        )}
      </Button>

      <p className="text-sm text-muted-foreground">
        We review all suggestions and reach out if it's a fit.
      </p>
    </form>
  );
}
