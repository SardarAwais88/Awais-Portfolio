'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  readTime: string;
  date: string;
  author: string;
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) {
          setError('Blog post not found');
          return;
        }
        const data = await res.json();
        setBlog(data.blog);
      } catch {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // Simple markdown to HTML converter
  const renderMarkdown = (md: string) => {
    let html = md
      // Code blocks
      .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Headers
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Lists
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      // Paragraphs
      .replace(/^(?!<[hlupo])(.*\S.*)$/gm, '<p>$1</p>')
      // Wrap consecutive <li> in <ul>
      .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    return html;
  };

  if (loading) {
    return (
      <div className="page-content">
        <section className={`section ${styles.blogPostSection}`}>
          <div className="container">
            <div className={styles.loadingState}>
              <div className={styles.loadingDots}><span /><span /><span /></div>
              <p>Loading article...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="page-content">
        <section className={`section ${styles.blogPostSection}`}>
          <div className="container">
            <div className={styles.errorState}>
              <span>😕</span>
              <h2>Blog Post Not Found</h2>
              <Link href="/blog" className="btn btn-primary">← Back to Blog</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-content">
      <section className={`section ${styles.blogPostSection}`}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/blog">← Back to Blog</Link>
          </div>

          <article className={styles.article}>
            <header className={styles.articleHeader}>
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>{blog.date}</span>
                <span className={styles.articleDot}>•</span>
                <span className={styles.articleReadTime}>{blog.readTime}</span>
                <span className={styles.articleDot}>•</span>
                <span className={styles.articleAuthor}>By {blog.author}</span>
              </div>
              <h1 className={styles.articleTitle}>{blog.title}</h1>
              <p className={styles.articleDesc}>{blog.description}</p>
              <div className={styles.articleTags}>
                {blog.tags?.map((tag) => (
                  <span key={tag} className={styles.articleTag}>{tag}</span>
                ))}
              </div>
            </header>

            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: renderMarkdown(blog.content) }}
            />

            <footer className={styles.articleFooter}>
              <div className={styles.authorCard}>
                <span className={styles.authorAvatar}>⚡</span>
                <div>
                  <strong>Awais Mehboob</strong>
                  <p>Full-Stack Developer, AI Engineer & DevOps Expert</p>
                </div>
              </div>
              <div className={styles.articleActions}>
                <Link href="/contact" className="btn btn-primary">
                  Hire Me for Your Project 🚀
                </Link>
                <Link href="/blog" className="btn btn-outline">
                  More Articles
                </Link>
              </div>
            </footer>
          </article>
        </div>
      </section>
    </div>
  );
}
