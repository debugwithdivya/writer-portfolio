
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export default async function PostPage({ params }) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), 'posts', slug + '.md');
  if (!fs.existsSync(filePath)) {
    return <div className="p-6">Post not found</div>;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-2">{data.title || slug}</h1>
      <p className="text-gray-600 mb-4">{data.date || ''}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
