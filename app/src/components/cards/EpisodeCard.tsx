import { Link } from 'react-router-dom';
import { Play, ExternalLink } from 'lucide-react';
import type { Episode } from '@/types';
import { formatDate } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface EpisodeCardProps {
  episode: Episode;
  variant?: 'default' | 'compact' | 'featured';
}

export function EpisodeCard({ episode, variant = 'default' }: EpisodeCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        to={`/episodes/${episode.slug}`}
        className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-hover"
      >
        <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
          {episode.thumbnail ? (
            <img
              src={episode.thumbnail}
              alt={episode.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <Play className="w-6 h-6 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-caption text-muted-foreground mb-1">
            Ep. {episode.episodeNumber} | {formatDate(episode.publishDate)}
          </p>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {episode.title}
          </h3>
          {episode.guest.name !== 'No Guest' && (
            <p className="text-sm text-muted-foreground mt-1">
              with {episode.guest.name}
            </p>
          )}
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Embed Player */}
        <div className="aspect-video bg-card rounded-xl border border-border overflow-hidden">
          <iframe
            src={`https://open.spotify.com/embed/episode/${episode.spotifyUrl.split('/').pop()}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`${episode.title} - Spotify Embed`}
            className="w-full h-full"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-caption text-primary mb-3">LATEST EPISODE</p>
          <h2 className="text-h3 mb-3">
            <Link
              to={`/episodes/${episode.slug}`}
              className="hover:text-primary transition-colors"
            >
              {episode.title}
            </Link>
          </h2>
          <p className="text-muted-foreground mb-4">
            {episode.guest.name !== 'No Guest' ? (
              <>
                with <span className="text-foreground">{episode.guest.name}</span>
                {' | '}
              </>
            ) : null}
            {formatDate(episode.publishDate)}
          </p>
          <p className="text-body-small text-muted-foreground mb-6 line-clamp-3">
            {episode.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={episode.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Watch on YouTube
            </a>
            <Link
              to="/episodes"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
            >
              All Episodes →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/episodes/${episode.slug}`}
      className="group block bg-card rounded-xl border border-border overflow-hidden card-hover"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        {episode.thumbnail ? (
          <img
            src={episode.thumbnail}
            alt={episode.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Play className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-caption text-muted-foreground mb-2">
          Ep. {episode.episodeNumber} | {formatDate(episode.publishDate)}
        </p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {episode.title}
        </h3>
        {episode.guest.name !== 'No Guest' && (
          <p className="text-sm text-muted-foreground mb-3">
            with {episode.guest.name}
          </p>
        )}
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {episode.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
          <a
            href={episode.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            Spotify
          </a>
          <a
            href={episode.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            YouTube
          </a>
        </div>
      </div>
    </Link>
  );
}
