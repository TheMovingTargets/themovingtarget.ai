import { useParams, Link, Navigate } from 'react-router-dom';
import { ExternalLink, ChevronDown, ChevronUp, UserPlus, Handshake } from 'lucide-react';
import { getEpisodeBySlug, formatDate, getYouTubeVideoId } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function EpisodeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const episode = slug ? getEpisodeBySlug(slug) : undefined;
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);

  if (!episode) {
    return <Navigate to="/episodes" replace />;
  }

  const youtubeVideoId = getYouTubeVideoId(episode.youtubeUrl);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link
            to="/episodes"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← All Episodes
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-caption text-primary mb-3">
            EPISODE {episode.episodeNumber}
          </p>
          <h1 className="text-h1 mb-4">{episode.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
            {episode.guest.name !== 'No Guest' && (
              <>
                <span>with {episode.guest.name}</span>
                <span>•</span>
              </>
            )}
            <span>{formatDate(episode.publishDate)}</span>
            <span>•</span>
            <span>{episode.duration}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {episode.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Embeds */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Spotify Embed */}
          <div className="aspect-[4/3] bg-card rounded-xl border border-border overflow-hidden">
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

          {/* YouTube Embed */}
          {youtubeVideoId && (
            <div className="aspect-[4/3] bg-card rounded-xl border border-border overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title={`${episode.title} - YouTube Embed`}
                className="w-full h-full"
              />
            </div>
          )}
        </div>

        {/* External Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={episode.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            Listen on Spotify
          </a>
          <a
            href={episode.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF0000] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            Watch on YouTube
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <section>
              <h2 className="text-h4 mb-4">About This Episode</h2>
              <p className="text-body text-muted-foreground">
                {episode.description}
              </p>
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="text-h4 mb-4">5 Key Takeaways</h2>
              <ul className="space-y-3">
                {episode.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-body text-muted-foreground">
                      {takeaway}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Show Notes */}
            <section>
              <h2 className="text-h4 mb-4">Show Notes</h2>
              <div className="space-y-2">
                {episode.showNotes.map((note, index) => (
                  <div
                    key={index}
                    className="flex gap-4 py-2 border-b border-border last:border-0"
                  >
                    <span className="text-sm font-mono text-primary w-14 flex-shrink-0">
                      {note.time}
                    </span>
                    <span className="text-body-small text-muted-foreground">
                      {note.topic}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Transcript */}
            {episode.transcript && (
              <section>
                <button
                  onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
                  className="flex items-center justify-between w-full py-3 border-b border-border"
                >
                  <h2 className="text-h4">Transcript</h2>
                  {isTranscriptOpen ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {isTranscriptOpen && (
                  <div className="pt-4">
                    <div className="p-4 bg-secondary rounded-lg max-h-96 overflow-y-auto custom-scrollbar">
                      <p className="text-body-small text-muted-foreground whitespace-pre-wrap">
                        {episode.transcript}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Links Mentioned */}
            {episode.links.length > 0 && (
              <section>
                <h2 className="text-h4 mb-4">Links Mentioned</h2>
                <ul className="space-y-2">
                  {episode.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-small text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Guest Info */}
            {episode.guest.name !== 'No Guest' && (
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  About the Guest
                </h3>
                <p className="font-medium text-foreground">
                  {episode.guest.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {episode.guest.title}
                  {episode.guest.company && ` at ${episode.guest.company}`}
                </p>
                {episode.guest.links && (
                  <div className="flex gap-3 mt-4">
                    {episode.guest.links.linkedin && (
                      <a
                        href={episode.guest.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        LinkedIn
                      </a>
                    )}
                    {episode.guest.links.website && (
                      <a
                        href={episode.guest.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Website
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* CTAs */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Enjoyed This Episode?
              </h3>
              <div className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start border-border"
                >
                  <Link to="/inquiries?tab=guest">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Suggest a Guest
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start border-border"
                >
                  <Link to="/inquiries?tab=partner">
                    <Handshake className="w-4 h-4 mr-2" />
                    Partner/Sponsor Inquiry
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
