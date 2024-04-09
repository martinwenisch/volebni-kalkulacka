export default function Page({ params }: { params: { step: string } }) {
  return (
    <div>
      Navod <span>{params.step}</span>
    </div>
  );
}
