import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface CancelStatementRequest {
  /**
   * <p>The identifier of the SQL statement to cancel. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *       This identifier is returned by <code>ExecuteStatment</code> and <code>ListStatements</code>. </p>
   */
  Id: string | undefined;
}

export namespace CancelStatementRequest {
  export const filterSensitiveLog = (obj: CancelStatementRequest): any => ({
    ...obj,
  });
}

export interface CancelStatementResponse {
  /**
   * <p>A value that indicates whether the cancel statement succeeded (true). </p>
   */
  Status?: boolean;
}

export namespace CancelStatementResponse {
  export const filterSensitiveLog = (obj: CancelStatementResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>The exception message.</p>
   */
  Message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Redshift Data API operation failed due to a missing resource. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The exception message.</p>
   */
  Message: string | undefined;

  /**
   * <p>Resource identifier associated with the exception.</p>
   */
  ResourceId: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The properties (metadata) of a column. </p>
 */
export interface ColumnMetadata {
  /**
   * <p>A value that indicates whether the column is case-sensitive. </p>
   */
  isCaseSensitive?: boolean;

  /**
   * <p>A value that indicates whether the column contains currency values.</p>
   */
  isCurrency?: boolean;

  /**
   * <p>A value that indicates whether an integer column is signed.</p>
   */
  isSigned?: boolean;

  /**
   * <p>The label for the column. </p>
   */
  label?: string;

  /**
   * <p>The name of the column. </p>
   */
  name?: string;

  /**
   * <p>A value that indicates whether the column is nullable. </p>
   */
  nullable?: number;

  /**
   * <p>The precision value of a decimal number column. </p>
   */
  precision?: number;

  /**
   * <p>The scale value of a decimal number column. </p>
   */
  scale?: number;

  /**
   * <p>The name of the schema that contains the table that includes the column.</p>
   */
  schemaName?: string;

  /**
   * <p>The name of the table that includes the column. </p>
   */
  tableName?: string;

  /**
   * <p>The database-specific data type of the column. </p>
   */
  typeName?: string;

  /**
   * <p>The length of the column.</p>
   */
  length?: number;

  /**
   * <p>The default value of the column. </p>
   */
  columnDefault?: string;
}

export namespace ColumnMetadata {
  export const filterSensitiveLog = (obj: ColumnMetadata): any => ({
    ...obj,
  });
}

export interface DescribeStatementRequest {
  /**
   * <p>The identifier of the SQL statement to describe. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *        This identifier is returned by <code>ExecuteStatment</code> and <code>ListStatements</code>. </p>
   */
  Id: string | undefined;
}

export namespace DescribeStatementRequest {
  export const filterSensitiveLog = (obj: DescribeStatementRequest): any => ({
    ...obj,
  });
}

export enum StatusString {
  ABORTED = "ABORTED",
  ALL = "ALL",
  FAILED = "FAILED",
  FINISHED = "FINISHED",
  PICKED = "PICKED",
  STARTED = "STARTED",
  SUBMITTED = "SUBMITTED",
}

export interface DescribeStatementResponse {
  /**
   * <p>The identifier of the SQL statement described. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. </p>
   */
  Id: string | undefined;

  /**
   * <p>The SQL statement text. </p>
   */
  QueryString?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the secret that enables access to the database. </p>
   */
  SecretArn?: string;

  /**
   * <p>The database user name. </p>
   */
  DbUser?: string;

  /**
   * <p>The name of the database. </p>
   */
  Database?: string;

  /**
   * <p>The cluster identifier. </p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>Either the number of rows returned from the SQL statement or the number of rows affected.
   *        If result size is greater than zero, the result rows can be the number of rows affected by SQL statements such as INSERT, UPDATE, DELETE, COPY, and others. </p>
   */
  ResultRows?: number;

  /**
   * <p>The size in bytes of the returned results. </p>
   */
  ResultSize?: number;

  /**
   * <p>The amount of time in nanoseconds that the statement ran. </p>
   */
  Duration?: number;

  /**
   * <p>The error message from the cluster if the SQL statement encountered an error while running. </p>
   */
  Error?: string;

  /**
   * <p>The status of the SQL statement being described. Status values are defined as follows: </p>
   *          <ul>
   *             <li>
   *                <p>ABORTED - The query run was stopped by the user. </p>
   *             </li>
   *             <li>
   *                <p>ALL -  A status value that includes all query statuses. This value can be used to filter results. </p>
   *             </li>
   *             <li>
   *                <p>FAILED - The query run failed. </p>
   *             </li>
   *             <li>
   *                <p>FINISHED - The query has finished running. </p>
   *             </li>
   *             <li>
   *                <p>PICKED - The query has been chosen to be run. </p>
   *             </li>
   *             <li>
   *                <p>STARTED - The query run has started. </p>
   *             </li>
   *             <li>
   *                <p>SUBMITTED - The query was submitted, but not yet processed. </p>
   *             </li>
   *          </ul>
   */
  Status?: StatusString | string;

  /**
   * <p>The date and time (UTC) when the SQL statement was submitted to run. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time (UTC) that the metadata for the SQL statement was last updated. An
   *       example is the time the status last changed. </p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The identifier of the query generated by Amazon Redshift.
   *       These identifiers are also available in the <code>query</code> column of the <code>STL_QUERY</code> system view. </p>
   */
  RedshiftQueryId?: number;

  /**
   * <p>The process identifier from Amazon Redshift. </p>
   */
  RedshiftPid?: number;
}

export namespace DescribeStatementResponse {
  export const filterSensitiveLog = (obj: DescribeStatementResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>The exception message.</p>
   */
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DescribeTableRequest {
  /**
   * <p>The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials. </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager. </p>
   */
  SecretArn?: string;

  /**
   * <p>The database user name. This parameter is required when authenticating using temporary credentials. </p>
   */
  DbUser?: string;

  /**
   * <p>The name of the database.  This parameter is required when authenticating using temporary credentials.</p>
   */
  Database?: string;

  /**
   * <p>The schema that contains the table. If no schema is specified, then matching tables for all schemas are returned. </p>
   */
  Schema?: string;

  /**
   * <p>The table name. If no table is specified, then all tables for all matching schemas are returned.
   *        If no table and no schema is specified, then all tables for all schemas in the database are returned</p>
   */
  Table?: string;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of tables to return in the response.
   *       If more tables exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   */
  MaxResults?: number;
}

export namespace DescribeTableRequest {
  export const filterSensitiveLog = (obj: DescribeTableRequest): any => ({
    ...obj,
  });
}

export interface DescribeTableResponse {
  /**
   * <p>The table name. </p>
   */
  TableName?: string;

  /**
   * <p>A list of columns in the table. </p>
   */
  ColumnList?: ColumnMetadata[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;
}

export namespace DescribeTableResponse {
  export const filterSensitiveLog = (obj: DescribeTableResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The SQL statement encountered an environmental error while running.</p>
 */
export interface ExecuteStatementException extends __SmithyException, $MetadataBearer {
  name: "ExecuteStatementException";
  $fault: "server";
  /**
   * <p>The exception message.</p>
   */
  Message: string | undefined;

  /**
   * <p>Statement identifier of the exception.</p>
   */
  StatementId: string | undefined;
}

export namespace ExecuteStatementException {
  export const filterSensitiveLog = (obj: ExecuteStatementException): any => ({
    ...obj,
  });
}

export interface ExecuteStatementInput {
  /**
   * <p>The SQL statement text to run. </p>
   */
  Sql: string | undefined;

  /**
   * <p>The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials. </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager. </p>
   */
  SecretArn?: string;

  /**
   * <p>The database user name. This parameter is required when authenticating using temporary credentials. </p>
   */
  DbUser?: string;

  /**
   * <p>The name of the database. This parameter is required when authenticating using temporary credentials.</p>
   */
  Database?: string;

  /**
   * <p>A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statement runs. </p>
   */
  WithEvent?: boolean;

  /**
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to identify the query. </p>
   */
  StatementName?: string;
}

export namespace ExecuteStatementInput {
  export const filterSensitiveLog = (obj: ExecuteStatementInput): any => ({
    ...obj,
  });
}

export interface ExecuteStatementOutput {
  /**
   * <p>The identifier of the statement to be run. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. </p>
   */
  Id?: string;

  /**
   * <p>The date and time (UTC) the statement was created. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The cluster identifier. </p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The database user name.</p>
   */
  DbUser?: string;

  /**
   * <p>The name of the database.</p>
   */
  Database?: string;

  /**
   * <p>The name or ARN of the secret that enables access to the database. </p>
   */
  SecretArn?: string;
}

export namespace ExecuteStatementOutput {
  export const filterSensitiveLog = (obj: ExecuteStatementOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A data value in a column. </p>
 */
export type Field =
  | Field.BlobValueMember
  | Field.BooleanValueMember
  | Field.DoubleValueMember
  | Field.IsNullMember
  | Field.LongValueMember
  | Field.StringValueMember
  | Field.$UnknownMember;

export namespace Field {
  /**
   * <p>A value that indicates whether the data is NULL. </p>
   */
  export interface IsNullMember {
    isNull: boolean;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the Boolean data type. </p>
   */
  export interface BooleanValueMember {
    isNull?: never;
    booleanValue: boolean;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the long data type. </p>
   */
  export interface LongValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue: number;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the double data type. </p>
   */
  export interface DoubleValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue: number;
    stringValue?: never;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the string data type. </p>
   */
  export interface StringValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue: string;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the BLOB data type. </p>
   */
  export interface BlobValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue: Uint8Array;
    $unknown?: never;
  }

  export interface $UnknownMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    isNull: (value: boolean) => T;
    booleanValue: (value: boolean) => T;
    longValue: (value: number) => T;
    doubleValue: (value: number) => T;
    stringValue: (value: string) => T;
    blobValue: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Field, visitor: Visitor<T>): T => {
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: Field): any => {
    if (obj.isNull !== undefined) return { isNull: obj.isNull };
    if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
    if (obj.longValue !== undefined) return { longValue: obj.longValue };
    if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.blobValue !== undefined) return { blobValue: obj.blobValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface GetStatementResultRequest {
  /**
   * <p>The identifier of the SQL statement whose results are to be fetched. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *        This identifier is returned by <code>ExecuteStatment</code> and <code>ListStatements</code>. </p>
   */
  Id: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;
}

export namespace GetStatementResultRequest {
  export const filterSensitiveLog = (obj: GetStatementResultRequest): any => ({
    ...obj,
  });
}

export interface GetStatementResultResponse {
  /**
   * <p>The results of the SQL statement.</p>
   */
  Records: Field[][] | undefined;

  /**
   * <p>The properties (metadata) of a column. </p>
   */
  ColumnMetadata?: ColumnMetadata[];

  /**
   * <p>The total number of rows in the result set returned from a query.
   *        You can use this number to estimate the number of calls to the <code>GetStatementResult</code> operation needed to page through the results. </p>
   */
  TotalNumRows?: number;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;
}

export namespace GetStatementResultResponse {
  export const filterSensitiveLog = (obj: GetStatementResultResponse): any => ({
    ...obj,
  });
}

export interface ListDatabasesRequest {
  /**
   * <p>The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials. </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database. This parameter is required when authenticating using temporary credentials. </p>
   */
  Database?: string;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager. </p>
   */
  SecretArn?: string;

  /**
   * <p>The database user name. This parameter is required when authenticating using temporary credentials. </p>
   */
  DbUser?: string;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of databases to return in the response.
   *        If more databases exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   */
  MaxResults?: number;
}

export namespace ListDatabasesRequest {
  export const filterSensitiveLog = (obj: ListDatabasesRequest): any => ({
    ...obj,
  });
}

export interface ListDatabasesResponse {
  /**
   * <p>The names of databases. </p>
   */
  Databases?: string[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;
}

export namespace ListDatabasesResponse {
  export const filterSensitiveLog = (obj: ListDatabasesResponse): any => ({
    ...obj,
  });
}

export interface ListSchemasRequest {
  /**
   * <p>The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials. </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager. </p>
   */
  SecretArn?: string;

  /**
   * <p>The database user name. This parameter is required when authenticating using temporary credentials. </p>
   */
  DbUser?: string;

  /**
   * <p>The name of the database. This parameter is required when authenticating using temporary credentials. </p>
   */
  Database: string | undefined;

  /**
   * <p>A pattern to filter results by schema name. Within a schema pattern, "%" means match any
   *       substring of 0 or more characters and "_" means match any one character. Only schema name
   *       entries matching the search pattern are returned. </p>
   */
  SchemaPattern?: string;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of schemas to return in the response.
   *        If more schemas exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   */
  MaxResults?: number;
}

export namespace ListSchemasRequest {
  export const filterSensitiveLog = (obj: ListSchemasRequest): any => ({
    ...obj,
  });
}

export interface ListSchemasResponse {
  /**
   * <p>The schemas that match the request pattern. </p>
   */
  Schemas?: string[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;
}

export namespace ListSchemasResponse {
  export const filterSensitiveLog = (obj: ListSchemasResponse): any => ({
    ...obj,
  });
}

export interface ListStatementsRequest {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of SQL statements to return in the response.
   *        If more SQL statements exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the SQL statement specified as input to <code>ExecuteStatement</code> to identify the query.
   *       You can list multiple statements by providing a prefix that matches the beginning of the statement name.
   *       For example, to list myStatement1, myStatement2, myStatement3, and so on, then provide the a value of <code>myStatement</code>.
   *       Data API does a case-sensitive match of SQL statement names to the prefix value you provide. </p>
   */
  StatementName?: string;

  /**
   * <p>The status of the SQL statement to list. Status values are defined as follows: </p>
   *          <ul>
   *             <li>
   *                <p>ABORTED - The query run was stopped by the user. </p>
   *             </li>
   *             <li>
   *                <p>ALL -  A status value that includes all query statuses. This value can be used to filter results. </p>
   *             </li>
   *             <li>
   *                <p>FAILED - The query run failed. </p>
   *             </li>
   *             <li>
   *                <p>FINISHED - The query has finished running. </p>
   *             </li>
   *             <li>
   *                <p>PICKED - The query has been chosen to be run. </p>
   *             </li>
   *             <li>
   *                <p>STARTED - The query run has started. </p>
   *             </li>
   *             <li>
   *                <p>SUBMITTED - The query was submitted, but not yet processed. </p>
   *             </li>
   *          </ul>
   */
  Status?: StatusString | string;
}

export namespace ListStatementsRequest {
  export const filterSensitiveLog = (obj: ListStatementsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The SQL statement to run.</p>
 */
export interface StatementData {
  /**
   * <p>The SQL statement identifier. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. </p>
   */
  Id: string | undefined;

  /**
   * <p>The SQL statement.</p>
   */
  QueryString?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the secret that enables access to the database. </p>
   */
  SecretArn?: string;

  /**
   * <p>The status of the SQL statement. An
   *        example is the that the SQL statement finished.
   *       </p>
   */
  Status?: StatusString | string;

  /**
   * <p>The name of the SQL statement. </p>
   */
  StatementName?: string;

  /**
   * <p>The date and time (UTC) the statement was created. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time (UTC) that the statement metadata was last updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace StatementData {
  export const filterSensitiveLog = (obj: StatementData): any => ({
    ...obj,
  });
}

export interface ListStatementsResponse {
  /**
   * <p>The SQL statements. </p>
   */
  Statements: StatementData[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;
}

export namespace ListStatementsResponse {
  export const filterSensitiveLog = (obj: ListStatementsResponse): any => ({
    ...obj,
  });
}

export interface ListTablesRequest {
  /**
   * <p>The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials. </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager. </p>
   */
  SecretArn?: string;

  /**
   * <p>The database user name. This parameter is required when authenticating using temporary credentials. </p>
   */
  DbUser?: string;

  /**
   * <p>The name of the database. This parameter is required when authenticating using temporary credentials.</p>
   */
  Database: string | undefined;

  /**
   * <p>A pattern to filter results by schema name. Within a schema pattern, "%" means match any
   *       substring of 0 or more characters and "_" means match any one character. Only schema name
   *       entries matching the search pattern are returned. If <code>SchemaPattern</code> is not specified, then all tables that match
   *        <code>TablePattern</code> are returned.
   *        If neither <code>SchemaPattern</code> or <code>TablePattern</code> are specified, then all tables are returned. </p>
   */
  SchemaPattern?: string;

  /**
   * <p>A pattern to filter results by table name. Within a table pattern, "%" means match any
   *       substring of 0 or more characters and "_" means match any one character. Only table name
   *       entries matching the search pattern are returned. If <code>TablePattern</code> is not specified, then all tables that match
   *        <code>SchemaPattern</code>are returned.
   *        If neither <code>SchemaPattern</code> or <code>TablePattern</code> are specified, then all tables are returned. </p>
   */
  TablePattern?: string;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of tables to return in the response.
   *        If more tables exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   */
  MaxResults?: number;
}

export namespace ListTablesRequest {
  export const filterSensitiveLog = (obj: ListTablesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a table. </p>
 */
export interface TableMember {
  /**
   * <p>The name of the table. </p>
   */
  name?: string;

  /**
   * <p>The type of the table. Possible values include TABLE, VIEW, SYSTEM TABLE, GLOBAL
   *       TEMPORARY, LOCAL TEMPORARY, ALIAS, and SYNONYM. </p>
   */
  type?: string;

  /**
   * <p>The schema containing the table. </p>
   */
  schema?: string;
}

export namespace TableMember {
  export const filterSensitiveLog = (obj: TableMember): any => ({
    ...obj,
  });
}

export interface ListTablesResponse {
  /**
   * <p>The tables that match the request pattern. </p>
   */
  Tables?: TableMember[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   */
  NextToken?: string;
}

export namespace ListTablesResponse {
  export const filterSensitiveLog = (obj: ListTablesResponse): any => ({
    ...obj,
  });
}
