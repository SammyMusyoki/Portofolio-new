import { CoreConfig, GiscusConfig } from "@/types/types";

export type SiteConfig = Record<string, unknown>  & CoreConfig & {
    giscusConfig: GiscusConfig
}