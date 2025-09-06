export default function Head() {
  const gsv = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  return (
    <>
      {gsv ? (
        <meta name="google-site-verification" content={gsv} />
      ) : null}
    </>
  );
}


