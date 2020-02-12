import { ContainerModule } from "inversify";
import { BackendApplicationContribution } from "@theia/core/lib/node/backend-application";
import { TheiaCookieAuthContribution } from "./cookie-auth-contribution"

export default new ContainerModule(bind => {
    bind(BackendApplicationContribution).to(TheiaCookieAuthContribution);
});