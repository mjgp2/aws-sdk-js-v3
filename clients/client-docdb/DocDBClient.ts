import {
  AddTagsToResourceMessage,
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResult,
  CertificateMessage,
  CopyDBClusterParameterGroupMessage,
  CopyDBClusterParameterGroupResult,
  CopyDBClusterSnapshotMessage,
  CopyDBClusterSnapshotResult,
  CreateDBClusterMessage,
  CreateDBClusterParameterGroupMessage,
  CreateDBClusterParameterGroupResult,
  CreateDBClusterResult,
  CreateDBClusterSnapshotMessage,
  CreateDBClusterSnapshotResult,
  CreateDBInstanceMessage,
  CreateDBInstanceResult,
  CreateDBSubnetGroupMessage,
  CreateDBSubnetGroupResult,
  DBClusterMessage,
  DBClusterParameterGroupDetails,
  DBClusterParameterGroupNameMessage,
  DBClusterParameterGroupsMessage,
  DBClusterSnapshotMessage,
  DBEngineVersionMessage,
  DBInstanceMessage,
  DBSubnetGroupMessage,
  DeleteDBClusterMessage,
  DeleteDBClusterParameterGroupMessage,
  DeleteDBClusterResult,
  DeleteDBClusterSnapshotMessage,
  DeleteDBClusterSnapshotResult,
  DeleteDBInstanceMessage,
  DeleteDBInstanceResult,
  DeleteDBSubnetGroupMessage,
  DescribeCertificatesMessage,
  DescribeDBClusterParameterGroupsMessage,
  DescribeDBClusterParametersMessage,
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
  DescribeDBClusterSnapshotsMessage,
  DescribeDBClustersMessage,
  DescribeDBEngineVersionsMessage,
  DescribeDBInstancesMessage,
  DescribeDBSubnetGroupsMessage,
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult,
  DescribeEventCategoriesMessage,
  DescribeEventsMessage,
  DescribeOrderableDBInstanceOptionsMessage,
  DescribePendingMaintenanceActionsMessage,
  EventCategoriesMessage,
  EventsMessage,
  FailoverDBClusterMessage,
  FailoverDBClusterResult,
  ListTagsForResourceMessage,
  ModifyDBClusterMessage,
  ModifyDBClusterParameterGroupMessage,
  ModifyDBClusterResult,
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBClusterSnapshotAttributeResult,
  ModifyDBInstanceMessage,
  ModifyDBInstanceResult,
  ModifyDBSubnetGroupMessage,
  ModifyDBSubnetGroupResult,
  OrderableDBInstanceOptionsMessage,
  PendingMaintenanceActionsMessage,
  RebootDBInstanceMessage,
  RebootDBInstanceResult,
  RemoveTagsFromResourceMessage,
  ResetDBClusterParameterGroupMessage,
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterFromSnapshotResult,
  RestoreDBClusterToPointInTimeMessage,
  RestoreDBClusterToPointInTimeResult,
  StartDBClusterMessage,
  StartDBClusterResult,
  StopDBClusterMessage,
  StopDBClusterResult,
  TagListMessage
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddTagsToResourceMessage
  | ApplyPendingMaintenanceActionMessage
  | CopyDBClusterParameterGroupMessage
  | CopyDBClusterSnapshotMessage
  | CreateDBClusterMessage
  | CreateDBClusterParameterGroupMessage
  | CreateDBClusterSnapshotMessage
  | CreateDBInstanceMessage
  | CreateDBSubnetGroupMessage
  | DeleteDBClusterMessage
  | DeleteDBClusterParameterGroupMessage
  | DeleteDBClusterSnapshotMessage
  | DeleteDBInstanceMessage
  | DeleteDBSubnetGroupMessage
  | DescribeCertificatesMessage
  | DescribeDBClusterParameterGroupsMessage
  | DescribeDBClusterParametersMessage
  | DescribeDBClusterSnapshotAttributesMessage
  | DescribeDBClusterSnapshotsMessage
  | DescribeDBClustersMessage
  | DescribeDBEngineVersionsMessage
  | DescribeDBInstancesMessage
  | DescribeDBSubnetGroupsMessage
  | DescribeEngineDefaultClusterParametersMessage
  | DescribeEventCategoriesMessage
  | DescribeEventsMessage
  | DescribeOrderableDBInstanceOptionsMessage
  | DescribePendingMaintenanceActionsMessage
  | FailoverDBClusterMessage
  | ListTagsForResourceMessage
  | ModifyDBClusterMessage
  | ModifyDBClusterParameterGroupMessage
  | ModifyDBClusterSnapshotAttributeMessage
  | ModifyDBInstanceMessage
  | ModifyDBSubnetGroupMessage
  | RebootDBInstanceMessage
  | RemoveTagsFromResourceMessage
  | ResetDBClusterParameterGroupMessage
  | RestoreDBClusterFromSnapshotMessage
  | RestoreDBClusterToPointInTimeMessage
  | StartDBClusterMessage
  | StopDBClusterMessage;

export type ServiceOutputTypes =
  | __MetadataBearer
  | ApplyPendingMaintenanceActionResult
  | CertificateMessage
  | CopyDBClusterParameterGroupResult
  | CopyDBClusterSnapshotResult
  | CreateDBClusterParameterGroupResult
  | CreateDBClusterResult
  | CreateDBClusterSnapshotResult
  | CreateDBInstanceResult
  | CreateDBSubnetGroupResult
  | DBClusterMessage
  | DBClusterParameterGroupDetails
  | DBClusterParameterGroupNameMessage
  | DBClusterParameterGroupNameMessage
  | DBClusterParameterGroupsMessage
  | DBClusterSnapshotMessage
  | DBEngineVersionMessage
  | DBInstanceMessage
  | DBSubnetGroupMessage
  | DeleteDBClusterResult
  | DeleteDBClusterSnapshotResult
  | DeleteDBInstanceResult
  | DescribeDBClusterSnapshotAttributesResult
  | DescribeEngineDefaultClusterParametersResult
  | EventCategoriesMessage
  | EventsMessage
  | FailoverDBClusterResult
  | ModifyDBClusterResult
  | ModifyDBClusterSnapshotAttributeResult
  | ModifyDBInstanceResult
  | ModifyDBSubnetGroupResult
  | OrderableDBInstanceOptionsMessage
  | PendingMaintenanceActionsMessage
  | RebootDBInstanceResult
  | RestoreDBClusterFromSnapshotResult
  | RestoreDBClusterToPointInTimeResult
  | StartDBClusterResult
  | StopDBClusterResult
  | TagListMessage;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type DocDBClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DocDBClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon DocumentDB API documentation</p>
 */
export class DocDBClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DocDBClientResolvedConfig
> {
  readonly config: DocDBClientResolvedConfig;

  constructor(configuration: DocDBClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}