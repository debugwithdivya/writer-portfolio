
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), 'posts');
  let files = [];
  try { files = fs.readdirSync(postsDir); } catch(e) { files = []; }
  const posts = files.filter(f => f.endsWith('.md')).map(f => ({
    slug: f.replace(/\.md$/, ''),
    file: f
  }));
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
      <ul className="space-y-3">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={'/blog/' + p.slug} className="underline">{p.slug.replace(/-/g,' ')}</Link>
          </li>
        ))}
      </ul>
      {posts.length===0 && <p className="mt-4 text-gray-600">No posts yet — add Markdown files to the <code>posts/</code> folder.</p>}
    </div>
  )
}
