import { useRouteError } from "react-router-dom";
import { ErrorPageType } from "../app-type";

export const ErrorPage = () => {
    const error: ErrorPageType | undefined = useRouteError() as ErrorPageType | undefined;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    )
}