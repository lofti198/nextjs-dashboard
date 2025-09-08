
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export default async function InvoicesPage() {
    // await delay(2000);
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>
      <p>This is the invoices page. Add your invoices UI here.</p>
    </main>
  );
}
