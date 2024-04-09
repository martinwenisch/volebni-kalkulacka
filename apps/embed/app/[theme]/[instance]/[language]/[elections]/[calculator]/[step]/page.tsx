import Question from "~/components/question";

export default function Page({ params }: { params: { step: string } }) {
  const stepNumber = parseInt(params.step);

  return <Question questionNumber={stepNumber} />;
}
