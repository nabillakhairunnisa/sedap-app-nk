import ErrorPage from "../components/ErrorPage";

export default function NotF403() {
  return (
    <div>
      <ErrorPage
        code={403}
        description="Forbidden: You don’t have permission to access this resource."
        image="/public/img/403.png"
      />
    </div>
  );
}
