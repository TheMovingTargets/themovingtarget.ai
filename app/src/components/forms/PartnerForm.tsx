import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function PartnerForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    partnershipType: '',
    goals: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build mailto URL with structured email content
    const subject = `Partnership Inquiry: ${formData.company}`;
    const body = `PARTNERSHIP INQUIRY FOR THE MOVING TARGET PODCAST

CONTACT INFORMATION
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}

PARTNERSHIP DETAILS
Type: ${formData.partnershipType || 'Not specified'}

GOALS
${formData.goals}
`;

    const mailtoUrl = `mailto:themovingtargetpodcast@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mail client
    window.location.href = mailtoUrl;

    // Navigate to success page after a short delay
    setTimeout(() => {
      navigate('/inquiries/success?type=partner');
    }, 500);
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
          <Label htmlFor="name">Name *</Label>
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
          <Label htmlFor="email">Email *</Label>
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
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name"
            required
            className="bg-secondary border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role *</Label>
          <Input
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Your role"
            required
            className="bg-secondary border-border"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="partnershipType">Partnership Type *</Label>
        <Select
          value={formData.partnershipType}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, partnershipType: value }))
          }
        >
          <SelectTrigger className="bg-secondary border-border">
            <SelectValue placeholder="Select partnership type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sponsorship">Sponsorship</SelectItem>
            <SelectItem value="content">Content Collaboration</SelectItem>
            <SelectItem value="integration">Product Integration</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="goals">Tell us about your goals *</Label>
        <Textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          placeholder="What are you hoping to achieve through this partnership?"
          required
          rows={4}
          className="bg-secondary border-border resize-none"
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
            Submit Inquiry
          </>
        )}
      </Button>

      <p className="text-sm text-muted-foreground">
        We'll respond within 48 hours.
      </p>
    </form>
  );
}
