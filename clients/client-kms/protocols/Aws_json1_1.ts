import {
  CancelKeyDeletionCommandInput,
  CancelKeyDeletionCommandOutput
} from "../commands/CancelKeyDeletionCommand";
import {
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput
} from "../commands/ConnectCustomKeyStoreCommand";
import {
  CreateAliasCommandInput,
  CreateAliasCommandOutput
} from "../commands/CreateAliasCommand";
import {
  CreateCustomKeyStoreCommandInput,
  CreateCustomKeyStoreCommandOutput
} from "../commands/CreateCustomKeyStoreCommand";
import {
  CreateGrantCommandInput,
  CreateGrantCommandOutput
} from "../commands/CreateGrantCommand";
import {
  CreateKeyCommandInput,
  CreateKeyCommandOutput
} from "../commands/CreateKeyCommand";
import {
  DecryptCommandInput,
  DecryptCommandOutput
} from "../commands/DecryptCommand";
import {
  DeleteAliasCommandInput,
  DeleteAliasCommandOutput
} from "../commands/DeleteAliasCommand";
import {
  DeleteCustomKeyStoreCommandInput,
  DeleteCustomKeyStoreCommandOutput
} from "../commands/DeleteCustomKeyStoreCommand";
import {
  DeleteImportedKeyMaterialCommandInput,
  DeleteImportedKeyMaterialCommandOutput
} from "../commands/DeleteImportedKeyMaterialCommand";
import {
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput
} from "../commands/DescribeCustomKeyStoresCommand";
import {
  DescribeKeyCommandInput,
  DescribeKeyCommandOutput
} from "../commands/DescribeKeyCommand";
import {
  DisableKeyCommandInput,
  DisableKeyCommandOutput
} from "../commands/DisableKeyCommand";
import {
  DisableKeyRotationCommandInput,
  DisableKeyRotationCommandOutput
} from "../commands/DisableKeyRotationCommand";
import {
  DisconnectCustomKeyStoreCommandInput,
  DisconnectCustomKeyStoreCommandOutput
} from "../commands/DisconnectCustomKeyStoreCommand";
import {
  EnableKeyCommandInput,
  EnableKeyCommandOutput
} from "../commands/EnableKeyCommand";
import {
  EnableKeyRotationCommandInput,
  EnableKeyRotationCommandOutput
} from "../commands/EnableKeyRotationCommand";
import {
  EncryptCommandInput,
  EncryptCommandOutput
} from "../commands/EncryptCommand";
import {
  GenerateDataKeyCommandInput,
  GenerateDataKeyCommandOutput
} from "../commands/GenerateDataKeyCommand";
import {
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput
} from "../commands/GenerateDataKeyPairCommand";
import {
  GenerateDataKeyPairWithoutPlaintextCommandInput,
  GenerateDataKeyPairWithoutPlaintextCommandOutput
} from "../commands/GenerateDataKeyPairWithoutPlaintextCommand";
import {
  GenerateDataKeyWithoutPlaintextCommandInput,
  GenerateDataKeyWithoutPlaintextCommandOutput
} from "../commands/GenerateDataKeyWithoutPlaintextCommand";
import {
  GenerateRandomCommandInput,
  GenerateRandomCommandOutput
} from "../commands/GenerateRandomCommand";
import {
  GetKeyPolicyCommandInput,
  GetKeyPolicyCommandOutput
} from "../commands/GetKeyPolicyCommand";
import {
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput
} from "../commands/GetKeyRotationStatusCommand";
import {
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput
} from "../commands/GetParametersForImportCommand";
import {
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput
} from "../commands/GetPublicKeyCommand";
import {
  ImportKeyMaterialCommandInput,
  ImportKeyMaterialCommandOutput
} from "../commands/ImportKeyMaterialCommand";
import {
  ListAliasesCommandInput,
  ListAliasesCommandOutput
} from "../commands/ListAliasesCommand";
import {
  ListGrantsCommandInput,
  ListGrantsCommandOutput
} from "../commands/ListGrantsCommand";
import {
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput
} from "../commands/ListKeyPoliciesCommand";
import {
  ListKeysCommandInput,
  ListKeysCommandOutput
} from "../commands/ListKeysCommand";
import {
  ListResourceTagsCommandInput,
  ListResourceTagsCommandOutput
} from "../commands/ListResourceTagsCommand";
import {
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput
} from "../commands/ListRetirableGrantsCommand";
import {
  PutKeyPolicyCommandInput,
  PutKeyPolicyCommandOutput
} from "../commands/PutKeyPolicyCommand";
import {
  ReEncryptCommandInput,
  ReEncryptCommandOutput
} from "../commands/ReEncryptCommand";
import {
  RetireGrantCommandInput,
  RetireGrantCommandOutput
} from "../commands/RetireGrantCommand";
import {
  RevokeGrantCommandInput,
  RevokeGrantCommandOutput
} from "../commands/RevokeGrantCommand";
import {
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput
} from "../commands/ScheduleKeyDeletionCommand";
import { SignCommandInput, SignCommandOutput } from "../commands/SignCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput
} from "../commands/UpdateAliasCommand";
import {
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput
} from "../commands/UpdateCustomKeyStoreCommand";
import {
  UpdateKeyDescriptionCommandInput,
  UpdateKeyDescriptionCommandOutput
} from "../commands/UpdateKeyDescriptionCommand";
import {
  VerifyCommandInput,
  VerifyCommandOutput
} from "../commands/VerifyCommand";
import {
  AliasListEntry,
  AlreadyExistsException,
  CancelKeyDeletionRequest,
  CancelKeyDeletionResponse,
  CloudHsmClusterInUseException,
  CloudHsmClusterInvalidConfigurationException,
  CloudHsmClusterNotActiveException,
  CloudHsmClusterNotFoundException,
  CloudHsmClusterNotRelatedException,
  ConnectCustomKeyStoreRequest,
  ConnectCustomKeyStoreResponse,
  CreateAliasRequest,
  CreateCustomKeyStoreRequest,
  CreateCustomKeyStoreResponse,
  CreateGrantRequest,
  CreateGrantResponse,
  CreateKeyRequest,
  CreateKeyResponse,
  CustomKeyStoreHasCMKsException,
  CustomKeyStoreInvalidStateException,
  CustomKeyStoreNameInUseException,
  CustomKeyStoreNotFoundException,
  CustomKeyStoresListEntry,
  DecryptRequest,
  DecryptResponse,
  DeleteAliasRequest,
  DeleteCustomKeyStoreRequest,
  DeleteCustomKeyStoreResponse,
  DeleteImportedKeyMaterialRequest,
  DependencyTimeoutException,
  DescribeCustomKeyStoresRequest,
  DescribeCustomKeyStoresResponse,
  DescribeKeyRequest,
  DescribeKeyResponse,
  DisableKeyRequest,
  DisableKeyRotationRequest,
  DisabledException,
  DisconnectCustomKeyStoreRequest,
  DisconnectCustomKeyStoreResponse,
  EnableKeyRequest,
  EnableKeyRotationRequest,
  EncryptRequest,
  EncryptResponse,
  EncryptionAlgorithmSpec,
  ExpiredImportTokenException,
  GenerateDataKeyPairRequest,
  GenerateDataKeyPairResponse,
  GenerateDataKeyPairWithoutPlaintextRequest,
  GenerateDataKeyPairWithoutPlaintextResponse,
  GenerateDataKeyRequest,
  GenerateDataKeyResponse,
  GenerateDataKeyWithoutPlaintextRequest,
  GenerateDataKeyWithoutPlaintextResponse,
  GenerateRandomRequest,
  GenerateRandomResponse,
  GetKeyPolicyRequest,
  GetKeyPolicyResponse,
  GetKeyRotationStatusRequest,
  GetKeyRotationStatusResponse,
  GetParametersForImportRequest,
  GetParametersForImportResponse,
  GetPublicKeyRequest,
  GetPublicKeyResponse,
  GrantConstraints,
  GrantListEntry,
  GrantOperation,
  ImportKeyMaterialRequest,
  ImportKeyMaterialResponse,
  IncorrectKeyException,
  IncorrectKeyMaterialException,
  IncorrectTrustAnchorException,
  InvalidAliasNameException,
  InvalidArnException,
  InvalidCiphertextException,
  InvalidGrantIdException,
  InvalidGrantTokenException,
  InvalidImportTokenException,
  InvalidKeyUsageException,
  InvalidMarkerException,
  KMSInternalException,
  KMSInvalidStateException,
  KeyListEntry,
  KeyMetadata,
  KeyUnavailableException,
  LimitExceededException,
  ListAliasesRequest,
  ListAliasesResponse,
  ListGrantsRequest,
  ListGrantsResponse,
  ListKeyPoliciesRequest,
  ListKeyPoliciesResponse,
  ListKeysRequest,
  ListKeysResponse,
  ListResourceTagsRequest,
  ListResourceTagsResponse,
  ListRetirableGrantsRequest,
  MalformedPolicyDocumentException,
  NotFoundException,
  PutKeyPolicyRequest,
  ReEncryptRequest,
  ReEncryptResponse,
  RetireGrantRequest,
  RevokeGrantRequest,
  ScheduleKeyDeletionRequest,
  ScheduleKeyDeletionResponse,
  SignRequest,
  SignResponse,
  SigningAlgorithmSpec,
  Tag,
  TagException,
  TagResourceRequest,
  UnsupportedOperationException,
  UntagResourceRequest,
  UpdateAliasRequest,
  UpdateCustomKeyStoreRequest,
  UpdateCustomKeyStoreResponse,
  UpdateKeyDescriptionRequest,
  VerifyRequest,
  VerifyResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CancelKeyDeletionCommand(
  input: CancelKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CancelKeyDeletion";
  let body: any = {};
  const wrappedBody: any = {
    CancelKeyDeletionRequest: serializeAws_json1_1CancelKeyDeletionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CancelKeyDeletion",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ConnectCustomKeyStoreCommand(
  input: ConnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ConnectCustomKeyStore";
  let body: any = {};
  const wrappedBody: any = {
    ConnectCustomKeyStoreRequest: serializeAws_json1_1ConnectCustomKeyStoreRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ConnectCustomKeyStore",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateAliasCommand(
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CreateAlias";
  let body: any = {};
  const wrappedBody: any = {
    CreateAliasRequest: serializeAws_json1_1CreateAliasRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateAlias",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateCustomKeyStoreCommand(
  input: CreateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CreateCustomKeyStore";
  let body: any = {};
  const wrappedBody: any = {
    CreateCustomKeyStoreRequest: serializeAws_json1_1CreateCustomKeyStoreRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCustomKeyStore",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateGrantCommand(
  input: CreateGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CreateGrant";
  let body: any = {};
  const wrappedBody: any = {
    CreateGrantRequest: serializeAws_json1_1CreateGrantRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateGrant",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateKeyCommand(
  input: CreateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CreateKey";
  let body: any = {};
  const wrappedBody: any = {
    CreateKeyRequest: serializeAws_json1_1CreateKeyRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateKey",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DecryptCommand(
  input: DecryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.Decrypt";
  let body: any = {};
  const wrappedBody: any = {
    DecryptRequest: serializeAws_json1_1DecryptRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/Decrypt",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteAliasCommand(
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DeleteAlias";
  let body: any = {};
  const wrappedBody: any = {
    DeleteAliasRequest: serializeAws_json1_1DeleteAliasRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteAlias",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteCustomKeyStoreCommand(
  input: DeleteCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DeleteCustomKeyStore";
  let body: any = {};
  const wrappedBody: any = {
    DeleteCustomKeyStoreRequest: serializeAws_json1_1DeleteCustomKeyStoreRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteCustomKeyStore",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteImportedKeyMaterialCommand(
  input: DeleteImportedKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DeleteImportedKeyMaterial";
  let body: any = {};
  const wrappedBody: any = {
    DeleteImportedKeyMaterialRequest: serializeAws_json1_1DeleteImportedKeyMaterialRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteImportedKeyMaterial",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeCustomKeyStoresCommand(
  input: DescribeCustomKeyStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DescribeCustomKeyStores";
  let body: any = {};
  const wrappedBody: any = {
    DescribeCustomKeyStoresRequest: serializeAws_json1_1DescribeCustomKeyStoresRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeCustomKeyStores",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeKeyCommand(
  input: DescribeKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DescribeKey";
  let body: any = {};
  const wrappedBody: any = {
    DescribeKeyRequest: serializeAws_json1_1DescribeKeyRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeKey",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisableKeyCommand(
  input: DisableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DisableKey";
  let body: any = {};
  const wrappedBody: any = {
    DisableKeyRequest: serializeAws_json1_1DisableKeyRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisableKey",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisableKeyRotationCommand(
  input: DisableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DisableKeyRotation";
  let body: any = {};
  const wrappedBody: any = {
    DisableKeyRotationRequest: serializeAws_json1_1DisableKeyRotationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisableKeyRotation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisconnectCustomKeyStoreCommand(
  input: DisconnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DisconnectCustomKeyStore";
  let body: any = {};
  const wrappedBody: any = {
    DisconnectCustomKeyStoreRequest: serializeAws_json1_1DisconnectCustomKeyStoreRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisconnectCustomKeyStore",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1EnableKeyCommand(
  input: EnableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.EnableKey";
  let body: any = {};
  const wrappedBody: any = {
    EnableKeyRequest: serializeAws_json1_1EnableKeyRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/EnableKey",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1EnableKeyRotationCommand(
  input: EnableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.EnableKeyRotation";
  let body: any = {};
  const wrappedBody: any = {
    EnableKeyRotationRequest: serializeAws_json1_1EnableKeyRotationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/EnableKeyRotation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1EncryptCommand(
  input: EncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.Encrypt";
  let body: any = {};
  const wrappedBody: any = {
    EncryptRequest: serializeAws_json1_1EncryptRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/Encrypt",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GenerateDataKeyCommand(
  input: GenerateDataKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateDataKey";
  let body: any = {};
  const wrappedBody: any = {
    GenerateDataKeyRequest: serializeAws_json1_1GenerateDataKeyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GenerateDataKey",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GenerateDataKeyPairCommand(
  input: GenerateDataKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateDataKeyPair";
  let body: any = {};
  const wrappedBody: any = {
    GenerateDataKeyPairRequest: serializeAws_json1_1GenerateDataKeyPairRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GenerateDataKeyPair",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(
  input: GenerateDataKeyPairWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateDataKeyPairWithoutPlaintext";
  let body: any = {};
  const wrappedBody: any = {
    GenerateDataKeyPairWithoutPlaintextRequest: serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GenerateDataKeyPairWithoutPlaintext",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand(
  input: GenerateDataKeyWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateDataKeyWithoutPlaintext";
  let body: any = {};
  const wrappedBody: any = {
    GenerateDataKeyWithoutPlaintextRequest: serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GenerateDataKeyWithoutPlaintext",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GenerateRandomCommand(
  input: GenerateRandomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateRandom";
  let body: any = {};
  const wrappedBody: any = {
    GenerateRandomRequest: serializeAws_json1_1GenerateRandomRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GenerateRandom",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetKeyPolicyCommand(
  input: GetKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GetKeyPolicy";
  let body: any = {};
  const wrappedBody: any = {
    GetKeyPolicyRequest: serializeAws_json1_1GetKeyPolicyRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetKeyPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetKeyRotationStatusCommand(
  input: GetKeyRotationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GetKeyRotationStatus";
  let body: any = {};
  const wrappedBody: any = {
    GetKeyRotationStatusRequest: serializeAws_json1_1GetKeyRotationStatusRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetKeyRotationStatus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetParametersForImportCommand(
  input: GetParametersForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GetParametersForImport";
  let body: any = {};
  const wrappedBody: any = {
    GetParametersForImportRequest: serializeAws_json1_1GetParametersForImportRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetParametersForImport",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetPublicKeyCommand(
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GetPublicKey";
  let body: any = {};
  const wrappedBody: any = {
    GetPublicKeyRequest: serializeAws_json1_1GetPublicKeyRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetPublicKey",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ImportKeyMaterialCommand(
  input: ImportKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ImportKeyMaterial";
  let body: any = {};
  const wrappedBody: any = {
    ImportKeyMaterialRequest: serializeAws_json1_1ImportKeyMaterialRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ImportKeyMaterial",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListAliasesCommand(
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListAliases";
  let body: any = {};
  const wrappedBody: any = {
    ListAliasesRequest: serializeAws_json1_1ListAliasesRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListAliases",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListGrantsCommand(
  input: ListGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListGrants";
  let body: any = {};
  const wrappedBody: any = {
    ListGrantsRequest: serializeAws_json1_1ListGrantsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListGrants",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListKeyPoliciesCommand(
  input: ListKeyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListKeyPolicies";
  let body: any = {};
  const wrappedBody: any = {
    ListKeyPoliciesRequest: serializeAws_json1_1ListKeyPoliciesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListKeyPolicies",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListKeysCommand(
  input: ListKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListKeys";
  let body: any = {};
  const wrappedBody: any = {
    ListKeysRequest: serializeAws_json1_1ListKeysRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListKeys",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListResourceTagsCommand(
  input: ListResourceTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListResourceTags";
  let body: any = {};
  const wrappedBody: any = {
    ListResourceTagsRequest: serializeAws_json1_1ListResourceTagsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListResourceTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListRetirableGrantsCommand(
  input: ListRetirableGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListRetirableGrants";
  let body: any = {};
  const wrappedBody: any = {
    ListRetirableGrantsRequest: serializeAws_json1_1ListRetirableGrantsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListRetirableGrants",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutKeyPolicyCommand(
  input: PutKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.PutKeyPolicy";
  let body: any = {};
  const wrappedBody: any = {
    PutKeyPolicyRequest: serializeAws_json1_1PutKeyPolicyRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutKeyPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ReEncryptCommand(
  input: ReEncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ReEncrypt";
  let body: any = {};
  const wrappedBody: any = {
    ReEncryptRequest: serializeAws_json1_1ReEncryptRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ReEncrypt",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RetireGrantCommand(
  input: RetireGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.RetireGrant";
  let body: any = {};
  const wrappedBody: any = {
    RetireGrantRequest: serializeAws_json1_1RetireGrantRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RetireGrant",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RevokeGrantCommand(
  input: RevokeGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.RevokeGrant";
  let body: any = {};
  const wrappedBody: any = {
    RevokeGrantRequest: serializeAws_json1_1RevokeGrantRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RevokeGrant",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ScheduleKeyDeletionCommand(
  input: ScheduleKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ScheduleKeyDeletion";
  let body: any = {};
  const wrappedBody: any = {
    ScheduleKeyDeletionRequest: serializeAws_json1_1ScheduleKeyDeletionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ScheduleKeyDeletion",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1SignCommand(
  input: SignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.Sign";
  let body: any = {};
  const wrappedBody: any = {
    SignRequest: serializeAws_json1_1SignRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/Sign",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateAliasCommand(
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.UpdateAlias";
  let body: any = {};
  const wrappedBody: any = {
    UpdateAliasRequest: serializeAws_json1_1UpdateAliasRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateAlias",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateCustomKeyStoreCommand(
  input: UpdateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.UpdateCustomKeyStore";
  let body: any = {};
  const wrappedBody: any = {
    UpdateCustomKeyStoreRequest: serializeAws_json1_1UpdateCustomKeyStoreRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateCustomKeyStore",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateKeyDescriptionCommand(
  input: UpdateKeyDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.UpdateKeyDescription";
  let body: any = {};
  const wrappedBody: any = {
    UpdateKeyDescriptionRequest: serializeAws_json1_1UpdateKeyDescriptionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateKeyDescription",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1VerifyCommand(
  input: VerifyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.Verify";
  let body: any = {};
  const wrappedBody: any = {
    VerifyRequest: serializeAws_json1_1VerifyRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/Verify",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CancelKeyDeletionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelKeyDeletionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelKeyDeletionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelKeyDeletionResponse(
    data.CancelKeyDeletionResponse,
    context
  );
  const response: CancelKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelKeyDeletionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CancelKeyDeletionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelKeyDeletionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ConnectCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ConnectCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConnectCustomKeyStoreResponse(
    data.ConnectCustomKeyStoreResponse,
    context
  );
  const response: ConnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConnectCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ConnectCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectCustomKeyStoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
      response = await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazon.trent#CloudHsmClusterNotActiveException":
      response = await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAliasCommandError(output, context);
  }
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.trent#AlreadyExistsException":
      response = await deserializeAws_json1_1AlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAliasNameException":
    case "com.amazon.trent#InvalidAliasNameException":
      response = await deserializeAws_json1_1InvalidAliasNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomKeyStoreResponse(
    data.CreateCustomKeyStoreResponse,
    context
  );
  const response: CreateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomKeyStoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmClusterInUseException":
    case "com.amazon.trent#CloudHsmClusterInUseException":
      response = await deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
      response = await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazon.trent#CloudHsmClusterNotActiveException":
      response = await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmClusterNotFoundException":
    case "com.amazon.trent#CloudHsmClusterNotFoundException":
      response = await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreNameInUseException":
    case "com.amazon.trent#CustomKeyStoreNameInUseException":
      response = await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectTrustAnchorException":
    case "com.amazon.trent#IncorrectTrustAnchorException":
      response = await deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateGrantCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGrantResponse(
    data.CreateGrantResponse,
    context
  );
  const response: CreateGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGrantResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateGrantCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateKeyResponse(
    data.CreateKeyResponse,
    context
  );
  const response: CreateKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
      response = await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazon.trent#MalformedPolicyDocumentException":
      response = await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagException":
    case "com.amazon.trent#TagException":
      response = await deserializeAws_json1_1TagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DecryptCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DecryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DecryptResponse(
    data.DecryptResponse,
    context
  );
  const response: DecryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DecryptResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DecryptCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectKeyException":
    case "com.amazon.trent#IncorrectKeyException":
      response = await deserializeAws_json1_1IncorrectKeyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidCiphertextException":
    case "com.amazon.trent#InvalidCiphertextException":
      response = await deserializeAws_json1_1InvalidCiphertextExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAliasCommandError(output, context);
  }
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCustomKeyStoreResponse(
    data.DeleteCustomKeyStoreResponse,
    context
  );
  const response: DeleteCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomKeyStoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomKeyStoreHasCMKsException":
    case "com.amazon.trent#CustomKeyStoreHasCMKsException":
      response = await deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteImportedKeyMaterialCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportedKeyMaterialCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(
      output,
      context
    );
  }
  const response: DeleteImportedKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportedKeyMaterialCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeCustomKeyStoresCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomKeyStoresCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCustomKeyStoresCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCustomKeyStoresResponse(
    data.DescribeCustomKeyStoresResponse,
    context
  );
  const response: DescribeCustomKeyStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCustomKeyStoresResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCustomKeyStoresCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomKeyStoresCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeKeyResponse(
    data.DescribeKeyResponse,
    context
  );
  const response: DescribeKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DisableKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableKeyCommandError(output, context);
  }
  const response: DisableKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DisableKeyRotationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyRotationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableKeyRotationCommandError(
      output,
      context
    );
  }
  const response: DisableKeyRotationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableKeyRotationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyRotationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DisconnectCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisconnectCustomKeyStoreResponse(
    data.DisconnectCustomKeyStoreResponse,
    context
  );
  const response: DisconnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisconnectCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectCustomKeyStoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1EnableKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableKeyCommandError(output, context);
  }
  const response: EnableKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1EnableKeyRotationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyRotationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableKeyRotationCommandError(output, context);
  }
  const response: EnableKeyRotationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableKeyRotationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyRotationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1EncryptCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EncryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EncryptResponse(
    data.EncryptResponse,
    context
  );
  const response: EncryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EncryptResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EncryptCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GenerateDataKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyResponse(
    data.GenerateDataKeyResponse,
    context
  );
  const response: GenerateDataKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GenerateDataKeyPairCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataKeyPairCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyPairResponse(
    data.GenerateDataKeyPairResponse,
    context
  );
  const response: GenerateDataKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataKeyPairResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataKeyPairCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse(
    data.GenerateDataKeyPairWithoutPlaintextResponse,
    context
  );
  const response: GenerateDataKeyPairWithoutPlaintextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataKeyPairWithoutPlaintextResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyWithoutPlaintextCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse(
    data.GenerateDataKeyWithoutPlaintextResponse,
    context
  );
  const response: GenerateDataKeyWithoutPlaintextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataKeyWithoutPlaintextResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyWithoutPlaintextCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GenerateRandomCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRandomCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateRandomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateRandomResponse(
    data.GenerateRandomResponse,
    context
  );
  const response: GenerateRandomCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateRandomResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateRandomCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRandomCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetKeyPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetKeyPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPolicyResponse(
    data.GetKeyPolicyResponse,
    context
  );
  const response: GetKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetKeyPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetKeyPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetKeyRotationStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyRotationStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetKeyRotationStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyRotationStatusResponse(
    data.GetKeyRotationStatusResponse,
    context
  );
  const response: GetKeyRotationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetKeyRotationStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetKeyRotationStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyRotationStatusCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetParametersForImportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetParametersForImportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParametersForImportResponse(
    data.GetParametersForImportResponse,
    context
  );
  const response: GetParametersForImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetParametersForImportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetParametersForImportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetPublicKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPublicKeyResponse(
    data.GetPublicKeyResponse,
    context
  );
  const response: GetPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPublicKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetPublicKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ImportKeyMaterialCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyMaterialCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportKeyMaterialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportKeyMaterialResponse(
    data.ImportKeyMaterialResponse,
    context
  );
  const response: ImportKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportKeyMaterialResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportKeyMaterialCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyMaterialCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ExpiredImportTokenException":
    case "com.amazon.trent#ExpiredImportTokenException":
      response = await deserializeAws_json1_1ExpiredImportTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectKeyMaterialException":
    case "com.amazon.trent#IncorrectKeyMaterialException":
      response = await deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidCiphertextException":
    case "com.amazon.trent#InvalidCiphertextException":
      response = await deserializeAws_json1_1InvalidCiphertextExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidImportTokenException":
    case "com.amazon.trent#InvalidImportTokenException":
      response = await deserializeAws_json1_1InvalidImportTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListAliasesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAliasesResponse(
    data.ListAliasesResponse,
    context
  );
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAliasesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAliasesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = await deserializeAws_json1_1InvalidMarkerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListGrantsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGrantsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGrantsResponse(
    data.ListGrantsResponse,
    context
  );
  const response: ListGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGrantsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListGrantsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGrantsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = await deserializeAws_json1_1InvalidMarkerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListKeyPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPoliciesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListKeyPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListKeyPoliciesResponse(
    data.ListKeyPoliciesResponse,
    context
  );
  const response: ListKeyPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListKeyPoliciesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListKeyPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPoliciesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListKeysResponse(
    data.ListKeysResponse,
    context
  );
  const response: ListKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListKeysResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = await deserializeAws_json1_1InvalidMarkerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListResourceTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourceTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceTagsResponse(
    data.ListResourceTagsResponse,
    context
  );
  const response: ListResourceTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourceTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListResourceTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = await deserializeAws_json1_1InvalidMarkerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListRetirableGrantsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetirableGrantsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRetirableGrantsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGrantsResponse(
    data.ListGrantsResponse,
    context
  );
  const response: ListRetirableGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGrantsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRetirableGrantsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetirableGrantsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = await deserializeAws_json1_1InvalidMarkerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutKeyPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeyPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutKeyPolicyCommandError(output, context);
  }
  const response: PutKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutKeyPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeyPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazon.trent#MalformedPolicyDocumentException":
      response = await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ReEncryptCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ReEncryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReEncryptResponse(
    data.ReEncryptResponse,
    context
  );
  const response: ReEncryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReEncryptResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ReEncryptCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectKeyException":
    case "com.amazon.trent#IncorrectKeyException":
      response = await deserializeAws_json1_1IncorrectKeyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidCiphertextException":
    case "com.amazon.trent#InvalidCiphertextException":
      response = await deserializeAws_json1_1InvalidCiphertextExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RetireGrantCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetireGrantCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RetireGrantCommandError(output, context);
  }
  const response: RetireGrantCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RetireGrantCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetireGrantCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantIdException":
    case "com.amazon.trent#InvalidGrantIdException":
      response = await deserializeAws_json1_1InvalidGrantIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RevokeGrantCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeGrantCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokeGrantCommandError(output, context);
  }
  const response: RevokeGrantCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RevokeGrantCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeGrantCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantIdException":
    case "com.amazon.trent#InvalidGrantIdException":
      response = await deserializeAws_json1_1InvalidGrantIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ScheduleKeyDeletionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleKeyDeletionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ScheduleKeyDeletionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ScheduleKeyDeletionResponse(
    data.ScheduleKeyDeletionResponse,
    context
  );
  const response: ScheduleKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ScheduleKeyDeletionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ScheduleKeyDeletionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleKeyDeletionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1SignCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SignResponse(data.SignResponse, context);
  const response: SignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SignResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SignCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagException":
    case "com.amazon.trent#TagException":
      response = await deserializeAws_json1_1TagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagException":
    case "com.amazon.trent#TagException":
      response = await deserializeAws_json1_1TagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateAliasCommandError(output, context);
  }
  const response: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCustomKeyStoreResponse(
    data.UpdateCustomKeyStoreResponse,
    context
  );
  const response: UpdateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomKeyStoreCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
      response = await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazon.trent#CloudHsmClusterNotActiveException":
      response = await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmClusterNotFoundException":
    case "com.amazon.trent#CloudHsmClusterNotFoundException":
      response = await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmClusterNotRelatedException":
    case "com.amazon.trent#CloudHsmClusterNotRelatedException":
      response = await deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreNameInUseException":
    case "com.amazon.trent#CustomKeyStoreNameInUseException":
      response = await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateKeyDescriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyDescriptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateKeyDescriptionCommandError(
      output,
      context
    );
  }
  const response: UpdateKeyDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateKeyDescriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyDescriptionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1VerifyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1VerifyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VerifyResponse(data.VerifyResponse, context);
  const response: VerifyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VerifyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1VerifyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = await deserializeAws_json1_1DisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = await deserializeAws_json1_1KMSInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = await deserializeAws_json1_1KeyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.trent#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(
    output.body,
    context
  );
  const contents: AlreadyExistsException = {
    __type: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInUseException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterInUseException(
    output.body,
    context
  );
  const contents: CloudHsmClusterInUseException = {
    __type: "CloudHsmClusterInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInvalidConfigurationException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException(
    output.body,
    context
  );
  const contents: CloudHsmClusterInvalidConfigurationException = {
    __type: "CloudHsmClusterInvalidConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotActiveException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotActiveException(
    output.body,
    context
  );
  const contents: CloudHsmClusterNotActiveException = {
    __type: "CloudHsmClusterNotActiveException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotFoundException(
    output.body,
    context
  );
  const contents: CloudHsmClusterNotFoundException = {
    __type: "CloudHsmClusterNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotRelatedException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotRelatedException(
    output.body,
    context
  );
  const contents: CloudHsmClusterNotRelatedException = {
    __type: "CloudHsmClusterNotRelatedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CustomKeyStoreHasCMKsException> => {
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreHasCMKsException(
    output.body,
    context
  );
  const contents: CustomKeyStoreHasCMKsException = {
    __type: "CustomKeyStoreHasCMKsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CustomKeyStoreInvalidStateException> => {
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreInvalidStateException(
    output.body,
    context
  );
  const contents: CustomKeyStoreInvalidStateException = {
    __type: "CustomKeyStoreInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNameInUseException> => {
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreNameInUseException(
    output.body,
    context
  );
  const contents: CustomKeyStoreNameInUseException = {
    __type: "CustomKeyStoreNameInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreNotFoundException(
    output.body,
    context
  );
  const contents: CustomKeyStoreNotFoundException = {
    __type: "CustomKeyStoreNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DependencyTimeoutExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyTimeoutException> => {
  const deserialized: any = deserializeAws_json1_1DependencyTimeoutException(
    output.body,
    context
  );
  const contents: DependencyTimeoutException = {
    __type: "DependencyTimeoutException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DisabledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DisabledException> => {
  const deserialized: any = deserializeAws_json1_1DisabledException(
    output.body,
    context
  );
  const contents: DisabledException = {
    __type: "DisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ExpiredImportTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ExpiredImportTokenException> => {
  const deserialized: any = deserializeAws_json1_1ExpiredImportTokenException(
    output.body,
    context
  );
  const contents: ExpiredImportTokenException = {
    __type: "ExpiredImportTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IncorrectKeyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncorrectKeyException> => {
  const deserialized: any = deserializeAws_json1_1IncorrectKeyException(
    output.body,
    context
  );
  const contents: IncorrectKeyException = {
    __type: "IncorrectKeyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncorrectKeyMaterialException> => {
  const deserialized: any = deserializeAws_json1_1IncorrectKeyMaterialException(
    output.body,
    context
  );
  const contents: IncorrectKeyMaterialException = {
    __type: "IncorrectKeyMaterialException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncorrectTrustAnchorException> => {
  const deserialized: any = deserializeAws_json1_1IncorrectTrustAnchorException(
    output.body,
    context
  );
  const contents: IncorrectTrustAnchorException = {
    __type: "IncorrectTrustAnchorException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAliasNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidAliasNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidAliasNameException(
    output.body,
    context
  );
  const contents: InvalidAliasNameException = {
    __type: "InvalidAliasNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArnException(
    output.body,
    context
  );
  const contents: InvalidArnException = {
    __type: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCiphertextExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidCiphertextException> => {
  const deserialized: any = deserializeAws_json1_1InvalidCiphertextException(
    output.body,
    context
  );
  const contents: InvalidCiphertextException = {
    __type: "InvalidCiphertextException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGrantIdExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidGrantIdException> => {
  const deserialized: any = deserializeAws_json1_1InvalidGrantIdException(
    output.body,
    context
  );
  const contents: InvalidGrantIdException = {
    __type: "InvalidGrantIdException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGrantTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidGrantTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidGrantTokenException(
    output.body,
    context
  );
  const contents: InvalidGrantTokenException = {
    __type: "InvalidGrantTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidImportTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidImportTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidImportTokenException(
    output.body,
    context
  );
  const contents: InvalidImportTokenException = {
    __type: "InvalidImportTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidKeyUsageExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidKeyUsageException> => {
  const deserialized: any = deserializeAws_json1_1InvalidKeyUsageException(
    output.body,
    context
  );
  const contents: InvalidKeyUsageException = {
    __type: "InvalidKeyUsageException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidMarkerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidMarkerException> => {
  const deserialized: any = deserializeAws_json1_1InvalidMarkerException(
    output.body,
    context
  );
  const contents: InvalidMarkerException = {
    __type: "InvalidMarkerException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSInternalExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<KMSInternalException> => {
  const deserialized: any = deserializeAws_json1_1KMSInternalException(
    output.body,
    context
  );
  const contents: KMSInternalException = {
    __type: "KMSInternalException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const deserialized: any = deserializeAws_json1_1KMSInvalidStateException(
    output.body,
    context
  );
  const contents: KMSInvalidStateException = {
    __type: "KMSInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KeyUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<KeyUnavailableException> => {
  const deserialized: any = deserializeAws_json1_1KeyUnavailableException(
    output.body,
    context
  );
  const contents: KeyUnavailableException = {
    __type: "KeyUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(
    output.body,
    context
  );
  const contents: MalformedPolicyDocumentException = {
    __type: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const deserialized: any = deserializeAws_json1_1NotFoundException(
    output.body,
    context
  );
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagException> => {
  const deserialized: any = deserializeAws_json1_1TagException(
    output.body,
    context
  );
  const contents: TagException = {
    __type: "TagException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(
    output.body,
    context
  );
  const contents: UnsupportedOperationException = {
    __type: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CancelKeyDeletionRequest = (
  input: CancelKeyDeletionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1ConnectCustomKeyStoreRequest = (
  input: ConnectCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateAliasRequest = (
  input: CreateAliasRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AliasName !== undefined) {
    bodyParams["AliasName"] = input.AliasName;
  }
  if (input.TargetKeyId !== undefined) {
    bodyParams["TargetKeyId"] = input.TargetKeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCustomKeyStoreRequest = (
  input: CreateCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudHsmClusterId !== undefined) {
    bodyParams["CloudHsmClusterId"] = input.CloudHsmClusterId;
  }
  if (input.CustomKeyStoreName !== undefined) {
    bodyParams["CustomKeyStoreName"] = input.CustomKeyStoreName;
  }
  if (input.KeyStorePassword !== undefined) {
    bodyParams["KeyStorePassword"] = input.KeyStorePassword;
  }
  if (input.TrustAnchorCertificate !== undefined) {
    bodyParams["TrustAnchorCertificate"] = input.TrustAnchorCertificate;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateGrantRequest = (
  input: CreateGrantRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Constraints !== undefined) {
    bodyParams["Constraints"] = serializeAws_json1_1GrantConstraints(
      input.Constraints,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.GranteePrincipal !== undefined) {
    bodyParams["GranteePrincipal"] = input.GranteePrincipal;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Operations !== undefined) {
    bodyParams["Operations"] = serializeAws_json1_1GrantOperationList(
      input.Operations,
      context
    );
  }
  if (input.RetiringPrincipal !== undefined) {
    bodyParams["RetiringPrincipal"] = input.RetiringPrincipal;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateKeyRequest = (
  input: CreateKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BypassPolicyLockoutSafetyCheck !== undefined) {
    bodyParams["BypassPolicyLockoutSafetyCheck"] =
      input.BypassPolicyLockoutSafetyCheck;
  }
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  if (input.CustomerMasterKeySpec !== undefined) {
    bodyParams["CustomerMasterKeySpec"] = input.CustomerMasterKeySpec;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.KeyUsage !== undefined) {
    bodyParams["KeyUsage"] = input.KeyUsage;
  }
  if (input.Origin !== undefined) {
    bodyParams["Origin"] = input.Origin;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DecryptRequest = (
  input: DecryptRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CiphertextBlob !== undefined) {
    bodyParams["CiphertextBlob"] = context.base64Encoder(input.CiphertextBlob);
  }
  if (input.EncryptionAlgorithm !== undefined) {
    bodyParams["EncryptionAlgorithm"] = input.EncryptionAlgorithm;
  }
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAliasRequest = (
  input: DeleteAliasRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AliasName !== undefined) {
    bodyParams["AliasName"] = input.AliasName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCustomKeyStoreRequest = (
  input: DeleteCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteImportedKeyMaterialRequest = (
  input: DeleteImportedKeyMaterialRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCustomKeyStoresRequest = (
  input: DescribeCustomKeyStoresRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  if (input.CustomKeyStoreName !== undefined) {
    bodyParams["CustomKeyStoreName"] = input.CustomKeyStoreName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeKeyRequest = (
  input: DescribeKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableKeyRequest = (
  input: DisableKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableKeyRotationRequest = (
  input: DisableKeyRotationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisconnectCustomKeyStoreRequest = (
  input: DisconnectCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableKeyRequest = (
  input: EnableKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableKeyRotationRequest = (
  input: EnableKeyRotationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptRequest = (
  input: EncryptRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EncryptionAlgorithm !== undefined) {
    bodyParams["EncryptionAlgorithm"] = input.EncryptionAlgorithm;
  }
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Plaintext !== undefined) {
    bodyParams["Plaintext"] = context.base64Encoder(input.Plaintext);
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionContextType = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1GenerateDataKeyPairRequest = (
  input: GenerateDataKeyPairRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeyPairSpec !== undefined) {
    bodyParams["KeyPairSpec"] = input.KeyPairSpec;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest = (
  input: GenerateDataKeyPairWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeyPairSpec !== undefined) {
    bodyParams["KeyPairSpec"] = input.KeyPairSpec;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateDataKeyRequest = (
  input: GenerateDataKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeySpec !== undefined) {
    bodyParams["KeySpec"] = input.KeySpec;
  }
  if (input.NumberOfBytes !== undefined) {
    bodyParams["NumberOfBytes"] = input.NumberOfBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest = (
  input: GenerateDataKeyWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeySpec !== undefined) {
    bodyParams["KeySpec"] = input.KeySpec;
  }
  if (input.NumberOfBytes !== undefined) {
    bodyParams["NumberOfBytes"] = input.NumberOfBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateRandomRequest = (
  input: GenerateRandomRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  if (input.NumberOfBytes !== undefined) {
    bodyParams["NumberOfBytes"] = input.NumberOfBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1GetKeyPolicyRequest = (
  input: GetKeyPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.PolicyName !== undefined) {
    bodyParams["PolicyName"] = input.PolicyName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetKeyRotationStatusRequest = (
  input: GetKeyRotationStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetParametersForImportRequest = (
  input: GetParametersForImportRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.WrappingAlgorithm !== undefined) {
    bodyParams["WrappingAlgorithm"] = input.WrappingAlgorithm;
  }
  if (input.WrappingKeySpec !== undefined) {
    bodyParams["WrappingKeySpec"] = input.WrappingKeySpec;
  }
  return bodyParams;
};

const serializeAws_json1_1GetPublicKeyRequest = (
  input: GetPublicKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1GrantConstraints = (
  input: GrantConstraints,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EncryptionContextEquals !== undefined) {
    bodyParams[
      "EncryptionContextEquals"
    ] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContextEquals,
      context
    );
  }
  if (input.EncryptionContextSubset !== undefined) {
    bodyParams[
      "EncryptionContextSubset"
    ] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContextSubset,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GrantOperationList = (
  input: Array<GrantOperation | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1GrantTokenList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ImportKeyMaterialRequest = (
  input: ImportKeyMaterialRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EncryptedKeyMaterial !== undefined) {
    bodyParams["EncryptedKeyMaterial"] = context.base64Encoder(
      input.EncryptedKeyMaterial
    );
  }
  if (input.ExpirationModel !== undefined) {
    bodyParams["ExpirationModel"] = input.ExpirationModel;
  }
  if (input.ImportToken !== undefined) {
    bodyParams["ImportToken"] = context.base64Encoder(input.ImportToken);
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.ValidTo !== undefined) {
    bodyParams["ValidTo"] = Math.round(input.ValidTo.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1ListAliasesRequest = (
  input: ListAliasesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListGrantsRequest = (
  input: ListGrantsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListKeyPoliciesRequest = (
  input: ListKeyPoliciesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListKeysRequest = (
  input: ListKeysRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResourceTagsRequest = (
  input: ListResourceTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRetirableGrantsRequest = (
  input: ListRetirableGrantsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.RetiringPrincipal !== undefined) {
    bodyParams["RetiringPrincipal"] = input.RetiringPrincipal;
  }
  return bodyParams;
};

const serializeAws_json1_1PutKeyPolicyRequest = (
  input: PutKeyPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BypassPolicyLockoutSafetyCheck !== undefined) {
    bodyParams["BypassPolicyLockoutSafetyCheck"] =
      input.BypassPolicyLockoutSafetyCheck;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  if (input.PolicyName !== undefined) {
    bodyParams["PolicyName"] = input.PolicyName;
  }
  return bodyParams;
};

const serializeAws_json1_1ReEncryptRequest = (
  input: ReEncryptRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CiphertextBlob !== undefined) {
    bodyParams["CiphertextBlob"] = context.base64Encoder(input.CiphertextBlob);
  }
  if (input.DestinationEncryptionAlgorithm !== undefined) {
    bodyParams["DestinationEncryptionAlgorithm"] =
      input.DestinationEncryptionAlgorithm;
  }
  if (input.DestinationEncryptionContext !== undefined) {
    bodyParams[
      "DestinationEncryptionContext"
    ] = serializeAws_json1_1EncryptionContextType(
      input.DestinationEncryptionContext,
      context
    );
  }
  if (input.DestinationKeyId !== undefined) {
    bodyParams["DestinationKeyId"] = input.DestinationKeyId;
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.SourceEncryptionAlgorithm !== undefined) {
    bodyParams["SourceEncryptionAlgorithm"] = input.SourceEncryptionAlgorithm;
  }
  if (input.SourceEncryptionContext !== undefined) {
    bodyParams[
      "SourceEncryptionContext"
    ] = serializeAws_json1_1EncryptionContextType(
      input.SourceEncryptionContext,
      context
    );
  }
  if (input.SourceKeyId !== undefined) {
    bodyParams["SourceKeyId"] = input.SourceKeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1RetireGrantRequest = (
  input: RetireGrantRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GrantId !== undefined) {
    bodyParams["GrantId"] = input.GrantId;
  }
  if (input.GrantToken !== undefined) {
    bodyParams["GrantToken"] = input.GrantToken;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1RevokeGrantRequest = (
  input: RevokeGrantRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GrantId !== undefined) {
    bodyParams["GrantId"] = input.GrantId;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1ScheduleKeyDeletionRequest = (
  input: ScheduleKeyDeletionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.PendingWindowInDays !== undefined) {
    bodyParams["PendingWindowInDays"] = input.PendingWindowInDays;
  }
  return bodyParams;
};

const serializeAws_json1_1SignRequest = (
  input: SignRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Message !== undefined) {
    bodyParams["Message"] = context.base64Encoder(input.Message);
  }
  if (input.MessageType !== undefined) {
    bodyParams["MessageType"] = input.MessageType;
  }
  if (input.SigningAlgorithm !== undefined) {
    bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.TagKey !== undefined) {
    bodyParams["TagKey"] = input.TagKey;
  }
  if (input.TagValue !== undefined) {
    bodyParams["TagValue"] = input.TagValue;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateAliasRequest = (
  input: UpdateAliasRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AliasName !== undefined) {
    bodyParams["AliasName"] = input.AliasName;
  }
  if (input.TargetKeyId !== undefined) {
    bodyParams["TargetKeyId"] = input.TargetKeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateCustomKeyStoreRequest = (
  input: UpdateCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudHsmClusterId !== undefined) {
    bodyParams["CloudHsmClusterId"] = input.CloudHsmClusterId;
  }
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  if (input.KeyStorePassword !== undefined) {
    bodyParams["KeyStorePassword"] = input.KeyStorePassword;
  }
  if (input.NewCustomKeyStoreName !== undefined) {
    bodyParams["NewCustomKeyStoreName"] = input.NewCustomKeyStoreName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateKeyDescriptionRequest = (
  input: UpdateKeyDescriptionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1VerifyRequest = (
  input: VerifyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Message !== undefined) {
    bodyParams["Message"] = context.base64Encoder(input.Message);
  }
  if (input.MessageType !== undefined) {
    bodyParams["MessageType"] = input.MessageType;
  }
  if (input.Signature !== undefined) {
    bodyParams["Signature"] = context.base64Encoder(input.Signature);
  }
  if (input.SigningAlgorithm !== undefined) {
    bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
  }
  return bodyParams;
};

const deserializeAws_json1_1AliasList = (
  output: any,
  context: __SerdeContext
): Array<AliasListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AliasListEntry(entry, context)
  );
};

const deserializeAws_json1_1AliasListEntry = (
  output: any,
  context: __SerdeContext
): AliasListEntry => {
  let contents: any = {
    __type: "AliasListEntry",
    AliasArn: undefined,
    AliasName: undefined,
    TargetKeyId: undefined
  };
  if (output.AliasArn !== undefined) {
    contents.AliasArn = output.AliasArn;
  }
  if (output.AliasName !== undefined) {
    contents.AliasName = output.AliasName;
  }
  if (output.TargetKeyId !== undefined) {
    contents.TargetKeyId = output.TargetKeyId;
  }
  return contents;
};

const deserializeAws_json1_1AlreadyExistsException = (
  output: any,
  context: __SerdeContext
): AlreadyExistsException => {
  let contents: any = {
    __type: "AlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CancelKeyDeletionResponse = (
  output: any,
  context: __SerdeContext
): CancelKeyDeletionResponse => {
  let contents: any = {
    __type: "CancelKeyDeletionResponse",
    KeyId: undefined
  };
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInUseException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInUseException => {
  let contents: any = {
    __type: "CloudHsmClusterInUseException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInvalidConfigurationException => {
  let contents: any = {
    __type: "CloudHsmClusterInvalidConfigurationException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotActiveException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotActiveException => {
  let contents: any = {
    __type: "CloudHsmClusterNotActiveException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotFoundException => {
  let contents: any = {
    __type: "CloudHsmClusterNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotRelatedException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotRelatedException => {
  let contents: any = {
    __type: "CloudHsmClusterNotRelatedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ConnectCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): ConnectCustomKeyStoreResponse => {
  let contents: any = {
    __type: "ConnectCustomKeyStoreResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreateCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomKeyStoreResponse => {
  let contents: any = {
    __type: "CreateCustomKeyStoreResponse",
    CustomKeyStoreId: undefined
  };
  if (output.CustomKeyStoreId !== undefined) {
    contents.CustomKeyStoreId = output.CustomKeyStoreId;
  }
  return contents;
};

const deserializeAws_json1_1CreateGrantResponse = (
  output: any,
  context: __SerdeContext
): CreateGrantResponse => {
  let contents: any = {
    __type: "CreateGrantResponse",
    GrantId: undefined,
    GrantToken: undefined
  };
  if (output.GrantId !== undefined) {
    contents.GrantId = output.GrantId;
  }
  if (output.GrantToken !== undefined) {
    contents.GrantToken = output.GrantToken;
  }
  return contents;
};

const deserializeAws_json1_1CreateKeyResponse = (
  output: any,
  context: __SerdeContext
): CreateKeyResponse => {
  let contents: any = {
    __type: "CreateKeyResponse",
    KeyMetadata: undefined
  };
  if (output.KeyMetadata !== undefined) {
    contents.KeyMetadata = deserializeAws_json1_1KeyMetadata(
      output.KeyMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreHasCMKsException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreHasCMKsException => {
  let contents: any = {
    __type: "CustomKeyStoreHasCMKsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreInvalidStateException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreInvalidStateException => {
  let contents: any = {
    __type: "CustomKeyStoreInvalidStateException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNameInUseException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNameInUseException => {
  let contents: any = {
    __type: "CustomKeyStoreNameInUseException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNotFoundException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNotFoundException => {
  let contents: any = {
    __type: "CustomKeyStoreNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoresList = (
  output: any,
  context: __SerdeContext
): Array<CustomKeyStoresListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CustomKeyStoresListEntry(entry, context)
  );
};

const deserializeAws_json1_1CustomKeyStoresListEntry = (
  output: any,
  context: __SerdeContext
): CustomKeyStoresListEntry => {
  let contents: any = {
    __type: "CustomKeyStoresListEntry",
    CloudHsmClusterId: undefined,
    ConnectionErrorCode: undefined,
    ConnectionState: undefined,
    CreationDate: undefined,
    CustomKeyStoreId: undefined,
    CustomKeyStoreName: undefined,
    TrustAnchorCertificate: undefined
  };
  if (output.CloudHsmClusterId !== undefined) {
    contents.CloudHsmClusterId = output.CloudHsmClusterId;
  }
  if (output.ConnectionErrorCode !== undefined) {
    contents.ConnectionErrorCode = output.ConnectionErrorCode;
  }
  if (output.ConnectionState !== undefined) {
    contents.ConnectionState = output.ConnectionState;
  }
  if (output.CreationDate !== undefined) {
    contents.CreationDate = new Date(
      output.CreationDate % 1 != 0
        ? Math.round(output.CreationDate * 1000)
        : output.CreationDate
    );
  }
  if (output.CustomKeyStoreId !== undefined) {
    contents.CustomKeyStoreId = output.CustomKeyStoreId;
  }
  if (output.CustomKeyStoreName !== undefined) {
    contents.CustomKeyStoreName = output.CustomKeyStoreName;
  }
  if (output.TrustAnchorCertificate !== undefined) {
    contents.TrustAnchorCertificate = output.TrustAnchorCertificate;
  }
  return contents;
};

const deserializeAws_json1_1DecryptResponse = (
  output: any,
  context: __SerdeContext
): DecryptResponse => {
  let contents: any = {
    __type: "DecryptResponse",
    EncryptionAlgorithm: undefined,
    KeyId: undefined,
    Plaintext: undefined
  };
  if (output.EncryptionAlgorithm !== undefined) {
    contents.EncryptionAlgorithm = output.EncryptionAlgorithm;
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.Plaintext !== undefined) {
    contents.Plaintext = context.base64Decoder(output.Plaintext);
  }
  return contents;
};

const deserializeAws_json1_1DeleteCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): DeleteCustomKeyStoreResponse => {
  let contents: any = {
    __type: "DeleteCustomKeyStoreResponse"
  };
  return contents;
};

const deserializeAws_json1_1DependencyTimeoutException = (
  output: any,
  context: __SerdeContext
): DependencyTimeoutException => {
  let contents: any = {
    __type: "DependencyTimeoutException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCustomKeyStoresResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomKeyStoresResponse => {
  let contents: any = {
    __type: "DescribeCustomKeyStoresResponse",
    CustomKeyStores: undefined,
    NextMarker: undefined,
    Truncated: undefined
  };
  if (output.CustomKeyStores !== undefined) {
    contents.CustomKeyStores = deserializeAws_json1_1CustomKeyStoresList(
      output.CustomKeyStores,
      context
    );
  }
  if (output.NextMarker !== undefined) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Truncated !== undefined) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1DescribeKeyResponse = (
  output: any,
  context: __SerdeContext
): DescribeKeyResponse => {
  let contents: any = {
    __type: "DescribeKeyResponse",
    KeyMetadata: undefined
  };
  if (output.KeyMetadata !== undefined) {
    contents.KeyMetadata = deserializeAws_json1_1KeyMetadata(
      output.KeyMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DisabledException = (
  output: any,
  context: __SerdeContext
): DisabledException => {
  let contents: any = {
    __type: "DisabledException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DisconnectCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): DisconnectCustomKeyStoreResponse => {
  let contents: any = {
    __type: "DisconnectCustomKeyStoreResponse"
  };
  return contents;
};

const deserializeAws_json1_1EncryptResponse = (
  output: any,
  context: __SerdeContext
): EncryptResponse => {
  let contents: any = {
    __type: "EncryptResponse",
    CiphertextBlob: undefined,
    EncryptionAlgorithm: undefined,
    KeyId: undefined
  };
  if (output.CiphertextBlob !== undefined) {
    contents.CiphertextBlob = context.base64Decoder(output.CiphertextBlob);
  }
  if (output.EncryptionAlgorithm !== undefined) {
    contents.EncryptionAlgorithm = output.EncryptionAlgorithm;
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1EncryptionAlgorithmSpecList = (
  output: any,
  context: __SerdeContext
): Array<EncryptionAlgorithmSpec | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EncryptionContextType = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ExpiredImportTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredImportTokenException => {
  let contents: any = {
    __type: "ExpiredImportTokenException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1GenerateDataKeyPairResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairResponse => {
  let contents: any = {
    __type: "GenerateDataKeyPairResponse",
    KeyId: undefined,
    KeyPairSpec: undefined,
    PrivateKeyCiphertextBlob: undefined,
    PrivateKeyPlaintext: undefined,
    PublicKey: undefined
  };
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyPairSpec !== undefined) {
    contents.KeyPairSpec = output.KeyPairSpec;
  }
  if (output.PrivateKeyCiphertextBlob !== undefined) {
    contents.PrivateKeyCiphertextBlob = context.base64Decoder(
      output.PrivateKeyCiphertextBlob
    );
  }
  if (output.PrivateKeyPlaintext !== undefined) {
    contents.PrivateKeyPlaintext = context.base64Decoder(
      output.PrivateKeyPlaintext
    );
  }
  if (output.PublicKey !== undefined) {
    contents.PublicKey = context.base64Decoder(output.PublicKey);
  }
  return contents;
};

const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairWithoutPlaintextResponse => {
  let contents: any = {
    __type: "GenerateDataKeyPairWithoutPlaintextResponse",
    KeyId: undefined,
    KeyPairSpec: undefined,
    PrivateKeyCiphertextBlob: undefined,
    PublicKey: undefined
  };
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyPairSpec !== undefined) {
    contents.KeyPairSpec = output.KeyPairSpec;
  }
  if (output.PrivateKeyCiphertextBlob !== undefined) {
    contents.PrivateKeyCiphertextBlob = context.base64Decoder(
      output.PrivateKeyCiphertextBlob
    );
  }
  if (output.PublicKey !== undefined) {
    contents.PublicKey = context.base64Decoder(output.PublicKey);
  }
  return contents;
};

const deserializeAws_json1_1GenerateDataKeyResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyResponse => {
  let contents: any = {
    __type: "GenerateDataKeyResponse",
    CiphertextBlob: undefined,
    KeyId: undefined,
    Plaintext: undefined
  };
  if (output.CiphertextBlob !== undefined) {
    contents.CiphertextBlob = context.base64Decoder(output.CiphertextBlob);
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.Plaintext !== undefined) {
    contents.Plaintext = context.base64Decoder(output.Plaintext);
  }
  return contents;
};

const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyWithoutPlaintextResponse => {
  let contents: any = {
    __type: "GenerateDataKeyWithoutPlaintextResponse",
    CiphertextBlob: undefined,
    KeyId: undefined
  };
  if (output.CiphertextBlob !== undefined) {
    contents.CiphertextBlob = context.base64Decoder(output.CiphertextBlob);
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1GenerateRandomResponse = (
  output: any,
  context: __SerdeContext
): GenerateRandomResponse => {
  let contents: any = {
    __type: "GenerateRandomResponse",
    Plaintext: undefined
  };
  if (output.Plaintext !== undefined) {
    contents.Plaintext = context.base64Decoder(output.Plaintext);
  }
  return contents;
};

const deserializeAws_json1_1GetKeyPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetKeyPolicyResponse => {
  let contents: any = {
    __type: "GetKeyPolicyResponse",
    Policy: undefined
  };
  if (output.Policy !== undefined) {
    contents.Policy = output.Policy;
  }
  return contents;
};

const deserializeAws_json1_1GetKeyRotationStatusResponse = (
  output: any,
  context: __SerdeContext
): GetKeyRotationStatusResponse => {
  let contents: any = {
    __type: "GetKeyRotationStatusResponse",
    KeyRotationEnabled: undefined
  };
  if (output.KeyRotationEnabled !== undefined) {
    contents.KeyRotationEnabled = output.KeyRotationEnabled;
  }
  return contents;
};

const deserializeAws_json1_1GetParametersForImportResponse = (
  output: any,
  context: __SerdeContext
): GetParametersForImportResponse => {
  let contents: any = {
    __type: "GetParametersForImportResponse",
    ImportToken: undefined,
    KeyId: undefined,
    ParametersValidTo: undefined,
    PublicKey: undefined
  };
  if (output.ImportToken !== undefined) {
    contents.ImportToken = context.base64Decoder(output.ImportToken);
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.ParametersValidTo !== undefined) {
    contents.ParametersValidTo = new Date(
      output.ParametersValidTo % 1 != 0
        ? Math.round(output.ParametersValidTo * 1000)
        : output.ParametersValidTo
    );
  }
  if (output.PublicKey !== undefined) {
    contents.PublicKey = context.base64Decoder(output.PublicKey);
  }
  return contents;
};

const deserializeAws_json1_1GetPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): GetPublicKeyResponse => {
  let contents: any = {
    __type: "GetPublicKeyResponse",
    CustomerMasterKeySpec: undefined,
    EncryptionAlgorithms: undefined,
    KeyId: undefined,
    KeyUsage: undefined,
    PublicKey: undefined,
    SigningAlgorithms: undefined
  };
  if (output.CustomerMasterKeySpec !== undefined) {
    contents.CustomerMasterKeySpec = output.CustomerMasterKeySpec;
  }
  if (output.EncryptionAlgorithms !== undefined) {
    contents.EncryptionAlgorithms = deserializeAws_json1_1EncryptionAlgorithmSpecList(
      output.EncryptionAlgorithms,
      context
    );
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyUsage !== undefined) {
    contents.KeyUsage = output.KeyUsage;
  }
  if (output.PublicKey !== undefined) {
    contents.PublicKey = context.base64Decoder(output.PublicKey);
  }
  if (output.SigningAlgorithms !== undefined) {
    contents.SigningAlgorithms = deserializeAws_json1_1SigningAlgorithmSpecList(
      output.SigningAlgorithms,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GrantConstraints = (
  output: any,
  context: __SerdeContext
): GrantConstraints => {
  let contents: any = {
    __type: "GrantConstraints",
    EncryptionContextEquals: undefined,
    EncryptionContextSubset: undefined
  };
  if (output.EncryptionContextEquals !== undefined) {
    contents.EncryptionContextEquals = deserializeAws_json1_1EncryptionContextType(
      output.EncryptionContextEquals,
      context
    );
  }
  if (output.EncryptionContextSubset !== undefined) {
    contents.EncryptionContextSubset = deserializeAws_json1_1EncryptionContextType(
      output.EncryptionContextSubset,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GrantList = (
  output: any,
  context: __SerdeContext
): Array<GrantListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1GrantListEntry(entry, context)
  );
};

const deserializeAws_json1_1GrantListEntry = (
  output: any,
  context: __SerdeContext
): GrantListEntry => {
  let contents: any = {
    __type: "GrantListEntry",
    Constraints: undefined,
    CreationDate: undefined,
    GrantId: undefined,
    GranteePrincipal: undefined,
    IssuingAccount: undefined,
    KeyId: undefined,
    Name: undefined,
    Operations: undefined,
    RetiringPrincipal: undefined
  };
  if (output.Constraints !== undefined) {
    contents.Constraints = deserializeAws_json1_1GrantConstraints(
      output.Constraints,
      context
    );
  }
  if (output.CreationDate !== undefined) {
    contents.CreationDate = new Date(
      output.CreationDate % 1 != 0
        ? Math.round(output.CreationDate * 1000)
        : output.CreationDate
    );
  }
  if (output.GrantId !== undefined) {
    contents.GrantId = output.GrantId;
  }
  if (output.GranteePrincipal !== undefined) {
    contents.GranteePrincipal = output.GranteePrincipal;
  }
  if (output.IssuingAccount !== undefined) {
    contents.IssuingAccount = output.IssuingAccount;
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Operations !== undefined) {
    contents.Operations = deserializeAws_json1_1GrantOperationList(
      output.Operations,
      context
    );
  }
  if (output.RetiringPrincipal !== undefined) {
    contents.RetiringPrincipal = output.RetiringPrincipal;
  }
  return contents;
};

const deserializeAws_json1_1GrantOperationList = (
  output: any,
  context: __SerdeContext
): Array<GrantOperation | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ImportKeyMaterialResponse = (
  output: any,
  context: __SerdeContext
): ImportKeyMaterialResponse => {
  let contents: any = {
    __type: "ImportKeyMaterialResponse"
  };
  return contents;
};

const deserializeAws_json1_1IncorrectKeyException = (
  output: any,
  context: __SerdeContext
): IncorrectKeyException => {
  let contents: any = {
    __type: "IncorrectKeyException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IncorrectKeyMaterialException = (
  output: any,
  context: __SerdeContext
): IncorrectKeyMaterialException => {
  let contents: any = {
    __type: "IncorrectKeyMaterialException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IncorrectTrustAnchorException = (
  output: any,
  context: __SerdeContext
): IncorrectTrustAnchorException => {
  let contents: any = {
    __type: "IncorrectTrustAnchorException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidAliasNameException = (
  output: any,
  context: __SerdeContext
): InvalidAliasNameException => {
  let contents: any = {
    __type: "InvalidAliasNameException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  let contents: any = {
    __type: "InvalidArnException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidCiphertextException = (
  output: any,
  context: __SerdeContext
): InvalidCiphertextException => {
  let contents: any = {
    __type: "InvalidCiphertextException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidGrantIdException = (
  output: any,
  context: __SerdeContext
): InvalidGrantIdException => {
  let contents: any = {
    __type: "InvalidGrantIdException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidGrantTokenException = (
  output: any,
  context: __SerdeContext
): InvalidGrantTokenException => {
  let contents: any = {
    __type: "InvalidGrantTokenException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidImportTokenException = (
  output: any,
  context: __SerdeContext
): InvalidImportTokenException => {
  let contents: any = {
    __type: "InvalidImportTokenException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidKeyUsageException = (
  output: any,
  context: __SerdeContext
): InvalidKeyUsageException => {
  let contents: any = {
    __type: "InvalidKeyUsageException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidMarkerException = (
  output: any,
  context: __SerdeContext
): InvalidMarkerException => {
  let contents: any = {
    __type: "InvalidMarkerException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSInternalException = (
  output: any,
  context: __SerdeContext
): KMSInternalException => {
  let contents: any = {
    __type: "KMSInternalException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSInvalidStateException = (
  output: any,
  context: __SerdeContext
): KMSInvalidStateException => {
  let contents: any = {
    __type: "KMSInvalidStateException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KeyList = (
  output: any,
  context: __SerdeContext
): Array<KeyListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyListEntry(entry, context)
  );
};

const deserializeAws_json1_1KeyListEntry = (
  output: any,
  context: __SerdeContext
): KeyListEntry => {
  let contents: any = {
    __type: "KeyListEntry",
    KeyArn: undefined,
    KeyId: undefined
  };
  if (output.KeyArn !== undefined) {
    contents.KeyArn = output.KeyArn;
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1KeyMetadata = (
  output: any,
  context: __SerdeContext
): KeyMetadata => {
  let contents: any = {
    __type: "KeyMetadata",
    AWSAccountId: undefined,
    Arn: undefined,
    CloudHsmClusterId: undefined,
    CreationDate: undefined,
    CustomKeyStoreId: undefined,
    CustomerMasterKeySpec: undefined,
    DeletionDate: undefined,
    Description: undefined,
    Enabled: undefined,
    EncryptionAlgorithms: undefined,
    ExpirationModel: undefined,
    KeyId: undefined,
    KeyManager: undefined,
    KeyState: undefined,
    KeyUsage: undefined,
    Origin: undefined,
    SigningAlgorithms: undefined,
    ValidTo: undefined
  };
  if (output.AWSAccountId !== undefined) {
    contents.AWSAccountId = output.AWSAccountId;
  }
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.CloudHsmClusterId !== undefined) {
    contents.CloudHsmClusterId = output.CloudHsmClusterId;
  }
  if (output.CreationDate !== undefined) {
    contents.CreationDate = new Date(
      output.CreationDate % 1 != 0
        ? Math.round(output.CreationDate * 1000)
        : output.CreationDate
    );
  }
  if (output.CustomKeyStoreId !== undefined) {
    contents.CustomKeyStoreId = output.CustomKeyStoreId;
  }
  if (output.CustomerMasterKeySpec !== undefined) {
    contents.CustomerMasterKeySpec = output.CustomerMasterKeySpec;
  }
  if (output.DeletionDate !== undefined) {
    contents.DeletionDate = new Date(
      output.DeletionDate % 1 != 0
        ? Math.round(output.DeletionDate * 1000)
        : output.DeletionDate
    );
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.Enabled !== undefined) {
    contents.Enabled = output.Enabled;
  }
  if (output.EncryptionAlgorithms !== undefined) {
    contents.EncryptionAlgorithms = deserializeAws_json1_1EncryptionAlgorithmSpecList(
      output.EncryptionAlgorithms,
      context
    );
  }
  if (output.ExpirationModel !== undefined) {
    contents.ExpirationModel = output.ExpirationModel;
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyManager !== undefined) {
    contents.KeyManager = output.KeyManager;
  }
  if (output.KeyState !== undefined) {
    contents.KeyState = output.KeyState;
  }
  if (output.KeyUsage !== undefined) {
    contents.KeyUsage = output.KeyUsage;
  }
  if (output.Origin !== undefined) {
    contents.Origin = output.Origin;
  }
  if (output.SigningAlgorithms !== undefined) {
    contents.SigningAlgorithms = deserializeAws_json1_1SigningAlgorithmSpecList(
      output.SigningAlgorithms,
      context
    );
  }
  if (output.ValidTo !== undefined) {
    contents.ValidTo = new Date(
      output.ValidTo % 1 != 0
        ? Math.round(output.ValidTo * 1000)
        : output.ValidTo
    );
  }
  return contents;
};

const deserializeAws_json1_1KeyUnavailableException = (
  output: any,
  context: __SerdeContext
): KeyUnavailableException => {
  let contents: any = {
    __type: "KeyUnavailableException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListAliasesResponse = (
  output: any,
  context: __SerdeContext
): ListAliasesResponse => {
  let contents: any = {
    __type: "ListAliasesResponse",
    Aliases: undefined,
    NextMarker: undefined,
    Truncated: undefined
  };
  if (output.Aliases !== undefined) {
    contents.Aliases = deserializeAws_json1_1AliasList(output.Aliases, context);
  }
  if (output.NextMarker !== undefined) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Truncated !== undefined) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1ListGrantsResponse = (
  output: any,
  context: __SerdeContext
): ListGrantsResponse => {
  let contents: any = {
    __type: "ListGrantsResponse",
    Grants: undefined,
    NextMarker: undefined,
    Truncated: undefined
  };
  if (output.Grants !== undefined) {
    contents.Grants = deserializeAws_json1_1GrantList(output.Grants, context);
  }
  if (output.NextMarker !== undefined) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Truncated !== undefined) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1ListKeyPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListKeyPoliciesResponse => {
  let contents: any = {
    __type: "ListKeyPoliciesResponse",
    NextMarker: undefined,
    PolicyNames: undefined,
    Truncated: undefined
  };
  if (output.NextMarker !== undefined) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.PolicyNames !== undefined) {
    contents.PolicyNames = deserializeAws_json1_1PolicyNameList(
      output.PolicyNames,
      context
    );
  }
  if (output.Truncated !== undefined) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1ListKeysResponse = (
  output: any,
  context: __SerdeContext
): ListKeysResponse => {
  let contents: any = {
    __type: "ListKeysResponse",
    Keys: undefined,
    NextMarker: undefined,
    Truncated: undefined
  };
  if (output.Keys !== undefined) {
    contents.Keys = deserializeAws_json1_1KeyList(output.Keys, context);
  }
  if (output.NextMarker !== undefined) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Truncated !== undefined) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1ListResourceTagsResponse = (
  output: any,
  context: __SerdeContext
): ListResourceTagsResponse => {
  let contents: any = {
    __type: "ListResourceTagsResponse",
    NextMarker: undefined,
    Tags: undefined,
    Truncated: undefined
  };
  if (output.NextMarker !== undefined) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  if (output.Truncated !== undefined) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  let contents: any = {
    __type: "MalformedPolicyDocumentException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ReEncryptResponse = (
  output: any,
  context: __SerdeContext
): ReEncryptResponse => {
  let contents: any = {
    __type: "ReEncryptResponse",
    CiphertextBlob: undefined,
    DestinationEncryptionAlgorithm: undefined,
    KeyId: undefined,
    SourceEncryptionAlgorithm: undefined,
    SourceKeyId: undefined
  };
  if (output.CiphertextBlob !== undefined) {
    contents.CiphertextBlob = context.base64Decoder(output.CiphertextBlob);
  }
  if (output.DestinationEncryptionAlgorithm !== undefined) {
    contents.DestinationEncryptionAlgorithm =
      output.DestinationEncryptionAlgorithm;
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.SourceEncryptionAlgorithm !== undefined) {
    contents.SourceEncryptionAlgorithm = output.SourceEncryptionAlgorithm;
  }
  if (output.SourceKeyId !== undefined) {
    contents.SourceKeyId = output.SourceKeyId;
  }
  return contents;
};

const deserializeAws_json1_1ScheduleKeyDeletionResponse = (
  output: any,
  context: __SerdeContext
): ScheduleKeyDeletionResponse => {
  let contents: any = {
    __type: "ScheduleKeyDeletionResponse",
    DeletionDate: undefined,
    KeyId: undefined
  };
  if (output.DeletionDate !== undefined) {
    contents.DeletionDate = new Date(
      output.DeletionDate % 1 != 0
        ? Math.round(output.DeletionDate * 1000)
        : output.DeletionDate
    );
  }
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1SignResponse = (
  output: any,
  context: __SerdeContext
): SignResponse => {
  let contents: any = {
    __type: "SignResponse",
    KeyId: undefined,
    Signature: undefined,
    SigningAlgorithm: undefined
  };
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.Signature !== undefined) {
    contents.Signature = context.base64Decoder(output.Signature);
  }
  if (output.SigningAlgorithm !== undefined) {
    contents.SigningAlgorithm = output.SigningAlgorithm;
  }
  return contents;
};

const deserializeAws_json1_1SigningAlgorithmSpecList = (
  output: any,
  context: __SerdeContext
): Array<SigningAlgorithmSpec | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    TagKey: undefined,
    TagValue: undefined
  };
  if (output.TagKey !== undefined) {
    contents.TagKey = output.TagKey;
  }
  if (output.TagValue !== undefined) {
    contents.TagValue = output.TagValue;
  }
  return contents;
};

const deserializeAws_json1_1TagException = (
  output: any,
  context: __SerdeContext
): TagException => {
  let contents: any = {
    __type: "TagException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  let contents: any = {
    __type: "UnsupportedOperationException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomKeyStoreResponse => {
  let contents: any = {
    __type: "UpdateCustomKeyStoreResponse"
  };
  return contents;
};

const deserializeAws_json1_1VerifyResponse = (
  output: any,
  context: __SerdeContext
): VerifyResponse => {
  let contents: any = {
    __type: "VerifyResponse",
    KeyId: undefined,
    SignatureValid: undefined,
    SigningAlgorithm: undefined
  };
  if (output.KeyId !== undefined) {
    contents.KeyId = output.KeyId;
  }
  if (output.SignatureValid !== undefined) {
    contents.SignatureValid = output.SignatureValid;
  }
  if (output.SigningAlgorithm !== undefined) {
    contents.SigningAlgorithm = output.SigningAlgorithm;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};