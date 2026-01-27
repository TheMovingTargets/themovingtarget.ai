import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Share2, Linkedin, Twitter, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { getProjectBySlug, formatDate, getAllProjects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ProjectCard } from '@/components/cards/ProjectCard';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = getAllProjects()
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.excerpt,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline">{project.category}</Badge>
            <span className="text-caption text-muted-foreground">
              {formatDate(project.date)}
            </span>
          </div>
          <h1 className="text-h1 mb-4">{project.title}</h1>
          <p className="text-body text-muted-foreground max-w-2xl">
            {project.excerpt}
          </p>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-3 mb-12">
          <button
            onClick={handleCopyLink}
            className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Copy link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              project.title
            )}&url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Share on X"
          >
            <Twitter className="w-4 h-4" />
          </a>
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleShare}
              className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-invert prose-lg max-w-none">
              <div
                className="text-body text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: project.content
                    .replace(/# (.*)/, '')
                    .replace(/\n/g, '<br />')
                    .replace(/## (.*)/g, '<h2 class="text-h3 text-foreground mt-10 mb-4">$1</h2>')
                    .replace(/### (.*)/g, '<h3 class="text-h4 text-foreground mt-8 mb-3">$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(
                      /- (.*)/g,
                      '<li class="ml-4 mb-2">$1</li>'
                    ),
                }}
              />
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-10 border-t border-border">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Want to learn more?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check out our podcast episodes for deeper discussions on these topics.
              </p>
              <Link
                to="/episodes"
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
              >
                Browse Episodes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 pt-10 border-t border-border">
            <h2 className="text-h3 mb-8">Related</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
