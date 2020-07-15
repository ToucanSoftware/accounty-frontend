// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var core_pb = require('./core_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_github_com_io_toucasoft_accounty_v1_CreateUserRequest(arg) {
  if (!(arg instanceof core_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_CreateUserRequest(buffer_arg) {
  return core_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_CreateUserResponse(arg) {
  if (!(arg instanceof core_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_CreateUserResponse(buffer_arg) {
  return core_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_DeleteUserRequest(arg) {
  if (!(arg instanceof core_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_DeleteUserRequest(buffer_arg) {
  return core_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_DeleteUserResponse(arg) {
  if (!(arg instanceof core_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_DeleteUserResponse(buffer_arg) {
  return core_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_GetUserRequest(arg) {
  if (!(arg instanceof core_pb.GetUserRequest)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_GetUserRequest(buffer_arg) {
  return core_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_GetUserResponse(arg) {
  if (!(arg instanceof core_pb.GetUserResponse)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_GetUserResponse(buffer_arg) {
  return core_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_ListUsersRequest(arg) {
  if (!(arg instanceof core_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_ListUsersRequest(buffer_arg) {
  return core_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_ListUsersResponse(arg) {
  if (!(arg instanceof core_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_ListUsersResponse(buffer_arg) {
  return core_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_UpdateUserRequest(arg) {
  if (!(arg instanceof core_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_UpdateUserRequest(buffer_arg) {
  return core_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_io_toucasoft_accounty_v1_UpdateUserResponse(arg) {
  if (!(arg instanceof core_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type github.com.io.toucasoft.accounty.v1.UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_github_com_io_toucasoft_accounty_v1_UpdateUserResponse(buffer_arg) {
  return core_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// User Managemenet Services
// Handles users in the system
var UserManagementServiceService = exports.UserManagementServiceService = {
  // Creates a new User in the system
createUser: {
    path: '/github.com.io.toucasoft.accounty.v1.UserManagementService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.CreateUserRequest,
    responseType: core_pb.CreateUserResponse,
    requestSerialize: serialize_github_com_io_toucasoft_accounty_v1_CreateUserRequest,
    requestDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_CreateUserRequest,
    responseSerialize: serialize_github_com_io_toucasoft_accounty_v1_CreateUserResponse,
    responseDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_CreateUserResponse,
  },
  // List the users in the system
listUsers: {
    path: '/github.com.io.toucasoft.accounty.v1.UserManagementService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.ListUsersRequest,
    responseType: core_pb.ListUsersResponse,
    requestSerialize: serialize_github_com_io_toucasoft_accounty_v1_ListUsersRequest,
    requestDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_ListUsersRequest,
    responseSerialize: serialize_github_com_io_toucasoft_accounty_v1_ListUsersResponse,
    responseDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_ListUsersResponse,
  },
  // Get an existing users 
getUser: {
    path: '/github.com.io.toucasoft.accounty.v1.UserManagementService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.GetUserRequest,
    responseType: core_pb.GetUserResponse,
    requestSerialize: serialize_github_com_io_toucasoft_accounty_v1_GetUserRequest,
    requestDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_GetUserRequest,
    responseSerialize: serialize_github_com_io_toucasoft_accounty_v1_GetUserResponse,
    responseDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_GetUserResponse,
  },
  // Updates an existing users 
updateUser: {
    path: '/github.com.io.toucasoft.accounty.v1.UserManagementService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.UpdateUserRequest,
    responseType: core_pb.UpdateUserResponse,
    requestSerialize: serialize_github_com_io_toucasoft_accounty_v1_UpdateUserRequest,
    requestDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_UpdateUserRequest,
    responseSerialize: serialize_github_com_io_toucasoft_accounty_v1_UpdateUserResponse,
    responseDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_UpdateUserResponse,
  },
  // Deletes an existing user
deleteUser: {
    path: '/github.com.io.toucasoft.accounty.v1.UserManagementService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.DeleteUserRequest,
    responseType: core_pb.DeleteUserResponse,
    requestSerialize: serialize_github_com_io_toucasoft_accounty_v1_DeleteUserRequest,
    requestDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_DeleteUserRequest,
    responseSerialize: serialize_github_com_io_toucasoft_accounty_v1_DeleteUserResponse,
    responseDeserialize: deserialize_github_com_io_toucasoft_accounty_v1_DeleteUserResponse,
  },
};

exports.UserManagementServiceClient = grpc.makeGenericClientConstructor(UserManagementServiceService);
