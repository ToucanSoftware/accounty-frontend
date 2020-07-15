API_PROTOS=api/core.proto
GEN_DIR=src/grpc/core

NODE_TOOLS_PROTOC=$(shell which grpc_tools_node_protoc)
NODE_TOOLS_PROTOC_PLUGIN=$(shell which grpc_tools_node_protoc_plugin)

.PHONY: build build-ts

all: build build-ts

out-dir:
	@mkdir -p ${GEN_DIR} 

build: out-dir
	@${NODE_TOOLS_PROTOC} --js_out=import_style=commonjs,binary:${GEN_DIR} \
		--grpc_out=${GEN_DIR} \
		-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		-I./api \
		--plugin=protoc-gen-grpc=${NODE_TOOLS_PROTOC_PLUGIN} ${API_PROTOS}

build-ts: out-dir
	@protoc \
		--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
		--plugin=protoc-gen-grpc=${NODE_TOOLS_PROTOC_PLUGIN} \
		-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		-I./api \
		--js_out="import_style=commonjs,binary:${GEN_DIR}" \
		--ts_out="service=grpc-node:${GEN_DIR}" \
		--grpc_out="${GEN_DIR}" ${API_PROTOS}