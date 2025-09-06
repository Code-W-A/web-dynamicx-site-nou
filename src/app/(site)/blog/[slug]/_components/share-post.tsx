import { FacebookIcon, LinkedinIcon, XIcon } from "@/assets/icons";

export function SharePost() {
  return (
    <div>
      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
        Share this post
      </h5>

      <div className="flex items-center sm:justify-end">
        <a
          href="#"
          target="_blank"
          className="bg-primary/10 text-body-color hover:bg-primary inline-flex size-9 items-center justify-center rounded-xs transition hover:text-white sm:ml-3"
        >
          <LinkedinIcon />
        </a>

        <a
          href="#"
          target="_blank"
          className="bg-primary/10 text-body-color hover:bg-primary ml-3 inline-flex h-9 w-9 items-center justify-center rounded-xs transition hover:text-white"
        >
          <XIcon />
        </a>

        <a
          href="#"
          target="_blank"
          className="bg-primary/10 text-body-color hover:bg-primary ml-3 inline-flex size-9 items-center justify-center rounded-xs transition hover:text-white"
        >
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}
