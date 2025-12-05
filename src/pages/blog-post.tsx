import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, User } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl mb-4">Artikel Tidak Ditemukan</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Blog
        </Link>

        {/* Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span className="px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)] border border-border">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center">
                  <span className="text-white">{post.author.avatar}</span>
                </div>
                <div>
                  <p className="text-sm">Ditulis oleh</p>
                  <p className="">{post.author.name}</p>
                </div>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Bagikan</span>
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl sm:text-4xl mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl sm:text-3xl mt-8 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl sm:text-2xl mt-6 mb-3" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-lg sm:text-xl mt-4 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground" {...props} />,
                li: ({node, ...props}) => <li className="ml-4" {...props} />,
                strong: ({node, ...props}) => <strong className="text-foreground" {...props} />,
                code: ({node, ...props}) => <code className="bg-secondary px-2 py-1 rounded text-sm" {...props} />,
                pre: ({node, ...props}) => <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[var(--brand-primary)] pl-4 italic my-4 text-muted-foreground" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags/Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Bagikan artikel:</span>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Tentang Penulis</h3>
                <p className="mb-2">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  Expert dalam bidang customer service dan AI technology dengan pengalaman lebih dari 10 tahun membantu bisnis bertransformasi digital.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl mb-8">
              Artikel{' '}
              <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                Terkait
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-[var(--brand-primary)]/20 transition-all"
                >
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{relatedPost.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl text-center text-white">
          <h2 className="text-2xl sm:text-3xl mb-4">
            Siap Transformasi Customer Service Anda?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Bergabunglah dengan ribuan bisnis yang telah merasakan manfaat AI
          </p>
          <button className="px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105">
            Hubungi Kami
          </button>
        </div>
      </div>
    </main>
  );
}
