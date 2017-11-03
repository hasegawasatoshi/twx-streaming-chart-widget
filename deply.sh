#!/bin/bash

source .env

gradle createZip

curl "${HOST}/Thingworx/Subsystems/PlatformSubsystem/Services/DeleteExtensionPackage?&appKey=${APPKEY}" \
	-H "Content-Type: application/json" \
	-H "Accept: application/json" \
	--data-binary "{\"packageName\":\"${WIDGET}\"}"

curl "${HOST}/Thingworx/ExtensionPackageUploader?purpose=import&appKey=${APPKEY}" \
  -H "X-XSRF-TOKEN: TWX-XSRF-TOKEN-VALUE" \
  -F "file=@build/distributions/${EXTENSION}"
