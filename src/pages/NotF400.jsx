import ErrorPage from "../components/ErrorPage";

export default function NotF400() {
  return (
    <div>
      <ErrorPage
        code={400}
        description="Bad Request: Your request could not be processed."
        image="/public/img/400.png"
      />
    </div>
  );
}
