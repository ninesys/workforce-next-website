import Image from "next/image";
import Link from "next/link";

interface AuthorBioProps {
  name: string;
  role: string;
}

const authorBios: Record<string, { photo: string; bio: string; profileUrl: string; linkedin?: string }> = {
  Gaurav: {
    photo: "/images/gaurav.jpeg",
    profileUrl: "/about/gaurav",
    linkedin: "https://linkedin.com/in/post2seth",
    bio: "Gaurav is the founder of Workforce Next. He has spent the last decade placing and managing dedicated remote engineering teams for US and EU companies, and writes about offshore engineering, AI-native developer hiring, and team retention.",
  },
};

export default function AuthorBio({ name, role }: AuthorBioProps) {
  const profile = authorBios[name];
  if (!profile) return null;

  return (
    <aside
      aria-label="About the author"
      className="mt-12 p-6 sm:p-8 rounded-2xl border border-dark-50 dark:border-dark-700 bg-primary-50/40 dark:bg-dark-800/60 flex flex-col sm:flex-row gap-6 sm:items-start"
    >
      <Image
        src={profile.photo}
        alt={`${name}, ${role} at Workforce Next`}
        width={96}
        height={96}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0"
      />
      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-dark-500 dark:text-dark-300 mb-1">
          About the author
        </p>
        <p className="text-base font-bold text-dark-900 dark:text-dark-50">
          <Link
            href={profile.profileUrl}
            className="hover:text-primary-500 dark:hover:text-primary-400 hover:underline"
          >
            {name}
          </Link>
          <span className="font-normal text-dark-500 dark:text-dark-300"> · {role}</span>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-dark-600 dark:text-dark-200">
          {profile.bio}
        </p>
        {profile.linkedin && (
          <p className="mt-3 text-sm">
            <a
              href={profile.linkedin}
              rel="noopener"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold hover:underline"
            >
              LinkedIn
            </a>
          </p>
        )}
      </div>
    </aside>
  );
}
