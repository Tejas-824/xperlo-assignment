import { NavLink } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import LazyImage from '../components/ui/LazyImage';
import { BLOG_IMAGE } from '../constants/images';

const posts = Array.from({ length: 9 }).map((_, i) => ({
  id: `post-${i + 1}`,
  title: "Given void great you're good appear have i also fifth",
  date: '2021-08-09 04:19 AM',
  views: 51,
  image: BLOG_IMAGE,
}));

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3v4M8 3v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlogCard({ post }) {
  return (
    <article className="overflow-hidden rounded-xl bg-brand-panel">
      <div className="aspect-[4/3] overflow-hidden">
        <LazyImage
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h2 className="text-base font-semibold leading-snug">
          <NavLink to={`/blog/${post.id}`} className="hover:text-brand-pink">
            {post.title}
          </NavLink>
        </h2>
        <div className="mt-4 flex items-center gap-4 text-xs text-brand-muted">
          <span className="flex items-center gap-1.5">
            <CalendarIcon />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <EyeIcon />
            {post.views}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Road-trip guides, fleet updates, and travel tips from the airoame team."
        path="/blog"
      />

      {/* Page header */}
      <section className="border-b border-white/10 bg-brand-panel/40 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Blogs</h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-brand-muted">
          <NavLink to="/" className="hover:text-white">
            Home
          </NavLink>
          <span className="mx-2">/</span>
          <span className="text-white">Blogs</span>
        </nav>
      </section>

      {/* Posts grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}