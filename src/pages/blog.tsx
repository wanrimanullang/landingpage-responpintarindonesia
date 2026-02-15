import { Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <BookOpen className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Blog & Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl mb-4">
            Articles & Insights on{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Customer Service
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn the latest strategies, tips, and trends in customer service and AI to help your business grow
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link
            to={`/blog/${blogPosts[0].slug}`}
            className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 transition-all"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[var(--brand-primary)] text-white text-xs rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)]">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>

                <h2 className="text-3xl mb-4 group-hover:text-[var(--brand-primary)] transition-colors">
                  {blogPosts[0].title}
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center">
                      <span className="text-white text-sm">{blogPosts[0].author.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm">{blogPosts[0].author.name}</p>
                      <p className="text-xs text-muted-foreground">Author</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[var(--brand-primary)] group-hover:gap-3 transition-all">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-secondary rounded-full text-[var(--brand-primary)]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center">
                      <span className="text-white text-xs">{post.author.avatar}</span>
                    </div>
                    <span className="text-xs">{post.author.name}</span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl">
          <h2 className="text-2xl mb-6 text-center">Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
