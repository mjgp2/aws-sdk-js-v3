import { Paginator } from "@aws-sdk/types";

import {
  ListComplianceSummariesCommand,
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
} from "../commands/ListComplianceSummariesCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListComplianceSummariesCommandInput,
  ...args: any
): Promise<ListComplianceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComplianceSummariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: ListComplianceSummariesCommandInput,
  ...args: any
): Promise<ListComplianceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.listComplianceSummaries(input, ...args);
};
export async function* paginateListComplianceSummaries(
  config: SSMPaginationConfiguration,
  input: ListComplianceSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListComplianceSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComplianceSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
