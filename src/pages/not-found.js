import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found";
  });
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-screen-lg">
        <h1 className="text-center text-2xl pt-6 mb-8">
          Sorry, this page isn't available.
        </h1>

        <p className="text-center">
          The link you followed may be broken, or the page may have been
          removed.
          <Link to={ROUTES.DASHBOARD} className="font-bold">
            Go back to Instagram
          </Link>
        </p>
      </div>
    </div>
  );
}
