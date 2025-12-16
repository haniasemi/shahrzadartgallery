'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blogData';
import { useEffect } from 'react';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    if (!post && slug) {
      router.push('/blog');
    }
  }, [slug, post, router]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">مقاله پیدا نشد</h1>
          <Button onClick={() => router.push('/blog')}>
            بازگشت به وبلاگ
          </Button>
        </div>
      </div>
    );
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            خانه
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            وبلاگ
          </Link>
          <span>/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        {/* Article Header */}
        <article className="mb-12">
          <div className="mb-6">
            <span className="inline-block bg-primary/20 text-primary text-sm px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} زمان خواندن</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video md:aspect-[21/9] rounded-lg overflow-hidden mb-8 bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
            <span className="text-8xl opacity-50">📰</span>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:golden-text prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:list-disc prose-ol:list-decimal prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75rem'
            }}
          />
        </article>

        {/* Navigation between posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {prevPost && (
            <Card className="card-elegant group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>مقاله قبلی</span>
                </div>
                <Link href={`/blog/${prevPost.slug}`}>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {prevPost.title}
                  </h3>
                </Link>
              </CardContent>
            </Card>
          )}
          
          {nextPost && (
            <Card className="card-elegant group cursor-pointer md:mr-auto md:ml-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>مقاله بعدی</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <Link href={`/blog/${nextPost.slug}`}>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </h3>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Back to Blog */}
        <div className="text-center mb-12">
          <Button size="lg" variant="outline" className="px-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              بازگشت به وبلاگ
            </Link>
          </Button>
        </div>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 golden-text text-center">
            مقالات مرتبط
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allPosts
              .filter(p => p.slug !== slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Card key={relatedPost.slug} className="card-elegant group cursor-pointer">
                  <CardContent className="p-0">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="aspect-video bg-gradient-to-br from-secondary to-primary/20 rounded-t-lg flex items-center justify-center">
                        <span className="text-4xl opacity-50">📰</span>
                      </div>
                    </Link>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Link href={`/blog/${relatedPost.slug}`}>خواندن بیشتر</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

