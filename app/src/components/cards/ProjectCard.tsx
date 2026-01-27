import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import { formatDate } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-card rounded-xl border border-border p-6 card-hover h-full flex flex-col"
    >
      {/* Meta */}
      <div className="flex items-center gap-3 mb-4">
        <Badge variant="outline" className="text-xs font-normal">
          {project.category}
        </Badge>
        <span className="text-caption text-muted-foreground">
          {formatDate(project.date)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-h4 mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Excerpt */}
      <p className="text-body-small text-muted-foreground line-clamp-3 mb-4 flex-1">
        {project.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors pt-4 border-t border-border">
        Read
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
