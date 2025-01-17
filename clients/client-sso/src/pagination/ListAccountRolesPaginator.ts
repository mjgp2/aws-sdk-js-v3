import { Paginator } from "@aws-sdk/types";

import {
  ListAccountRolesCommand,
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput,
} from "../commands/ListAccountRolesCommand";
import { SSO } from "../SSO";
import { SSOClient } from "../SSOClient";
import { SSOPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOClient,
  input: ListAccountRolesCommandInput,
  ...args: any
): Promise<ListAccountRolesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountRolesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSO,
  input: ListAccountRolesCommandInput,
  ...args: any
): Promise<ListAccountRolesCommandOutput> => {
  // @ts-ignore
  return await client.listAccountRoles(input, ...args);
};
export async function* paginateListAccountRoles(
  config: SSOPaginationConfiguration,
  input: ListAccountRolesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountRolesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountRolesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SSO) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSO | SSOClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
