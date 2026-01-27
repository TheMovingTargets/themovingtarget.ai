import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { EpisodeCard } from '@/components/cards/EpisodeCard';
import { getAllEpisodes, getAllTags, getAllGuests } from '@/lib/data';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Episodes() {
  const allEpisodes = getAllEpisodes();
  const allTags = getAllTags();
  const allGuests = getAllGuests();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedGuest, setSelectedGuest] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('latest');

  const filteredEpisodes = useMemo(() => {
    let episodes = [...allEpisodes];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      episodes = episodes.filter(
        (episode) =>
          episode.title.toLowerCase().includes(query) ||
          episode.description.toLowerCase().includes(query) ||
          episode.guest.name.toLowerCase().includes(query) ||
          episode.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Tag filter
    if (selectedTag && selectedTag !== 'all') {
      episodes = episodes.filter((episode) =>
        episode.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    // Guest filter
    if (selectedGuest && selectedGuest !== 'all') {
      episodes = episodes.filter(
        (episode) => episode.guest.name === selectedGuest
      );
    }

    // Sort
    if (sortOrder === 'oldest') {
      episodes.reverse();
    }

    return episodes;
  }, [allEpisodes, searchQuery, selectedTag, selectedGuest, sortOrder]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-h1 mb-4">All Episodes</h1>
          <p className="text-body text-muted-foreground max-w-xl">
            Browse every conversation. Listen on Spotify or YouTube.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Find episodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary border-border"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-3">
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[160px] bg-secondary border-border">
                <SelectValue placeholder="All Topics" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedGuest} onValueChange={setSelectedGuest}>
              <SelectTrigger className="w-[160px] bg-secondary border-border">
                <SelectValue placeholder="All Guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Guests</SelectItem>
                {allGuests.map((guest) => (
                  <SelectItem key={guest} value={guest}>
                    {guest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[140px] bg-secondary border-border">
                <SelectValue placeholder="Latest First" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredEpisodes.length} episode
          {filteredEpisodes.length !== 1 ? 's' : ''} found
        </p>

        {/* Episode Grid */}
        {filteredEpisodes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              No episodes found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('all');
                setSelectedGuest('all');
              }}
              className="text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
