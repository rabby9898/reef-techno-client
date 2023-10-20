import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="text-center flex justify-center" id="error-page">
        <img src="https://i.ibb.co/VMqKt9t/404-error-with-tired-person-concept-illustration-114360-7899.jpg" />
      </div>
    </>
  );
}
