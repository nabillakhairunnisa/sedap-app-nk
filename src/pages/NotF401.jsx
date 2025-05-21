import ErrorPage from "../components/ErrorPage";

export default function NotF401() {
  return (
    <div>
      <ErrorPage
        code={401}
        description="Your session has expired. Please login again."
        image="/public/img/401.png"
      />
    </div>
  );
}
