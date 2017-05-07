import {standardizeOperationIoShapes} from "../../lib/TreeModel/standardizeOperationIoShapes";
import {minimalValidServiceMetadata} from "../ServiceMetadata";
import {ShapeMap} from "../../lib/ShapeMap";
import {OperationMap} from "../../lib/OperationMap";

describe('standardizeOperationIoShapes', () => {
    it('should standardize input and output names', () => {
        const shapes: ShapeMap = {
            GFReq: {
                type: 'structure',
                members: {},
            },
            GFRes: {
                type: 'structure',
                members: {},
            },
        };
        const operations: OperationMap = {
            GetFoo: {
                name: 'GetFoo',
                http: {
                    method: 'GET',
                    requestUri: '/',
                },
                input: {shape: 'GFReq'},
                output: {shape: 'GFRes'},
            },
        };
        const api = standardizeOperationIoShapes({
            metadata: minimalValidServiceMetadata,
            shapes,
            operations,
        });

        expect(api.operations.GetFoo.input.shape).toBe('GetFooInput');
        expect(api.shapes.GetFooInput).toBeDefined();
        expect(api.operations.GetFoo.output.shape).toBe('GetFooOutput');
        expect(api.shapes.GetFooOutput).toBeDefined();
    });

    it('should remove replaced input and output names', () => {
        const shapes: ShapeMap = {
            GFReq: {
                type: 'structure',
                members: {},
            },
            GFRes: {
                type: 'structure',
                members: {},
            },
        };
        const operations: OperationMap = {
            GetFoo: {
                name: 'GetFoo',
                http: {
                    method: 'GET',
                    requestUri: '/',
                },
                input: {shape: 'GFReq'},
                output: {shape: 'GFRes'},
            },
        };
        const api = standardizeOperationIoShapes({
            metadata: minimalValidServiceMetadata,
            shapes,
            operations,
        });

        expect(Object.keys(api.shapes)).toEqual([
            'GetFooInput',
            'GetFooOutput',
        ]);
    });

    it(
        'should create input and output shapes for each operation if not provided in model',
        () => {
            const shapes: ShapeMap = {
                GetFooOutput: {
                    type: 'structure',
                    members: {},
                },
                PutFooInput: {
                    type: 'structure',
                    members: {},
                },
            };
            const operations: OperationMap = {
                GetFoo: {
                    name: 'GetFoo',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    output: {shape: 'GetFooOutput'},
                },
                PutFoo: {
                    name: 'PutFoo',
                    http: {
                        method: 'PUT',
                        requestUri: '/',
                    },
                    input: {shape: 'PutFooInput'},
                },
            };
            const api = standardizeOperationIoShapes({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            });

            expect(api.operations.GetFoo.input).toBeDefined();
            expect(api.operations.PutFoo.output).toBeDefined();
        }
    );

    it(
        'should create input and output shapes for each operation if IO shapes are shared',
        () => {
            const shapes: ShapeMap = {
                GetInput: {
                    type: 'structure',
                    members: {},
                },
                GetOutput: {
                    type: 'structure',
                    members: {
                        input: {shape: 'GetInput'}
                    },
                },
            };
            const operations: OperationMap = {
                GetFoo: {
                    name: 'GetFoo',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    input: {shape: 'GetInput'},
                    output: {shape: 'GetOutput'},
                },
                GetBar: {
                    name: 'GetBar',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    input: {shape: 'GetInput'},
                    output: {shape: 'GetOutput'},
                },
            };
            const api = standardizeOperationIoShapes({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            });

            expect(api.shapes.GetFooInput).toBeDefined();
            expect(api.shapes.GetBarInput).toBeDefined();
            expect(api.shapes.GetFooOutput).toBeDefined();
            expect(api.shapes.GetBarOutput).toBeDefined();
        }
    );

    it(
        'should preserve non-IO shape if IO shape used as a member of another shape',
        () => {
            const shapes: ShapeMap = {
                GetInput: {
                    type: 'structure',
                    members: {},
                },
                GetOutput: {
                    type: 'structure',
                    members: {
                        input: {shape: 'GetInput'}
                    },
                },
            };
            const operations: OperationMap = {
                GetFoo: {
                    name: 'GetFoo',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    input: {shape: 'GetInput'},
                    output: {shape: 'GetOutput'},
                },
            };
            const api = standardizeOperationIoShapes({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            });


            const outputShape = api.shapes[api.operations.GetFoo.output.shape];
            if (outputShape.type !== 'structure') {
                throw new Error('IO shapes should be structures');
            }

            const {shape} = outputShape.members.input;
            expect(Object.keys(api.shapes).sort()).toEqual([
                'GetFooInput',
                'GetFooOutput',
                shape,
            ].sort());
            expect(api.operations.GetFoo.input.shape).toBe('GetFooInput');
            expect(api.operations.GetFoo.output.shape).toBe('GetFooOutput');
            expect(shape).not.toBe(api.operations.GetFoo.input.shape);
        }
    );
});
