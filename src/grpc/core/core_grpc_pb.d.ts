// GENERATED CODE -- DO NOT EDIT!

// package: github.com.io.toucasoft.accounty.v1
// file: core.proto

import * as core_pb from "./core_pb";
import * as grpc from "grpc";

interface IUserManagementServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUser: grpc.MethodDefinition<core_pb.CreateUserRequest, core_pb.CreateUserResponse>;
  listUsers: grpc.MethodDefinition<core_pb.ListUsersRequest, core_pb.ListUsersResponse>;
  getUser: grpc.MethodDefinition<core_pb.GetUserRequest, core_pb.GetUserResponse>;
  updateUser: grpc.MethodDefinition<core_pb.UpdateUserRequest, core_pb.UpdateUserResponse>;
  deleteUser: grpc.MethodDefinition<core_pb.DeleteUserRequest, core_pb.DeleteUserResponse>;
}

export const UserManagementServiceService: IUserManagementServiceService;

export class UserManagementServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createUser(argument: core_pb.CreateUserRequest, callback: grpc.requestCallback<core_pb.CreateUserResponse>): grpc.ClientUnaryCall;
  createUser(argument: core_pb.CreateUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.CreateUserResponse>): grpc.ClientUnaryCall;
  createUser(argument: core_pb.CreateUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.CreateUserResponse>): grpc.ClientUnaryCall;
  listUsers(argument: core_pb.ListUsersRequest, callback: grpc.requestCallback<core_pb.ListUsersResponse>): grpc.ClientUnaryCall;
  listUsers(argument: core_pb.ListUsersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.ListUsersResponse>): grpc.ClientUnaryCall;
  listUsers(argument: core_pb.ListUsersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.ListUsersResponse>): grpc.ClientUnaryCall;
  getUser(argument: core_pb.GetUserRequest, callback: grpc.requestCallback<core_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: core_pb.GetUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: core_pb.GetUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.GetUserResponse>): grpc.ClientUnaryCall;
  updateUser(argument: core_pb.UpdateUserRequest, callback: grpc.requestCallback<core_pb.UpdateUserResponse>): grpc.ClientUnaryCall;
  updateUser(argument: core_pb.UpdateUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.UpdateUserResponse>): grpc.ClientUnaryCall;
  updateUser(argument: core_pb.UpdateUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.UpdateUserResponse>): grpc.ClientUnaryCall;
  deleteUser(argument: core_pb.DeleteUserRequest, callback: grpc.requestCallback<core_pb.DeleteUserResponse>): grpc.ClientUnaryCall;
  deleteUser(argument: core_pb.DeleteUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.DeleteUserResponse>): grpc.ClientUnaryCall;
  deleteUser(argument: core_pb.DeleteUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_pb.DeleteUserResponse>): grpc.ClientUnaryCall;
}
