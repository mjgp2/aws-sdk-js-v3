import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  DisassociateClientVpnTargetNetworkRequest,
  DisassociateClientVpnTargetNetworkResult
} from "../models/index";
import {
  deserializeAws_ec2DisassociateClientVpnTargetNetworkCommand,
  serializeAws_ec2DisassociateClientVpnTargetNetworkCommand
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DisassociateClientVpnTargetNetworkCommandInput = DisassociateClientVpnTargetNetworkRequest;
export type DisassociateClientVpnTargetNetworkCommandOutput = DisassociateClientVpnTargetNetworkResult;

export class DisassociateClientVpnTargetNetworkCommand extends $Command<
  DisassociateClientVpnTargetNetworkCommandInput,
  DisassociateClientVpnTargetNetworkCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateClientVpnTargetNetworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateClientVpnTargetNetworkCommandInput,
    DisassociateClientVpnTargetNetworkCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateClientVpnTargetNetworkCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateClientVpnTargetNetworkCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DisassociateClientVpnTargetNetworkCommandOutput> {
    return deserializeAws_ec2DisassociateClientVpnTargetNetworkCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}