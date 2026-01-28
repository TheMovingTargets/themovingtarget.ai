import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Play, Image as ImageIcon } from 'lucide-react';

interface ComicItem {
  id: string;
  episodeNumber: number;
  title: string;
  imagePath: string;
}

interface ShortItem {
  id: string;
  episodeNumber: number;
  title: string;
  youtubeUrl: string;
  thumbnailId: string;
}

const episodeComics: ComicItem[] = [
  {
    id: 'comic-3',
    episodeNumber: 3,
    title: 'Episode 3 Comic',
    imagePath: '/comics/episode4-comic.png',
  },
  {
    id: 'comic-4',
    episodeNumber: 4,
    title: 'Episode 4 Comic',
    imagePath: '/comics/episode3-comic.png',
  },
];

const episodeShorts: ShortItem[] = [
  {
    id: 'short-1',
    episodeNumber: 1,
    title: 'Episode 1 Short',
    youtubeUrl: 'https://www.youtube.com/shorts/enk71qFH86E',
    thumbnailId: 'enk71qFH86E',
  },
];

function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}`;
}

function ComicCard({ comic }: { comic: ComicItem }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={comic.imagePath}
          alt={comic.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">{comic.title}</CardTitle>
        <CardDescription>Visual recap of Episode {comic.episodeNumber}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function ShortCard({ short }: { short: ShortItem }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[9/16] max-h-[400px] overflow-hidden bg-muted">
        <iframe
          src={getYouTubeEmbedUrl(short.youtubeUrl)}
          title={short.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg flex items-center gap-2">
          <Play className="w-4 h-4" />
          {short.title}
        </CardTitle>
        <CardDescription>
          Quick highlight from Episode {short.episodeNumber}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <a
          href={short.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          Watch on YouTube
        </a>
      </CardContent>
    </Card>
  );
}

export function CatchUp() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-h1 mb-4">Catch Up</h1>
          <p className="text-body text-muted-foreground max-w-xl">
            Quick visual recaps and short clips from our episodes. Perfect for catching up or reliving your favorite moments.
          </p>
        </div>

        {/* Two-column layout for Comics and Shorts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Episode Comics Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-6 h-6 text-primary" />
              <h2 className="text-h2">Episode Comics</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Visual comic-style recaps of our episodes.
            </p>

            {episodeComics.length > 0 ? (
              <div className="flex flex-col gap-8">
                {[...episodeComics]
                  .sort((a, b) => b.episodeNumber - a.episodeNumber)
                  .map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">No comics available yet.</p>
              </div>
            )}
          </section>

          {/* Episode Shorts Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Play className="w-6 h-6 text-primary" />
              <h2 className="text-h2">Episode Shorts</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Quick video highlights and clips from our episodes.
            </p>

            {episodeShorts.length > 0 ? (
              <div className="flex flex-col gap-6">
                {[...episodeShorts]
                  .sort((a, b) => b.episodeNumber - a.episodeNumber)
                  .map((short) => (
                    <ShortCard key={short.id} short={short} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">No shorts available yet.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
