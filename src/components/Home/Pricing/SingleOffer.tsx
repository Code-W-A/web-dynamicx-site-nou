export default function SingleOffer({ text }: { text: string }) {
  return (
    <p className="text-base leading-loose text-body-color flex items-start gap-2">
      <svg
        className="mt-1 h-4 w-4 text-primary flex-shrink-0"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707A1 1 0 018.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>{text}</span>
    </p>
  );
}
