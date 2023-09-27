// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file sf/substreams/v1/package.proto (package sf.substreams.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, FileDescriptorProto, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Modules } from "./modules_pb.js";

/**
 * @generated from message sf.substreams.v1.Package
 */
export class Package extends Message<Package> {
  /**
   * Needs to be one so this file can be used _directly_ as a
   * buf `Image` andor a ProtoSet for grpcurl and other tools
   *
   * @generated from field: repeated google.protobuf.FileDescriptorProto proto_files = 1;
   */
  protoFiles: FileDescriptorProto[] = [];

  /**
   * @generated from field: uint64 version = 5;
   */
  version = protoInt64.zero;

  /**
   * @generated from field: sf.substreams.v1.Modules modules = 6;
   */
  modules?: Modules;

  /**
   * @generated from field: repeated sf.substreams.v1.ModuleMetadata module_meta = 7;
   */
  moduleMeta: ModuleMetadata[] = [];

  /**
   * @generated from field: repeated sf.substreams.v1.PackageMetadata package_meta = 8;
   */
  packageMeta: PackageMetadata[] = [];

  /**
   * Source network for Substreams to fetch its data from.
   *
   * @generated from field: string network = 9;
   */
  network = "";

  /**
   * @generated from field: google.protobuf.Any sink_config = 10;
   */
  sinkConfig?: Any;

  /**
   * @generated from field: string sink_module = 11;
   */
  sinkModule = "";

  constructor(data?: PartialMessage<Package>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.v1.Package";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proto_files", kind: "message", T: FileDescriptorProto, repeated: true },
    { no: 5, name: "version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "modules", kind: "message", T: Modules },
    { no: 7, name: "module_meta", kind: "message", T: ModuleMetadata, repeated: true },
    { no: 8, name: "package_meta", kind: "message", T: PackageMetadata, repeated: true },
    { no: 9, name: "network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "sink_config", kind: "message", T: Any },
    { no: 11, name: "sink_module", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Package {
    return new Package().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Package {
    return new Package().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Package {
    return new Package().fromJsonString(jsonString, options);
  }

  static equals(a: Package | PlainMessage<Package> | undefined, b: Package | PlainMessage<Package> | undefined): boolean {
    return proto3.util.equals(Package, a, b);
  }
}

/**
 * @generated from message sf.substreams.v1.PackageMetadata
 */
export class PackageMetadata extends Message<PackageMetadata> {
  /**
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * @generated from field: string url = 2;
   */
  url = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: string doc = 4;
   */
  doc = "";

  constructor(data?: PartialMessage<PackageMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.v1.PackageMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "doc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackageMetadata {
    return new PackageMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackageMetadata {
    return new PackageMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackageMetadata {
    return new PackageMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: PackageMetadata | PlainMessage<PackageMetadata> | undefined, b: PackageMetadata | PlainMessage<PackageMetadata> | undefined): boolean {
    return proto3.util.equals(PackageMetadata, a, b);
  }
}

/**
 * @generated from message sf.substreams.v1.ModuleMetadata
 */
export class ModuleMetadata extends Message<ModuleMetadata> {
  /**
   * Corresponds to the index in `Package.metadata.package_meta`
   *
   * @generated from field: uint64 package_index = 1;
   */
  packageIndex = protoInt64.zero;

  /**
   * @generated from field: string doc = 2;
   */
  doc = "";

  constructor(data?: PartialMessage<ModuleMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.v1.ModuleMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "package_index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "doc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleMetadata {
    return new ModuleMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleMetadata {
    return new ModuleMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleMetadata {
    return new ModuleMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: ModuleMetadata | PlainMessage<ModuleMetadata> | undefined, b: ModuleMetadata | PlainMessage<ModuleMetadata> | undefined): boolean {
    return proto3.util.equals(ModuleMetadata, a, b);
  }
}

