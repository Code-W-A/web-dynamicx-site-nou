import { FacebookIcon, LinkedinIcon, XIcon } from "@/assets/icons";

export function SharePost({ url, title }: { url: string; title?: string }) {
  const encodedUrl = encodeURIComponent(url || "");
  const encodedTitle = encodeURIComponent(title || "");

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const xHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <div>
      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
        Împărtășește acest articol
      </h5>

      <div className="flex items-center sm:justify-end">
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="bg-primary/10 text-body-color hover:bg-primary inline-flex size-9 items-center justify-center rounded-xs transition hover:text-white sm:ml-3"
        >
          <LinkedinIcon />
        </a>

        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="bg-primary/10 text-body-color hover:bg-primary ml-3 inline-flex h-9 w-9 items-center justify-center rounded-xs transition hover:text-white"
        >
          <XIcon />
        </a>

        <a
          href={facebookHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="bg-primary/10 text-body-color hover:bg-primary ml-3 inline-flex size-9 items-center justify-center rounded-xs transition hover:text-white"
        >
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}
