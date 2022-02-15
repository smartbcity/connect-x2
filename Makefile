FRONT_X2_DOCKERFILE	:= infra/docker/x2-web-app/Dockerfile
FRONT_X2_NAME	    := smartbcity/x2-web-app
FRONT_X2_IMG	    := ${FRONT_X2_NAME}:${VERSION}
FRONT_X2_LATEST		:= ${FRONT_X2_NAME}:latest

X2_APP_NAME	   	 	:= smartbcity/x2-gateway
X2_APP_IMG	    	:= ${X2_APP_NAME}:${VERSION}
X2_APP_LATEST		:= ${X2_APP_NAME}:latest
X2_APP_PACKAGE	   	:= :x2-api:api-gateway:bootBuildImage

X2_SSM_CERTIFICATE_PROVIDER_NAME	   	:= smartbcity/x2-ssm-certificate-provider
X2_SSM_CERTIFICATE_PROVIDER_IMG	    	:= ${X2_SSM_CERTIFICATE_PROVIDER_NAME}:${VERSION}
X2_SSM_CERTIFICATE_PROVIDER_LATEST		:= ${X2_SSM_CERTIFICATE_PROVIDER_NAME}:latest
X2_SSM_CERTIFICATE_PROVIDER_PACKAGE	   	:= :x2-test:ssm-certificate-provider:bootBuildImage


package-x2-api:
	VERSION=${VERSION} ./gradlew build ${X2_APP_PACKAGE} -x test
	@docker push ${X2_APP_IMG}

package-x2-front:
	@docker build --no-cache=true -f ${FRONT_X2_DOCKERFILE} -t ${FRONT_X2_IMG} .
    @docker push ${FRONT_X2_IMG}

package-x2-ssm-certificate-provider:
	VERSION=${VERSION} ./gradlew build ${X2_SSM_CERTIFICATE_PROVIDER_PACKAGE} -x test
	@docker push ${X2_SSM_CERTIFICATE_PROVIDER_IMG}

