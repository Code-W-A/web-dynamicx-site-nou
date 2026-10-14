import ClientContract from "@/components/Contracts/ClientContract";
export default async function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return <ClientContract token={token} />;
}
