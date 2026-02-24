import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

const categoryColors: Record<string, "primary" | "accent" | "success"> = {
  ai: "accent",
  automation: "primary",
  iot: "success",
  insights: "primary",
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-200 h-full flex flex-col">
        {/* Thumbnail placeholder */}
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
          <span className="text-4xl font-heading font-bold text-primary-200">
            {post.title.charAt(0)}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant={categoryColors[post.category] || "primary"}>
              {post.categoryLabel}
            </Badge>
            <span className="text-xs text-slate-400">
              {post.readTime} min read
            </span>
          </div>

          <h3 className="text-lg font-heading font-semibold text-slate-900 group-hover:text-accent-600 transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
            {post.excerpt}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              {formatDate(post.publishedAt)}
            </div>
            <div className="text-xs font-medium text-slate-500">
              {post.author}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
