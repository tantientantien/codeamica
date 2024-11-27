export default function SearchBar({ onChange }: { onChange: (term: string) => void }) {
    return (
        <div className="relative">
            <img
              width={16}
              height={16}
              src="/assets/search.svg"
              alt="search-icon"
              className="absolute left-3 top-2 h-5 w-5"
            />
            <input
              type="text"
              className="h-8 w-full rounded-md border border-[var(--primary-text-color)] px-10 py-1.5 text-sm placeholder-[var(--primary-text-color)]"
              placeholder="What are you looking for?"
              onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}