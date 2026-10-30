import PageHeader from "@/components/common/PageHeader";
import CertificateList from "@/components/common/CertificateList";

export default function CertificatesPage() {
  return (
    <>
      <PageHeader title="Certifications" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <CertificateList />
      </div>
    </>
  );
}
